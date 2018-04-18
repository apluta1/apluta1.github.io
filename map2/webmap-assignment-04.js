let superdupermap = L.map('AlexMap').setView([38.61057,	-97.133041], 4)

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(superdupermap)


mygeoJSONstyle = function (states) {
  let age = states.properties.MED_AGE
  let statecolor = 'Blue'
  if ( age < 38 ) {statecolor = 'Green'}
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

mygeoJSONoptions = {
  style: geoJSONstyle,
  onEachFeature: createPopup
}
L.geoJSON(stateDemographics, myGeojsonOptions).addTo(superdupermap)
