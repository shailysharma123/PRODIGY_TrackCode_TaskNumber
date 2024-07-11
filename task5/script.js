const apiKey = '22f6c96ef484c15ea2da4e9767a370c5'; // Replace with your OpenWeatherMap API key

const locationInput = document.getElementById('locationInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDiv = document.getElementById('weather');

searchBtn.addEventListener('click', () => {
    const location = locationInput.value;
    fetchWeather(location);
});

function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    if (data.cod !== 200) {
        weatherDiv.innerHTML = `<p>${data.message}</p>`;
        return;
    }

    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p><img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}"> ${description}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${speed} m/s</p>
    `;
}
