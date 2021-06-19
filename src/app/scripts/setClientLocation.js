$(function () {
    $("#btnSaveToDB").click(function () {
        if ($("#hfCurrentLevel").val() === "Overview") {
            alert("You can not assign a reader to the overview. Please choose a level");
            return false;
        }
        return confirm('Are you sure you want to update the client location?');
    });
});

require("leaflet");
require("leaflet.label");
var NLTAdminMap = require("nltadminmap");

L.Icon.Default.imagePath = '../images/leaflet-images';
$.getJSON("../api/trackinglocations", null, function (trackingLocations) {
    $.getJSON("../api/config", null, function (data) {
        // Get values from hidden field for Location of marker and level
        var locationGJ = originLoc = $('#hfLocation')[0].value;
        data["map"]["levelID"] = originLvl = $('#hfLevelID')[0].value;

        // Set tracking locations to array for map
        data["map"]["readers"] = trackingLocations;

        // Set level to default if empty
        if (data["map"]["levelID"] == "") {
            data["map"]["levelID"] = data["map"]["default"]["levelID"];
        }
        // Set location to default if empty
        if (locationGJ == "") {
            locationGJ = "{ \"type\": \"Point\", \"coordinates\": [" + data.default.lng + ", " + data.default.lat + "] }";
            $('#hfLevelID').val(data["map"]["default"]["levelID"]);
        }

        map = NLTAdminMap(data["map"], "leafletMap");
        // Set the initial view
        $.each(data["map"]["levels"], function (key, value) {
            if (value["levelID"] == data["map"]["levelID"]) {
                map.setView([
                    value.dmView.lat,
                    value.dmView.lng
                ], value.dmView.zoom, { animate: true });
            }
        });


        // Change the map and recreate the marker
        map.on('baselayerchange', function (e) {
            map.removeLayer(markerLayer);
            $.each(data["map"]["levels"], function (key, value) {
                if (e.name == value["name"]) {
                    data["map"]["levelID"] = $('#hfLevelID').val(value["levelID"]);
                    $('#hfCurrentLevel').val(value["name"]);

                    if (value["levelID"] != originLvl) { // set the marker to the default view for this level
                        var newLoc = "{ \"type\": \"Point\", \"coordinates\": [" + value.dmView.lng + ", " + value.dmView.lat + "] }";
                        markerLayer = L.geoJson(eval('(' + newLoc + ')'), {
                            pointToLayer: function (geoJsonData, latLng) {
                                marker = L.marker(latLng, { draggable: true });
                                marker.on('dragend', function (e) {
                                    // Mess around so that we can wrap the location from -180 to 180
                                    e.target.setLatLng(e.target.getLatLng().wrap());
                                    map.setView(e.target.getLatLng());
                                    $('#hfLocation').val(JSON.stringify(e.target.toGeoJSON()["geometry"]));
                                });
                                map.setView(latLng, value.dmView.zoom, { animate: true });
                                return marker;
                            }
                        }).addTo(map);
                    } else { // Set the marker to its current saved value
                        markerLayer = L.geoJson(eval('(' + locationGJ + ')'), {
                            pointToLayer: function (geoJsonData, latLng) {
                                marker = L.marker(latLng, { draggable: true });
                                marker.on('dragend', function (e) {
                                    // Mess around so that we can wrap the location from -180 to 180
                                    e.target.setLatLng(e.target.getLatLng().wrap());
                                    map.setView(e.target.getLatLng());
                                    $('#hfLocation').val(JSON.stringify(e.target.toGeoJSON()["geometry"]));
                                });
                                map.setView(latLng, value.dmView.zoom, { animate: true });
                                return marker;
                            }
                        }).addTo(map);
                    }
                }
            });
        });

        // Set the initial marker position on page load
        var markerLayer = L.geoJson(eval('(' + locationGJ + ')'), {
            pointToLayer: function (geoJsonData, latLng) {
                marker = L.marker(latLng, { draggable: true });
                marker.on('dragend', function (e) {
                    // Mess around so that we can wrap the location from -180 to 180
                    e.target.setLatLng(e.target.getLatLng().wrap());
                    map.setView(e.target.getLatLng());
                    $('#hfLocation').val(JSON.stringify(e.target.toGeoJSON()["geometry"]));
                });
                map.setView(latLng);
                return marker;
            }
        }).addTo(map);
    });
});