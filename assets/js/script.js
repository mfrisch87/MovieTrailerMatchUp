// document.body.innerHTML = `<img id="poster"></img><h1 id="movieTitle"></h1>
// <h1 id="plot"></h1><h1 id="year"></h1><h1 id="rated"></h1>
// <h1 id="rottenTomatoes"></h1><h1 id="rating"></h1>`

var parentButtonEl = $("#parent-button")

searchMovie()
function searchMovie() {
    // e.preventDefault()
    // var movie = $("#search").val().toLowerCase()
    
    var queryURL = "https://www.omdbapi.com/?s=" + "superman" + "&apikey=trilogy";
    
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        
    var movieCollection = [];
    
    for (i = 0; i < 8; i++){
    
    movieCollection[i] = response.Search[i];
    
}

parentButtonEl.innerHTML =
`<p class="level-item">
<button class="button is-small has-text-primary is-rounded" data-index="0">${movieCollection[0].Title}</button></p>
<p class="level-item">
<button class="button is-small has-text-primary is-rounded" data-index="1">${movieCollection[1].Title}</button></p>
<p class="level-item">
<button class="button is-small has-text-primary is-rounded" data-index="2">${movieCollection[2].Title}</button></p>
<p class="level-item">
<button class="button is-small has-text-primary is-rounded" data-index="3">${movieCollection[3].Title}</button></p>
<p class="level-item">
<button class="button is-small has-text-primary is-rounded" data-index="4">${movieCollection[4].Title}</button></p>`

localStorage.setItem("movieCollectionArray", JSON.stringify(movieCollection))//How do we parse the imdbID out of this?



    // var poster = response.Poster
    // var movieTitle = response.Title
    // var year = response.Year
    // var plot = response.Plot
    // var rated = response.Rated
    // var rottenTomatoes = response.Ratings[1].Source
    // var ratings = response.Ratings[1].Value
    

    // localStorage.setItem("title", JSON.stringify(response.Title))
    // localStorage.setItem("year", JSON.stringify(response.Year))
    // localStorage.setItem("plot", JSON.stringify(response.Plot))
    // localStorage.setItem("rated", JSON.stringify(response.Title))
    // localStorage.setItem("rottenTomatoes", JSON.stringify(response.Ratings[1].Source))
    // localStorage.setItem("rating", JSON.stringify(response.Ratings[1].Value))
    
    var yearOfRelease = response.Year
    
    

    

    });
}

searchMovie("Goonies")

// Youtube Search to find Trailer
   var videoTitle = movieTitle +  "Official trailer" + year;
    var videoQueryURL = "https://youtube.googleapis.com/youtube/v3/search?q=" + videoTitle + "&type=video&chart=mostPopular&key=AIzaSyCkifdAmM0IIjs8znt7RH2_-_6o4xjOPYs"
    $.ajax({
        url: videoQueryURL,
        method: "GET"
    }).then(function(response) {
      var trailerId = response.items[0].id.videoId;
  
        console.log(response);
        console.log(trailerId);
        
    })


// IFrame API
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  //  This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: trailerId,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

 // The API will call this function when the video player is ready.
 function onPlayerReady(event) {
  event.target.playVideo();
}

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


$("#search").on("click", searchMovie)
//});
