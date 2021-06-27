// Loading the Map
var map = L.map('garten', {
	crs: L.CRS.EPSG3857
});

var wmsLayer = L.tileLayer.wms('http://vogis.cnv.at/mapserver/mapserv?map=i_luftbilder_r_wms.map&service=wms&', {
	layers: 'ef2012_12cm',
	format: 'image/png',
	//crs: 3857,
	crs: L.CRS.EPSG3857,
	attribution: '&copy; <a href="https://vogis.cnv.at">Orthofoto Land Vorarlberg</a> contributors'
}).addTo(map);

map.setView([47.1877, 9.7069], 20);
