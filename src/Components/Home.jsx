/* eslint-disable react/jsx-key */
import { useState } from "react";
import { geocode } from "../API/googleMap";
import { fetchWeatherApi } from "openmeteo";

export const Home = () => {
  const [location, setLocation] = useState("");

  const [weather, setWeather] = useState([]);
  ////
  const getLocationDetails = async () => {
    const results = await geocode({ address: location });
    console.log("res", results);

    const params = {
      latitude: results.lat,
      longitude: results.long,
      hourly: "temperature_2m",
    };
    const url = "https://api.open-meteo.com/v1/gfs";
    const responses = await fetchWeatherApi(url, params);
    const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();

    const hourly = response.hourly();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      hourly: {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2m: hourly.variables(0).valuesArray(),
      },
    };

    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    const weatherObjArr = [];
    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      weatherObjArr.push({
        time: weatherData.hourly.time[i].toISOString(),
        temp: weatherData.hourly.temperature2m[i],
      });
      console.log(
        weatherData.hourly.time[i].toISOString(),
        weatherData.hourly.temperature2m[i]
      );
    }
    console.log("weatherData", weatherObjArr);
    setWeather(weatherObjArr);
  };

  return (
    <>
      <label htmlFor="search">Enter Location Name</label>
      <input
        type="search"
        name="search"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <button onClick={getLocationDetails}>Search now</button>
      <div>
        <h2>Weather Now</h2>
        {weather.map((el) => (
          <div>
            <p>Day</p>
            <div>{el.time}</div>
            <div>weather</div>
            <div>{el.temp}</div>
          </div>
        ))}
      </div>
    </>
  );
};
