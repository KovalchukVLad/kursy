// 1.--створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// let arrText = ['vlad', 'sergio', 'yura', 'bohdan','vova'];
// console.log(arrText);
// let arrMix = ['vlad', true, 25, '07', 'Lviv'];
// console.log(arrMix);
// let arrEmpty = [];
// arrEmpty[0] = 'vlad';
// arrEmpty[1] = 11;
// arrEmpty[2] = true;
// console.log(arrEmpty);


// 2- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let arr2 = ['aggre', 'vre', 'yhre', 'jtr', 'tjr', 'wer', 'ayj', 'li7u', '34', 'sf'];
// for (const str1 of arr2) {
//     document.write(`<div> ${str1} </div>`)
// }
//
// for (let i = 0; i < arr2.length; i++) {
//     document.write('<div>' +arr2[i] + '</div>' )
//     document.write(`<div> ${arr2[i]} </div>`);
// }


// 3- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Це текст з індексом - ${i} </div>`);
// }


// 4- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write( '<h1>'+ 'Привіт' +'</h1>');
//     i++;
// }


// 5- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20){
//     document.write( '<h1>'+ 'Зараз індекс = '+ i +'</h1>');
//     i++;
// }


// 6- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr6 = [2, 5, 7, 2, 253, 74, -6, 976, 214, 1];
// for( let i = 0; i<arr6.length; i++){
//     console.log(arr6[i]);
// }


// 7- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr7 = ['ver', 'rgte', 'wef', 'thre', 'qwfe', 'thrge', 'wergr', 'erw', 'wfeqas', 'hyrj'];
// for( let i = 0; i<arr7.length; i++){
//     console.log(arr7[i]);
// }


// 8- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr8 = [1, 'rgte', true, 'thre', 25, 'thrge', false, 'erw', -67, 'hyrj'];
// for( let i = 0; i<arr8.length; i++){
//     console.log(arr8[i]);
// }


// 9- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr9 = [1, 'rgte', true, 'thre', 25, 'thrge', false, 'erw', -67, 'hyrj'];
// for (i = 0; i < arr9.length; i++) {
//     if (typeof arr9[i] == 'number') {
//         document.write('Елемент ' + i + ' - ' + arr9[i] + ' - числовий' + '<br>');
//     } else if (typeof arr9[i] == 'string') {
//         document.write('Елемент ' + i + ' - ' + arr9[i] + ' - стрічковий' + '<br>');
//     } else {
//         document.write('Елемент ' + i + ' - ' + arr9[i] + ' - булевий' + '<br>');
//     }
// }


// 10- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr10 =[];
// arr10[0] = 25;
// arr10[1] = true;
// arr10[2] = false;
// arr10[3] = 'false';
// arr10[4] = 'evfwe';
// arr10[5] = -12;
// arr10[6] = 'restbr';
// arr10[7] = '56';
// arr10[8] = 'true';
// arr10[9] = 957;
// arr10[10] = '0';
// for (let i =0; i<arr10.length; i++){
//     console.log(arr10[i]);
// }


// 11- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i =0; i<10; i++){
//     console.log(i);
//     document.write(i);
// }


// 12- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for(let i =0; i<100; i++){
//     console.log(i);
//     document.write(i);
// }


// // 13- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i =0; i<100; i += 2){
//     console.log(i);
//     document.write(i);
// }


// 14- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 0; i<100; i ++){
//     if( i%2 == 0 ) {
//         console.log(i);
//         document.write(i+' ');
//     }
// }


// 15- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 0; i<100; i ++){
//     if( i%2 == 1 ) {
//         console.log(i);
//         document.write(i+' ');
//     }
// }


// 16- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let min = 0; min < 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         document.write(min + ' хв ' + sec + ' сек' + '<br>');
//     }
//
// }


// 17- Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h = 0; h < 2; h++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             document.write(h + ' год ' + min + ' хв ' + sec + ' сек' + '<br>');
//         }
//     }
// }


