// 1) створити функцію яка приймає масив та виводить його
//
// function task1(giveMeArray) {
//         document.write(giveMeArray);
// }
// let arr1 = [1, 2, 3, 4, 5];
// task1(arr1);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function task2( emptyArr ){
//     for(let i=0; i<10; i++){
//         emptyArr[i]=Math.floor(Math.random() * 10);
//     }
//     document.write(emptyArr);
// }
// let arr2 =[];
//  task2(arr2);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function task3 (number1, number2, number3){
//     if (number1 <= number2 && number1<=number3){
//         console.log(number1);
//     }
//     else if(number2 <= number1 && number2<=number3){
//         console.log(number2);
//     }
//     else {
//         console.log(number3);
//     }
// }
// task3(12,12,12);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function task4 (numb1, numb2, numb3){
//     if (numb1 >= numb2 && numb1>=numb3){
//         console.log(numb1);
//     }
//     else if(numb2 >= numb1 && numb2>=numb3){
//         console.log(numb2);
//     }
//     else {
//         console.log(numb3);
//     }
// }
// task4(16,12,12);


// 5) створити функцію яка повертає найбільше число з масиву
//  function task5 (giv){
//     for(let i=0; i<giv.length; i++){
//         if(giv[i]>giv[i+1] && giv[i+1]){
//             giv.push(giv[i]);
//             giv.splice(i, 1);
//             i=-1;
//         }
//     }
//
//      console.log(giv);
//     return giv[giv.length-1];
//  }
//  let arr5 = [1, 26, 13, 67, 2, 76];
// let a1 =task5(arr5);
// console.log(a1);


// 6) створити функцію яка повертає найменьше число з масиву
// function task6 (giv1){
//     for(let i=0; i<giv1.length; i++){
//         if(giv1[i]>giv1[i+1] && giv1[i+1]){
//             giv1.push(giv1[i]);
//             giv1.splice(i, 1);
//             i=-1;
//         }
//     }
//
//     console.log(giv1);
//     return giv1[0];
// }
// let arr6 = [1, 26, 13, 67, 2, 76];
// let a2 =task6(arr6);
// console.log(a2);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function task7 (giveArr){
//     let sum = 0;
//     for (const giveArrElement of giveArr) {
//         sum += giveArrElement;
//     }
//     return sum;
// }
// let arr7 = [6,4,2,3,9,1];
// let a =task7(arr7);
// console.log(a);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function task8 (giveArr){
//     let sum1 = 0;
//     for (const giveArrElement of giveArr) {
//         sum1 += giveArrElement;
//     }
//     sum1 = sum1/giveArr.length;
//     return sum1;
// }
// let arr8 = [6,4,2,3,8,1];
// let a1 =task8(arr8);
// console.log(a1);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function task9 (getObj1, getObj2){
//     let arr9 =[];
//     for (const get1 in getObj1) {
//         arr9.push(get1);
//     }
//     for (const get2 in getObj2) {
//         arr9.push(get2);
//     }
//     console.log(arr9);
// }
// let obj1 = {name: 'Dima', age: 13};
// let obj2 = {model: 'Camry'};
// task9(obj1, obj2);
//або
//  function task91 (getArr33){
//     let arr91 =[];
//     for (const getAr of getArr33) {
//         for (const getObject in getAr) {
//             arr91.push(getObject);
//         }
//     }
//     console.log(arr91);
//  }
// let arr3 =[
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
//     ]
// task91(arr3);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function task10 (getArr10){
//     let arr1 = [];
//     for (const getArr1 of getArr10) {
//         for (const getObject1 in getArr1) {
//             arr1.push(getArr1[getObject1]);
//         }
//     }
//     console.log(arr1);
// }
// let arr10 =[
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ]
// task10(arr10);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function task11(getAr1, getAr2){
// let maxLen;
// let newArr11 = [];
//     if(getAr1.length >= getAr2.length){
//         maxLen = getAr1.length;
//     }
//     else {
//         maxLen=getAr2.length;
//     }
//
// for (let i=0; i<maxLen; i++){
//     if(typeof getAr1[i] === "undefined" && typeof getAr2[i] === "number"){
//         newArr11.push(getAr2[i]);
//         continue;
//     }
//     if(typeof getAr2[i] === "undefined" && typeof getAr1[i] === "number"){
//         newArr11.push(getAr1[i]);
//         continue;
//     }
//     if(typeof getAr2[i] === "undefined" && typeof getAr1[i] === "undefined"){
//         newArr11.push(0);
//         continue;
//     }
//     newArr11.push(getAr1[i]+getAr2[i]);
//
// }
//     return newArr11;
// }
//
// let arr1 = [1,2,3,4,7,0, undefined, 8];
// let arr2 = [2,3,4,5, undefined, 1, undefined, 56, 2, 6 , 7];
// let arr3 =task11(arr1, arr2);
// console.log(arr3);
// або
// function bub (arrget1, arrget2) {
//     arr3 = [];
//     for (let i = 0; i < arrget1.length; i++) {
//         arr3.push(arr1[i] + arr2[j]);
//     }
//     console.log(arr3);
// }
//
// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// bub(arr1,arr2);



