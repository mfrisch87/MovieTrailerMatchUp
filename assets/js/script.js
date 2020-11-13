document.body.innerHTML = `<h1 id="movieTitle"></h1>
<h1 id="plot"><h1 id="year"><h1 id="rated">
</h1><h1 id="metacritic"><h1 id="rating"></h1>`

var queryURL = "https://www.omdbapi.com/?t=Gremlins&apikey=trilogy";

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(response);
    
    //Below ID tags are just placeholders. My hope is that we will be able to swap
    //these out with their relevant counterparts on the Front End.
    var movieTitle = $("#movieTitle").text(response.Title)
    var year = $("#year").text(response.Year)
    var plot = $("#plot").text(response.Plot)
    var rated = $("#rated").text(response.Rated)
    var metacritic = $("#metacritic").text(response.Ratings[1].Source)
    var ratings = $("#rating").text(response.Ratings[1].Value)
    
    localStorage.setItem("title", JSON.stringify(response.Title))
    localStorage.setItem("year", JSON.stringify(response.Year))
    localStorage.setItem("plot", JSON.stringify(response.Plot))
    localStorage.setItem("rated", JSON.stringify(response.Title))
    localStorage.setItem("metacritic", JSON.stringify(response.Ratings[1].Source))
    localStorage.setItem("rating", JSON.stringify(response.Ratings[1].Value))
    
    console.log()

});

function createItem() {
    
}


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