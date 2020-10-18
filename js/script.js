"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many movies you seen?');
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies you seen?');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?' , ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }      
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('средне');
        } else if (personalMovieDB.count >= 30) {
            alert('киноман');
        } else {
            alert('ошибка');
        }
    },
    showMyDB: function (dfgbdtydtyndtyn) {
        if (!dfgbdtydtyndtyn) {
            console.log(personalMovieDB);
        } else {
            console.log('i cant show you personalMovieDB');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            //  let question = prompt(`Ваш любимый жанр под номером ${i}`);
            //  if (question === '' || question == null) {
            //      i--;
            //  } else {
            //      personalMovieDB.genres[i - 1] = question;
            //  }

            let genres = prompt(`Введите жарны через запятую:`).toLowerCase();
            if (genres === '' || genres == null) {
                     i--;
                 } else {
                     personalMovieDB.genres = genres.split(', ');
                    //  personalMovieDB.genres.sort; //МАГИЯ _ НЕ РАБОТАЕТ
                 }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }

};
