let superdupermap = L.map('AlexMap').setView([29.9637528, -90.058966], 13)
let dupermap = 'http://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
L.tileLayer(dupermap).addTo(AlexMap)
let mypoint = L.marker([29.9637528, -90.058966]).addTo(AlexMap)
Let myshape = L.polygon([
  [29.961152353312446, -90.05647188223207]
  [29.964182503078884, -90.06167536772097]
  [29.965515942092786, -90.0564933399042]
]).addTo(AlexMap)

myshape.bindPopup('Marigny Triangle')
mypoint.bindPopup('Alex\'s House')

AlexMap.on('click', function (event){
  consol.log('You clicked the map at' + event.latlng)
})
