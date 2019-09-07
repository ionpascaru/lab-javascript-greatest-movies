/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage (mov) {
  const sumRates = mov.reduce((acc, obj) => {
    if (! obj.rate) obj.rate = 0
    return acc + parseFloat(obj.rate)  
  }, 0) 
    return Number((sumRates/mov.length).toFixed(2))
}
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movArr) {
  const dramaMovies = movArr.filter(function findDrama(movie) {
    return movie.genre.find(function (genre) {
    return genre === 'Drama'})
}) 
    return ratesAverage (dramaMovies)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  return movies.sort((a,b) => {

  })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies (movies) {
  
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
