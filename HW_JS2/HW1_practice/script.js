//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let a = [Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10)
]
let result = a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9];
console.log(result);
//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name : 'Iron heart',
    pageQuantity: 555,
    genre: 'fantastic'
}
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 = {
    name: 'philosophy',
    pageQuantity: 550,
    genre: 'science',
    author: 'Doctor Duke)'
}
//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
    {
    name: 'philosophy',
    pageQuantity: 550,
    genre: 'science',
    author: 'Doctor Duke)'
},{
    name: 'art',
    pageQuantity: 551,
    genre: 'art',
    author: 'Clark Klerk)'
},
    {
        name: 'Boilogy',
        pageQuantity: 450,
        genre: 'science',
        author: 'Doctor Nuke)'
    }
]
//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);
//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let heightC  = 10;
let dC = 4;
let v = heightC * dC;
console.log(v);
//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = (Math.pow(3,2) + Math.pow(4,2 ))/2;
console.log(k);