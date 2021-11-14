//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
console.log(a);
alert(a);
document.write(a);
let b = 'owu';
console.log(b);
alert(b);
document.write(b);
let c = 'com';
console.log(c);
alert(c);
document.write(c);
let d = 'ua';
console.log(d);
alert(d);
document.write(d);
let num1 = 1;
console.log(num1);
alert(num1);
document.write(`${num1}`);
let num2 = 10;
console.log(num2);
alert(num2);
document.write(`${num2}`);
let num3 = -999;
console.log(num3);
alert(num3);
document.write(`${num3}`);
let num4 = 123;
console.log(num4);
alert(num4);
document.write(`${num4}`);
let num5 = 3.14;
console.log(num5);
alert(num5);
document.write(`${num5}`);
let num6 = 2.7;
console.log(num6);
alert(num6);
document.write(`${num6}`);
let num7 = 16;
console.log(num7);
alert(num7);
document.write(`${num7}`);
let bol = true;
console.log(bol);
alert(bol);
document.write(`${bol}`);
let bol1 = false;
console.log(bol1);
alert(bol1);
document.write(`${bol1}`);
//- Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
a = 2;
console.log(a);
alert(a);
document.write(`${a}`);
b = 'Hi';
console.log(b);
alert(b);
document.write(`${b}`);
c = 55;
console.log(c);
alert(c);
document.write(`${c}`);
d = 'porky';
console.log(d);
alert(d);
document.write(`${d}`);
num1 = 5555;
console.log(num1);
alert(num1);
document.write(`${num1}`);
num2 = '1234';
console.log(num2);
alert(num2);
document.write(`${num2}`);
num3 = 732423;
console.log(num3);
alert(num3);
document.write(`${num3}`);
num4 = 12413;
console.log(num4);
alert(num4);
document.write(`${num4}`);
num5 = 46724;
console.log(num5);
alert(num5);
document.write(`${num5}`);
num6 = 657395;
console.log(num6);
alert(num6);
document.write(`${num6}`);
num7 = 547364;
console.log(num7);
alert(num7);
document.write(`${num7}`);
bol = false;
console.log(bol);
alert(bol);
document.write(`${bol}`);
bol1 = true;
console.log(bol1);
alert(bol1);
document.write(`${bol1}`);
//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Oleh';
let middleName = 'Romanovych';
let lastName = 'Sam';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt('Name');
let midName = prompt('MiddleName');
let age = prompt('Age');
alert(`Вітаю ${name} ${midName}.Тобі ${age} років.`);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a1 = 100;
typeof(`${a1}`);
console.log(a1);
let b1 = '100';
typeof(`${b1}`);
console.log(b1);
let c1 = true;
typeof(`${c1}`);
console.log(c1);
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//5 < 6 -> true
//5 > 6 -> false
//5 = 6 -> false
//5 >= 6 -> false
//10 = 10 -> true
//10 == 10 -> true
//10 != 10 -> false
//10 < 10 -> false
//10 > 10 -> false
//123 === '123' -> false
//123 == '123' -> true

//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
     let str = "20";
     let a2 = 5;
     document.write(str + a2 + "<br/>");//205
     document.write(str - a2 + "<br/>");//15
     document.write(str * "2" + "<br/>");//40
     document.write(str / 2 + "<br/>");//10
