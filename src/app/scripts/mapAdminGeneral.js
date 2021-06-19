var NLTAdminMap = require("nltadminmap");
var L = require("leaflet");

L.Icon.Default.imagePath = '../images/leaflet-images';
$.getJSON("../api/config", null, function (data) {
    // Get values from hidden field for level
    data["map"]["levelID"] = $('#hfDefaultLevel')[0].value;
    // Set level to default if empty
    if (data["map"]["levelID"] == "") {
        data["map"]["levelID"] = data["map"]["default"]["levelID"];
    }

    map = NLTAdminMap(data["map"], "leafletMap");
    // Update the hidden field hfDefaultLevel on level change
    map.on('baselayerchange', function (e) {
        // Get LevelID from name
        $.each(data["map"]["levels"], function (key, value) {
            if (e.name == value["name"]) {
                data["map"]["levelID"] = $('#hfDefaultLevel').val(value["levelID"]);
                map.setView([
                    e.layer.dmView.lat,
                    e.layer.dmView.lng
                ], e.layer.dmView.zoom, { animate: false });
            }
        });
    });

    function grabDefaults(e) {
        center = map.getCenter().wrap();
        $("#hfDefaultLat").val(center.lat);
        $("#hfDefaultLng").val(center.lng);
        $("#hfDefaultZoom").val(map.getZoom());
    }
    map.on('moveend', grabDefaults);
    map.on('zoomend', grabDefaults);
});