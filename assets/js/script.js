// Query Search of Youtube for Movie Trailer
function trailerSearch (movie) {
  // Use a random key out of the array to avoid hitting quota max
  var randomAPIKey = getK();
  console.log(randomAPIKey);
  //console.log(randomAPIKey);
var videoTitle = movie + " Official Trailer ";
var videoQueryURL = "https://youtube.googleapis.com/youtube/v3/search?q="+ videoTitle +"&type=video&chart=mostPopular&key=" + randomAPIKey
//console.log(videoQueryURL);
$.ajax({
  url: videoQueryURL,
  method: "GET"
    }).then(function(response) {
 var trailerId = response.items[0].id.videoId;
  
 //console.log(response);
 //console.log(trailerId);
// Youtube URL based on response
var youTubeURL = "https://www.youtube.com/embed/" + trailerId

//Appending URL result to modal
$('#appendVideo').attr("src", youTubeURL);
$('#modal-div').addClass('is-active')
  })
}
//function 
function getK(){
  return ytAPIKeys.yKeys;
}

//Activate Trailer Modal
function activateModal(e) {

  e.preventDefault();
  console.log('hit')
  
  var movie = $(this).data('title').toLowerCase();
  console.log(movie)

  trailerSearch(movie);
}

//Hide Trailer Modal
function hideModal(e){
  e.preventDefault()
  e.stopPropagation();
  $("#modal-div").removeClass("is-active");
  $("#appendVideo").attr('src', '');
}

// Notification for No Results on Search
function activateNotification(){
  $("#no-result").addClass("is-active")
}
function hideNotification(e){
  e.preventDefault()
  e.stopPropagation();
  $("#no-result").removeClass("is-active")
}

//Click Events 
$('#firstblock').on("click", "[data-title]", activateModal)
$("#button-close").on("click", hideModal)
$("#modal-div").on("click", hideModal)
$("#no-result").on("click", hideNotification)
$("#hide-notification").on("click", hideNotification)

