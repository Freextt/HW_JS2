//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let mass = [1,2,3,4,5];
console.log(mass);
let strMass = ['dnjw','djwbdw','cnwcbiw','dwbwu','cneubcw'];
console.log(strMass);
let mixMass = ['cwncow','cwciwubcw',5,2,true];
console.log(mixMass);
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empArray = [];
empArray[0] = 5;
empArray[1] = 7;
empArray[2] = 'hoerhu';
empArray[3] = 'dkwmc';
console.log(empArray);
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// -
for (let i = 0; i < 10; i++) {
    document.write(`<div>Hi${i}</div>`);
}
let n = 0;
while (n < 20){
    document.write(`<h1>Hello</h1>`);
    n++;
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let numMass = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numMass.length; i++) {
    console.log(numMass[i]);
}
let stringMass = ['chnwom','cwmcnwin','vjfnvid','svnjcnxiv','csibeibwc','cjowcn','cniwncwi','cniwhiwnc','oekfrvonce','ncwincwi'];
for (let i = 0; i < stringMass.length; i++) {
    console.log(stringMass[i]);
}
let mixedMass = [true,false,1,55,75.2,'cijoen',-999,'pojcwh',[],{},null,undefined];
for (let i = 0; i < mixedMass.length; i++) {
    console.log(mixedMass[i]);
}
let newMass = [true,false,1,0,null,undefined,[],{},'cwciw','cwihcw'];
for (let i = 0; i < newMass.length; i++) {
    if((typeof newMass[i]) === "boolean"){
        console.log(newMass[i]);
    }
}
for (let i = 0; i < newMass.length; i++) {
    if((typeof newMass[i]) === "number"){
        console.log(newMass[i]);
    }
}
for (let i = 0; i < newMass.length; i++) {
    if((typeof newMass[i]) === "string"){
        console.log(newMass[i]);
    }
}
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let nMass = [];
nMass[0] = null;
nMass[1] = undefined;
nMass[2] = 'Hi';
nMass[3] = 55;
nMass[4] = [];
nMass[5] = {};
nMass[6] = 'okce';
nMass[7] = 'dxvyvgu';
nMass[8] = 7.7;
nMass[9] = true;
console.log(nMass);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 0; i < 100; i++) {
    console.log(i);
}
for (let i = 0; i < 100; i+=2) {
    console.log(i);
}
for (let i = 0; i < 100; i+=2) {
    if(i % 2 === 0 && i !== 0) {
        console.log(i);
        document.write(`${i}`);
    }
}
document.write('<br/>');

for (let i = 1; i < 100; i+=2) {
    if(i % 2 === 1) {
        console.log(i);
        document.write(`${i}`);
    }
}



