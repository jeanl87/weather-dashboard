var apiKey ="4ca97a322a807dc626849e628544766c"
var rootUrl ="https://api.openweathermap.org"
var searhForm =document.querySelector("#search-form")
var input =document.querySelector("#city-search")
var todaysWeather =document.querySelector("#today")
var forcast =document.querySelector("#5-day-forcast")
var history =document.querySelector("#search-history")



"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"