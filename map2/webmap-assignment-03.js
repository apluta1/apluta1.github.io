let theworld = L.map('AlexMapmap').setView([29.951105, -90.081227], 13)

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(theworld)

let myredpin = L.icon({
  iconUrl: 'redpin.png',
  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let mymarker = L.marker([29.951105, -90.081227], {icon: myredpin}).addTo(theworld);

let mypolystyle = {
  color: 'blue',
  fillColor: 'yellow'
}

let mypolycoords = [
  [29.951848, -90.088608],
  [29.959582, -90.075734],
  [29.944449, -90.076935]]

let myPolygon = L.polygon(mypolycoords, mypolystyle).addTo(theworld)
