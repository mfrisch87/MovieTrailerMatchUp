// Youtube API Key Array
var ytAPIKeys = [
  'AIzaSyAg2pgaj4to8E_XV8x1Icu_THjtxNCMTM0',
  'AIzaSyDeTVXmZHeduetXTmG4T4jTkkot-ioAbV4',
  'AIzaSyB-WiR-JT5QTEr2GzOkib58IDNpdF37HdA',
  'AIzaSyBse8dtbY4ZCzX5LrgLJSq-aHl4pNYDeH8',
  'AIzaSyD4Tthiiwiyiz44GjXJOC4bdi0GkMYGF-U',
  'AIzaSyABwvhTHaQmSTCnVCnByAw0PQbvQGUOT-M'
]

// Query Search of Youtube for Movie Trailer
function trailerSearch (movie) {
  // Use a random key out of the array to avoid hitting quota max
  var randomAPIKey = ytAPIKeys[Math.floor(Math.random() * ytAPIKeys.length)];
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

//Activate Trailer Modal
function activateModal(e) {

  e.preventDefault();
  console.log('hit')
  console.log(e.target)
  var movie = $(this).data('title').toLowerCase();

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
  $("#no-result").removeClass("is-active")
}

//Click Events 
$('#firstblock').on("click", "[data-title]", activateModal)
$("#button-close").on("click", hideModal)
$("#modal-div").on("click", hideModal)
$("#hide-notification").on("click", hideNotification)

