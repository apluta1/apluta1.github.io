let superdupermap = L.map('AlexMap').setView([29.9637528, -90.058966], 13)
L.tileLayer('https://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/hybrid.day/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}').addTo(AlexMap)
