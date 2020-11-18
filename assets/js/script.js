// Query Search of Youtube for Movie Trailer
function trailerSearch (movie) {
var videoTitle = movie + " Official Trailer ";
var videoQueryURL = "https://youtube.googleapis.com/youtube/v3/search?q="+ videoTitle +"&type=video&chart=mostPopular&key=AIzaSyCkifdAmM0IIjs8znt7RH2_-_6o4xjOPYs"
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
$('#modal-div').addClass('is-active')
  })
}

function activateModal(e) {

  e.preventDefault();
  console.log('hit')
  console.log(e.target)
  var movie = $(this).data('title').toLowerCase();

  trailerSearch(movie);
  //$('model-div')
}
// funciton deactivateModal(e) {
//   e.preventDefault();
//   console.log(e.target);
// }

$('#firstblock').on("click", "[data-title]", activateModal)
//$('body', '#button-close').on("click",  deactivateModal)
