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
  celsiusTemperature = response.data.main.temp;
  let currentTemperature = Math.round(celsiusTemperature);
  let currentWeather = response.data.weather[0].description;
  let currentCity = response.data.name;
  let currentHumidity = response.data.main.humidity;
  let currentWind = response.data.wind.speed;
  let currentWeatherIcon = response.data.weather[0].icon;

  let displayedTemperature = document.querySelector("#current-degrees");
  let displayedWeather = document.querySelector("#current-weather");
  let displayedCity = document.querySelector("#current-city");
  let displayedHumidity = document.querySelector("#humidity");
  let displayedWind = document.querySelector("#wind");
  let displayedWeatherIcon = document.querySelector("#icon");

  displayedTemperature.innerHTML = currentTemperature;
  displayedWeather.innerHTML = currentWeather;
  displayedCity.innerHTML = currentCity;
  displayedHumidity.innerHTML = currentHumidity;
  displayedWind.innerHTML = currentWind;
  displayedWeatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`
  );
  displayedWeatherIcon.setAttribute("alt", currentWeather);
}

function displayFahrenheit(event) {
  event.preventDefault();
  let displayedTemperature = document.querySelector("#current-degrees");
  celsiusDegreesDisplayed.classList.remove("active");
  fahrenheitDegreesDisplayed.classList.add("active");
  let fahrenheitDisplayedTemperature = (celsiusTemperature * 9) / 5 + 32;
  displayedTemperature.innerHTML = Math.round(fahrenheitDisplayedTemperature);
}

function displayCelsius(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-degrees");
  celsiusDegreesDisplayed.classList.add("active");
  fahrenheitDegreesDisplayed.classList.remove("active");
  currentTemperature.innerHTML = Math.round(celsiusTemperature);
}

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

let celsiusTemperature = null;

let fahrenheitDegreesDisplayed = document.querySelector("#fahrenheit-degrees");
fahrenheitDegreesDisplayed.addEventListener("click", displayFahrenheit);

let celsiusDegreesDisplayed = document.querySelector("#celsius-degrees");
celsiusDegreesDisplayed.addEventListener("click", displayCelsius);

searchCity("Brussels");
