import { fetchWeatherApi } from 'openmeteo';
	

export const getWeatherInfomation = async () => {
    const params = {
        "latitude": 52.52,
        "longitude": 13.41,
        "hourly": "temperature_2m"
    };
    const url = "https://api.open-meteo.com/v1/gfs";
    const responses = await fetchWeatherApi(url, params);
    return responses;
}


