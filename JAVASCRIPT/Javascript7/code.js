// // - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// let element = document.querySelector('p');
// element.setAttribute('id', 'text');
// const form1 = document.forms.form;
// let flag = true;
// form1.but1.onclick = (ev) => {
//     ev.preventDefault();
//                                 // if (element.style.display === 'none'){
//                                 //     element.style.display = 'block';
//                                 //     return;
//                                 // }
//                                 //     element.style.display = 'none';
//     element.style.display = flag ? 'none' : 'block';
//     flag = !flag;
// }

//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// form1.but1.onclick = (ev) => {
//     ev.preventDefault();
//     form1.but1.style.display = 'none';
// }

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// const form2 = document.forms.form;
//
// form2.but2.onclick = (ev) => {
//     ev.preventDefault()
//     const input1 = +form2.input1.value;
//     console.log(input1);
//     if (input1<18 || typeof input1 !== 'number') {
//         alert('Тобі менше 18');
//     }
// }

// - Створіть меню, яке розгортається/згортається при клику
// const menu = document.querySelector('.menu');
//
// const form3 = document.forms.form1;
// form3.but3.onclick = (ev) => {
//     ev.preventDefault();
//     if(menu.style.display === 'none'){
//         menu.style.display = 'flex';
//         return;
//     }
//     menu.style.display = 'none';
// }

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// let coments = [
//     {
//     title: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// },{
//     title: 'vlad',
//     body: 'kovalchuk'
//     },{
//     title: 'ihor',
//         body: 1992
// }];
//
// let elem = document.getElementById('forcoments');
//
// coments.forEach(value => {
//      let elemH2 = document.createElement('h2');
//     let elemP = document.createElement('p');
//     elemP.setAttribute('class', 'forbut')
//     // elemP.style.display = 'block';
//     let butt = document.createElement('button');
//     butt.innerHTML = 'Приховати частину';
//
//     elemH2.innerHTML = value.title;
//     elemP.innerHTML = value.body;
//
//
//     elem.appendChild(elemH2);
//     elem.appendChild(elemP);
//     elem.appendChild(butt);
//
//     let flag = true;
//     butt.onclick = () => {
//         elemP.style.display = flag ? 'none' : 'block';
//         flag = !flag
//     }
// })

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const formA1 = document.forms.formA1;
// const formA2 = document.forms.formA2;
// let button = document.getElementById('buts');
//
// button.onclick = (ev) => {
//     const [firstrad, secondrad] = formA1.check1;
//     const [firstRad, secondRad] = formA2.check2;
//     console.log(firstrad.checked);
//     console.log(secondrad.checked);
//     console.log(secondRad.checked);
//     console.log(firstRad.checked);
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// const elemTable  = document.getElementById('table');
// function tablecreator2000(tr, td, setInElem) {
//
//     let tbl = document.createElement('table');
//     tbl.style.border = '2px solid black'
//
//     for (let i = 0; i < tr; i++) {
//
//         let tr = document.createElement('tr');
//         tbl.appendChild(tr);
//
//         for (let j = 0; j < td; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = `${i}.${j}`;
//             tr.appendChild(td);
//         }
//     }
//
//
//     let set = document.getElementById(`${setInElem}`);
//     set.appendChild(tbl);
// }
// tablecreator2000(2,10, 'table');

//- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
// let images =[
//     {
//         alt: 'x',
//         url: './images/x.jpg'
//     },
//     {
//         alt: '11',
//         url: './images/11.jpg'
//     },
//     {
//         alt: '12',
//         url: './images/12.jpg'
//     }
// ]
//
// let butL = document.getElementById('left');
// let butR = document.getElementById('right');
// let cur = 0;
// let img = document.getElementById('img');
// img.style.width = '500px';
// // images.forEach(value => {
//     butL.onclick = () => {
//         cur - 1 < 0 ? cur = images.length - 1 : cur = cur -1;
//         img.src = images[cur].url;
//         // img.setAttribute('src',`${images[cur].url}`)
//     }
//     butR.onclick = () => {
//         cur + 1 > images.length - 1 ? cur = 0 : cur = cur + 1;
//         img.src = images[cur].url;
//         // img.setAttribute('src',`${images[cur].url}`)
//     }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let arrOfBadWords = ['apple','sky','sugar', 'iron', 'sh#t'];
// const formBadWord = document.forms.badwords;
// formBadWord.sub1.onclick = (ev) =>{
//     ev.preventDefault();
//     const input = formBadWord.txt1.value.toLowerCase();
//     if (arrOfBadWords.includes(input)){
//         alert("ALARM!!!")
//     }
// }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let arrOfBadWords = ['apple','sky','sugar', 'iron', 'sh#t'];
// const formBadWord = document.forms.badwords;
//
// formBadWord.sub1.onclick = (ev) =>{
//     ev.preventDefault();
//
//     let input = formBadWord.txt1.value.toLowerCase();
//     input =input.split(' ');
//
//     for (const elem of input) {
//         if (arrOfBadWords.includes(elem)){
//             alert("ALARM!!!")
//         }
//     }
// }


// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
//
// function check(a1, a2, a3) {
//     const clon = JSON.stringify(usersWithAddress);
//     let clonUser = JSON.parse(clon);
//
//     if (a1 === true) {
//         clonUser = clonUser.filter((value) => value.isMarried === false);
//     }
//     if (a2 === true) {
//         clonUser = clonUser.filter((value) => value.age >= 29);
//     }
//     if (a3 === true) {
//         clonUser = clonUser.filter((value) => value.address.city === 'Kyiv');
//     }
//     return clonUser;
// }
//
// let divMain = document.createElement('div')
// document.body.appendChild(divMain);
//
// const formUser = document.forms.users;
//
// formUser.filters.onclick = (ev) => {
//     ev.preventDefault();
//     const [firstCheck, secondCheck, thirdCheck] = formUser.checkbox1;
//
//     let end = check(firstCheck.checked, secondCheck.checked, thirdCheck.checked);
//     // console.log(end);
//
//     divMain.innerHTML = '';
//     divMain.innerText = '';
//
//     for (let i = 0; i < end.length; i++) {
//         let div1 = document.createElement('div');
//         div1.innerHTML = `ID user:  ${end[i].id}<br>
//                           Name user:  ${end[i].name}<br>
//                           Age user:  ${end[i].age}<br>
//                           Is married:  ${end[i].isMarried}<br>
//                           City:  ${end[i].address.city}<br>
//                           Street:  ${end[i].address.street}<br>
//                           House number: ${end[i].address.number}<br><br>`
//         divMain.appendChild(div1);
//     }
// }



