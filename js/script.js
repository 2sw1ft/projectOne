"use strict";

let numberOfFilms = +prompt('How many movies you seen?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?' , ''),
        b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }      
}

if (personalMovieDB.count < 10) {
    alert('мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('средне');
} else if (personalMovieDB.count >= 30) {
    alert('good');
} else {
    alert('errror');
}


console.log(personalMovieDB);
