const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "f2c1d5d80f7dfe1922be5a9650bc67f0";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      celsius = (data.main.temp-273.15).toFixed(1);
      weather.innerText = `${data.weather[0].main} | ${celsius} `;
    });
}
function onGeoError() {
  alert("위치정보가 확인되지 않아 날씨를 불러올 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);