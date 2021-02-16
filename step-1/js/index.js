"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let questions = ['Один из последних просмотренных фильмов?', 'На сколько оцените его?'];
 
for (let i = 0; i < 1; i++){
    let qw1;

    while(!qw1 || qw1.length > 10){
        qw1 = prompt(questions[0]);
    }

    let qw2 = prompt(questions[1]);

    personalMovieDB.movies[qw1] = qw2;
    
}


if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}