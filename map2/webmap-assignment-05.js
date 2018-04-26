let superdupermap = L.map('AlexMap').setView([29.9637528, -90.058966], 13)

let dupermap = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(superdupermap)

let dupermap2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')

let dupermap3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}')

let duperBasemaps = {
  'Open street map': dupermap,
  'Open top map': dupermap2,
  'World Physical': dupermap3,
}

geoJSONstyle = function (states) {
  let age = states.properties.MED_AGE
  let statecolor = 'Blue'
  if ( age < 38 ) {statecolor = 'Red'}
  let Style = {
    color: statecolor,
    weight: 2,
    fillOpacity: 0.2,
    opacity: 0.3,
  }
  return Style
}

function createPopup (states, statelayer) {
  let population = states.properties.POPULATION
  let name = states.properties.STATE_NAME
  let age = states.properties.MED_AGE
  statelayer.bindPopup('Population of ' + name + ':' + population + '<br>Median age ' + ': ' + age + '<br>National average: 38')
}

geoJSONoptions = {
  style: geoJSONstyle,
  onEachFeature: createPopup
}
L.geoJSON(stateDemographics, geoJSONoptions).addTo(superdupermap)

L.control.layers(duperBasemaps).addTo(superdupermap)
