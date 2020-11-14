document.body.innerHTML = `<img id="poster"></img><h1 id="movieTitle"></h1>
<h1 id="plot"></h1><h1 id="year"></h1><h1 id="rated"></h1>
<h1 id="rottenTomatoes"></h1><h1 id="rating"></h1>`

var searchMovie = function (movie) {
    
    var queryURL = "https://www.omdbapi.com/?s=" + "superman" + "&apikey=trilogy";
    
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        
        //Below ID tags are just placeholders. My hope is that we will be able to swap
    //these out with their relevant counterparts on the Front End.
    
    
    var poster = $("#poster").attr("src", response.Poster)
    var movieTitle = $("#movieTitle").text(response.Title)
    var year = $("#year").text(response.Year)
    var plot = $("#plot").text(response.Plot)
    var rated = $("#rated").text(response.Rated)
    var metacritic = $("#rottenTomatoes").text(response.Ratings[1].Source)
    var ratings = $("#rating").text(response.Ratings[1].Value)
    

    localStorage.setItem("poster", JSON.stringify(response.Poster))
    localStorage.setItem("title", JSON.stringify(response.Title))
    localStorage.setItem("year", JSON.stringify(response.Year))
    localStorage.setItem("plot", JSON.stringify(response.Plot))
    localStorage.setItem("rated", JSON.stringify(response.Title))
    localStorage.setItem("metacritic", JSON.stringify(response.Ratings[1].Source))
    localStorage.setItem("rating", JSON.stringify(response.Ratings[1].Value))
    
    var yearOfRelease = response.Year

    for 
    
});
}

searchMovie("Goonies")

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