//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let wrd1 = 'hello world';
console.log(wrd1.length);

let wrd2 = 'lorem ipsum';
console.log(wrd2.length);

let wrd3 = 'javascript is cool';
console.log(wrd3.length);

wrd1.toUpperCase();
wrd2.toUpperCase();
wrd3.toUpperCase();

wrd1.toLowerCase();
wrd2.toLowerCase();
wrd3.toLowerCase();

let dirty = ' dirty  string ';
let trm = dirty.trim();
console.log(trm);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

function stringToArray(str){
  return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToArray(str);
console.log(arr);
//
//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
     //let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

function delete_characters(str,length){
    return str.substr(0, length);
}
document.write(delete_characters(str,6));

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

const insert_dash = (str) => {
    let spltter = str.split(' ').join('-').toUpperCase();
    return spltter;
}
let strTxt = "HTML JAVASCRIPT PHP";
document.write(insert_dash(strTxt));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function firstUpper(str){
    return str[0].toUpperCase() + str.slice(1);
}
document.write(firstUpper('olla'));

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalize(str){
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
document.write(capitalize('dend dnedwon dnwdonw dwnown'));

