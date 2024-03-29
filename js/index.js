
let InputCity = document.querySelector(".city")
let temp = document.querySelector(".temp")
let wind = document.querySelector(".wind")
let weather = document.querySelector(".weather")
let humidity = document.querySelector(".humidity")
let pressure = document.querySelector(".Pressure")
let pic = document.querySelector(".w-icons")
var background = document.querySelector(".bg")
let cityName = document.querySelector(".cityname")
let City = "Dehradun"

async function app() {
    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b053c2c6058c21cb7f2ce76f75a44b5c`)
        let data = await response.json()
        console.log(data)
        show(data)
    } catch (error) {
        console.log(error)

    }


}

app()
function show(data) {
    let cityName = document.querySelector(".cityname")
    let temp_kelvin = data.main.temp
    let temp_cel = temp_kelvin - 273.15
    let weather2 = data.weather[0].main
    let windy = data.wind.speed
    let humid = data.main.humidity
    let press = data.main.pressure
    cityName.innerHTML = data.name
    temp.innerHTML = (Math.floor(temp_cel) + "°")
    weather.innerHTML = weather2
    wind.innerHTML = ("Wind - " + windy + "km/hr")
    humidity.innerHTML = ("Humidity - " + humid + "%")
    pressure.innerHTML = ("Pressure - " + press + "mb")


    if (data.weather[0].main == "Mist") {
        pic.src = "images/mist-i.png"
        background.src = "images/foggy.jpg"
    }
    if (data.weather[0].main == "Haze") {
        pic.src = "images/haze-i.png"
        background.src = "images/haze.jpg"
    }
    if (data.weather[0].main == "Clear") {
        pic.src = "images/sun-i.png"
        background.src = "images/sunny.jpg"
    }
    if (data.weather[0].main == "Rain") {
        pic.src = "images/rain-i.png"
        background.src = "images/rainy.jpg"
    }
    if (data.weather[0].main == "Thunderstorm") {
        pic.src = "images/storm-i.png"
        background.src = "images/thunder.jpg"
    }
    if (data.weather[0].main == "Clouds") {
        pic.src = "images/cloudy-i.png"
        background.src = "images/cldy.jpg"
    }


    if (data.weather[0].main == "Snow") {
        pic.src = "images/snow-i.png"
        background.src = "images/snow.jpg"
    }

    else if ((Math.floor(temp_cel) <= 1) && (data.weather[0].main === "Mist" || "Haze" || "Clear")) {

        background.src = "images/temp-snow.jpg"
    }



}
function search() {
    let InputCity = document.querySelector(".city")
    City = InputCity.value

    app()


}

async function currentPosition(lat, long) {


    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b053c2c6058c21cb7f2ce76f75a44b5c`)
        let data = await response.json()

        console.log(data)
        show(data)
    } catch (error) {
        console.log(error)
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    }

}
function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    currentPosition(lat, long)
}
getLocation()


