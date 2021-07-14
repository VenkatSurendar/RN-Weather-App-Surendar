import fetch from "node-fetch";
// import redis from "redis";
//AccuWeather API Key
//commmoncloud
// const key = "8EoCVXQ8EYF6F0KvcARDFqEdn1Emt0sx";
//vst
// const key = "z6GumIu7bSvc2FqQjuNS07FNO3wSbAWs";
// mecparentsportal
// const key = "vPTgGSRDsAgsnTWpgYBQ5BLrGopgJnO4";
//fake mail
const key = "m75FTc4G2WOrJVvm20O4k5SrwGBM9YyP";

//Redis initializing
// const client = redis.createClient(6379);

//Testing JSON.Stringify data on browser.
function setResponse(city, weatherData) {
  return `<h2>${city} & ${weatherData}</h2>`;
}

/*
                Weather API

  City search API ---> Gives City Key value
  Weather API ---> Weather details using the city value

*/
export async function getCurrentWeather(req, res, next) {
  try {
    const { city } = req.params;
    const base =
      // "http://dataservice.accuweather.com/locations/v1/cities/search";
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    const cityKey = data[0].Key;
    //
    console.log(cityKey);
    const weather =
      // "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";
      "http://dataservice.accuweather.com/currentconditions/v1/";
    const weatherQuery = `${cityKey}?apikey=${key}`;

    const weatherResponse = await fetch(weather + weatherQuery);
    const weatherData = await weatherResponse.json();
    //
    console.log("--------------Current Weather----------", weatherData);
    // console.log(weatherData[0].Temperature.Metric);

    //Testing
    res.send(weatherData);
    // console.log(cityKey);
    // return data[0];
    // return cityKey;
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

// Redis Cache Middleware
// export function cache(req, res, next) {
//   const { city } = req.params;

//   client.get(city, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       next();
//     }
//   });
// }