// Додатково
// 18-  Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//19 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// 20- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr18 =[ 'a', 'b', 'c'];
//
// let word1 = '';
// for(let i =0; i<arr18.length; i++){
//     word1 += arr18[i];
// }
// console.log(word1);
//
// let word2 ='';
// let i =0;
// while (i<arr18.length){
//     word2+=arr18[i];
//     i++;
// }
// console.log(word2);
//
// let word3 = '';
// for (let wor of arr18) {
//     word3 += wor;
// }
// console.log(word3);


// 19 - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr19 = [ 'a', 'b', 'c'];
// let arLen = arr19.length;
// let nums = 1;
// for(let i = 3; i<arLen+3; i++){
//     arr19[i]=nums;
//     nums++;
// }
// console.log(arr19);


// 20- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr20 =[1, 2, 3];
// let arLen = arr20.length;
// let nums = 3;
// for(let i =0; i<arLen; i++){
//     arr20[i]= nums;
//     nums--;
//     console.log(arr20);
// }
//
// let arr20 =[1, 2, 3];
// for (let i = 0; i < arr20.length; i++) {
//     arr20[i] = arr20.length - i;
//     console.log(arr20);
// }
//
// let arr20 =[1, 2, 3];
// let arrAdd =[];
// for (let i = 0; i < arr20.length; i++) {
//     arrAdd[i] = arr20.length - i;
//     console.log(arrAdd);
// }


// 21- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr21 =[1, 2, 3];
// let arLen = arr21.length;
// for (let i = arLen; i <arLen+3; i++ ){
//     arr21[i]=i+1;
// }
// console.log(arr21);


// 22- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr22 =[1, 2, 3];
// let arLen = arr22.length;
// for (let i = 6; i >arLen; i-- ){
//
//     arr22.unshift(i);
//     console.log(arr22);
// }


//23-24 Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// 24- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr23 = ['js', 'css', 'jq'];
// let a = arr23.shift();
// document.write(a);
// let b = arr23.pop();
// document.write('<br>'+b);


// 25-29 let arr25 = [1, 2, 3, 4, 5];
// // // 25- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// document.write(arr25.slice(3, 5));
//
//
// // 26- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// document.write(arr25.slice(0, 2));
//
// 27- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// arr25.splice(1,2);
// document.write(arr25);
//
// 28- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// arr25.splice(2,0, 'a', 'b', 'c');
//  document.write(arr25);
//
// 29- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// arr25.splice(1,0, 'a', 'b');
// arr25.splice(6,0, 'c');
// arr25.splice(8,0, 'e');
// document.write(arr25);


// 30-Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr30.length; i++) {
//     if (arr30[i] % 2 === 0) {
//         console.log(arr30[i]);
//     }
// }


// 31- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrAdd =[];
// for(let i =0; i<arr31.length; i++){
//     arrAdd.push(arr31[i]);
// }
// console.log(arrAdd);


// 32- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrAdd = [];
// let i = 0;
// while (i < arr32.length) {
//     arrAdd[i] = arr32[i];
//     i++;
// }
// console.log(arrAdd);


