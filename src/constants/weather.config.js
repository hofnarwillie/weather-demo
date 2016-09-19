let config = {
	API_KEY: '09feaca816cb0a642c55840a4cb98e05',
	BASE_URL: 'http://api.openweathermap.org/data/2.5/forecast',
	CITY_ID: '3333229'
};

export default `${config.BASE_URL}?id=${config.CITY_ID}&mode=json&units=metric&APPID=${config.API_KEY}`;