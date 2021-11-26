//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function lessNum(num1,num2,num3){
    if(num1 < num2 && num1 < num3){
        console.log(num1)
    }else if(num2 < num1 && num2 < num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}
lessNum(5,3,2);

function biggestNum(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}
biggestNum(33,-44,1000);

let array = [12,35,565,3131,5];
function max(arr){
    console.log(Math.max(...arr));
}
max(array);


function min(arr){
    console.log(Math.min(...arr));
}
min(array);

function concat(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(sum+=arr[i]);
    }
    return sum;
}
concat(array);

function avg(arr){
    let avarage = concat(arr)/ array.length;
    console.log(avarage);
    return avarage;
}
avg(array);

function qwrt(arg){
   let min = arguments[0];
   let max = arguments[0];
    for (const element of arguments) {
        if(element > max){
            max = element;
        }
        if (element < min){
            min = element;
        }
    }
    console.log(max);
    return min;
}

qwrt(1,5,7,-1);

let randomArray = [];
function randomNum(){
    randomArray.push(Math.floor(Math.random() * 100));
}
randomNum(randomArray);
console.log(randomArray);

function randomNum2(length,limit){
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random()*limit));
    }
    return randomArray;
}
console.log(randomNum2(10,100));

function asd(arr1){
    return arr1.reverse();
}
console.log(asd([1,2,3,4,5]));