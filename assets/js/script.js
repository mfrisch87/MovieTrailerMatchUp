// var movie = "Gremlins";
var queryURL = "https://www.omdbapi.com/?t=Gremlins&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
