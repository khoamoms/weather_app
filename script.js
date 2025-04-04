const apiKey = '7e9df764fef97426d3a7f538fd075c98'; 

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Vui lòng nhập thành phố!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=vi`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = `Thành phố: ${data.name}`;
                document.getElementById('temp').innerText = `Nhiệt độ: ${data.main.temp}°C`;
                document.getElementById('desc').innerText = `Mô tả: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Độ ẩm: ${data.main.humidity}%`;
                document.getElementById('wind').innerText = `Gió: ${data.wind.speed} m/s`;
            } else {
                alert('Không tìm thấy thành phố!');
            }
        })
        .catch(error => console.error('Lỗi:', error));
}
