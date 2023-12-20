const input = document.querySelector(".input-box")
const searchButton = document.querySelector("#searchBtn")
const weatherImg = document.querySelector(".weather-img")
const temperatura = document.querySelector(".temperatura")
const description = document.querySelector(".description")
const humidity =  document.getElementById("humidity")
const wind =  document.getElementById("wind-speed")

async function checkWeather(shahar) {
    const apiKey = "cbe0f02864f924c4f9c2ecc07122091e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${shahar}&appid=${apiKey}`

    const response = await fetch(url);
    let data = await response.json();

    console.log(data);
    if (data.cod === `404`) {
        weatherImg.src = "./img/notfound.png"
        description.innerHTML = `Ma'lumot topilmadi`;
        humidity.innerHTML = `---`;
        wind.innerHTML = `---`;
        temperatura.innerHTML = `---`;
        console.log("error");
        return;
    }
    temperatura.innerHTML = `${Math.floor(data.main.temp - 273.15)}°C`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}km/h`;

    switch (data.weather[0].main) {
        case "Clouds":
            weatherImg.src = "./img/cloud.png"
            
            break
        case "Clear":
            weatherImg.src = "./img/clear.png"
            break
        case "Smoke":
            weatherImg.src = "./img/smoke.png"
            break
        case "Mist":
            weatherImg.src = "./img/smoke.png"
            break
        case "Snow":
            weatherImg.src = "./img/snow.png"
            break
        case "Rain":
            weatherImg.src = "./img/rain.png"
            break
    }
}
// checkWeather()

searchButton.addEventListener("click", () => {
    checkWeather(input.value)
})