
function displayMovies(moviesList) {
    try {
        console.log('display movies', movieTitle);
        const parentDiv = document.getElementById('movies-container');
        parentDiv.innerHTML = '';
        moviesList.forEach((movie) => {
            let posterImage = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
            if(movie.Poster) {
                posterImage = movie.Poster; 
            }
            const movieDiv = document.createElement('div');
            movieDiv.setAttribute('data-id', movie.imdbID);
            movieDiv.innerHTML = 
            `<img src=${posterImage} alt='movie poster' class='movie-poster'>
            <div class='movie-name'>${movie.Title}</div>`;
            movieDiv.classList.add('movie-card');
            parentDiv.append(movieDiv);
        });
    } catch (err) {
        console.log(err);
    }
}

function displayMovieDetails(movie) {

    // ratings

    updateRatingAndDeleteThePopUP();
    

    const movieDetailsDiv = document.createElement('div');
    movieDetailsDiv.classList.add('movies-details-container');
    movieDetailsDiv.setAttribute('id', 'popupContainer');
    movieDetailsDiv.setAttribute('data-id', movie.imdbID);

    const index = commentsAndRatings.findIndex(commentsAndRatings => commentsAndRatings.id == movie.imdbID);
    let ratingAndComment = {
        rating: '',
        comment: ''
    };
    if(index != -1) {
        ratingAndComment.rating = commentsAndRatings[index].rating;
        ratingAndComment.comment = commentsAndRatings[index].comment;
    }
    let posterImage = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
    if(movie.Poster) {
       posterImage = movie.Poster; 
    }
    movieDetailsDiv.innerHTML +=
        `<div class="movie-details">
          <span class="close" id="closeBtn" onClick="updateRatingAndDeleteThePopUP()">&times;</span>
          <div class="movie-data">
            <img src=${posterImage} alt="movie poster">
            <h2 class="">${movie.Title}</h2>
            <p class="">Year: ${movie.Year}</p>
            <p class="">Rated: ${movie.Rated}</p>
            <p class="">Released: ${movie.Released}</p>
            <p class="">Runtime: ${movie.Runtime}</p>
            <p class="">Actors: ${movie.Actors}</p>
            <p class="">Plot: ${movie.Plot}</p>
            <p class="">Language: ${movie.Language}</p>
            <p class="">Genre: ${movie.Genre}</p>
            <p class="">Dicrector: ${movie.Director}</p>
            <p class="">BoxOffice: ${movie.BoxOffice}</p>
            <p class="">Country: ${movie.Country}</p>
            <p class="">Awards: ${movie.Awards}</p>
            <p class="">Production: ${movie.Production}</p>
            <p class="">imdb Rating: ${movie.imdbRating}</p>
            <p class="">imdb Votes: ${movie.imdbVotes}</p>

            <div class='rating'>
                Rate this movie: 
                <input type='number' min='1' max='5' id='rating' value=${ratingAndComment.rating}>
                <br>
                Give comments: <br>
                <textarea name="message" rows="4" cols="50" id='comment'> ${ratingAndComment.comment} </textarea>
            </div>

          </div>
        </div>`;   

     
    const parent = document.querySelector('body');
    parent.append(movieDetailsDiv);

}


function updateRatingAndDeleteThePopUP () {
    const movieDetailsContainer = document.getElementById('popupContainer');
    if(movieDetailsContainer) {
        const movieID = movieDetailsContainer.dataset.id;
        const index = commentsAndRatings.findIndex(commentsAndRatings => commentsAndRatings.id == movieID);
        const newRating = {};
        const rating = document.getElementById('rating');
        const comment = document.getElementById('comment');
        if(rating.value != '' || comment.value != '') {
            newRating.rating = rating.value;
            newRating.comment = comment.value;
            newRating.id = movieID;
            if(index != -1) {
                commentsAndRatings[index] = newRating;
            }else {
                commentsAndRatings.push(newRating);
            }
            localStorage.setItem('commentsAndRatings', JSON.stringify(commentsAndRatings));
        }
        movieDetailsContainer.remove();
    }
}

function userRatingExists(movieID) {
    const index = commentsAndRatings.findIndex(commentsAndRatings => commentsAndRatings.id == movieID);
    return (index != -1);
}

function getPageNumber() {
    const pageSpan = document.getElementById('page-number');
    return parseInt(pageSpan.innerHTML);
}