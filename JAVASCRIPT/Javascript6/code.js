// 1) Створити масив з 20 чисел та:
// let numberArr = [2, 5, 7, 9, 23, 4, 12, 31, 5, 24, 31, 62, 232, 4, 78, 32, 9, 10, 14, 20];
// //     a) відсортувати його від меншого до більшого.
// // let a = numberArr.sort((a, b) => a - b);
// // console.log(a);
//
//
// //     b) відсортувати його від більшого до меншого.
// // let b = numberArr.sort((a, b) => b - a);
// // console.log(b);
//
//
// //     c) Відфілтрувати числа які є кратними 3.
// // let c = numberArr.filter((value) =>{
// //  if (value % 3 === 0){
// //   return value;
// //  }
// // });
// // let c1 = numberArr.filter((value) => value % 3 === 0 );
// // console.log(c);
// // console.log(c1);
//
//
// // d) Відфілтрувати числа які є більшими за 10.
// // let d = numberArr.filter(value => value>10);
// // console.log(d);
//
// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let e = numberArr.forEach(value => {
//  document.write(`${value} <br>`);
// })
//
// // f) За допомогою map збільшити кожен елемент в масиві в три рази.
// // let f = numberArr.map(value => value*3);
// // console.log(f);
//
// //     g) Порахувати загальну суму всіх елментів у масиві (reduce)
// // let g =numberArr.reduce((acc, currentValue) => acc+currentValue );
// // console.log(g);


// // 2) Створити масив з 20 стрічок та:
// let namesArr = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Ava', 'William', 'Sophia', 'Elijah', 'Isabella',
//                 'James', 'Charlotte', 'Benjamin', 'Amelia', 'Lucas', 'Mia', 'Mason', 'Harper', 'Ethan',	'Evelyn'];
// //     a) Відсортувати його в алфавітному порядку
// // let a = namesArr.sort();
// // console.log(a);
//
//
// // b) Відсортувати в зворотньому порядку
// // let b = namesArr.sort((a, b) => {
// //  if(a<b){
// //   return 1;
// //  }
// //  return -1;
// // });
// // console.log(b);
//
//
// // c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// // let c = namesArr.filter(value => value.length>4);
// // console.log(c);
// // //або
// // let c1 = namesArr.filter(value => {
// //  if (value.length>4){
// //   return value;
// //  }
// // });
// // console.log(c1);
//
//
// // d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// // let d = namesArr.forEach(value => {
// //   document.write(`Sam says ${value}<br>`);
// // })


// // 3) Все робити тільки за допомогою методів масивів!
// //     Дано масив :
//     const users = [
//      {name: 'vasya', age: 31, isMarried: false},
//      {name: 'petya', age: 30, isMarried: true},
//      {name: 'kolya', age: 29, isMarried: true},
//      {name: 'olya', age: 28, isMarried: false},
//      {name: 'max', age: 30, isMarried: true},
//      {name: 'anya', age: 31, isMarried: false},
//      {name: 'oleg', age: 28, isMarried: false},
//      {name: 'andrey', age: 29, isMarried: true},
//      {name: 'masha', age: 30, isMarried: true},
//      {name: 'olya', age: 31, isMarried: false},
//      {name: 'max', age: 31, isMarried: true}
//     ];
//
// // a) відсортувати його за  віком (зростання , а потім окремо спадання)
// // let a = users.sort((a, b) => {
// //  return a.age - b.age;
// // });
// // console.log(a);
// ////або
// // let a1 = users.sort((a, b) => {
// //  return b.age - a.age;
// // });
// // console.log(a1);
//
// // b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// // let b = users.sort((a, b) => {
// //  if (a.name.length < b.name.length){
// //   return -1;
// //  }
// //  return 1;
// // });
// // console.log(b);
// ////або
// // let b1 = users.sort((a, b) => {
// //  return b.name.length - a.name.length;
// // });
// // console.log(b1);
//
// // c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// // (По якому принципу його створювати - ваше рішення),
// // та зберегти це в новий масив (первинний масив залишиться без змін)
// // let jsClon =JSON.stringify(users);
// // let clonUser = JSON.parse(jsClon);
// //
// // let c = clonUser.map((value, index) => {
// //  value.id = index+1;
// //  return value;
// // });
// // console.log(c);
// // console.log(users);
//
// // d) відсортувати його за індентифікатором
// // let d = c.sort((a, b) => a.id - b.id);
// // console.log(d);
//
// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//
// // let jsonClon =JSON.stringify(c);
// // let clonUser2 = JSON.parse(jsonClon);
//
// // let merried = [];//
// // clonUser2.reduce((acc, currentValue) => {
// // if (currentValue.isMarried){
// //  currentValue.flat = true;
// //  merried.push(currentValue);
// // }
// //  return acc;
// // },[]);
// // console.log(merried);
// //або
// // let merried = clonUser2.reduce((acc, currentValue) => {
// //  if (currentValue.isMarried){
// //   currentValue.flat = true;
// //   acc.push(currentValue);
// //  }
// //  return acc;
// // },[]);
// // console.log(merried);


