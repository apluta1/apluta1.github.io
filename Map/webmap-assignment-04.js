let superdupermap = L.map('AlexMap').setView([38, -98], 4)
dupermap = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
L.titleLayer(dupermap).addTo(superdupermap)

myGeojsonStyle = function (state) {
  LETAGE = state.properties.MED_AGE
  let stateColor = 'Olive'
  if (age < 38) { stateColor = 'Green'}
  let myStyle = {
    color: stateColor,
    weight: 1,
  }
  return myStyle
}
function createPopup (state, statelayer){
  let name = state.properties.STATE_NAME
  let age = state.properties.MED_AGE
  statelayer.bindPopup('Median age of' + name :':' + age + '<br>National average:38')
}
myGeojsonOptions = {
  stle: myGeojsonStyle
  onEachFeature: createPopup
}
L.geoJSON(stateDemographics, myGeojsonOptions).addTo(superdupermap)
