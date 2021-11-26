//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function con(...arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr.length === 2){
            console.log(arr[0] + arr[1]);
        }else if (arr.length === 1){
            console.log(arr[1]);
        }
    }
    return arr;
}
con(5,5);
//
let newArr = [];
 function sumOfArr(array1,array2){
     for (let i = 0; i < array1.length; i++) {
             newArr.push(array1[i] + array2[i]);
     }
     return newArr;
 }
 sumOfArr([1,2,3,4],[5,6,7,8]);
 console.log(newArr);


 function keyS(array){
     let newArray1 = [];
     for (const obj of array) {
         for (const objKey in obj) {
             newArray1.push(obj[objKey]);
         }
     }
     return newArray1;
 }

console.log(keyS([{id:1,age:5}, {name:'nixie',secondName: 'Pixie'}]));


