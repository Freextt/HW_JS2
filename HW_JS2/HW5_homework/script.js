//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const sqrt = (a,b) => {
   return  a * b;
};
document.write(sqrt(10,15));

const crcl = (r) =>{
    return Math.PI* Math.pow(r,2);
}
document.write(crcl(5));


const cylS = (r,h) => {
    return 2*Math.PI*r*h;
}
console.log(cylS(5,13));
let arr = [1,'cee','true',false,undefined];
const showArr = (arr) => {
    for(let i = 0;i < arr.length;i++){
        console.log(arr[i]);
    }
};
showArr(arr);

const randomText = (txt) => {
    document.write(`<p>${txt}</p>`);
}
randomText('Hi');

const ul = (arg) => {
     document.write(`<ul>`);
     document.write(`<li>${arg}</li>`);
     document.write(`<li>${arg}</li>`);
     document.write(`<li>${arg}</li>`);
     document.write(`</ul>`);
 }
 ul('Rick');
const dynamicLi = (txt,num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${txt}</li>`);

    }
    document.write(`</ul>`);
}
dynamicLi('iii',5);

 const arr1 = [true,false, 5, undefined];

 const primitives = (array) => {
     document.write(`<ol>`)
         for (let i = 0; i < array.length; i++) {
             document.write(`<li>${array[i]}</li>`);
         }
     document.write(`</ol>`)
 }
 primitives(arr1);


let myArr = [{id: 837638, name: 'fejfe', age: 55}, {id: 27365, name: 'fejfnej', age: 50}, {id: 76786, name: 'jnjebnfe', age: 65}];

 const objArray = (array) => {
     for (const arrayElement of array) {
         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
     }
 }
 objArray(myArr);

