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
  thumb: true,
  keywords: ['ArcGIS', 'Earthquakes', 'Worldwide']
}

projectData[2] = {
  id: 3,
  url: 'https://arcg.is/1aeHWO',
  title: 'Find Your Professor',
  desc: 'An ArcGIS Online Web App where you can submit the location of your professor. You can also review all submissions',
  thumb: true,
  keywords: ['ArcGIS', 'Baton Rouge', 'LSU', 'Environmental Engineering']
}

projectData[3] = {
  id: 4,
  url: 'https://apluta1.maps.arcgis.com/apps/webappviewer/index.html?id=5f36096953bc48e9943eacf7932f6a72',
  title: 'New Orleans Restaurants',
  desc: 'An ArcGIS Online Web App where you can view the location of all the restraunts in New Orleans',
  thumb: true,
  keywords: ['ArcGIS', 'New Orleans', 'Restaurants']
}

projectData[4] = {
  id: 5,
  url: 'https://apluta1.maps.arcgis.com/apps/webappviewer/index.html?id=8c5680d4b8c54defae5d4429039d0ebc',
  title: 'USA Population Growth',
  desc: 'An ArcGIS Online Web App, where you can view popuation growth, in the USA, from 1789 to 2009',
  thumb: true,
  keywords: ['ArcGIS', 'USA', 'Population']
}

projectData[5] = {
  id: 6,
  url: 'https://arcg.is/1K9j91',
  title: 'Areas of Interest in New Orleans ',
  desc: 'An ArcGIS Online Web App, where you can view the locations of Restraunts, Hotels, Live Entertainment, and Bars in New Orleans',
  thumb: true,
  keywords: ['ArcGIS', 'New Orleans', 'Bars', 'Hotels', 'Entertainment', 'Restraunts']
}

for (let i = 0; i < projectData.length; i++) {
  console.log('Index position ' + i + ' title: ' + projectData[i].title)
  if (projectData[i].thumb === true) {
    console.log('images/ss-project-' + projectData[i].id + '.png')
  } else {
    console.log('images/no-preview.png')
  }
  if (projectData[i].title === '') {
    console.log('No title')
  } else {
    console.log(projectData[i].title)
  }
}
