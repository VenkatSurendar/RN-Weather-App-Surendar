import fetch from "node-fetch";
import redis from "redis";
//AccuWeather API Key
//commmoncloud
// const key = "8EoCVXQ8EYF6F0KvcARDFqEdn1Emt0sx";
//vst
// const key = "z6GumIu7bSvc2FqQjuNS07FNO3wSbAWs";
// mecparentsportal
const key = "vPTgGSRDsAgsnTWpgYBQ5BLrGopgJnO4";
//fake mail
// const key = "dZ4Q563pQUqdPw48yvAWADhaAMaJ9WU4";

//Redis initializing
const client = redis.createClient(6379);

//Testing JSON.Stringify data on browser.
function setResponse(city, weatherForcastData) {
  return `<h2>${city} & ${weatherForcastData}</h2>`;
}

/*
                Weather API

  City search API ---> Gives City Key value
  Weather API ---> Weather details using the city value

*/
export async function getForcast(req, res, next) {
  try {
    const { city } = req.params;
    const base =
      // "http://dataservice.accuweather.com/locations/v1/cities/search";
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    // if (data) {
    const cityKey = data[0].Key;

    //
    console.log(cityKey);
    const weather =
      // "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";
      "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/";
    const weatherQuery = `${cityKey}?apikey=${key}`;

    const weatherResponse = await fetch(weather + weatherQuery);
    const weatherForcastData = await weatherResponse.json();
    //
    console.log(
      "----------------12hr Weather Forcast:---------------",
      weatherForcastData,
    );
    // console.log(weatherForcastData[0].Temperature.Metric);

    //Setting Redis Key-Value pair
    client.setex(city, 3600, JSON.stringify(weatherForcastData));

    //Testing
    // res.send(setResponse(city, JSON.stringify(weatherForcastData)));
    res.send(weatherForcastData);
    // console.log(cityKey);
    // return data[0];
    // return cityKey;
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

// Redis Cache Middleware
export function cache(req, res, next) {
  const { city } = req.params;

  client.get(city, (err, data) => {
    if (err) {
      throw err;
    } else {
      next();
    }
  });
}
