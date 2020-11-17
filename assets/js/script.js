// document.body.innerHTML = `<img id="poster"></img><h1 id="movieTitle"></h1>
// <h1 id="plot"></h1><h1 id="year"></h1><h1 id="rated"></h1>
// <h1 id="rottenTomatoes"></h1><h1 id="rating"></h1>`

// var posterInput = $("#")

// var posterDisplayEl = $("#firstblock");
 
// function displayPosters (movieCollection) {
//     posterDisplayEl.empty()

//     for (i = 0; i < 8; i++){
    
    // console.log(movieCollection[i].Poster)
    // movieCollection[i] = response.Search[i];// What is this?
    // console.log(movieCollection[i].Poster)
    
//     var posterSection = 
//     $("<section>")
//     .addClass("section columns is-mobile is-multiline")
//     .data("title", movieCollection[i].Title);

//     var posterImage =
//     $("<img>")
//     .addClass("has-ration")
//     .attr("src", movieCollection[i].Poster);

//     posterSection
//     .append(posterImage);
    
//     posterDisplayEl
//     .append(posterSection);
// }

// }

// function movieOptionClick(e){
//     e.preventDefault()
//     var movie = $(this).val().toLowerCase()
//     searchMovie(movie)
    // console.log(this)

// }

//create a clickevent function for every past searched movie. This is for the history button.bg-image
        //inside I'm going to get the value of the btn send it to lowercase then call searchMovie("pass value")
        // function movieHistory(e) / var movie = $(this).val().toLowerCase() /searchMovie(movie)

// function searchMovie(movie) {
    
    
//     var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey=trilogy";
    
//     $.ajax({
//         url: queryURL,
//         method: "GET",
//     }).then(function (response) {
//         console.log(response);
        
//     var movieCollection = [];
    
//     for (i = 0; i < 8; i++){
    
//         movieCollection[i] = response.Search[i];// What is this?
        // console.log(movieCollection[i].Poster)
        // }

   
    // displayPosters(movieCollection);
    // console.log(movieCollection)
    
    

//     });
// }

//corrected ID spelling below to "firstBlock" rather than "firstblock"

// localStorage.setItem("movieCollectionArray", JSON.stringify(movieCollection))


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
    
    

    

    


//searchMovie("Goonies")

// // Youtube Search to find Trailer
function trailerSearch (movie, year) {
var videoTitle = movie +  "Official trailer" + year;
var videoQueryURL = "https://youtube.googleapis.com/youtube/v3/search?q=" + videoTitle + "&type=video&chart=mostPopular&key=AIzaSyCkifdAmM0IIjs8znt7RH2_-_6o4xjOPYs"
$.ajax({
  url: videoQueryURL,
  method: "GET"
    }).then(function(response) {
 var trailerId = response.items[0].id.videoId;
  
 console.log(response);
 console.log(trailerId);
        
  })
}

// // IFrame API
// var tag = document.createElement('script');

//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//    This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       var player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//           height: '390',
//           width: '640',
//           videoId: trailerId,
//           events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//           }
//         });
//       }

//  // The API will call this function when the video player is ready.
//  function onPlayerReady(event) {
//   event.target.playVideo();
// }

// The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}



// displayPosterEl.on("click", "data-title", getYouTube)
//});
