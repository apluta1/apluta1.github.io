let mymap = L.map('map4').setView([38, -98], 4)
basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
L.titleLayer(basemapUrl).addTo(mymap)

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
L.geoJSON(stateDemographics, myGeojsonOptions).addTo(mymap)
