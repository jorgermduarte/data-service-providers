let axios = require('axios')


const ipmaGlobal  ={
    forecast_uri: "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/",
    local_ids : {
        aveiro: 1010500
    }
}


const methods = {
    getForecast: () => {
        // get forecast for which cities ?
        // maybe something should listen to the params and see if local exists
    }
}

module.exports = methods