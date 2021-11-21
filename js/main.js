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
      // Countries have transparency, so do not fade tiles:
      transition: 0,
      projection: 'EPSG:3301'
    }),
  }),
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [-10997148, 4569099],
    zoom: 4,
  }),
});