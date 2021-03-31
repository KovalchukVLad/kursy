// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// a) отримує текст з параграфа з id "content"
// let getText = document.getElementById('content');
// console.log(getText.innerHTML);
//або
// console.log(getText.innerText);


// b) отримує текст з блоку з id "rules"
// let getTextB = document.getElementById('rules');
// console.log(getTextB.innerText);


// c) замініть текст параграфа з id 'content' на будь-який інший
// let getTextC = document.getElementById('content');
// getTextC.innerHTML = ' Javascript ';
// console.log(getTextC.innerText);


// d) замініть текст параграфа з id 'rules' на будь-який інший
// let getTextD = document.getElementById('rules');
//getTextD.innerHTML = ' <h1>Javascript = love</h1>';
// console.log(getTextD.innerText);
//

// e) змініть кожному елементу колір фону на червоний
//f) змініть кожному елементу колір тексту на синій
// let getElement1 = document.getElementsByTagName('div');
// let getElement2 = document.getElementsByTagName('p');
// let getElement3 = document.getElementsByTagName('ul');
// for (const element1Element of getElement1) {
//     element1Element.style.color = 'blue';
//     element1Element.style.backgroundColor = 'red';
// }
// for (const element2Element of getElement2) {
//     element2Element.style.color = 'blue';
//     element2Element.style.backgroundColor = 'red';
// }
// for (const element3Element of getElement3) {
//     element3Element.style.color = 'blue';
//     element3Element.style.backgroundColor = 'red';
// }


// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let getElementG = document.getElementById('rules');
// console.log(getElementG.classList);


// h) отримати всі елементи з класом fc_rules
// let getListClass = document.getElementsByClassName('fc_rules');
// console.log(getListClass);
// //або
// for (let i = 0; i < getListClass.length; i++) {
//     const listClass = getListClass[i];
//     console.log(listClass);
//
// }


// i) поміняти колір тексту у всіх елементів fc_rules на червоний
// let colorChange = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < colorChange.length; i++) {
//     colorChange[i].style.color = 'tomato';
// }

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// for (let i = 0; i < users.length; i++) {
//     let divka = document.createElement('div');
//     divka.style.backgroundColor = '#eec4c4';
//     divka.innerHTML = `${users[i].name}  ${users[i].age}  ${users[i].status}  ${users[i].address.city}
//     ${users[i].address.country}  ${users[i].address.street}  ${users[i].address.houseNumber}`;
//     document.body.appendChild(divka);
// }


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//     let divkaMainInfo = document.createElement('div');
//     divkaMainInfo.style.backgroundColor = '#b3b1ec';
//     divkaMainInfo.style.minHeight = '50px';
//     divkaMainInfo.style.width = '200px';
//     divkaMainInfo.style.margin = '15px';
//     divkaMainInfo.style.padding = '5px';
//
//     divkaMainInfo.innerHTML = `${users[i].name}  ${users[i].age}  ${users[i].status}`;
//     let divkaCity = document.createElement('div');
//     let divkaCountry = document.createElement('div');
//     let divkaStreet = document.createElement('div');
//     let divkaHouse = document.createElement('div');
//     let iteration = document.createElement('p');
//     iteration.style.marginLeft = '20px';
//     divkaCity.innerHTML = `<hr> Address <br> <hr>${users[i].address.city}`;
//     divkaCountry.innerHTML = `${users[i].address.country}`;
//     divkaStreet.innerHTML = `${users[i].address.street}`;
//     divkaHouse.innerHTML = `${users[i].address.houseNumber}`;
//     iteration.innerHTML = `<hr width="190px"; align="left"> <h3>ID - ${i}</h3>`;
//
//
//     document.body.appendChild(iteration);
//     document.body.appendChild(divkaMainInfo);
//     divkaMainInfo.appendChild(divkaCity);
//     divkaMainInfo.appendChild(divkaCountry);
//     divkaMainInfo.appendChild(divkaStreet);
//     divkaMainInfo.appendChild(divkaHouse);
// }
