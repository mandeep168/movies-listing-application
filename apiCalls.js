
var movies;

const apiUrl = 'https://www.omdbapi.com/?apikey=522c4c1b&';

fetch(`${apiUrl}s=har&page=2`, {
    'Content-Type': 'application/json',
})
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
})
.then(data => {
    movies = data.Search;
    displayMovies(movies);
    console.log(data);
})
.catch(error => {
    console.error('Fetch error:', error);
});

function movieDetailsByID (id) {
    // https://www.omdbapi.com/?apikey=522c4c1b&
    fetch(`${apiUrl}i=${id}&plot=short&`, {
        'Content-Type': 'application/json',
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        displayMovieDetails(data);
        
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

}

function getMoviesByTitle(title) {
    fetch(`${apiUrl}s=${title}&`, {
        'Content-Type': 'application/json',
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        // displayMovieDetails(data);
        
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}