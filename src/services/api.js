import { removeDiacritics } from '../services/utils';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '498c524b90mshda702a61112494cp1ce903jsn62d1b64f5f31',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const currentWeatherFetch = async (city) => {
  try {
    const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${removeDiacritics(city)}`, options)
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const forecastFetch = async (city) => {
  try {
    const res = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${removeDiacritics(city)}&days=3`, options)
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};





export { currentWeatherFetch, forecastFetch};
