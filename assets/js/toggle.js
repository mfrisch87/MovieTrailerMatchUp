$(document).ready(function(){
    $(".navbar-burger").click(function(){
        $('#navbarToggle').toggleClass('is-active')
        $('.navbar-burger').toggleClass('is-active')
    })
})


//use search input  to get the user request of trailer
//get info from api
//after collecting data from api then sen data to local storage, by pushing the title as the key 
//then send title to id to display poster

//create function to create history buttons of searched movies
//each time button is press send title to display function and display posters

// create event lister `firstblock` to target each poster as click events
//each poster should send id to get getYouTube 
    //here  get the data from api 
    //get modal id then addClass to-active
    //create iframe for video and append to parent element `appendVideo`

//displayPosterEl.on('click', 'data-title', getYouTube)