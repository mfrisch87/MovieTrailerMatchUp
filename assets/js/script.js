//$("#find-book").on("click", function(event) {
  //  event.preventDefault();
   var bookTitle = "Arrival";
    var bookQueryURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + "&key=AIzaSyCkifdAmM0IIjs8znt7RH2_-_6o4xjOPYs"
    $.ajax({
        url: bookQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
//});