//33- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//1. перебрати його циклом while
// i=0;
// while (i<10){
//     console.log(arr[i]);
//     i++;
// }
//
// i=arr.length;
// while (i>0){
//     i--;
//     console.log(arr[i]);
// }
//////////////////////////////////
// 2. перебрати його циклом for
// for( let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
//
// for(let i =arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }
/////////////////////////////////
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i<10){
//     if (arr[i]%2 === 1)
//     {
//         console.log(arr[i]);
//     }
//     i++;
// }
//
// i=arr.length;
// while (i>0){
//     i--;
//     if (arr[i]%2 === 1){
//     console.log(arr[i]);
//         }
// }
//
/////////////////////////////
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//         console.log(arr[i]);
//     }
// }
//
// for(let i = arr.length-1; i>=0; i--){
//     if (arr[i] % 2 === 1) {
//         console.log(arr[i ]);
//     }
// }
//
//////////////////////
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i<10){
//     if (arr[i]%2 === 0)
//     {
//         console.log(arr[i]);
//     }
//     i++;
// }
//
// i=arr.length;
// while (i>0){
//     i--;
//     if (arr[i]%2 === 0){
//     console.log(arr[i]);
//         }
// }
//////////////////////
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
//
// for(let i = arr.length-1; i>=0; i--){
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
////////////////////
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);
//
// for(let i=arr.length-1; i>=0; i--){
// if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);
/////////////////////
// 8. вивести масив в зворотньому порядку.
//     for(let i = arr.length; i>=0; i-- ){
//         console.log(arr[i]);
//     }


// 34 створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
// let newArr = [];
// for (let i = 0; i < 50; i++) {
//     newArr[i] = i * 2;
// }
// console.log(newArr);
//
// let newArr = [];
// for (let i = 0; i < 50; i++) {
//     newArr[i] = (i * 2) + 1;
// }
// console.log(newArr);


// 35 используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let newArray1 =[];
// for (let i=0; i<100; i++){
//     newArray1[i] = Math.random();
// }
// console.log(newArray1);
//
// let newArray =[];
//  for (let i=0; i<100; i++){
//      newArray[i] = Math.floor(Math.random() * (732 - 8) ) + 8;
//  }
// console.log(newArray);
//
// 1. вывести на консоль  каждый третий елемент
// let newArray =[];
//  for (let i=0; i<100; i++){
//      newArray[i] = Math.floor(Math.random() * (732 - 8) ) + 8;
//         if (i%3 ===0){
//             console.log(newArray[i - 1]);
//         }
//  }
// console.log(newArray);
//
// 2. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// let newArray =[];
//  for (let i=0; i<100; i++){
//      newArray[i] = Math.floor(Math.random() * (732 - 8) ) + 8;
//         if (i%3 ===0){
//             if (newArray[i - 1]%2 === 0) {
//                 console.log(newArray[i - 1]);
//             }
//         }
//  }
// console.log(newArray);
//
// 3. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и
// записать их в другой массив.
// let newArray =[];
// let arrForWrite =[];
// let j = 0;
//  for (let i=0; i<100; i++){
//      newArray[i] = Math.floor(Math.random() * (732 - 8) ) + 8;
//         if (i%3 ===0){
//             if (newArray[i - 1]%2 === 0) {
//                 arrForWrite[j]=newArray[i - 1];
//                 j++;
//             }
//         }
//  }
// console.log(arrForWrite);
//
// 4. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let newArray =[];
//  for (let i=0; i<100; i++){
//      newArray[i] = Math.floor(Math.random() * (732 - 8) ) + 8;
//         if (newArray[i]%2 === 0){
//             console.log(newArray[i-1]);
//         }
//  }
// console.log(newArray);


// -36 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
// let middle = 0;
// for (let i = 0; i < arr.length; i++) {
//     middle += arr[i]/arr.length;
// }
// console.log(middle);


// 37- створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let newArray =[];
// let arrForMultiply =[];
//  for (let i=0; i<20; i++){
//      newArray[i] = Math.floor(Math.random() * 20) + 1;
//      arrForMultiply[i] = newArray[i]*5;
//  }
// console.log(newArray);
// console.log(arrForMultiply);


// 38-створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
// let arr = [1,'htrrg','gwrebreb',567,'svvse','svvse',0,'ernbbr','false',-9,'btedv',true,'dfbs','12',43,'he'];
// let arrForInsert =[];
// let j = 0;
//  for (let i=0; i<arr.length; i++){
//      if (typeof arr[i] === "number"){
//          arrForInsert[j]=arr[i];
//          j++;
//      }
//  }
// console.log(arrForInsert);

