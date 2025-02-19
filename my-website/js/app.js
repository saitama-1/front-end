const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

const apiKey = "332c618d36fc041087287ae8eac52241"; // Thay YOUR_API_KEY bằng API key của bạn

weatherForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (city) {
    getWeather(city);
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=vi`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        displayWeather(data);
      } else {
        weatherInfo.textContent = "Không tìm thấy thành phố. Vui lòng thử lại!";
      }
    })
    .catch((error) => {
      console.error("Lỗi:", error);
      weatherInfo.textContent = "Đã xảy ra lỗi. Vui lòng thử lại sau!";
    });
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;

  weatherInfo.innerHTML = `
        <h2>Thời tiết tại ${cityName}</h2>
        <p>Nhiệt độ: ${temperature}°C</p>
        <p>Độ ẩm: ${humidity}%</p>
        <p>Mô tả: ${description}</p>
    `;
}