/////////////////////////////////////////////////////////////////

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function numbersInput (inArr){
//     for (let i=0; i<inArr.length; i++){
//         if(inArr[i+1] &&  inArr[i]>inArr[i+1]){
//             inArr.push(inArr[i]);
//             inArr.splice(i,1);
//             i=-1;
//         }
//     }
//     console.log(inArr);
//     console.log(inArr[inArr.length - 1]);
//     return inArr[0];
// }
// let arr=[39, 60, 84, 69, 30, 61, 11, 56, 69, 52, 6, 21, 68, 34, 33, 64, 8, 45, 99, 26];
// let a =numbersInput(arr);
// console.log(a);
//
/////////або
//
function numbersInput (){
    let max = arguments[0];
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]>max){
            max =arguments[i];
        }
        if (arguments[i]<min){
            min =arguments[i];
        }
    }
    console.log(min);
    console.log(max);
}
let a =numbersInput(39, 60, 84, 69, 30, 61, 11, 56, 69, 52, 6, 21, 68, 34, 33, 64, 8, 45, 99, 26);
console.log(a);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// function task910(getArrС, ques) {
//     let arrC1 = [];
//     if (ques === '1') {
//         for (const getAr of getArrС) {
//             for (const getObject in getAr) {
//                 arrC1.push(getObject);
//             }
//         }
//     } else if (ques === '2') {
//         for (const getAr of getArrС) {
//             for (const getObject in getAr) {
//                 arrC1.push(getAr[getObject]);
//             }
//         }
//     }
//     return arrC1;
// }
//
// let arrCom = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ]
// let mm = task910(arrCom, prompt('Ви бажаєте отримати масив ключів чи масив значень? Введіть 1 чи 2 відповідно.'));
// console.log(mm);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function indexChange(idx, giveArr) {
//     giveArr.splice(idx, idx + 2, giveArr[idx + 1], giveArr[idx]);
//     console.log(giveArr);
// }
// indexChange(6, [1, 2, 3, 4, 5, 6, 7, 8,])


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
//
// function numbersInput (inArr){
//     for (let i=inArr.length-1; i>=0; i--){
//         if(inArr[i] === 0){
//             inArr.push(inArr[i]);
//             inArr.splice(i,1);
//         }
//     }
//     console.log(inArr);
// }
//
// let arr1=[1,0,6,0,3];
// let arr2=[0,1,2,3,4];
// let arr3=[0,0,1,0];
// numbersInput(arr1);
// numbersInput(arr2);
// numbersInput(arr3);


// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// function goodName (enterName){
//     let sp = enterName.split(' ');
//     let ar =[];
//
//     for (let i = 0; i < sp.length; i++) {
//         if(sp[i] === ''){
//             sp.splice(i,1);
//         }
//         else{
//             ar.push(sp[i]);
//         }
//     }
//     let tt = ar.join(' ');
//     console.log(tt);
//     console.log(tt.length);
// }
//
// let str = 'VLAD     Kovalchuk  ';
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// goodName(str);
// goodName(n1);
// goodName(n2);
// goodName(n3);

// ******************* НАЗАД В МИНУЛЕ *********************** //

// Створити функцію яка :

