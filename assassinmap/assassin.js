
let mapOptions = {
  center: [843, 1500],
  zoom: -1,
  minZoom: -1,
  maxZoom: 3,
  crs: L.CRS.Simple,
  maxBoundsViscosity: 1.0
}
let mymap = L.map('GimmeTheLoot', mapOptions)
let imageDimensions = [[0, 0], [1686, 3000]]
L.imageOverlay('OriginsBasemap.jpg', imageDimensions).addTo(mymap)

let Siwastyle = {
  color: 'yellow',
  fillColor: 'red',
  fillOpacity: 0.4
}

let Siwacoordinates = [
  [1017, 1102.5],
  [854.5, 1085.5],
  [864.5, 1121],
  [815, 1166],
  [760.5, 1155.5],
  [742, 1181.5],
  [651, 1345.5],
  [769, 1455],
  [776.5, 1535.5],
  [834.5, 1566.5],
  [960.5, 1507.5],
  [984, 1456],
  [967, 1407.5],
  [995, 1369.5],
  [947, 1300.5],
  [953.3, 1247],
  [991, 1248],
  [959, 1205],
  [967.5, 1177]
]

let SiwaPolygon = L.polygon(Siwacoordinates, Siwastyle).addTo(mymap)

SiwaPolygon.bindPopup('<center>SIWA<br></center>' + '<br><space>Siwa is the starting province. Here, you can complete the first few missions that will allow you to reach other locations.<br>' + '<br>Suggested level: 1-5' + '<br>Enemy Fortifications: 2' + '<br>Treasures: 10' + '<br>Hunting Locations: 3' + '<br>Synchronization Points: 3' + '<br>Stone Circles: 1' + '<br>Tombs: Mountain of the Dead Tomb' + '<br>Papyrus Mystery: A Long Drink')

function onMapClick(e) {
    console.log(e.latlng);
}
mymap.on('click', onMapClick);
