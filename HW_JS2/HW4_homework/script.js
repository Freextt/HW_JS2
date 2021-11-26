//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function s(a,b){
    return a*b;
}
let b =s(2,3);
console.log(b);
function sCirlce(r) {
    return Math.PI * Math.pow(r,2);
}
let t = sCirlce(5);
console.log(t);

function sCylinder(h,r){
    return 2 * Math.PI * r * h;
}
let op = sCylinder(5,7);
console.log(op);
function massive(mass){
    for (let i = 0; i < mass.length; i++) {
        console.log(mass[i]);
    }
}
massive([1,2,3,4,5]);

function parag(text){
    document.write(`<p>${text}</p>`);
}
parag('Hi');

function unorderedList(txt){
    document.write(`<ul>
     <li>${txt}</li>
     <li>${txt}</li>
     <li>${txt}</li>
     </ul>`);
}
unorderedList('Monkey');

function uoTwo(txt, count){
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`);
}
uoTwo('qwer',5);

let mass1 = [1,'hi',true,false,undefined];
function  massive1(arr){
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);

    }
    document.write(`</ul>`);
}
massive1(mass1);

let massObj = [{id:1,name:'mfcwn',age: 5555},{id:2,name:'opwdkwi',age: 4654},{id:3,name:'cwojncwi',age: 486468}];
function qwer(array){
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`);
    }
}
qwer(massObj);