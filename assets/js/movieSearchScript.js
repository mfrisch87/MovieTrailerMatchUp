var posterDisplayEl = $("#firstblock");
 
function displayPosters (movieCollection) {
    posterDisplayEl.empty()

    for (i = 0; i < 8; i++){
    
    var posterSection = 
    $("<section>")
    .addClass("column is-half-mobile is-one-quarter-tablet mb-5")
    .attr("data-title", movieCollection[i].Title + " " + movieCollection[i].Year);
    
    var posterImage =
    $("<img>")
    .addClass("has-ration style-poster is-clickable")
    .attr("src", pickPoster(movieCollection[i].Poster));

    var info = $("<h5>").addClass('title is-6').text("Title: "+movieCollection[i].Title);
    var type = $('<h6>').addClass('subtitle is-6 mb-0').text("Type: " +movieCollection[i].Type);
    var year = $('<h6>').addClass('subtitle is-6 mb-0').text("Year: " +movieCollection[i].Year);
       

    posterSection
    .append(posterImage, info, type, year);
    
    posterDisplayEl
    .append(posterSection);
}

}
function pickPoster(poster){
    console.log(poster);
    if(poster === "N/A"){
        return "assets/images/NA-Poster.png"
    }
    return poster
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
    console.log(response.Response);
    if(response.Response == "False"){
        activateNotification();
        return;
    }   
    var movieCollection = [];
    
    for (i = 0; i < 8; i++){
    
        movieCollection[i] = response.Search[i];// What is this?
        // console.log(movieCollection[i].Poster)
        }

        setToLocal(movie);
        displayPosters(movieCollection);
        displayHistoryButtons();
    });
}

function setToLocal(movie){
    var arrayOfmovies = [];
    if(JSON.parse(localStorage.getItem('movieTitle')) !==null){
        arrayOfmovies = JSON.parse(localStorage.getItem('movieTitle'))
    }
    if(arrayOfmovies.includes(movie)){
        return
    }
    arrayOfmovies.push(movie);
    localStorage.setItem("movieTitle", JSON.stringify(arrayOfmovies))
}
function displayHistoryButtons(){
    var arrayOfmovies = [];
    if(JSON.parse(localStorage.getItem('movieTitle')) !==null){
        arrayOfmovies = JSON.parse(localStorage.getItem('movieTitle'))
    }


    var parentDiv = $("#append-history");
    
    for(i = 0;i < arrayOfmovies.length; i++){
        var childDiv = $("<div>")
        .addClass("dropdown-item is-clickable")
        .addId("append-history-child");

        var p = $("<p>").text(arrayOfmovies[i]);

        childDiv.append(p);
        parentDiv.append(childDiv);
    }

}

$("#search-box").submit( movieOptionSubmit)
$("#search-button").on("click", movieOptionClick)
$("#append-history").on("click","#append-history-child", movieHistory)
    

    

    
