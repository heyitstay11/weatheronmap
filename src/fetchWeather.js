import axios from 'axios';

const APIKEY = '24576ed4d0dda2d356ccf50e676de60b';
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

