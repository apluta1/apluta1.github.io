let projectData = []


projectData[0] = {
  id: 1,
  url: 'http://arcg.is/2DKWDsO',
  title: 'New Orleans Tour',
  desc: 'An ArcGIS Online Story Map Tour showing points of interest in New Orleans, LA.',
  thumb: true,
  keywords: ['New Orleans', 'Louisiana', 'ArcGIS']
}


projectData[1] = {
  id: 2,
  url: 'https://www.arcgis.com/apps/View/index.html?appid=bda06301dba24bb8b6e77c106a06b290&extent=-181.4062,-71.7006,178.5937,87.0687',
  title: 'Map of Recent Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days.',
  thumb: false,
  keywords: ['ArcGIS', 'Earthquakes', 'Worldwide']
}


for (let i = 0; i < projectData.length; i++) {
  console.log('Index position ' + i + ' title: ' + projectData[i].title)
  if (projectData[i].thumb === true) {
    console.log('images/ss-project-' + projectData[i].id + '.png')
  } else {
    console.log('images/no-preview.png')
  }
}
