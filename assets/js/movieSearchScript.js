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
    
        movieCollection[i] = response.Search[i];// What is this?
        }

        //setting successful search results into local storage and displaying posters and populating history.
        setToLocal(movie);

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
    
    //adding class and attribute to each item in the the movieCollection array
    var posterSection = 
    $("<section>")
    .addClass("column is-half-mobile is-one-quarter-tablet mb-5")
    .attr("data-title", movieCollection[i].Title + " " + movieCollection[i].Year);
    
    //creating variable that adds class and and attribute to all img tags.
    var posterImage =
    $("<img>")
    .addClass("has-ration style-poster is-clickable")
    .attr("src", pickPoster(movieCollection[i].Poster));



    var info = $("<h5>").addClass('title is-6').text("Title: "+movieCollection[i].Title);
    var type = $('<h6>').addClass('subtitle is-6 mb-0').text("Type: " +movieCollection[i].Type);
    var year = $('<h6>').addClass('subtitle is-6 mb-0').text("Year: " +movieCollection[i].Year);
       
        //Appending posterImage html to posterSection HTML and adding the three variables that define info type and year
    posterSection
    .append(posterImage, info, type, year);
    
    posterDisplayEl
    .append(posterSection);
}

}

// posts unavailable poster when no movie poster is available
function pickPoster(poster){
    console.log(poster);
    if(poster === "N/A"){
        return "assets/images/NA-Poster.png"
    }
    return poster
}


function movieOptionClick(e){
    e.preventDefault()
    
    //traversing the dom
    var movie =
    $(this)
    .parent()
    .siblings()
    .eq(0)
    .children()
    .eq(0)
    .val()
    .toLowerCase()
    .trim()
    
    searchMovie(movie)
}


function movieOptionSubmit(e){
    e.preventDefault()
    
    var movie =
    $(this)
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
        
        searchMovie(movie)
        $("#search-box").attr("placeholder", movie)
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

$("#search-box").submit( movieOptionSubmit)
$("#search-button").on("click", movieOptionClick)
$("#append-history").on("click","#append-history-child", movieHistory)
displayHistoryButtons();

    

    
