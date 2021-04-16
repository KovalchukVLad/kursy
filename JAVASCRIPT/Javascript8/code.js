// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// let someTxtForm = document.forms.sometxt;
// someTxtForm.but1.onclick = (ev) =>{
//     ev.preventDefault();
//     const area = someTxtForm.text.value;
//     localStorage.setItem('sometxt',area);
// }
//
// someTxtForm.text.setAttribute('value', `${localStorage.getItem('sometxt')}`);
//
// 2 варіант
//
// let area = document.getElementById('areatxt');
//
// area.value = localStorage.getItem('input');
//
// area.oninput = ({target: {value}}) => {
//     localStorage.setItem('input',value);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//
// let info = document.forms.info;
//
// info.name.oninput = (ev) => {
//     ev.preventDefault();
//     let a = info.name.value;
//     localStorage.setItem('name', a);
// }
// info.surname.oninput = (ev) => {
//     ev.preventDefault();
//     let a1 = info.surname.value;
//     localStorage.setItem('surname', a1);
// }
// info.age.oninput = (ev) => {
//     ev.preventDefault();
//     let a2 = info.age.value;
//     localStorage.setItem('age', a2);
// }
//
// info.sel.onchange = (ev) => {
//     ev.preventDefault();
//     let ff = info.sel.value;
//     localStorage.setItem('sel', ff);
// }
//
// info.vvv.onchange = (ev) => {
//     ev.preventDefault();
//         const firstrad = info.vvv;
//         const secondtrad = info.www;
//     let rad1 = (firstrad.checked);
//     let rad2 = (secondtrad.checked);
//     console.log(rad1);
//     console.log(rad2);
//     localStorage.setItem('rad1',rad1);
//     localStorage.setItem('rad2',rad2);
// }
// info.www.onchange = (ev) => {
//     ev.preventDefault();
//         const firstrad = info.vvv;
//         const secondtrad = info.www;
//     let rad1 = (firstrad.checked);
//     let rad2 = (secondtrad.checked);
//     console.log(rad1);
//     console.log(rad2);
//     localStorage.setItem('rad1',rad1);
//     localStorage.setItem('rad2',rad2);
// }
//
// info.check1.onchange = (ev) => {
//     ev.preventDefault();
//     const firstcheck = info.check1;
//     let check = (firstcheck.checked);
//     localStorage.setItem('ismarried', check);
// }
// info.city.oninput = (ev) => {
//     ev.preventDefault();
//     let city = info.city.value;
//     localStorage.setItem('city', city);
// }
//
//
// info.name.setAttribute('value', `${localStorage.getItem('name')}`);
// info.surname.setAttribute('value', `${localStorage.getItem('surname')}`);
// info.age.setAttribute('value', `${localStorage.getItem('age')}`);
//
// let genderF = document.getElementById('sel2');
// let gender = localStorage.getItem('sel');
// if (gender === 'Жінка') {
//     genderF.setAttribute('selected', 'true');
// } else {
//     genderF.removeAttribute('selected');
// }
//
// let radio1 = localStorage.getItem('rad1');
// let radio2 = localStorage.getItem('rad2');
// if (radio1==='true'){
//     info.www.removeAttribute('checked')
//     info.vvv.setAttribute('checked','checked');
// }
// if (radio2==='true'){
//     info.vvv.removeAttribute('checked')
//     info.www.setAttribute('checked','checked');
// }
//
//
// let ism = localStorage.getItem('ismarried');
// if (ism === 'true') {
//     info.check1.setAttribute('checked', 'true');
// } else {
//     info.check1.removeAttribute('checked');
// }
//
// info.city.setAttribute('value', `${localStorage.getItem('city')}`);
//

// 2 варіант (Адекватний)
//
// const forms = document.getElementById('info');
//
// for (const form of forms) {
//     if (form.type === 'radio') {
//     let aid = localStorage.getItem(form.name);
//         if( aid === form.id){
//         form.checked = true;
//     }
//     }
//      else if ( form.type === 'checkbox') {
//         let ach = localStorage.getItem(form.name);
//         console.log(ach);
//         if( ach === 'true'){
//                 form.checked = true;
//         }
//     }
//     else{
//         form.value = localStorage.getItem(form.name);
//     }
// }
//
// forms.oninput = ({target: {value,name, type,checked, id}}) =>{
//     if (type === 'radio'){
//       localStorage.setItem(name,id);
//     }
//     if ( type === 'checkbox'){
//         localStorage.setItem(name,checked);
//     }
//     else{
//         localStorage.setItem(name,value);
//     }
// }

