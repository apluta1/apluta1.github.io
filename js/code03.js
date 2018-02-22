let projectId = 1
let projectUrl = 'https://www.arcgis.com/apps/View/index.html?appid=bda06301dba24bb8b6e77c106a06b290&extent=-181.4062,-71.7006,178.5937,87.0687'
let projectTitle = 'Map of Recent Earthquakes'
let projectDesc = 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days.'
let projectThumb = true
let projectKeywords = ['Earthquakes', 'worldwide','ArcGIS']

let project1Array = [
  1,
  'https://www.arcgis.com/apps/View/index.html?appid=bda06301dba24bb8b6e77c106a06b290&extent=-181.4062,-71.7006,178.5937,87.0687',
  'Map of Recent Earthquakes',
  'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days.',
  true,
  ['Earthquakes', 'worldwide','ArcGIS'],
]

let projectObject = {
id: 1,
url: 'https://www.arcgis.com/apps/View/index.html?appid=bda06301dba24bb8b6e77c106a06b290&extent=-181.4062,-71.7006,178.5937,87.0687',
title: 'Map of Recent Earthquakes',
desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days.',
thumb: true,
keywords: [
 'Earthquakes',
 'worldwide',
 'ArcGIS'
]
}
  
console.log(projectArray[2])

console.log(projectObject.title)

console.log('ID: ' + projectId)
console.log('URL: ' + projectUrl)
console.log('Title: ' + projectTitle)
console.log('Description: ' + projectDesc)
console.log('Has thumbnail? ' + projectThumb)
console.log('Map extent: ' + projectMapExtent)
