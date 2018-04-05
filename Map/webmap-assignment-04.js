let mymap = L.map('map4').setView([29.9637528, -90.058966], 4)
basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
L.titleLayer(basemapUrl).addTo(mymap)

myGeojsonStyle = function () {
  LETAGE = state.properties.MED_AGE
  let stateColor = 'Olive'
  if (age < 38) { stateColor = 'Green'}
  let myStyle = {
    color: stateColor,
    weight: 1,
  }
  return myStyle
}
myGeojsonOptions = {
  stle: myGeojsonStyle
}
L.geoJSON(stateDemographics, myGeojsonOptions).addTo(mymap)