//     - Додає в боді блок з текстом "Hello owu"
// function insertDiv(inStr) {
//     let a = document.createElement('div');
//     a.innerHTML = `${inStr}`;
//     document.body.appendChild(a);
// }
// let str = 'Hello owu';
// insertDiv(str);


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function insertTxt(inType, inTxt) {
//     let a = document.createElement(`${inType}`);
//     a.innerHTML = `${inTxt}`;
//     document.body.appendChild(a);
// }
// insertTxt(prompt('Введіть тип елементу:'), prompt('Введіть текст:') );




let autos = [{
    model: 'Toyota Camry',
    year: 2018,
    price: 30000,
    characteristics: {engine: 3.5, maxspeed: 204, color: 'silver', country: 'Japan'}
}, {
    model: 'Ford Kuga',
    year: 2017,
    price: 22000,
    characteristics: {engine: 1.5, maxspeed: 181, color: 'red', country: 'USA'}
}, {
    model: 'Nissan Qashqai',
    year: 2014,
    price: 19000,
    characteristics: {engine: 2.0, maxspeed: 190, color: 'blue', country: "Japan"}
}, {
    model: 'Volkswagen Golf',
    year: 2019,
    price: 16000,
    characteristics: {engine: 1.8, maxspeed: 186, color: 'black', country: 'Germany'}
}, {
    model: 'Audi Q8',
    year: 2020,
    price: 70000,
    characteristics: {engine: 5.0, maxspeed: 244, color: 'ocean', country: 'Germany'}
}];


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//  function getAuto(autoArr, elemId) {
//      for (let i = 0; i < autoArr.length; i++) {
//          let divOne = document.createElement('div');
//          divOne.style.margin = '10px';
//          divOne.style.backgroundColor = '#ffacac';
//
//          divOne.innerHTML = `${autoArr[i].model} ${autoArr[i].year} ${autoArr[i].price}
//          ${autoArr[i].characteristics.engine} ${autoArr[i].characteristics.maxspeed} ${autoArr[i].characteristics.color} ${autoArr[i].characteristics.country}`;
//          elemId.appendChild(divOne);
//      }
//  }
// let getElem = document.getElementById('autos');
// getAuto(autos, getElem);


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок
// function getAuto(autoArr, elemId) {
// let arr1 = [];
//     for (const getObject in autoArr[1]) {
//             arr1.push(getObject);
//         }
//     for (const getObject1 in autoArr[1].characteristics) {
//         arr1.push(getObject1);
//     }
//
//     let divTxt = document.createElement('h2');
//     divTxt.innerText = 'Cars';
//     elemId.appendChild(divTxt);
//     divTxt.style.textAlign = 'center';
//
//     for (let i = 0; i < autoArr.length; i++) {
//         let divOne = document.createElement('div');
//         let divTwo = document.createElement('div');
//         let divThree = document.createElement('div');
//         let divFour = document.createElement('div');
//         let divFive = document.createElement('div');
//         let divSix = document.createElement('div');
//         let divSev = document.createElement('div');
//
//         divOne.style.margin = '10px';
//         divOne.style.padding = '0px 10px 10px 10px';
//         divOne.style.backgroundColor = '#cdecea';
//
//         divOne.innerHTML = ` <h3>ID car = ${i+1}</h3> ${arr1[0]} -  "${autoArr[i].model}" <hr>`;
//         divTwo.innerHTML = `${arr1[1]} - ${autoArr[i].year} year`;
//         divThree.innerHTML = `${arr1[2]} - ${autoArr[i].price} $`;
//         divFour.innerHTML = `<hr> ${arr1[3]}: <br> <hr>${arr1[4]} - ${autoArr[i].characteristics.engine} liters`;
//         divFive.innerHTML = `${arr1[5]} - ${autoArr[i].characteristics.maxspeed} km/h`;
//         divSix.innerHTML = `${arr1[6]} - ${autoArr[i].characteristics.color}`;
//         divSev.innerHTML = `${arr1[7]} - ${autoArr[i].characteristics.country}`;
//
//         elemId.appendChild(divOne);
//         divOne.appendChild(divTwo);
//         divOne.appendChild(divThree);
//         divOne.appendChild(divFour);
//         divOne.appendChild(divFive);
//         divOne.appendChild(divSix);
//         divOne.appendChild(divSev);
//     }
// }
// let getElem = document.getElementById('autos');
// getElem.style.backgroundColor = '#7baee9'
// getElem.style.width = '250px';
// getElem.style.margin = '10px';
// getElem.style.padding = '10px';
// getElem.style.fontSize = '18px';
//
// getAuto(autos, getElem);



