import axios from 'axios';

const APIKEY = import.meta.env.VITE_API_KEY;
const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID:APIKEY,
        }
    })

    return data;
}