//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// const area = document.getElementById('text1');
// const save = document.getElementById('save');
// const left = document.getElementById('left');
// const right = document.getElementById('right');
// const arr = [];
// let index = 0;
//
// if (!(localStorage.getItem('input'))){
//     localStorage.setItem('input',JSON.stringify(arr));
// }
//
// let data1 = JSON.parse(localStorage.getItem('input'));
// index = data1.length-1;
// if (data1[data1.length-1]){
//     area.value = data1[data1.length-1];
// }
//
// save.onclick = () =>{
//     let a = area.value;
//     let data = JSON.parse(localStorage.getItem('input'));
//     data.push(a);
//     localStorage.setItem('input', JSON.stringify(data));
//     console.log(index);
// }
//
// left.onclick = () => {
//
//     data1 = JSON.parse(localStorage.getItem('input'));
//     if(index === 0){
//         area.value = data1[0];
//         alert('Це ваша перша зміна');
//     }
//     else{
//         index--;
//         area.value = data1[index];
//     }
// }
//
// right.onclick = () => {
//
//     data1 = JSON.parse(localStorage.getItem('input'));
//     if(index === data1.length-1){
//         area.value = data1[data1.length-1];
//         alert('Це ваша остання зміна');
//     }
//     else{
//         index++;
//         area.value = data1[index];
//     }
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// let arr = [];
// let id = 1;
//
// class User {
//     constructor(id, fullname, phone, mail, company, departament, birthday) {
//         this.id = id;
//         this.fullname = fullname;
//         this.phone = phone;
//         this.mail = mail;
//         this.company = company;
//         this.departament = departament;
//         this.birthday = birthday;
//     }
// }
//
// // let user1 = new User(1, 'vlad', 20, '@g', 'nasa', 'sky', 2501);
// // let user2 = new User(2, 'vlad', 220, '@g', 'nassda', 'skssdcy', 2501);
// // arr.push(user1);
// // arr.push(user2);
//
//
// let userform = document.forms.users;
// userform.add.onclick = (ev) => {
//     ev.preventDefault();
//
//     while (localStorage.getItem(`id${id}`) !== null){
//        id++;
//     }
//
//     alert(`Вам присвоєно ID - ${id}, запамятайте його`)
//     const fullname = userform.fullname.value;
//     const phone = userform.phone.value;
//     const mail = userform.mail.value;
//     const company = userform.company.value;
//     const departament = userform.departament.value;
//     const birthday = userform.birthday.value;
//     let user = new User(id, fullname, phone, mail, company, departament, birthday);
//     console.log(user);
//     localStorage.setItem(`id${id}`, JSON.stringify(user));
// }
//
// userform.remove.onclick = (ev) => {
//     ev.preventDefault();
//     const idForDelete = userform.delete.value;
//     if (idForDelete) {
//         localStorage.removeItem(`id${idForDelete}`);
//         alert('Ваші дані видалено')
//     } else {
//         alert('Введіть ваш ІД')
//     }
// }
//
// userform.edit.onclick = (ev) => {
//     ev.preventDefault();
//     const idForDelete = userform.delete.value;
//     if (idForDelete) {
//         let arr = JSON.parse(localStorage.getItem(`id${idForDelete}`));
//         console.log(arr.fullname);
//         userform.fullname.setAttribute('value', arr.fullname);
//         userform.phone.setAttribute('value', arr.phone);
//         userform.mail.setAttribute('value', arr.mail);
//         userform.company.setAttribute('value', arr.company);
//         userform.departament.setAttribute('value', arr.departament);
//         userform.birthday.setAttribute('value', arr.birthday);
//         localStorage.removeItem(`id${idForDelete}`);
//
//     } else {
//         alert('Введіть ваш ІД')
//     }
// }