// Create element for div that holds the movie posters
var posterDisplayEl = $("#firstblock");

// Initiates search
function searchMovie(movie) {
    
    var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey="+ytAPIKeys.mKey;
    
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
    //checking to see if search fails. If so, it kicks you out that ".then" function failed and notifies you.
    if(response.Response == "False"){
        activateNotification();
        return;
    }
    var movieCollection = [];
    console.log(response);

    //The variable loops 8 times through search results and stores them in movieCollection array.
    for (var i = 0; i < 8; i++){
        movieCollection[i] = response.Search[i];
        }

        //setting successful search results into local storage and displaying posters and populating history.
        setToLocal(movie);
        $("#search-box").attr("placeholder", movie.toUpperCase()).val(movie.toUpperCase())

        //*passing movieCollection data into displayPosters function*
        displayPosters(movieCollection);
        displayHistoryButtons();

    });
}

//dynamically creating html elements to contain the posters and styling them.
function displayPosters (movieCollection) {
    
    //clear out hard coded movie displays from screen load
    posterDisplayEl.empty()

    for (var i = 0; i < movieCollection.length; i++){
        //learned how to do this after project was done
        // var posterSection = 
        // `<div class="column is-half-mobile is-one-quarter-tablet mb-3" data-title="${movieCollection[i].Title}${movieCollection[i].Year}">
        //     <img class="has-ratio style-poster is-clickable" src="${pickPoster(movieCollection[i].Poster)}">
        //     <h5 class="title is-6">Title: ${movieCollection[i].Title}</h5>
        //     <h6 class="subtitle is-6 mb-0">Type:${movieCollection[i].Type}</h6>
        //     <h6 class="subtitle is-6 mb-0">${getYear(movieCollection[i].releaseDate, movieCollection[i].Year )}</h6>  
        // </div>`
    
    //adding class and attribute to each item in the the movieCollection array
    var posterSection = 
    $("<div>")
    .addClass("column is-half-mobile is-one-quarter-tablet mb-5")
    .attr("data-title", movieCollection[i].Title + " " + movieCollection[i].Year);
    
    //creating variable that adds class and and attribute to all img tags.
    var posterImage =
    $("<img>")
    .addClass("has-ration style-poster is-clickable")
    .attr("src", pickPoster(movieCollection[i].Poster));

    var info = $("<h5>").addClass('title is-6').text("Title: "+movieCollection[i].Title);
    var type = $('<h6>').addClass('subtitle is-6 mb-0').text("Type: " +movieCollection[i].Type);
    var year = $('<h6>').addClass('subtitle is-6 mb-0').text(getYear(movieCollection[i].releaseDate, movieCollection[i].Year));

    //Appending posterImage html to posterSection HTML and adding the three variables that define info type and year
    posterSection
    .append(posterImage, info, type, year);
    
    posterDisplayEl
    .append(posterSection);
}

}
function getYear(release, year){
    if(release === undefined){
        return `Year:  ${year}`;
    }
    else{
        return release;
    }
}

// posts unavailable poster when no movie poster is available
function pickPoster(poster){
    console.log(poster);
    if((poster === "N/A")||("https://image.tmdb.org/t/p/w220_and_h330_face/null" == poster)){
        return "assets/images/NA-Poster.png"
    }
    return poster
}


function movieOption(e){
    e.preventDefault()
    var movie =
    $("#search-box")
    .val()
    .toLowerCase()
    .trim()
    
    searchMovie(movie)
}

    //
    function movieHistory(e){
        e.preventDefault() 
        // console.log($(this).children().text());
        
        var movie = $(this)
        .children()
        .text()
        .toLowerCase();
        if(movie == "upcoming"){
            initialPage("upcoming")
        }
        else if(movie === "now playing"){
            initialPage("now_playing")
        }
        else if(movie === "top rated"){
            initialPage("top_rated")
        }
        else if(movie === "popular"){
            initialPage("popular")
        }
        else{
        searchMovie(movie)
        }
        $("#search-box").attr("placeholder", movie.toUpperCase()).val(movie.toUpperCase())
    }

// setting the movie name from the input area to local storage
function setToLocal(movie){
    
    var arrayOfmovies = [];
    
    if(JSON.parse(localStorage.getItem('movieTitle')) !==null){
        arrayOfmovies = JSON.parse(localStorage.getItem('movieTitle'))
    }
    //this will keep a movie from showing up twice in history
    if(arrayOfmovies.includes(movie)){
        return
    }
    
    arrayOfmovies.push(movie);
    localStorage.setItem("movieTitle", JSON.stringify(arrayOfmovies))
}

// grabbing info from local storage and setting to an array of movies. If it's empty then we return. That's our safety check. 
function displayHistoryButtons(){
    
    $("#append-history").empty();
   
    var arrayOfmovies = [];
    
    if(JSON.parse(localStorage.getItem('movieTitle')) !==null){
        arrayOfmovies = JSON.parse(localStorage.getItem('movieTitle'))
    }
    else{
        return;
    }
    console.log(arrayOfmovies)

    var parentDiv = $("#append-history");
    
    // append p to child and append child to parent
    for(i = 0;i < arrayOfmovies.length; i++){
        var childDiv = $("<div>").addClass("dropdown-item is-clickable").attr("id","append-history-child");

        var p = $("<p>").text((arrayOfmovies[i]).toUpperCase());

        childDiv.append(p);
        parentDiv.append(childDiv);
    }

}

$("#search-box").submit( movieOption);
$("#search-button").on("click", movieOption);
$("#append-history").on("click","#append-history-child", movieHistory);
setToLocal("upcoming");
setToLocal("now playing");
setToLocal("top rated");
setToLocal("popular");

displayHistoryButtons();

    

    
