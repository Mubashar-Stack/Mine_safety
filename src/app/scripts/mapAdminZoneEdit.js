var L = require("leaflet");
require("leaflet-draw");
require("leaflet.label");
var NLTAdminMap = require("nltadminmap");

function updateHfShape() {
    $('#hfShape').val(JSON.stringify(shapeLayer.toGeoJSON().features[0].geometry));
}
var zoneArr = [];
$.getJSON("../api/zones", null, function (zones) {
    zoneArr = zones;
});

$.getJSON("../api/trackinglocations", null, function (trackingLocations) {
    $.getJSON("../api/config", null, function (data) {
        // Set tracking locations to array for map
        data["map"]["readers"] = trackingLocations;

        // Get value from hidden field for level
        data["map"]["levelID"] = $('#hfLevelID')[0].value;
        // Set level to default if empty
        if (data["map"]["levelID"] == "") {
            data["map"]["levelID"] = data["map"]["default"]["levelID"];
        }

        map = NLTAdminMap(data["map"], "leafletMap");
        // Update the hidden field levelID on level change

        map.on('baselayerchange', function (e) {
            // Removed add zones on map.
            $(addedZones).each(function (key, zone) {
                map.removeLayer(zone);
            })
            // Get LevelID from name
            $.each(data["map"]["levels"], function (key, value) {
                if (e.name == value["name"]) {
                    data["map"]["levelID"] = $('#hfLevelID').val(value["levelID"]);
                    $('#hfCurrentLevel').val(value["name"]);
                    addExistingZones(map, value["levelID"]);

                    map.setView([ // pan to new level
                    value.dmView.lat,
                    value.dmView.lng
                    ], value.dmView.zoom, { animate: true });
                }
            });
        });

        var shapeGJ = $('#hfShape')[0].value;

        shapeLayer = L.geoJson(null, {});
        shapeLayer.on('layeradd', function (e) {
            layer = e.layer;
            if (layer.editing) {
                layer.editing.enable();
                layer.on('edit', function (e) {
                    updateHfShape();
                });
            }
        });

        if (shapeGJ != "") {
            shapeLayer.addData(eval('(' + shapeGJ + ')'));
        }

        shapeLayer.addTo(map);

        if (shapeLayer.getLayers().length == 0) {
            newPoly = new L.Draw.Polygon(map, { shapeOptions: L.Polygon.prototype.options });
            newPoly.enable();
            map.on("click", function (e) {
                if ($('#hfCurrentLevel').val() == "Overview") {
                    alert("You cannot create a zone on the overview map. Please choose a level map.");
                    newPoly.disable();
                }
            });
            map.on('draw:created', function (e) {
                shapeLayer.addLayer(e.layer);
                e.layer.bringToBack();
                updateHfShape();
            });
            map.on('draw:drawstop', function (e) {
                if (shapeLayer.getLayers().length == 0) {
                    // They probably pressed esc or something to cancel the drawing
                    newPoly = new L.Draw.Polygon(map, { shapeOptions: L.Polygon.prototype.options });
                    newPoly.enable();
                }
            });
        } else {
            // Zoom into zone area
            bounds = shapeLayer.getBounds();
            if (bounds.isValid()) {
                setTimeout(function () {
                    map.fitBounds(bounds);
                }, 0);
            }
        }
    });
});
//Zones
var zoneLayerStyle = {
    "color": "#909090",
    "opacity": 0.5
};

var addedZones = [];

// Added existing zones on map
function addExistingZones(map, levelID) {
    $(zoneArr).each(function (key, zone) {
        if (zone.shape != null && zone.id != $('#hfZoneID')[0].value && zone.levelID == levelID) {
            // Add Label to each zone
            function onEachFeature(feature, layer) {
                layer.bindLabel("Zone: " + zone.zoneName);
            }
            // Add Zone to map
            var zoneObj = L.geoJson(zone.shape, {
                onEachFeature: onEachFeature,
                style: zoneLayerStyle
            });

            addedZones.push(zoneObj);

            zoneObj.addTo(map)
            .bringToBack();
        }
    });
}