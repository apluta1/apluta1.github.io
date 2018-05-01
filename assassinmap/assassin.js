let mapOptions = {
  center: [1500, 843],
  zoom: -1,
  minZoom: -1,
  maxZoom: 1,
  crs: L.CRS.Simple,
  maxBoundsViscosity: 1.0
}
let map = L.map('GimmeTheLoot', mapOptions)
let imageDimensions = [[0, 0], [3000, 1686]]
L.imageOverlay('OriginsBasemap.jpg', imageDimensions).addTo(map)
