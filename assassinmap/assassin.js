
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

SiwaPolygon.bindPopup('<center>SIWA<br></center>' + '<br>Siwa is the starting province. Here, you can complete the first few missions that will allow you to reach other locations.<br>' + '<br>Suggested level: 1-5' + '<br>Enemy Fortifications: 2' + '<br>Treasures: 10' + '<br>Hunting Locations: 3' + '<br>Synchronization Points: 3' + '<br>Stone Circles: 1' + '<br>Tombs: Mountain of the Dead Tomb' + '<br>Papyrus Mystery: A Long Drink')

let GRsandstyle = {
  color: 'yellow',
  fillColor: 'blue',
  fillOpacity: 0.4
}


let GRsandordinates = [
  [854.4, 1085],
  [752.5, 1083.5],
  [572, 1138],
  [557, 1199.5],
  [543.5, 1206],
  [546, 1263],
  [648.5, 1342.5],
  [770.25, 1151.5],
  [812, 1162],
  [863.125, 1120.875]
]

let GRsandPolygon = L.polygon(GRsandordinates, GRsandstyle).addTo(mymap)

GRsandPolygon.bindPopup('<center>Great Sand Sea<br></center>' + '<br>There\'s not much to do out here but hallucinate. It is possible to unlock the "Overheating" achievement in this area.<br>' + '<br>Suggested level: 36-40' + '<br>Enemy Fortifications: 0' + '<br>Treasures: 0' + '<br>Hunting Locations: 0' + '<br>Synchronization Points: 0' + '<br>Stone Circles: 0' + '<br>Tombs: N/A' + '<br>Papyrus Mystery: N/A')

let Alexandriastyle = {
  color: 'yellow',
  fillColor: 'green',
  fillOpacity: 0.4
}

let AlexandriaCoords = [
  [1476, 1853],
  [1539, 1917],
  [1546, 1952.5],
  [1534, 1994],
  [1485.5, 2050],
  [1419.5, 2047.5],
  [1396, 2036],
  [1386, 2024],
  [1353.5, 2019],
  [1336.75, 1958.625],
  [1358.8, 1912],
  [1406.5, 1898.5],
  [1417, 1905.5],
  [1425, 1895]
]

let AlexandriaPolygon = L.polygon(AlexandriaCoords, Alexandriastyle).addTo(mymap)

AlexandriaPolygon.bindPopup('<center>Alexandria<br></center>' + '<br>Alexandria is a city which is accessed from Lake Mareotis. After reaching that place you can start discovering the entire map. Here, you will have to complete a lot of main quests as well as side missions. Completing the latter ones will make the later parts of the game easier for you<br>' + '<br>Suggested level: 9-12' + '<br>Enemy Fortifications: 4' + '<br>Treasures: 20' + '<br>Hunting Locations: 0' + '<br>Synchronization Points: 3' + '<br>Stone Circles: 0' + '<br>Tombs: N/A' + '<br>Papyrus Mystery: The Stone Gaze, Deafening Silence, Divided Valley, Ray of Hope')

let Kanoposstyle = {
  color: 'yellow',
  fillColor: 'orange',
  fillOpacity: 0.4
}

let KanoposCoord = [
  [1484.625, 2051.75],
  [1478.5, 2073],
  [1480.25, 2098.125],
  [1505.5, 2127.75],
  [1505, 2148.75],
  [1492.125, 2178.75],
  [1513, 2221],
  [1490.875, 2235.625],
  [1438.375, 2242.375],
  [1380.5, 2244],
  [1364.25, 2242.75],
  [1307.125, 2225.875],
  [1318.625, 2152.625],
  [1339.25, 2126.875],
  [1329.5, 2107.375],
  [1345.75, 2070.375],
  [1355.5, 2020.125]
]

let KanoposPolygon = L.polygon(KanoposCoord, Kanoposstyle).addTo(mymap)

KanoposPolygon.bindPopup('<center>Kanopos Nome<br></center>' + '<br>Kanopos Nome is a province located east from Alexandria. There, you can find a Hippodrome - a racing track for chariots - victories give you Drachma and mounts. You can participate in a tournament, a time trial or accept your friend\'s challenge. The city center is located in its east part.<br>' + '<br>Suggested level: 11-13' + '<br>Enemy Fortifications: 4' + '<br>Treasures: 9' + '<br>Hunting Locations: 2' + '<br>Synchronization Points: 2' + '<br>Stone Circles: 0' + '<br>Tombs: N/A' + '<br>Papyrus Mystery: Dead End')

let Memphisstyle = {
  color: 'yellow',
  fillColor: 'purple',
  fillOpacity: 0.4
}


let MemphisCoors = [
  [784.75, 2402.125],
  [739.125, 2377.25],
  [696.375, 2387.625],
  [674.25, 2395.25],
  [603.125, 2339.375],
  [653.125, 2247.25],
  [653, 2215.625],
  [680.375, 2211],
  [702.75, 2190.7],
  [745.625, 2184.625],
  [764.25, 2192.625],
  [781, 2225.875],
  [789, 2233.75],
  [793.375, 2256],
  [770.375, 2296.875],
  [779.125, 2332.25]
]

let MemphisPolygon = L.polygon(MemphisCoors, Memphisstyle).addTo(mymap)

MemphisPolygon.bindPopup('<center>Memphis<br></center>' + '<br>Memphis is the second big city. Its center is located in the west part of the province. There, you can find many traders. In the east part of the location you can find a water body. There, you can find one spot where you will be able to find a treasure.<br>' + '<br>Suggested level: 20-23' + '<br>Enemy Fortifications: 3' + '<br>Treasures: 13' + '<br>Hunting Locations: 1' + '<br>Synchronization Points: 3' + '<br>Stone Circles: 0' + '<br>Tombs: N/A' + '<br>Papyrus Mystery: Burning Bush, In Plain Sight, Fallen Friend')


function onMapClick(e) {
    console.log(e.latlng);
}
mymap.on('click', onMapClick);
