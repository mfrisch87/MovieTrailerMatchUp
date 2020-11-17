// Query Search of Youtube for Movie Trailer
function trailerSearch (movie) {
var videoTitle = movie + " Official Trailer ";
var videoQueryURL = "https://youtube.googleapis.com/youtube/v3/search?q="+ videoTitle +"&type=video&chart=mostPopular&key=AIzaSyDgv-l3BTAuJoboL7mU6jt28CQlD2XaE64"
console.log(videoQueryURL);
$.ajax({
  url: videoQueryURL,
  method: "GET"
    }).then(function(response) {
 var trailerId = response.items[0].id.videoId;
  
 console.log(response);
 console.log(trailerId);
        // Youtube URL based on response
var youTubeURL = "https://www.youtube.com/embed/" + trailerId

//Appending URL result to modal
$('#appendVideo').attr("src", youTubeURL);
  })
}

function activateModal(e) {

  e.preventDefault();
  var movie = $(this).data('title').toLowerCase();
  trailerSearch(movie);
}

$('firstblock').on("click", "data-title", activateModal)
