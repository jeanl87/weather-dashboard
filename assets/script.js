var apiKey ="4ca97a322a807dc626849e628544766c"
var rootUrl ="https://api.openweathermap.org"
var searhForm =document.querySelector("#search-form")
var input =document.querySelector("#city-search")
var todaysWeather =document.querySelector("#today")
var forecast =document.querySelector("#5-day-forecast")
var history =document.querySelector("#search-history")

//Current Weather 
var requestUrl = "api.openweathermap.org/data/2.5/weather?q={brooklyn}&appid=4ca97a322a807dc626849e628544766c";
fetch(requestUrl)
.then(function(response) {
  return response.json();
})
.then(function(data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('li');

      listItem.textContent = data[i].html_url;
      todaysWeather.appendChild(listItem);
    }
  });


//5-day-forecast 
var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=40.6782&lon=73.9442&exclude=hourly&appid=4ca97a322a807dc626849e628544766c";
fetch(requestUrl)
.then(function(response) {
  return response.json();
})
.then(function(data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('li');

      listItem.textContent = data[i].html_url;
      forecast.appendChild(listItem);
    }):
