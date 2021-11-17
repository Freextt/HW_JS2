
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
 //   1. перебрати його циклом while
 //   2. перебрати його циклом for
 //   3. перебрати циклом while та вивести  числа тільки з непарним індексом
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//5. перебрати циклом while та вивести  числа тільки парні  значення
//6. перебрати циклом for та вивести  числа тільки парні  значення
//7. замінити кожне число кратне 3 на слово "okten"
//8. вивести масив в зворотньому порядку.
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let mass = [2,17,13,6,22,31,45,66,100,-18];
let n = 0;
while(n < mass.length){
    console.log(mass[n]);
    n++;
}

for (let i = 0; i < mass.length; i++) {
    console.log(mass[i]);
}
let x = 0;
while (x < mass.length){
    if(x % 2 === 1){
        console.log(mass[x]);
    }
    x++;
}
for (let i = 0; i < mass.length; i++) {
   if (i % 2 === 1){
       console.log(mass[i]);
   }
}
let p = 0;
while (p < mass.length){
    if(mass[p] % 2 === 0){
        console.log(mass[p]);
    }
    p++;
}
for (let i = 0; i < mass.length; i++) {
    if (mass[i] % 2 === 0){
        console.log(mass[i]);
    }
}

for (let i = 0; i < mass.length; i++) {
    if(mass[i] % 3 === 0){
        mass[i] = 'okten';
    }
}
console.log(mass);

for (let i = mass.length; i >= 0; i--) {
    console.log(mass[i]);
}
//
//
let y =mass.length;
while(y >= 0){
    console.log(mass[y]);
    y--;
}
for (let i = mass.length; i >= 0; i--) {
    console.log(mass[i]);
}
let q = mass.length;
while (q >= 0){
    if(q % 2 === 1){
        console.log(mass[q]);
    }
    q--;
}
for (let i = mass.length; i >= 0; i--) {
    if (i % 2 === 1){
        console.log(mass[i]);
    }
}
let t = mass.length;
while (t >= 0){
    if(mass[t] % 2 === 0){
        console.log(mass[t]);
    }
    t--;
}
for (let i = mass.length; i >= 0; i--) {
    if (mass[i] % 2 === 0){
        console.log(mass[i]);
    }
}
for (let i = mass.length; i >= 0 ; i--) {
    if(mass[i] % 3 === 0){
        mass[i] = 'okten';
    }
}
console.log(mass);