var movies = require('./movies');
/* movies.favMovie = "Harry Potter"
console.log("Sotto's favorite movie is: " + movies.favMovie); */

var sottoMovies = movies();
sottoMovies.favMovie = "Billionaire Boys";
console.log("Sotto's favorite movie is: " + sottoMovies.favMovie);