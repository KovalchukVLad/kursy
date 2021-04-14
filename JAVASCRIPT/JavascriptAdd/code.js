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
// ШНЯГА ЯКАСЬ ВИЙШЛА
// console.time('here');
// let a = 0;
// let max = 0;
//
// for ( let i = 99999; i>80000; i--) {
//     for (let j = 99999; j > 80000; j--) {
//         a = i * j;
//         let b = a.toString();
//
//         if (b[0] === b[b.length - 1] && b[1] === b[b.length - 2] && b[2] === b[b.length - 3] && b[3] === b[b.length - 4] && b[4] === b[b.length - 5]) {
//             if (max < b) {
//                 max = b;
//                 console.log(i);
//                 console.log(j);
//             }
//
//         }
//     }
// }
// console.log(max);
// console.timeEnd('here');
//
// console.time('here');
// let mn = 0;
// let a =0;
// let b = 0;
// let sum = 0;
// let max = 0;
// for (let i = 99999; i > 0; i--) {
//     for (let j = 99999; j > 0; j--) {
//         // debugger;
//         mn = i * j;
//         a = mn;
//
//         if (mn.toString().length %2 === 0){
//             continue;
//         }
//         sum = 0;
//         while (a > 0) {
//             b = a % 10;
//             sum = sum * 10 + b;
//             a = parseInt(a / 10);
//         }
//         // console.log(sum);
//         if (mn===sum && max < mn){
//             max = mn;
//         }
//     }
// }
// console.log(max);
// console.timeEnd('here');


// ???Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
//     [1,2,3,4,5,2,4,1,3] -> 5
// let arr = [1,2,3,4,5,2,4,1,3,1,2,4,3,7,5];
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


// ???Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
//
// let a = 'VLADALV';
// let b = a.split('');
// let c = b.reduce((acc, currentValue) => {
//     if ()
//     if (b[b.length-acc-1] === b[acc]){
//             acc++;
//     }
//     if
//     return acc;
// },0);


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