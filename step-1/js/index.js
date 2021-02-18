/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    }
    
}

start()

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '')
    }
    
}

writeYourGenres()

function rememberMyFilms(){

    let questions = ['Один из последних просмотренных фильмов?', 'На сколько оцените его?'];

    for (let i = 0; i < 1; i++){
        let qw1;
    
        while(!qw1 || qw1.length > 10){
            qw1 = prompt(questions[0]);
        }
    
        let qw2 = prompt(questions[1]);
    
        personalMovieDB.movies[qw1] = qw2;
        
    }

}

rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel()

function showMyDB() {
    if (!personalMovieDB.privat){
        console.log(personalMovieDB)
    }
}

showMyDB()


 



