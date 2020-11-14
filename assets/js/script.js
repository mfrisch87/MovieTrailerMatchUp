
// var movie = "Gremlins";
var queryURL = "https://www.omdbapi.com/?t=Gremlins&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

//$("#find-trailer").on("click", function(event) {
  //  event.preventDefault();
   var videoTitle = "Arrival Trailer";
    var videoQueryURL = "https://youtube.googleapis.com/youtube/v3/search?q=" + videoTitle + "&type=video&chart=mostPopular&key=AIzaSyCkifdAmM0IIjs8znt7RH2_-_6o4xjOPYs"
    $.ajax({
        url: videoQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
//});


