var commentsAndRatings = (localStorage['commentsAndRatings']) ? JSON.parse(localStorage['commentsAndRatings']) : [];
// {
//     id: ,
//     rating, 
//     comment
// }


document.addEventListener('click', (ele) => {
    if(ele.target.classList.contains('movie-card')){
        movieDetailsByID(ele.target.dataset.id);
    }
});

document.getElementById('search').addEventListener(('click'), () => {
    console.log('event triggered!');
    const title = document.getElementById('search').value;
    if(title && title.length > 3) {console.log(title); getMoviesByTitle(title);}
    else console.log(title);
})