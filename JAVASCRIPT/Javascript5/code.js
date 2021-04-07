// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a div h1 span input form option select
//
// function Konstructor(name, discribe, atr=[] ){
// this.name = name;
// this.discribe = discribe;
// this.atr = atr;
// }
// //////////////////////////////////
// let atrA1 ={
//     name: 'href',
//     discibe: 'way'
// }
// let atrA2= {
//     name: 'target',
//     discibe: '_blank'
// }
// let a1 = new Konstructor('a','URL',[atrA1,atrA2]);
// console.log(a1);
// ////////////////////////////////
// let atrDiv1 ={
//     name: 'align',
//     discibe: 'center'
// }
// let atrDiv2= {
//     name: 'title',
//     discibe: 'text'
// }
// let div1 = new Konstructor('div','block',[atrDiv1,atrDiv2]);
// console.log(div1);
// ///////////////////////////////////
// let atrh1 ={
//     name: 'title',
//     discibe: 'text'
// }
// let atrh2= {
//     name: 'align',
//     discibe: 'center'
// }
// let h1 = new Konstructor('h1','MainTittle',[atrh1,atrh2]);
// console.log(h1);
// ///////////////////////////////////
// let atrSp1 ={
//     name: 'class',
//     discibe: 'enter class'
// }
// let atrSp2= {
//     name: 'style',
//     discibe: 'color'
// }
// let span = new Konstructor('span','aline',[atrSp1,atrSp2]);
// console.log(span);


// Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a div h1 span input form option select
//
// class Tags {
//     constructor(name, discribe, atr=[]) {
//         this.name = name;
//         this.discribe = discribe;
//         this.atr = atr;
//     }
// }
// ////////////////////////////////////////
// let atrIn1 ={
//     name: 'list',
//     discibe: 'datalist'
// }
// let atrIn2= {
//     name: 'pattern',
//     discibe: 'text limit'
// }
// let input = new Tags('input','Enter Text',[atrIn1,atrIn2]);
// console.log(input);
// ////////////////////////////////////////
// let atrF1 ={
//     name: 'name',
//     discibe: 'text'
// }
// let atrF2= {
//     name: 'target',
//     discibe: '_blank'
// }
// let form = new Tags('form','set form',[atrF1,atrF2]);
// console.log(form);
// ////////////////////////////////////////
// let atrOp1 ={
//     name: 'value',
//     discibe: 'text'
// }
// let atrOp2= {
//     name: 'disabled',
//     discibe: 'Yes'
// }
// let option = new Tags('option','container',[atrOp1,atrOp2]);
// console.log(option);
// /////////////////////////////////////////
// let atrS1 ={
//     name: 'autofocus',
//     discibe: 'yes'
// }
// let atrS2= {
//     name: 'size',
//     discibe: 'number'
// }
// let select = new Tags('select','list',[atrS1,atrS2]);
// console.log(select);


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// let car = {
//     model: 'Toyota Supra',
//     country: 'Japan',
//     year: 1999,
//     maxSpeed: 260,
//     capacityEngine: 3.0,
//
//     drive() {
//         document.write(`<br> Ми їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
//     },
//     info() {
//         document.write(`<br> Модель - ${this.model} <br> Країна виробник - ${this.country} <br> Рік випуску - ${this.year} рік <br>
//                         Максимальна швидкість - ${this.maxSpeed} км/год <br> Об'єм двигуна - ${this.capacityEngine} л<br> `);
//     },
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         document.write(`Нова максимальна швидкість машини - ${this.maxSpeed} км/год <br>`);
//     },
//     changeYear(newValue) {
//         this.year = newValue;
//         document.write(`Рік випуску машини - ${this.year} р.<br>`);
//     },
//     addDriver(driver) {
//         this.driver = driver;
//         document.write(`Інформація про водія машини ${this.model} <br>
//                       Ім'я - ${this.driver.name}, досвід водіння ${this.driver.experiense} років<br>`);
//     }
// }
//
// let driver1 = {
//     id: 1,
//     name: 'Pol',
//     experiense: 15
// }
// car.drive()
// car.info()
// car.increaseMaxSpeed(10);
// car.changeYear(2000);
// car.addDriver(driver1);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function CarConstuctor(model, country, year, maxSpeed, capacityEngine, driver) {
//     this.model = model;
//     this.country = country;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacityEngine = capacityEngine;
//     this.driver = driver;
//
//     this.drive = function () {
//         document.write(`<br> Ми їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
//     };
//     this.info = function () {
//         document.write(`<br> Модель - ${this.model} <br> Країна виробник - ${this.country} <br> Рік випуску - ${this.year} рік <br>
//                         Максимальна швидкість - ${this.maxSpeed} км/год <br> Об'єм двигуна - ${this.capacityEngine} л<br> `);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         document.write(`Нова максимальна швидкість машини - ${this.maxSpeed} км/год <br>`);
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         document.write(`Рік випуску машини - ${this.year} р.<br>`);
//     }
//     this.addDriver = function (driver){
//     this.driver = driver;
//     document.write(`Інформація про водія машини ${this.model} <br>
//                         Ім'я - ${this.driver.name}, досвід водіння ${this.driver.experiense} років<br>`);
//
// }
// }
// let impreza = new CarConstuctor('Subaru Impreza', 'Japan', 2004, 255, 3.5);
// console.log(impreza);
// impreza.drive();
// impreza.info();
// impreza.increaseMaxSpeed(10);
// impreza.changeYear(2000);
//
// let driver1 = {
//     id: 3,
//     name: 'Dominik',
//     experiense: 18
// }
//
// impreza.addDriver(driver1);
// console.log(impreza);


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(model, country, year, maxSpeed, capacityEngine, driver) {
//         this.model = model;
//         this.country = country;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacityEngine = capacityEngine;
//         this.driver = driver;
//     }
//     drive (){
//         document.write(`<br> Ми їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
//     }
//     info (){
//         document.write(`<br> Модель - ${this.model} <br> Країна виробник - ${this.country} <br> Рік випуску - ${this.year} рік <br>
//                         Максимальна швидкість - ${this.maxSpeed} км/год <br> Об'єм двигуна - ${this.capacityEngine} л<br> `);
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//         document.write(`Нова максимальна швидкість машини - ${this.maxSpeed} км/год <br>`);
//     }
//     changeYear (newValue){
//         this.year = newValue;
//         document.write(`Рік випуску машини - ${this.year} р.<br>`);
//     }
//     addDriver (driver = []){
//         this.driver = driver;
//         document.write(`Інформація про водія машини ${this.model} <br>
//                         Ім'я - ${this.driver.name}, досвід водіння ${this.driver.experiense} років<br>`);
//
//     }
// }
//
//
// let supra = new Car('Toyota Supra', 'Japan', 1999, 260, 3.0);
// console.log(supra);
// supra.drive();
// supra.info();
// supra.increaseMaxSpeed(10);
// supra.changeYear(2000);
//
// let driver1 = {
//     id: 1,
//     name: 'James',
//     experiense: 10
// }
//
// supra.addDriver(driver1);
// console.log(supra);
//
// let skyline = new Car('Nissan Skyline', 'Japan', 2003, 280, 3.5);
// console.log(skyline);
// skyline.drive();
// skyline.info();
// skyline.increaseMaxSpeed(15);
// skyline.changeYear(2004);
//
// let driver2 = {
//     id: 2,
//     name: 'Pol',
//     experiense: 15
// }
//
// skyline.addDriver(driver2);
// console.log(skyline);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Princess {
//   constructor(name, age, footSize) {
//       this.name = name;
//       this.age = age;
//       this.footSize = footSize;
//   }
// }
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
// let prince = new Prince('Alladin',26,36);
// let princess = [
//     new Princess('Ariel',25, 36),
//     new Princess('Rapunzel',21,40),
//     new Princess('Viktoria',29,35),
//     new Princess('Tanya',24,34),
//     new Princess('Katya',25,41),
//     new Princess('Dasha',18,39),
//     new Princess('Polina',20,37),
//     new Princess('Maria',26,38),
//     new Princess('Ania',19,42),
//     new Princess('Ira',22,39)
// ]
//
// for (let i=0; i<princess.length; i++){
//     if (prince.shoeSize === princess[i].footSize){
//        document.write(`Принц ${prince.name} знайшов свою принцесу ${princess[i].name}`)
//     }
// }


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//   function Princess(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
// }
//
//   function Prince(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
//
// let prince = new Prince('Alladin',26,37);
// let princess = [
//     new Princess('Ariel',25, 36),
//     new Princess('Rapunzel',21,40),
//     new Princess('Viktoria',29,35),
//     new Princess('Tanya',24,34),
//     new Princess('Katya',25,41),
//     new Princess('Dasha',18,39),
//     new Princess('Polina',20,37),
//     new Princess('Maria',26,38),
//     new Princess('Ania',19,42),
//     new Princess('Ira',22,39)
// ]
//
// for (let i=0; i<princess.length; i++){
//     if (prince.shoeSize === princess[i].footSize){
//         document.write(`Принц ${prince.name} знайшов свою принцесу ${princess[i].name}`)
//     }
// }


