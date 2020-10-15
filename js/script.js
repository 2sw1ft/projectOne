"use strict";

let numberOfFilms; 

function start () {
    numberOfFilms = +prompt('How many movies you seen?');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies you seen?');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?' , ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }      
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('средне');
    } else if (personalMovieDB.count >= 30) {
        alert('киноман');
    } else {
        alert('ошибка');
    }
}

detectPersonalLevel();

//сделал сам
// function showMyDB () {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('i cant show you personalMovieDB');
//     }
// }

// showMyDB();

// решение в уроке
function showMyDB (dfgbdtydtyndtyn) {
    if (!dfgbdtydtyndtyn) {
        console.log(personalMovieDB);
    } else {
        console.log('i cant show you personalMovieDB');
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let question = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = question;
    }
} 

writeYourGenres();