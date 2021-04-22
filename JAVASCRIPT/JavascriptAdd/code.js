// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"
// console.log('vlad');
// console.time('st');
// function parseStr(inputNum = ''){
//     let pars = '';
//     let nuls = 0;
//     let number  = inputNum.toString();
//     let al = number.length;
//
//     for (let i = 0; i < al; i++) {
//         pars +=number[i];
//         nuls = al-i-1;
//         for ( let j = 0; j<nuls; j++ ){
//             pars += 0;
//         }
//         nuls > 0 ?  pars += '+' : pars += '';
//     }
//     return pars;
// }

// Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.
// console.time('here');
// function getmax () {
//     // debugger;
//     let a = 99999*99999;
//     let c = 10000*10000;
//     let max = 0;
//     for (let i = a; i > c; i--) {
//         let m = [];
//         let a1 = [];
//         m = i.toString().split('');
//         for (let j = m.length - 1; j >= 0; j--) {
//             a1.push(m[j]);
//         }
//         if (a1.join('') === m.join('')) {
//             max = a1.join('');
//             return max;
//         }
//     }
// }
// let max = getmax();
// console.log(max);
// console.timeEnd('here');


// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз
//     [1,2,3,4,5,2,4,1,3] -> 5
// let arr = [1,2,3,4,5,2,4,1,3,1,2,4,3,7,5]; //7
// let a=0;
// let b=0;
// for (let i = 0; i < arr.length; i++) {
//     a = arr[i];
//     arr.splice(i,1);
//     if (arr.indexOf(a)=== -1){
//         b = a;
//         break;
//     }
//     arr.push(a);
//     i--;
// }
// console.log(b);
// 2 варіант
// let a = 0;
// let arr = [2,1,0,6,0,4,3,5,8,3,1,7,1,5,6,10,5,8,0,1,1,25,11,8,7,6,5,4,3,2,1]; // 10 25 11
// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     a = arr[i];
//     arr.splice(i,1);
//     if (arr.includes(a) || arr1.includes(a)) {
//         arr1.push(a);
//     }
//     else {
//         arr2.push(a);
//     }
//     i--;
// }
// console.log(arr2);


// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true
// function anagrams(str1=[],str2=[]) {
//     if (str1.length !== str2.length){
//         return -1;
//     }
//     for (let i = str1.length; i >= 0; i--) {
//         for (let j = str2.length; j >=0; j--) {
//             if (str1[i]===str2[j]){
//                 str1.splice(i,1);
//                 str2.splice(j,1);
//             }
//         }
//     }
//     if (str1.length === 0 && str2.length === 0){
//         return 'YES';
//     }
//     return -1;
// }
//
// let a = 'VLAD';
// let b = 'DALV';
// let c = anagrams(a.split(''),b.split(''));
// console.log(c);


// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
//
// let a = 'VLADALV';
// let b = a.split('');
// let g = [];
// let c = b.reduce((acc, currentValue) => {
//     if (b[b.length - acc - 1] === b[acc]) {
//         acc++;
//     } else {
//         g.push(b[acc]);
//         acc++;
//     }
//     return acc;
// }, 0);
// console.log(g);
// !(g.length) ? console.log('yes') : console.log('no');


// Точная степень двойки
// Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
// let a = 1024;
//
// while (a !== 2){
//     a = a/2;
//     if (a===2){
//         console.log('YES');
//         break;
//     }
//     else if (a < 2) {
//         console.log('NO');
//         break;
//     }
// }


// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//     Рекурсія)
// function recurs(num, index=10 ,c) {
// if (num/index <0.1){
//     return c;
// }
// c += num % index;
//     return recurs(Math.floor(num/10), index, c)
// }
//
// let a = 123456789;
// let b =recurs(a,10 ,0);
// console.log(b);


// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
//
// let arr1 = [1,6,9,0,17,88,4,7,198,256,0,12];
// let b =arr1.reduce((acc, currentValue) => {
//         if (acc < currentValue){
//             acc = currentValue;
//         }
//     return acc;
// },0);
// console.log(b);


// Вирівняти багаторівневий масив в однорівневий
// function flatArr (arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] === 'object'){
//             flatArr(arr[i]);
//         }
//         else {
//             arr1.push(arr[i])
//         }
//     }
//     return arr1;
// }
// let arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
// let arr1 = [];
// let a = flatArr(arr);
// console.log(a);


// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд.
//     Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// let nums = '21764919475861001111';
// let sp = nums.split('');
// let map = sp.map(value => parseInt(value));
// console.log(map);
// let a = 0;
// for (let i = 0; i < map.length; i++) {
//     if (map[i] === 0 && map[i+1]===0){
//         break;
//     }
//     if (map[i]===1){
//         a++;
//     }
// }
// console.log(a);


// Отримати масив лише унікальних значень за допомогою reduce
//     [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]
//
// let arr = [1, 9, 0, 1, 5, 9, 1, 6];
// let newarr = arr.reduce((previousValue, currentValue) => {
//     if (!(previousValue.includes(currentValue))){
//         previousValue.push(currentValue);
//     }
//         return previousValue;
// },[]);
// console.log(newarr);


// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//
// function parsetxt (txt=[], i=0, time = Math.random() * (1000 - 100) + 100) {
//         setTimeout(()=>{
//             if (!txt[i]){
//                 return;
//             }
//             document.write(txt[i]);
//             i++;
//             return parsetxt(txt, i);
//         },time);
// }
// let txt = 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.';
// parsetxt(txt.split(''));