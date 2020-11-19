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
    .addClass("column is-half-mobile is-one-quarter-tablet mb-3")
    .attr("data-title", movieCollection[i].Title + " " + movieCollection[i].Year);
    
    var posterImage =
    $("<img>")
    .addClass("has-ration style-poster is-clickable")
    .attr("src", movieCollection[i].Poster);

    var info = $("<h5>").addClass('title is-5').text("Title: "+movieCollection[i].Title);
    var type = $('<h6>').addClass('subtitle is-6 mb-0').text("Type: " +movieCollection[i].Type);
    var year = $('<h6>').addClass('subtitle is-6 mb-0').text("Year: " +movieCollection[i].Year);
       

    posterSection
    .append(posterImage, info, type, year);
    
    posterDisplayEl
    .append(posterSection);
}

}

function movieOptionClick(e){
    e.preventDefault()
    
    var movie =
    $(this)
    .parent()
    .siblings()
    .eq(0)
    .children()
    .eq(0)
    .val()
    .toLowerCase()
    searchMovie(movie) //what is this doing here ?
}

//
function movieOptionSubmit(e){
    e.preventDefault()
    
    var movie =
    $(this)
    .val()
    .toLowerCase()
    searchMovie(movie)
}

    function movieHistory(e){
        e.preventDefault() 
        console.log($(this).children().text());
        var movie = $(this)
        .children()
        .text()
        .toLowerCase();
        console.log(movie);
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

//NOTE: correct ID spelling below to "firstBlock" rather than "firstblock in index and JS?"

    
    $("#search-box").submit( movieOptionSubmit)
    $("#search-button").on("click", movieOptionClick)
    $("#append-history").on("click","#append-history-child", movieHistory)
    

    

    
