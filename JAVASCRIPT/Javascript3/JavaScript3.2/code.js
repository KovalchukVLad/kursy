// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let getTextA = document.getElementById('main_header');
// getTextA.innerText = 'feb-2021';


// b) робить шириниу елементу ul 400px
// let getElementB = document.getElementsByTagName('ul');
// for( let elem = 0; elem<getElementB.length; elem++){
//     getElementB[elem].style.width = '400px';
//     getElementB[elem].style.backgroundColor = '#d69f9f';
// }
//або
// for (const el of getElementB){
//     el.style.width = '400px';
//     el.style.height = '400px';
//     el.style.backgroundColor = '#d69f9f'
// }


// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let getElementC = document.getElementsByClassName('linkList');
// for (const elementCElement of getElementC) {
//     elementCElement.style.width = '50%';
//     elementCElement.style.backgroundColor = '#9dc397';
// }


// d) отримує текст який зберігається в елементі з класом listElement2
// let getElementD = document.getElementsByClassName('listElement2');
// for (const elementDElement of getElementD) {
//     console.log(elementDElement.innerText);
// }


// e) отримує всі елементи li та змінює ім колір фону на сірий
// let getElementE = document.getElementsByTagName('li');
// for (let i = 0; i < getElementE.length; i++) {
//     getElementE[i].style.backgroundColor= '#928f8f';
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
// let getElementF = document.getElementsByTagName('a');
// for (const elementFElement of getElementF) {
//     elementFElement.classList.add('anchor');
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let getElementG = document.getElementsByTagName('a');
// for (const elementGElement of getElementG) {
//     if (elementGElement.innerText === 'link3'){
//         elementGElement.style.fontSize = '40px';
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let getElementH = document.getElementsByTagName('a');
// for(const elementH of getElementH){
//     elementH.classList.add(`element_${elementH.innerText}`);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let getElementI = document.getElementsByClassName('sub-header');
// let getColor = prompt('Enter background color');
// console.log(getColor);
// for (const colorElement of getElementI) {
//     colorElement.style.backgroundColor = `${getColor}`;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let getElementJ = document.getElementsByClassName('sub-header');
// let colorR = prompt('Enter R of RGB');
// let colorG = prompt('Enter G of RGB');
// let colorB = prompt('Enter B of RGB');
// for(const col of getElementJ){
//     if (col.innerText === 'content 2 segment') {
//         col.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`;
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let getElementK =document.getElementsByClassName('content_1');
// let txt1 = prompt('Enter Text for input');
// for( const k of getElementK){
//     k.innerText = `${txt1}`;
// }


// l) отримати елементи p та змінити їм padding на 20px
// let getElementL = document.getElementsByTagName('p');
// for (const elementLElement of getElementL) {
//     elementLElement.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let getElementM = document.getElementsByClassName('text2');
// for (const elementMElement of getElementM) {
//     elementMElement.innerText = 'feb-2021';
// }

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

// for (let i = 0; i < rules.length; i++) {
//     let divOne = document.createElement('div');
//     divOne.classList.add('rules',`rule${i+1}`);
//     let divTwo = document.createElement('h2');
//     divTwo.innerHTML = `${rules[i].title}`;
//     let divThree = document.createElement('p');
//     divThree.innerHTML = `${rules[i].body}`;
//
//     document.body.appendChild(divOne);
//     divOne.appendChild(divTwo);
//     divOne.appendChild(divThree);
// }
//


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// let newFullArr = [];
// for(let i=0; i<usersWithId.length; i++){
//     for(let j=0; j<citiesWithId.length; j++){
//      if(usersWithId[i].id === citiesWithId[i].user_id){
//          usersWithId[i].address = citiesWithId[i];
//          newFullArr.push(usersWithId[i]);
//      }
//     }
// }
// console.log(newFullArr);
//
