// 1- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи console.log , alert, document.write
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bol1 = true;
let bol2 = false;
        console.log(str1 +' '+ str2 +' '+ str3 +' '+ str4);
        console.log(num1+' '+num2+' '+num3+' '+num4+' '+num5+' '+num6+' '+num7);
        console.log(bol1);
        console.log(bol2);
        alert(str1 +' '+ str2 +' '+ str3 +' '+ str4);
        alert(num1+' '+num2+' '+num3+' '+num4+' '+num5+' '+num6+' '+num7);
        alert(bol1);
        alert(bol2);
        document.write(str1 +'<br>'+ str2 +'<br>'+ str3 +'<br>'+ str4);
        document.write('<br>');
        document.write(num1+'<br>'+num2+'<br>'+num3+'<br>'+num4+'<br>'+num5+'<br>'+num6+'<br>'+num7);
        document.write(`<br>${bol1}<br>`);
        document.write(bol2);


// 2- переопределить каждую переменную из задания 1 дав им произвольные значения
// Вывести каждую при помощи console.log , alert, document.write
str1 = 'My';
str2 = 'name';
str3 = 'is';
str4 = 'Vlad';
num1 = 20;
num2 = 5;
num3 = -10;
num4 = 142;
num5 = 1.5;
num6 = 26.74;
num7 = 8943;
bol1 = false;
bol2 = true;
        console.log(str1 +' '+ str2 +' '+ str3 +' '+ str4);
        console.log(num1+' '+num2+' '+num3+' '+num4+' '+num5+' '+num6+' '+num7);
        console.log(bol1);
        console.log(bol2);
        alert(str1 +' '+ str2 +' '+ str3 +' '+ str4);
        alert(num1+' '+num2+' '+num3+' '+num4+' '+num5+' '+num6+' '+num7);
        alert(bol1);
        alert(bol2);
        document.write(str1 +'<br>'+ str2 +'<br>'+ str3 +'<br>'+ str4);
        document.write('<br>');
        document.write(num1+'<br>'+num2+'<br>'+num3+'<br>'+num4+'<br>'+num5+'<br>'+num6+'<br>'+num7);
        document.write(`<br>${bol1}<br>`);
        document.write(bol2);


// 3- Создать 3 числовых и 3 стринговых константы.
// Вывести каждую при помощи console.log , alert, document.write
let number1 = 10;
let number2 = 15;
let number3 = 2;
let string1 = 'HTML';
let string2 = 'CSS';
let string3 = 'JS';
        console.log(number1+' '+number2+' '+number3);
        console.log(string1+' '+string2+' '+string3);
        document.write(number1+' '+number2+' '+number3+'<br>');
        document.write(string1+' '+string2+' '+string3);
        alert(number1+' '+number2+' '+number3);
        alert(string1+' '+string2+' '+string3);


// 4- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
//     Для фамилии имени и отчества создать разные переменные.
//     Вывести каждую при помощи console.log , alert, document.write
        let surname = prompt('Прізвище');
        let name = prompt('Ім`я');
        let middlename = prompt('По-батькові');
        console.log(surname + ' ' + name + ' ' + middlename);
        document.write(`<h1>${surname} ${name} ${middlename}</h1>`);
        alert(surname + ' ' + name + ' ' + middlename);


// 5- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
        let person =surname + name + middlename;


// 6- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
        let momsurname = prompt('Прізвище');
        let momname = prompt('Ім`я');
        let mommiddlename = prompt('По-батькові');
        let momperson =momsurname + ' ' + momname + ' ' + mommiddlename;


// 7- при помощи prompt() получить 3 числа.
//     Привести их к числовому типу при помощи +. вывести их в консоль.
        let a1 = +prompt('Введіть число');
        let a2 = +prompt('Введіть число');
        let a3 = +prompt('Введіть число');
        console.log(a1+a2+a3);
        console.log(a1+ ' ' +a2+ ' ' +a3);


// 8- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let b1 = prompt('Введіть число');
let b2 = prompt('Введіть число');
let b3 = prompt('Введіть число');
let b4 = prompt('Введіть число');
b1 = parseInt(b1);
b2 = parseInt(b2);
b3 = parseInt(b3);
b4 = parseInt(b4);
let result = b1+b2+b3+b4;
console.log(result);


// 9- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let c1 = prompt('Введіть число');
let c2 = prompt('Введіть число');
let c3 = prompt('Введіть число');
c1 = parseFloat(c1);
c2 = parseFloat(c2);
c3 = parseFloat(c3);
let result1 = c1+c2+c3;
console.log(result1);


// 10- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let d1 = prompt('Введіть число');
let d2 = prompt('Введіть число');
let d3 = prompt('Введіть число');
d1 = Math.round(d1);
d2 = Math.round(d2);
d3 = Math.round(d3);
let result2 = d1+d2+d3;
console.log(result2);


// 11- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
//     Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью.
//     При помощи Math.pow возвести первое число в степень второго числа.
let e1 = prompt('Введіть число');
let e2 = prompt('Введіть число');
e1 = Math.round(e1);
e2 = Math.round(e2);
result3=Math.pow(e1, e2)
console.log(result3);


// 12- При помощи оператора опредеоения типа typeof определить типы следующих переменных
// и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof a, typeof b, typeof c, typeof d);


// 13- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
let f1 = 5 < 6;
let f2= 5 > 6;
let f3 = 5 == 6;
let f4 = 5 >= 6;
let f5 = 10 == 10;
let f6 = 10 <= 10;
let f7 = 10 < 10;
let f8 = 10 > 10;
let f9 = 10 != 10;
let f10 = 123 < '123';
let f11 = 123 == '123';
console.log(f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11);


// 14- Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12 ); //false
console.log(34 > 33 && 23 < 90 );  //true
console.log(99 > 100 && 45 > 12 ); //false
console.log(132 > 100 || 45 < 12 );//true
console.log(111 > 11 || 45 < 111 );//true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); //false
console.log(!!'-1');//true
console.log(!!-1);//true
console.log(!!'0');//true
console.log(!!'null');//true
console.log(!!'undefined'); //true
console.log(!!(3/'owu')); //false
console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false