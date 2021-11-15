// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random()* 59);
console.log(time);
if (time > 0 && time <= 15){
   alert('First part!');
}else if (time > 15 && time <= 30){
   alert ('Second part!');
}else if (time > 30 && time <= 45){
    alert('Third part!');
}else if (time > 45 && time <= 59){
    alert('Fourth part');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Введіть  число від 1 до 31');
if (day >= 1 && day <= 10){
    console.log('First decade');
}else if (day >= 11 && day <=20){
    console.log('Second decade')
}else if (day >= 21 && day <=31){
    console.log('Third decade');
}else{
    alert('Error!');
}
//- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt('Insert true or false');
if (test !== true){
    console.log('Вірно');
}else{
    console.log('Неправильно');
}
//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = prompt('Enter your value');
switch (a){
    case 0:
        console.log('Невірно');
        break;
    default:
        console.log('Вірно');
        break;
}
//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let schedule = prompt('Введіть порядковий номер дня');
switch (schedule){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("You're working today!");
        break;
    case 6:
        console.log('Racing with friends');
        break;
    case 7:
        console.log('Drink beer');
        break;
}
//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = prompt('Enter the year');
if (year % 4 === 0){
    console.log('Високосний');
}else{
    console.log('Не високосний');
}
//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let title = prompt('Яка офіційна назва Javascript???');
if (title === 'ECMAScript'){
    alert('Правильно!');
}else{
    alert('Не знаєте?ECMAScript');
}


