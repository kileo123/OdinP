import "./style.css"
import { format } from "date-fns";

const API_KEY = "EADEQJ94XHM6DPBV4XL3QUXUZ";
const DEFAULT_LOCATION = "shinjuku"

const spinner = document.getElementById("spinner");

async function getCityWeather(cityName) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=${UNITS}&key=${API_KEY}`

  try {
    spinner.style.display = "block";
    const response = await fetch(url, {mode: "cors"})
    if (!response.ok){
      displayError()
    } else {
      const weatherData = dataMapper(await response.json())
      displayMain(weatherData)
      displayForecast(weatherData)
    }
  } catch (error) {
    console.error(error);
  } finally {
    spinner.style.display = "none";
  }
}

function dataMapper(data){
  return {
    location: data.resolvedAddress,
    temperature: data.currentConditions.temp,
    feelslike: data.currentConditions.feelslike,
    conditions: data.currentConditions.conditions,
    humidity: data.currentConditions.humidity,
    windSpeed: String(data.currentConditions.windspeed).split(".")[0],
    icon: data.currentConditions.icon,
    sunrise: data.currentConditions.sunrise.slice(0, -3),
    sunset: data.currentConditions.sunset.slice(0, -3),
    hourlyForecast: data.days[0].hours.map(hour => ({
      time: hour.datetime.slice(0, 2),
      temperature: hour.temp,
      conditions: hour.conditions,
      icon: hour.icon
    })),
    weekForecast: data.days.slice(1, 8).map(day => ({
        weekDay: new Date(day.datetime).toLocaleDateString('en-US', {weekday: "short"}),
        temperature: day.temp,
        icon: day.icon
    }))        
  }
}

function displayMain(weatherData) {
  const currentweather = document.getElementById("currentweather")

  currentweather.innerHTML=`
    <div class="mainDisplay">
      <div class="mainDisplayBig">
        <div class="mainDisplayBigLocation">
          <h1>${weatherData.location}</h1>
        </div>
        <div class="mainDisplayBigInfo">
          <div class="mainDisplayBigIcon">
            <img src="images/weather-icon-solid/${weatherData.icon}.svg">
          </div>
          <div class="mainDisplayBigDetail">
            <h2>${weatherData.conditions}</h2>
            <h3>${weatherData.temperature}${unitselection.checked ? " &deg;F" : " &deg;C"}</h3>
            <h2>feels like ${weatherData.feelslike}${unitselection.checked ? " &deg;F" : " &deg;C"}</h2>
          </div>
        </div>
      </div>
      <div class="mainDisplayDetail">
        <div class="humidity">
          <span>Humidity</span>
          <img src="images/weather-icon-solid/humidity.svg">           
          <span>${weatherData.humidity}%</span>
        </div>
        <div class="wind">
          <span>Wind Speed</span>
          <img src="images/weather-icon-solid/wind.svg">            
          <span>${weatherData.windSpeed}${unitselection.checked ? " MPH" : " KM/h"}</span>
        </div>
        <div class="sunrise">
          <span>Sunrise</span>
          <img src="images/weather-icon-solid/sunrise.svg">            
          <span>${weatherData.sunrise}</span>
        </div>
        <div class="sunset">
          <span>Sunset</span>
          <img src="images/weather-icon-solid/sunset.svg">            
          <span>${weatherData.sunset}</span>
        </div>
      </div>
    </div>
    <div class="hourlyDisplay" id="hourlyDisplay">
    </div>
  `

  const hourlyDisplay = document.getElementById("hourlyDisplay")
  weatherData.hourlyForecast.map((hour) => {       
    hourlyDisplay.innerHTML += `
    <div class="hourlyWeather">
      <div class="hourlyTime">${hour.time}:00</div>
      <div class="hourlyDetail">
        <img src="images/weather-icon-solid/${hour.icon}.svg" />
        <div>
          <span>${hour.conditions}</span>
          <span>${hour.temperature}°${unitselection.checked ? " &deg;F" : " &deg;C"}</span>
        </div>
      </div>               
    </div>`         
  });
}

function displayForecast(weatherData) {
  const forecastweather = document.getElementById("forecastweather")
  forecastweather.innerHTML = ""
  weatherData.weekForecast.map((element) => {       
    forecastweather.innerHTML += `
      <div class="forecastDisplay">
        <div class="forecastDay">${element.weekDay}</div>
        <div class="forecastIcon">
          <img src="images/weather-icon-outline/${element.icon}.svg" />
        </div>    
        <div class="forecastTemperature">${element.temperature}${unitselection.checked ? " &deg;F" : " &deg;C"}</div>
      </div>
    `                 
});
}

function displayError() {
  const currentweather = document.getElementById("currentweather")
  const forecastweather = document.getElementById("forecastweather")
  currentweather.innerHTML="LOCATION NOT FOUND"
  forecastweather.innerHTML="LOCATION NOT FOUND"
}

function updateTime(){
  const date = new Date()
  const localtime = document.getElementById("localtime")
  localtime.innerHTML = `
    <span>${format(date, "eeee, MMMM do yyyy")}</span>
    <span>${format(date, "HH:mm")}</span>
  `
}

const unitselection = document.getElementById("unitselection")
var UNITS = unitselection.checked ? "us" : "metric"
unitselection.addEventListener("click", () => {
  UNITS = unitselection.checked ? "us" : "metric"
  getCityWeather(LOCATION)
})

const userInput = document.getElementById("locationsearch")
const searchButton = document.getElementById("searchbutton")
var LOCATION = localStorage.getItem("LOCATION") || DEFAULT_LOCATION
searchButton.addEventListener("click", (e) => {
  e.preventDefault()
  if(userInput.value != ""){
    LOCATION = userInput.value
    localStorage.setItem("LOCATION", LOCATION);
    getCityWeather(LOCATION)
  }
  userInput.value=""
})
updateTime()
setInterval(updateTime, 30000)
getCityWeather(LOCATION)
setInterval(getCityWeather, 36000000)
