let superdupermap = L.map('AlexMap').setView([29.9637528, -90.058966], 13)
let dupermap = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
L.tileLayer(dupermap).addTo(superdupermap)
let mypoint = L.marker([29.9637528, -90.058966]).addTo(superdupermap)
let myshape = L.polygon([
  [29.961152353312446, -90.05647188223207],
  [29.964182503078884, -90.06167536772097],
  [29.965515942092786, -90.0564933399042]
]).addTo(superdupermap)

myshape.bindPopup('Marigny Triangle')
mypoint.bindPopup('Alex\'s House')

var latlng = [
  [29.961770712467885, -90.05613860315697],
  [29.965559001669224, -90.05650255653984],
];
var line = L.polyline(latlng, {color: 'red'}).addTo(superdupermap)

superdupermap.on('click', function (event){
  consol.log('You clicked the map at' + event.latlng)
})
