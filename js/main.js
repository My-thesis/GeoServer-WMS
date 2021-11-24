import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';

const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://34.88.147.186:8080/geoserver/MSc-thesis/wms',
      params: {'LAYERS': 'MSc-thesis:2c', 'TILED': true},
      serverType: 'geoserver',
      transition: 0,
      projection: 'EPSG:3301'
    }),
  }),
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [28.050662, 53.840045 ],
    zoom: 7,
  }),
});

const imageUrl = 'http://34.88.147.186:8080/geoserver/MSc-thesis/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetLegendGraphic&FORMAT=image%2Fpng&LAYER=MSc-thesis%3A2c&SCALE=2996991.1943536997';

const legend = document.getElementById('legend');
legend.src = imageUrl;