// const cars = [
//     {
//         producer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         producer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         producer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         producer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 2,
//         power: 140
//     },
//     {
//         producer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         producer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
//     {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     },
//     {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//
//     - двигун більше 3х літрів
// let a = cars.filter(value => value.volume >=3);
// console.log(a);
//
//
// - двигун = 2л
// let b = cars.filter(value => value.volume ===2);
// console.log(b);
//
// - виробник мерс
// let c =cars.filter(value => value.producer ==='mercedes');
// console.log(c);
//
// - двигун більше 3х літрів + виробник мерседес
// let d =cars.filter(value => {
//  if (value.volume >= 3 && value.producer ==='mercedes'){
//   return value;
//  }
// });
// console.log(d);
//
// - двигун більше 3х літрів + виробник субару
// let e =cars.filter(value => {
//  if (value.volume >= 3 && value.producer ==='subaru'){
//   return value;
//  }
// });
// console.log(e);
//
//
// - сили більше ніж 300
// let f = cars.filter(value => value.power>=300);
// console.log(f);
//
// - сили більше ніж 300 + виробник субару
// let g =cars.filter(value => {
//  if (value.power >= 300 && value.producer ==='subaru'){
//   return value;
//  }
// });
// console.log(g);
//
// - мотор серіі ej
// let n = cars.filter(value => value.engine.startsWith('ej'));
// console.log(n);
//
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let m =cars.filter(value => {
//  if (value.power >= 300 && value.producer ==='subaru' && value.engine.startsWith('ej')){
//   return value;
//  }
// });
// console.log(m);
//
// - двигун меньше 3х літрів + виробник мерседес
// let s =cars.filter(value => {
//  if (value.volume < 3 && value.producer ==='mercedes'){
//   return value;
//  }
// });
// console.log(s);
//
// - двигун більше 2л + сили більше 250
// let w =cars.filter(value => {
//  if (value.volume > 2 && value.power >250){
//   return value;
//  }
// });
// console.log(w);
//
// - сили більше 250  + виробник бмв
// let v =cars.filter(value => {
//  if (value.power > 250 && value.producer ==='bmw'){
//   return value;
//  }
// });
// console.log(v);


// // - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'Anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'Olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// // -- Відсортувати їх по ID
// // let a = usersWithAddress.sort((a, b) =>{
// //     if (a.id<b.id){
// //         return -1;
// //     }
// //     return 1;
// // } );
// // console.log(a);
//
// // -- Відсортувати їх по ID в зворотньому порядку
// // let b = usersWithAddress.sort((a, b) =>{
// //     if (a.id<b.id){
// //         return 1;
// //     }
// //     return -1;
// // } );
// // console.log(b);
//
// // -- Відсортувати по віку
// // let ageSort =usersWithAddress.sort((a,b)=>{
// //     if (a.age-b.age<0){
// //         return -1;
// //     }
// //     return 1;
// // });
// // console.log(ageSort);
//
// // -- Відсортувати по віку в зворотньому порядку
// // let ageSortReverse = usersWithAddress.sort((a, b) => b.age-a.age);
// // console.log(ageSortReverse);
//
//
// // -- Відсорутвати по імені
// // let nameSort = usersWithAddress.sort((a, b) => {
// //     if (a.name.toUpperCase()<b.name.toUpperCase()){
// //         return -1;
// //     }
// //     return 1;
// // });
// // console.log(nameSort);
//
//
// // -- Відсорутвати по назві вулиці
// // let streetSort = usersWithAddress.sort((a, b) => {
// //     if (a.address.street.toUpperCase()<b.address.street.toUpperCase()){
// //         return -1;
// //     }
// //     return 1;
// // });
// // console.log(streetSort);
//
//
// // -- Відсорутвати по номеру будинку
// // let streetNumSort = usersWithAddress.sort((a, b) => {
// //     if (a.address.number<b.address.number){
// //         return -1;
// //     }
// //     return 1;
// // });
// // console.log(streetNumSort);
//
// // -- Залигити тільки тих, хто молодший ніж 30 (filter)
// // let ageFilter = usersWithAddress.filter(value => value.age<30);
// // console.log(ageFilter);
//
// // -- Залишити тільки одружених
// // let isMarried = usersWithAddress.filter(value => value.isMarried);
// // console.log(isMarried);
//
// // -- Залишити тільки одружених, які молодні за 30
// // let isMarriedWithAge = usersWithAddress.filter(value => {
// //     if(value.age<30 && value.isMarried){
// //         return value;
// //     }
// // });
// // console.log(isMarriedWithAge);
//
//
// // -- Залишити лише тих, в кого парні номери будинків.
// // let houseNumPair = usersWithAddress.filter(value => !(value.address.number %2) );
// // console.log(houseNumPair);
//
// // -- Порахувати загальний вік всіх людей. (reduce)
// // let commonAge = usersWithAddress.reduce((acc, currentValue) => {
// //     return acc + currentValue.age;
// // },0);
// // console.log(commonAge);
//
//
// // -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// // let clonuser = JSON.stringify(usersWithAddress);
// // let newUser = JSON.parse(clonuser);
// // let child ={
// //     name: 'bohdan',
// //     age: 2
// // }
// //
// // let newarr = newUser.reduce((acc, currentValue) => {
// //     if(currentValue.isMarried && currentValue.age>30){
// //         currentValue.child = child;
// //         acc.push(currentValue);
// //     }
// //     return acc;
// // },[]);
// // console.log(newarr);


// // Створити обєкт автомобіля з полями:
// //     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// //     Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
// //     Створити не менше 7 та не більше 20 машинок.
// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// //     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// //     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
// class Cars {
//     constructor(model, power, price, year, owner={}) {
//         this.model = model;
//         this.power = power;
//         this.price = price;
//         this.year = year;
//         this.owner =owner;
//     }
// }
// class Driver {
//     constructor(name, age, experience) {
//         this.name = name;
//         this.age = age;
//         this.experience = experience;
//     }
// }
//
// let car1 = new Cars('BMW X1',  130,  15000,  2012)
// let car2 = new Cars('BMW X5',  180,  45000,  2017)
// let car3 = new Cars('BMW X528',  165,  25000,  2016)
// let car4 = new Cars('Nissan Qashqai',  135,  18000,  2018)
// let car5 = new Cars('Nissan Leaf',  110,  16500,  2017)
// let car6 = new Cars('Tesla Model S',  160,  26000,  2018)
// let car7 = new Cars('Tesla Model X',  180,  49000,  2017)
// let car8 = new Cars('Mazda CX-5',  145,  21000,  2016)
// let car9 = new Cars('Mercedes GLE 400',  190,  68000,  2019)
// let car10 = new Cars('Renault Logan',  90,  3000,  20121)
//
// let arrCars =[];
// arrCars.push(car1,car2,car3,car4,car5,car6,car7,car8,car9,car10)
//
// let driver1 = new Driver('Taras', 25,6)
// let driver2 = new Driver('Dima', 29,4)
// let driver3 = new Driver('Sasha', 21,2)
// let driver4 = new Driver('Slavik', 47,20)
// let driver5 = new Driver('Stas', 33,9)
//
// let arrDrivers =[];
// arrDrivers.push(driver1,driver2,driver3,driver4,driver5);
//
// //     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// // let repair = arrCars.map((value, index) => {
// //    if (!(index % 2)){
// //        value.power *= 1.1;
// //        value.price *= 1.05;
// //        value.repair = true;
// //        return value;
// //    }
// //    value.repair = false;
// //
// //    return value;
// // });
// // console.log(repair);
//
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// // let setDrivers = repair.map((value, index) => {
// //     if(value.repair){
// //         value.owner = arrDrivers[index/2];  //не знаю чи так можна робити.
// //     }
// //     return value;
// // });
// // console.log(setDrivers);
//
//
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// //     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// // let driversUpgrade = setDrivers.map((value, index) => {
// //     if(value.owner.age>25 && value.owner.experience<5){
// //         value.owner.experience += 1;
// //     }
// //     return value;
// // });
// // console.log(driversUpgrade);
//
//
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// // let sumOfPrice = driversUpgrade.reduce((acc, currentValue) => {
// //   return acc + currentValue.price;
// // },0);
// // console.log(sumOfPrice);
// //або
// // forSum = 0;
// // for (const obj of driversUpgrade) {
// //      forSum += (obj.price);
// // }
// // console.log(forSum);


// // Задача: дан отсортированный по возрастанию массив целых чисел.
// //     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// //     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// //     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
//
// function getMaxMinIndex(arr,number) {
//     let arr1 =[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===number){
//             arr1.push(i);
//         }
//     }
//     if (arr1.length > 1){
//         console.log(`Найменший індекс - ${arr1[0]}; Найбільший індекс ${arr1[arr1.length-1]} `);
//         return;
//     }
//     arr1.length === 1 ? console.log(`В масиві є лише 1 вказаний елемент. Його індекс - ${arr1[0]}`) : console.log(-1) ;
//
// }
// let a = 1;
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14,1,1,4,5,2,1,1];
// getMaxMinIndex(arr, a);
// //можливо треба було якось інакше зробити