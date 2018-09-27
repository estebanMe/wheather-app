//Config API openweathermap.org
const location = "Buenos Aires, ar";
const api_key = "7248a3879f661e7d880de03a9f672022";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;