import 'babel-polyfill'

const API_KEY = 'ba4af820f923818f01116860c45029cb';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


// action creator
// this action goes straight to the reducer
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`

	async function requestData(url){
		const req = await fetch(url)
		return req.json()
	}

	return {
		type: FETCH_WEATHER,
		payload: requestData(url)
	};
}
