// document.body.innerHTML = `<img id="poster"></img><h1 id="movieTitle"></h1>
// <h1 id="plot"></h1><h1 id="year"></h1><h1 id="rated"></h1>
// <h1 id="rottenTomatoes"></h1><h1 id="rating"></h1>`

// var posterInput = $("#")

var posterDisplayEl = $("#firstblock");
 
function displayPosters (movieCollection) {
    posterDisplayEl.empty()

    for (i = 0; i < 8; i++){
    
    // console.log(movieCollection[i].Poster)
    // movieCollection[i] = response.Search[i];// What is this?
    // console.log(movieCollection[i].Poster)
    
    var posterSection = 
    $("<section>")
    .addClass("section columns is-mobile is-multiline")
    .data("title", movieCollection[i].Title)
    .data("year", movieCollection[i].Year);
    
    var posterImage =
    $("<img>")
    .addClass("has-ration")
    .attr("src", movieCollection[i].Poster);

    posterSection
    .append(posterImage);
    
    posterDisplayEl
    .append(posterSection);
}

}

function movieOptionClick(e){
    e.preventDefault()
    var movie = $(this)
    .parent()
    .sibling()
    .eq(0)
    .children()
    .eq(0)
    .val()
    .toLowerCase()
    searchMovie(movie)
    console.log(this)

}

//
function movieOptionSubmit(e){
    e.preventDefault()
    var movie = $(this)
    .val()
    .toLowerCase()
    searchMovie(movie)
    console.log(this)

}

    function movieHistory(e){ 
        var movie = $(this)
        .val()
        .toLowerCase()
        searchMovie(movie)
    }

function searchMovie(movie) {
    
    
    var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey=trilogy";
    
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        
    var movieCollection = [];
    
    for (i = 0; i < 8; i++){
    
        movieCollection[i] = response.Search[i];// What is this?
        // console.log(movieCollection[i].Poster)
        }

    localStorage.setItem("movieTitle", JSON.stringify(movie))
   
    displayPosters(movieCollection);
    // console.log(movieCollection)
    
    

    });
}

//corrected ID spelling below to "firstBlock" rather than "firstblock"



//     var poster = response.Poster
//     var movieTitle = response.Title
//     var year = response.Year
//     var plot = response.Plot
//     var rated = response.Rated
//     var rottenTomatoes = response.Ratings[1].Source
//     var ratings = response.Ratings[1].Value
    

//     localStorage.setItem("title", JSON.stringify(response.Title))
//     localStorage.setItem("year", JSON.stringify(response.Year))
//     localStorage.setItem("plot", JSON.stringify(response.Plot))
//     localStorage.setItem("rated", JSON.stringify(response.Title))
//     localStorage.setItem("rottenTomatoes", JSON.stringify(response.Ratings[1].Source))
//     localStorage.setItem("rating", JSON.stringify(response.Ratings[1].Value))
    
//     var yearOfRelease = response.Year
    
    $("#search-input").on("submit", movieOptionSubmit)
    $("#search-button").on("click", movieOptionClick)
    

    

    
