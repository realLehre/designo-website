const map = L.map('canada-map', {
  center: [43.64406748219614, -79.39457160483114],
  zoom: 13,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);
var marker = L.marker([43.64406748219614, -79.39457160483114]).addTo(map);

const auMap = L.map('au-map', {
  center: [-30.329204012119444, 149.78826135475427],
  zoom: 13,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(auMap);
var marker = L.marker([-30.329204012119444, 149.78826135475427]).addTo(auMap);

const ukMap = L.map('uk-map', {
  center: [51.732658213508614, -3.8621802444096],
  zoom: 13,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(ukMap);
var marker = L.marker([51.732658213508614, -3.8621802444096]).addTo(ukMap);
