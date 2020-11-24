
//API Key Array
ytAPIKeys ={ 
    yKeys:
    "AIzaSyCkifdAmM0IIjs8znt7RH2_-_6o4xjOPYs"
    ,
    mKey:'c2e8eb3c',
    uKey: 'a1dac165e8856d66a0687c69f3b83557'
}


function initialPage(typeSearch) {
    
    var queryURL = "https://api.themoviedb.org/3/movie/"+typeSearch+"?api_key=" +ytAPIKeys.uKey+"&language=en-US&page=1&region=US";
    
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var movieCollection = [];
        console.log(response);
    
        //The variable loops 8 times through search results and stores them in movieCollection array.
        for (var i = 0; i < response.results.length; i++){
            movieCollection[i] ={ Title:response.results[i].title,
                                  Year:formatedDate(response.results[i].release_date),
                                  Poster:"https://image.tmdb.org/t/p/w220_and_h330_face/"+response.results[i].poster_path,
                                  Type:"Movie",  
            }
            console.log(movieCollection[i].Year)
            }
        displayPosters(movieCollection);
    });
}

function formatedDate(date){
    var array = date.split("-");
    return  array[1] +"/"+array[2] +"/"+ array[0]
}



