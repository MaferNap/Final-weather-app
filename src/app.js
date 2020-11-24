let currentDate = new Date();
let dateDisplayed = document.querySelector("#current-date");
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDisplayedDay = daysOfWeek[currentDate.getDay()];
let currentDisplayedDate = currentDate.getDate();
let currentDisplayedHour = currentDate.getHours();
let currentDisplayedMinutes = currentDate.getMinutes();

if (currentDisplayedMinutes < 10) {
  dateDisplayed.innerHTML = `${currentDisplayedDay} ${currentDisplayedDate}, ${currentDisplayedHour}h0${currentDisplayedMinutes}`;
} else {
  dateDisplayed.innerHTML = `${currentDisplayedDay} ${currentDisplayedDate}, ${currentDisplayedHour}h${currentDisplayedMinutes}`;
}

function getCityTemperature(event) {
  event.preventDefault();
  let city = document.querySelector("#city-quest").value;
  searchCity(city);
}

function displayTemperature(response) {
  let currentTemperature = Math.round(response.data.main.temp);
  let currentWeather = response.data.weather[0].description;
  console.log(response.data.weather[0].main);
  console.log(response.data.weather);
  let currentCity = response.data.name;
  let currentHumidity = response.data.main.humidity;
  let currentWind = response.data.wind.speed;
  let displayedTemperature = document.querySelector("#current-degrees");
  let displayedWeather = document.querySelector("#current-weather");
  let displayedCity = document.querySelector("#current-city");
  let displayedHumidity = document.querySelector("#humidity");
  let displayedWind = document.querySelector("#wind");
  displayedTemperature.innerHTML = currentTemperature;
  displayedWeather.innerHTML = currentWeather;
  displayedCity.innerHTML = currentCity;
  displayedHumidity.innerHTML = currentHumidity;
  displayedWind.innerHTML = currentWind;
}

//function displayFarenheit(event) {
//event.preventDefault();
//let currentTemperature = document.querySelector("#current-degrees");
//currentTemperature.innerHTML = `66`;
//}

//function displayCelsius(event) {
//event.preventDefault();
//let currentTemperature = document.querySelector("#current-degrees");
//currentTemperature.innerHTML = `19`;
//}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findLocation);
}

function findLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "88d9871371b1db4131f1d79918fff4e1";
  let units = "metric";
  let apiEndingPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndingPoint}&lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function searchCity(city) {
  let apiKey = "88d9871371b1db4131f1d79918fff4e1";
  let units = "metric";
  let apiEndingPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndingPoint}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function getLondonListTemperature() {
  let apiKey = "88d9871371b1db4131f1d79918fff4e1";
  let units = "metric";
  let city = "London";
  let apiEndingPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndingPoint}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function getTokyoListTemperature() {
  let apiKey = "88d9871371b1db4131f1d79918fff4e1";
  let units = "metric";
  let city = "Tokyo";
  let apiEndingPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndingPoint}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function getNewYorkListTemperature() {
  let apiKey = "88d9871371b1db4131f1d79918fff4e1";
  let units = "metric";
  let city = "New York";
  let apiEndingPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndingPoint}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function getMexicoCityListTemperature() {
  let apiKey = "88d9871371b1db4131f1d79918fff4e1";
  let units = "metric";
  let city = "Mexico City";
  let apiEndingPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndingPoint}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function getRiodeJaneiroListTemperature() {
  let apiKey = "88d9871371b1db4131f1d79918fff4e1";
  let units = "metric";
  let city = "Rio de janeiro";
  let apiEndingPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndingPoint}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

let citySearchEngine = document.querySelector("#city-search");
citySearchEngine.addEventListener("submit", getCityTemperature);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let cityListButtonLondon = document.querySelector("#city-list-london");
cityListButtonLondon.addEventListener("click", getLondonListTemperature);

let cityListButtonTokyo = document.querySelector("#city-list-tokyo");
cityListButtonTokyo.addEventListener("click", getTokyoListTemperature);

let cityListButtonNewYork = document.querySelector("#city-list-new-york");
cityListButtonNewYork.addEventListener("click", getNewYorkListTemperature);

let cityListButtonMexicoCity = document.querySelector("#city-list-mexico-city");
cityListButtonMexicoCity.addEventListener(
  "click",
  getMexicoCityListTemperature
);

let cityListButtonRiodeJaneiro = document.querySelector(
  "#city-list-rio-de-janeiro"
);
cityListButtonRiodeJaneiro.addEventListener(
  "click",
  getRiodeJaneiroListTemperature
);

searchCity("Brussels");

//let farenheitDegreesDisplayed = document.querySelector("#farenheit-degrees");
//farenheitDegreesDisplayed.addEventListener("click", displayFarenheit);

//let celsiusDegreesDisplayed = document.querySelector("#celsius-degrees");
//celsiusDegreesDisplayed.addEventListener("click", displayCelsius);
