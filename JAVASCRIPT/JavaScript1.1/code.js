// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';
// console.log(typeof str, typeof num, typeof flag, typeof txt);


// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
// let a1 =  5 + 3;
// let a2 =  5 - 3;
// let a3 =  5 * 3;
// let a4 =  5 / 3;
// let a5 =  5 % 3;
// console.log(a1, a2, a3, a4, a5);


// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
//
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
// console.log(a6, a7, a8, a9, a10);


// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s + ' см^2');


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = 10;
// let dC = 4;
// let v = heightC * dC;
// console.log(v + ' м^2');


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
// console.log(k);


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str11 = 'Hello world';
// document.write(str11);
// alert(str11);
// console.log(str11);


// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// const name = 'Vlad';
// const surname = 'Kovalchuk';
// const mname = 'Rostyslavovych';
// let age = 21;
// let hobby = 'swim';
// alert(name + '\n' + surname + '\n' + mname + '\n' + age + '\n' + hobby);


// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Хто';
// let str2 = 'ти';
// let str3 = 'такий?';
// let concatenation = str1 +' '+ str2 +' '+ str3;
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// Результат
// 205
// 15
// 40
// 10


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// parseInt("3.14")
// parseInt("-7.875")
// parseInt("435")
// parseInt("Вася")
//
// Результат
// 3
// -7
// 435
// NaN


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "Vlad")
// console.log(str);


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let num11 = +prompt('Enter First Number');
// let num12 = +prompt('Enter Second Number');
// alert(num11+num12);
//or
// let num11 = prompt('Enter First Number');
// let num12 = prompt('Enter Second Number');
// alert( parseInt(num11)+parseInt(num12));


// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//
// let userName = prompt('Enter your name');
// let userSurname = prompt('Enter your surname');
// let userAge = prompt('Enter your age');
// alert('Доброго вечора ' + userName +' '+ userSurname + ' мої вітання що вам ' + userAge);


// =====================
// ======ДОП============
// =====================

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let number1 = +prompt('Введіть перше число');
// let number2 = +prompt('Введіть друге число');
// let number3 = +prompt('Введіть третє число');
//
// if (number1 >= number2 && number1 >= number3) {
//     if (number2 >= number3) {
//         document.write(number1 + ' ' + number2 + ' ' + number3);
//     } else {
//         document.write(number1 + ' ' + number3 + ' ' + number2);
//     }
// }
//
// else if(number2 >= number1 && number2 >= number3){
//     if (number1 >= number3) {
//         document.write(number2 + ' ' + number1 + ' ' + number3);
//     } else {
//         document.write(number2 + ' ' + number3 + ' ' + number1);
//     }
// }
// else if(number3 >= number1 && number3 >= number2){
//     if (number1 >= number2) {
//         document.write(number3 + ' ' + number1 + ' ' + number2);
//     } else {
//         document.write(number3 + ' ' + number2 + ' ' + number1);
//     }
// }


// 2.Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let light = prompt('Який колір світлофору?');
// switch (light){
//     case 'зелений':
//         alert('Йди');
//         break;
//     case 'жовтий':
//         alert('Зачекай');
//         break;
//     case 'червоний':
//         alert('Стій');
//         break;
//     default:
//         alert('Світлофор не працює');
//         break;
// }


//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//     Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let light1 = prompt('Який колір світлофору?');
// let isRoadClear = confirm('Чи вільна дорога?');
// if (light1 === 'зелений' && isRoadClear === true){
//     alert('Йди');
// } else if (light1 === 'зелений' && isRoadClear === false){
//     alert('Зачекай поки порушники проїдуть');
// } else if (light1 === 'жовтий' && isRoadClear === false){
//     alert('Чекай');
// } else if (light1 === 'жовтий' && isRoadClear === true){
//     alert('Все одно чекай');
// } else if (light1 === 'червоний' && isRoadClear === true){
//     alert('Стій');
// } else if (light1 === 'червоний' && isRoadClear === false){
//     alert('Стій і чекай');
// } else {
//     alert('Світлофор зламаний');
// }












