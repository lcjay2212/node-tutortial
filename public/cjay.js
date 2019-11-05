var movies = require('./movies');
/* movies.favMovie = "Lord of the Rings"
console.log("Cjay's favorite movie is: " + movies.favMovie); */

var cjayMovies = movies();
cjayMovies.favMovie = "Slpit";
console.log("Cjay's favorite movie is: " + cjayMovies.favMovie);