"use strict";

/*1) Вывести в алерт "Привет, это работа (Ваша Фамилия и Имя)"*/
let message = 'Привет, это работа Цаухнер Дарьи';
alert(message);

/*2) Объявите переменные для: Названия планеты; своего возраста; автомобиля, который сломался; цвета хэдэра; проверки пользователя (администратор или нет); задав им корректные имена, и выведите их в консоль*/
let planet = 'Venus';
console.log(planet);
let age = 36;
console.log(age);
let carIsBroken = 'Geely';
console.log(carIsBroken);
let colorHeader = 'Red';
console.log(colorHeader);
let isAdministrator = confirm("Ты здесь администратор?");
alert(isAdministrator);
const result = confirm("Are you here?");
console.log(result);
let userAdministrator = "Igor administrator";
console.log(userAdministrator);

/*3) Объявить переменные для своего имени, фамилии, возраста и вывести в консоль запись "Привет, меня зовут ИМЯ ФАМИЛИЯ, мне ВОЗРАСТ лет" используя переменные*/
const myName = 'Darya';
console.log(myName);
const mySurname = 'Zauchner';
console.log(mySurname);
const myBirthday = '1.04.1986';
console.log(myBirthday);
let str = 'Привет, меня зовут Дарья Цаухнер, мне 36 лет';
console.log(str);

/*4) С помощью промпт узнайте ИМЯ проверяющего вашу работу, а потом выведите надпись "Мою работу проверяет ИМЯ" в консоль*/
const answer = prompt("Вам есть 18?", "18");
console.log(typeof(answer));
let teacher = prompt("Как зовут проверяющего мою работу?", "Игорь");
console.log('Мою работу проверяет Игорь');

/*5) С помощью метода определения типа, выведите в консоль типы данных для следующих переменных:*/

let sentance = "String";
console.log(sentance);
let nOfPlanes = 2000;
console.log(nOfPlanes);
let testSkiped = false;
console.log(testSkiped);
let data = null;
console.log(data);
let month;
console.log(month);

/*
let str = "String";
console.log(typeof(str));
let nume = 2000;
console.log(typeof(nume));
let testSkiped = false;
console.log(typeof(testSkiped));
let month = undefined;
console.log(typeof(month));
let data = null;
console.log(typeof(null));*/

/*6) Преобразовать переменную newStr = "37"
в число и в буленовский тип, вывести все в консоль */

let newStr = "37";
newStr = Number(newStr);
console.log(newStr, typeof(newStr));
newStr = Boolean(newStr);
console.log(newStr, typeof(newStr));

/*Преобразовать переменную newValue = true в строку и в число, вывести в консоль*/

let newValue = true;
newValue = String(newValue);
console.log(newValue, typeof(newValue));
newValue = Number(newValue);
console.log(newValue, typeof(newValue));

/*Преобразовать переменную newNum = 2007 в строку и в буленовский тип, вывести в консоль*/

let newNum = 2007;
newNum = String(newNum);
console.log(newNum, typeof(newNum));
newNum = Boolean(newNum);
console.log(newNum, typeof(newNum));

/*7) Объявите две переменные: name и surname.
Запишите строку "Ivan"
в переменную name.Скопируйте значение из переменной name в surname.
Выведите на экран значение surname, используя console.log.*/

let name = 'Ivan';
let surname = 'name';
console.log(name);