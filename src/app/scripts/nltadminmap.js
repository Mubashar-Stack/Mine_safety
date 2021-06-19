
function NLTAdminMap(config, divname) {
    L.Icon.Default.imagePath = '../images/leaflet-images';
    var layers = new Array();
    var currentLevel = "";
    for (var i = 0; i < config.levels.length; i++) {
        if (config.levels[i].levelID == config.levelID) {
            currentLevel = config.levels[i].name;
            break;
        }
    }
    layersIndex = {};
    var baseLayers = config.baseLayers;
    for (var x = 0; x < config.baseLayers.length; x += 2) {
        // Create layer group for each level
        if (baseLayers[x].name === "Overview") {
            layersIndex[baseLayers[x].name] = L.layerGroup([
                L.imageOverlay(baseLayers[x].url, baseLayers[x].bounds),   // Non-Text Layer
                L.imageOverlay(baseLayers[x].url, baseLayers[x].bounds)]); // TODO: This isnt required.
            layersIndex[baseLayers[x].name].dmView = baseLayers[x].dmView;
        } else {
            layersIndex[baseLayers[x].name] = L.layerGroup([
                L.tileLayer.wms(baseLayers[x].url, baseLayers[x].layerOptions),         // Non-Text Layer
                L.tileLayer.wms(baseLayers[x + 1].url, baseLayers[x + 1].layerOptions)])// Text Layer
            layersIndex[baseLayers[x].name].dmView = baseLayers[x].dmView;
        }
        // Add reader markers for zone to layer group (per level)
        if (config.readers != undefined) {
            for (var y = 0; y < config.readers.length; y++) {
                if (config.readers[y].levelID == config.baseLayers[x].layerOptions.layers) {
                    layersIndex[config.baseLayers[x].name].addLayer(
                        L.circleMarker([config.readers[y].location.coordinates[1], config.readers[y].location.coordinates[0]], { radius: 5, color: "#000000", weight: 10, opacity: 0, fillColor: "#AA0000", fillOpacity: 1, labelAnchor: [-5, 0] })
			            .bindLabel(config.readers[y].displayName)
                    )
                }
            }
        }
    }

    var overlays = {};
    config.overlays.forEach(function (layer) {
        switch (layer.type) {
            case "none":
                overlays[layer.name] = L.tileLayer("", { zIndex: -1 });
                break;

            case "wms":
                overlays[layer.name] = L.tileLayer.wms(layer.url, layer.layerOptions);
                break;

            case "xyz":
                overlays[layer.name] = L.tileLayer(layer.url, layer.layerOptions);
                break;
        }
        if (layer.visible) {
            layers.push(overlays[layer.name]);
        }
    });

    var map = L.map(divname, {
        center: config.default,
        zoom: config.default.zoom,
        layers: layers,
        attributionControl: false,
        zoomControl: false
    });

    L.control.layers(layersIndex, overlays, { collapsed: false }).addTo(map);
    layersIndex[currentLevel].addTo(map);
    map.setView([
        layersIndex[currentLevel].dmView.lat,
        layersIndex[currentLevel].dmView.lng
    ], layersIndex[currentLevel].dmView.zoom, { animate: true });
    L.control.attribution({ prefix: false }).addTo(map);
    L.control.zoom({ position: 'topright' }).addTo(map);

    $(".leaflet-control-layers").fadeIn();

    return map;
}

module.exports = NLTAdminMap;