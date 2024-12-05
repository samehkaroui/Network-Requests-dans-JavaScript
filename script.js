document.getElementById('fetchWeatherBtn').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'cddd82039c34efb8685998d774ffb34a';  // Remplacez par votre clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        document.getElementById('city').textContent = data.name;
        document.getElementById('temp').textContent = data.main.temp;
        document.getElementById('desc').textContent = data.weather[0].description;
    } catch (error) {
        alert(error.message);
    }
}
