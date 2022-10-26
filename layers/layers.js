var wms_layers = [];


        var lyr_hibrido_0 = new ol.layer.Tile({
            'title': 'hibrido',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_biblia_esfre1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "biblia_esfre1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/biblia_esfre1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1335833.889519, -30245237.741614, 8684366.510481, 30240971.958386]
                            })
                        });
var format_biblia_puntos_esferico_2 = new ol.format.GeoJSON();
var features_biblia_puntos_esferico_2 = format_biblia_puntos_esferico_2.readFeatures(json_biblia_puntos_esferico_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_biblia_puntos_esferico_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_biblia_puntos_esferico_2.addFeatures(features_biblia_puntos_esferico_2);
var lyr_biblia_puntos_esferico_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_biblia_puntos_esferico_2, 
                style: style_biblia_puntos_esferico_2,
                interactive: true,
                title: '<img src="styles/legend/biblia_puntos_esferico_2.png" /> biblia_puntos_esferico'
            });

lyr_hibrido_0.setVisible(true);lyr_biblia_esfre1_1.setVisible(true);lyr_biblia_puntos_esferico_2.setVisible(true);
var layersList = [lyr_hibrido_0,lyr_biblia_esfre1_1,lyr_biblia_puntos_esferico_2];
lyr_biblia_puntos_esferico_2.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'City Name': 'City Name', 'Coordinates': 'Coordinates', });
lyr_biblia_puntos_esferico_2.set('fieldImages', {'fid': '', 'field_1': '', 'City Name': '', 'Coordinates': '', });
lyr_biblia_puntos_esferico_2.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'City Name': 'no label', 'Coordinates': 'no label', });
lyr_biblia_puntos_esferico_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});