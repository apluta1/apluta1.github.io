let mapOptions = {
  center: [843, 1500],
  zoom: -1,
  minZoom: -1,
  maxZoom: 3,
  crs: L.CRS.Simple,
  maxBoundsViscosity: 1.0
}
let map = L.map('GimmeTheLoot', mapOptions)
let imageDimensions = [[0, 0], [1686, 3000]]
L.imageOverlay('OriginsBasemap.jpg', imageDimensions).addTo(map)
