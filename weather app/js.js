console.log("h");
var city = document.querySelector(".input-city");
var icon = document.querySelector(".icon");
console.log(city);
document.addEventListener("keyup", (param) => {
  if (param.keyCode === 13) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city.value +
        "&units=metric&appid=d224003dd64d6c48283b3a93c74a0995"
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector("#temp").innerText = data.main.temp + "°C";
        document.querySelector("#temp-max").innerText =
          "Max " + data.main.temp_max;
        document.querySelector("#temp-min").innerText =
          "Min " + data.main.temp_min + " / ";
        document.querySelector(".weather").innerText = data.weather[0].main;
        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        icon.src = iconurl;
        document.querySelector("#city").innerText = city.value;
      })
      .catch((err) => alert("Wrong city name!"));
  }
});
