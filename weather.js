
const weather = document.getElementById('weather')

function onGeoError(){
    alert("날씨 데이터를 받아오지 못했습니다.");
}

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0aec12209db379450e4e25560ea16ae4&units=metric`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        const name = data.name;
        const temperature = data.main.temp;
        weather.innerHTML = `${Math.floor(temperature)}° / ${name}`;
    })

}

navigator.geolocation.getCurrentPosition ( onGeoOk, onGeoError) 