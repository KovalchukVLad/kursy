// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// a) отримує текст з параграфа з id "content"
// let a = document.getElementById('content');
// console.log(a.innerHTML);

// b) отримує текст з блоку з id "rules"
// let b = document.getElementById('rules');
// console.log(b.innerText);

// c) замініть текст параграфа з id 'content' на будь-який інший
// let c =document.getElementById('content');
// c.innerText = 'vlad';

// d) замініть текст параграфа з id 'rules' на будь-який інший
// let d =document.getElementById('rules');
// d.innerText = 'kov';

// e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій
// d.style.backgroundColor='#e78b8b';
// d.style.color='blue';
// c.style.backgroundColor='#e59e9e';
// c.style.color='blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(d.classList);

// h) отримати всі елементи з класом fc_rules
// let h = document.getElementsByClassName('fc_rules');
// console.log(h);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
// for (const hElement of h) {
//     hElement.style.color = 'red';
// }


// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// for (let i = 0; i < users.length; i++) {
//     let divOne = document.createElement('div');
//     divOne.style.backgroundColor = '#6c87d0'
//     divOne.innerHTML = `${users[i].name}
//                         ${users[i].age}
//                         ${users[i].status}
//                         ${users[i].address.city}
//                         ${users[i].address.country}
//                         ${users[i].address.street}
//                         ${users[i].address.houseNumber}`
//     document.body.appendChild(divOne);
// }


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//     let divM = document.createElement('div');
//     divM.style.backgroundColor = '#6c87d0'
//     let divCity = document.createElement('div');
//     let divCoun = document.createElement('div');
//     let divStreet = document.createElement('div');
//     let divHouseNum = document.createElement('div');
//     divM.innerHTML =`${users[i].name}   ${users[i].age}    ${users[i].status}`;
//     divCity.innerHTML=`${users[i].address.city}`;
//     divCoun.innerHTML=`${users[i].address.country}`;
//     divStreet.innerHTML=`${users[i].address.street}`;
//     divHouseNum.innerHTML=`${users[i].address.houseNumber} <br><br>`;
//     document.body.appendChild(divM);
//     divM.appendChild(divCity);
//     divM.appendChild(divCoun);
//     divM.appendChild(divStreet);
//     divM.appendChild(divHouseNum);
// }




// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let a = document.getElementById('main_header');
// a.innerText = 'feb-21'

// b) робить шириниу елементу ul 400px
// let b = document.getElementsByTagName('ul');
// for (const bElement of b) {
//     bElement.style.width = '400px';
//     bElement.style.backgroundColor = 'orange';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let c = document.getElementsByClassName('linkList');
// for (const cElement of c) {
//     cElement.style.width = '50%';
//     cElement.style.backgroundColor = 'pink';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let d = document.getElementsByClassName('listElement2');
// for (const dElement of d) {
//     console.log(dElement.innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let e = document.getElementsByTagName('li');
// for (const eElement of e) {
//     eElement.style.backgroundColor = 'gray';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let f = document.getElementsByTagName('a');
// for (const fElement of f) {
//     fElement.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let g = document.getElementsByTagName('a');
// for (const gElement of g) {
//     if (gElement.innerText === 'link3'){
//         gElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let h = document.getElementsByTagName('a');
// for (const hElement of h) {
//     hElement.classList.add(`${hElement.innerText}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let a = prompt('Enter color of background');
// let p = document.getElementsByClassName('sub-header');
// for (const pElement of p) {
//     pElement.style.backgroundColor = `${a}`;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let v = prompt('Enter color of background');
// let w = document.getElementsByClassName('sub-header');
// for (const pElement of w) {
//     if (pElement.innerText === 'content 2 segment'){
//     pElement.style.color = v;
// }}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let k1 = prompt('Enter text');
// let k = document.getElementsByClassName('content_1');
// for (const kElement of k) {
//     kElement.innerHTML = k1;
// }

// l) отримати елементи p та змінити їм padding на 20px
// const l = document.getElementsByTagName('p');
// for (const lElement of l) {
//     lElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let m = document.getElementsByClassName('text2');
// for (const mElement of m) {
//     mElement.innerHTML = 'feb-2021'
// }


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];

// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// for (let i = 0; i < rules.length; i++) {
//     let divM = document.createElement('div');
//     let h2h = document.createElement('h2');
//     let p2p = document.createElement('p');
//     divM.innerHTML = `<br><br>rules rule${i+1}`;
//     divM.classList.add('rules',`rule${i+1}`);
//     h2h.innerHTML = `${rules[i].title}`
//     p2p.innerHTML = `${rules[i].body}`
//     // console.log(divM);
//     document.body.appendChild(divM);
//     divM.appendChild(h2h);
//     divM.appendChild(p2p);
// }

// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// //
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// let arr = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if(usersWithId[i].id === citiesWithId[j].user_id){
//             usersWithId[i].address = citiesWithId[j];
//             arr.push(usersWithId[i]);
//         }
//     }
// }
// console.log(arr);