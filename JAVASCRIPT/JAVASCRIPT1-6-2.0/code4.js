// 1) створити функцію яка приймає масив та виводить його
// function printArr(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// let arr= [1,2,3];
// printArr(arr);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function randomArr(arr) {
//     for (let i = 0; i < 20; i++) {
//         arr[i] =Math.round(Math.random() * (10 - 1) + 1);
//     }
//     console.log(arr);
// }
// let arr = [];
// randomArr(arr);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min() {
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//        if (min>arguments[i]){
//            min = arguments[i];
//        }
//     }
//     console.log(min);
// }
// let a = 7;
// let b = 5;
// let c = 3;
// min(a,b,c);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max() {
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (max<arguments[i]){
//             max = arguments[i];
//         }
//     }
//     console.log(max);
// }
// let a = 7;
// let b = 5;
// let c = 3;
// max(a,b,c);

// 5) створити функцію яка повертає найбільше число з масиву
// function maxarr(arr) {
//     arr.sort((a, b) => b-a);
//     console.log(arr[0]);
// }
// let arr=[11,2,3];
// maxarr(arr);

// 6) створити функцію яка повертає найменьше число з масиву
// function minarr(arr) {
//     arr.sort((a, b) => a-b);
//     console.log(arr[0]);
// }
// let arr=[11,2,3];
// minarr(arr);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumarr(arr=[]) {
//     let g =arr.reduce((acc, currentValue) => acc+currentValue );
// console.log(g);
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// sumarr(arr);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function midarr(arr=[]) {
//     let g =arr.reduce((acc, currentValue) => acc+currentValue );
// console.log(g/arr.length);
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// midarr(arr);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// for (const arrElement of arr) {
//     for (const key in arrElement) {
//         console.log(key);
//     }
// }

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// const [ar1,ar2,ar3] = arr;
// const {name,age} = ar1;
// const {model} = ar2;
// console.log(name,age);
// console.log(model);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let arr1 =[1,2,3,4];
// let arr2 =[2,3,4,5];
// let arr3 =[];
// for (let i = 0; i < arr1.length; i++) {
//         arr3.push(arr1[i]+arr2[i]);
// }
// console.log(arr3);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minmax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const num of arguments) {
//         min > num ? min=num : max < num ? max=num : 1;
//     }
//     console.log(max);
//     return min;
// }
// let arr = [12,3,5,45,23,52,1000,53,2,423];
// let b =minmax(...arr);
// console.log(b);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// function keyOrtxt(arr, bol) {
//     switch (bol) {
//         case  true:
//             for (const arrElement of arr) {
//                 for (const key in arrElement) {
//                     console.log(key);
//                 }
//             }
//             break;
//         case false:
//             const [ar1, ar2, ar3] = arr;
//             const {name, age} = ar1;
//             const {model} = ar2;
//             console.log(name, age);
//             console.log(model);
//             break;
//     }
// }
//
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// keyOrtxt(arr, confirm('ключі чи значення?'))

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function indexChange(arrr,index) {
//     let a = 0;
//     let b = 0;
//     for (let i = 0; i < arrr.length; i++) {
//         if (index===i){
//             a = arrr[i];
//             b = +arrr.splice(index,1);
//             arrr.splice(index+1,0,b);
//         }
//     }
//     console.log(arrr);
// }
// let arr = [8,9,0,4];
// indexChange(arr,0);
// indexChange(arr,1);
// indexChange(arr,2);
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
//
// function zenoInEnd(arrr) {
//     for (let i = 0; i < arrr.length; i++) {
//         if(arrr[i]===0){
//             arrr.push(arrr[i]);
//             arrr.splice(i,1);
//         }
//     }
//     console.log(arrr);
// }
// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr.push(Math.floor(Math.random() * (20)));
// }
// zenoInEnd(arr);

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//
// function validName(str) {
//     let a =str.split(' ');
//     console.log(a);
//     for (let i = 0; i < a.length; i++) {
//         if (a[i]===''){
//             a.splice(i,1);
//             i =-1;
//         }
//     }
//     let b = a.join(' ');
//     console.log(b);
// }
//
// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
// validName(n1);
// validName(n2);
// validName(n3);


// Створити функцію яка :

//     - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function addBlock(elem,txt) {
//     let a = document.createElement(`${elem}`);
//     a.innerHTML = `${txt}`;
//     document.body.appendChild(a);
// }
// let element = 'div';
// let textForBlock = 'Hello owu';
// addBlock(element,textForBlock);