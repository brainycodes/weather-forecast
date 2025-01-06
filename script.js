const apiKey = "8dac1a0123e595727b89bcfc23071e07";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function weatherCheck(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }else if(data.weather[0].main == "Mint"){
        weatherIcon.src = "img/mint.png";
    }else{
        weatherIcon.src = "img/clouds.png";
    }
    document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", ()=>{
    weatherCheck(searchInput.value);
})

