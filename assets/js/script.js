
// var movie = "Gremlins";
var queryURL = "https://www.omdbapi.com/?t=Gremlins&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

//$("#find-book").on("click", function(event) {
  //  event.preventDefault();
   var bookTitle = "Arrival";
    var bookQueryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + "&key=AIzaSyCkifdAmM0IIjs8znt7RH2_-_6o4xjOPYs"
    $.ajax({
        url: bookQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
//}); 

    var triviaQueryURL = "https://opentdb.com/api.php?amount=5&category=11&difficulty=medium"
    $.ajax({
        url: triviaQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })

