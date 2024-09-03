const options = {
    method: 'GET',
    headers: {
        'X-RapidApi-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidApi-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) =>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then(response => {


        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humadity.innerHTML = response.humadity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
    })
    .then(err => console.error(err));
}

submit.addEventlistener("click", ()=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Karachi")