
//API Key Array
ytAPIKeys ={ 
    yKeys:
    "AIzaSyADtyGp19GrSaE4roaX6YHv_BTfM8YsfCI"
    ,
    mKey:'c2e8eb3c',
    uKey: 'a1dac165e8856d66a0687c69f3b83557'
}

//this gives you updates movies but youtube won't match the trailer for some 
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
                                  Year:formatedYear(response.results[i].release_date),
                                  Poster:"https://image.tmdb.org/t/p/w220_and_h330_face/"+response.results[i].poster_path,
                                  Type:"Movie",
                                  releaseDate:formatedDate(response.results[i].release_date)  
            }
            console.log(movieCollection[i].Year)
            }
        displayPosters(movieCollection);
    });
}

function formatedYear(date){
    var array = date.split("-");
    return  array[0]
}

function formatedDate(date){
    var array = date.split("-");
    return  "Release Date: "+ array[1]+"-"+array[2]+"-"+array[0]
}


