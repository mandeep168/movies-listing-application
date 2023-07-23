var commentsAndRatings = (localStorage['commentsAndRatings']) ? JSON.parse(localStorage['commentsAndRatings']) : [];
var movieTitle = 'har';

document.addEventListener('click', (ele) => {
    if(ele.target.classList.contains('movie-card')){
        movieDetailsByID(ele.target.dataset.id);
    }
});

document.getElementById('search').addEventListener(('click'), () => {
    console.log('event triggered!');
    const title = document.getElementById('search').value;
    if(title && title.length > 3) {
        console.log(title); 
        movieTitle = title;
        getMoviesByTitle(title, getPageNumber());
    }
    else console.log(title);
})

document.getElementById('prev').addEventListener('click', () => {
    const pageSpan = document.getElementById('page-number');
    if(parseInt(pageSpan.innerHTML) > 1) {
        pageSpan.innerHTML = parseInt(pageSpan.innerHTML)-1;
        getMoviesByTitle(movieTitle, getPageNumber());
    }
});

document.getElementById('next').addEventListener('click', () => {
    const pageSpan = document.getElementById('page-number');
    
    pageSpan.innerHTML = parseInt(pageSpan.innerHTML)+1;
    
    getMoviesByTitle(movieTitle, getPageNumber());
});


defaultMoviesList();