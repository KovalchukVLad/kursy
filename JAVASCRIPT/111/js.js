// const text = document.getElementById('text');
// text.value = localStorage.getItem('text')
// text.oninput = () => {
//     localStorage.setItem('text', text.value)
// }
//////////////////////////////////////////////////////////////

// const forms = document.forms.forma
// const obj = JSON.parse(localStorage.getItem('form'));
// for (let key in obj) {
//     forms[key].value = obj[key]
// }
// forms.onchange = () => {
//     const obj = {}
//     for (let item of forms) {
//         if (item.name === 'radio') {
//             if (item.checked) {
//                 obj[item.name] = item.value
//             }
//         } else {
//             obj[item.name] = item.value
//         }
//     }
//
//     localStorage.setItem('form', JSON.stringify(obj))
// }
///////////////////////////////////////////////////////////////////
// const store = document.getElementById('store');
// const arr = JSON.parse(localStorage.getItem('store')) || [];
// let index = arr.length - 1;
// store.value = arr[index] || ''
// document.getElementById('minus').onclick = () => {
//     const arr = JSON.parse(localStorage.getItem('store')) || [];
//     index--
//     if (arr[index]) {
//         store.value = arr[index]
//
//     } else {
//         index++
//         store.value = arr[0] || ''
//     }
// }
// document.getElementById('plus').onclick = () => {
//     const arr = JSON.parse(localStorage.getItem('store')) || [];
//     index++
//     if (arr[index]) {
//         store.value = arr[index]
//     } else {
//         index--
//         store.value = arr[arr.length - 1] || ''
//     }
// }
//
//
// document.getElementById('save').onclick = () => {
//     const fromStorage = JSON.parse(localStorage.getItem('store')) || []
//     fromStorage.push(store.value)
//     index = fromStorage.length - 1;
//     localStorage.setItem('store', JSON.stringify(fromStorage))
//
// }
//////////////////////////////////////////////////////////////////////////////

// const users = document.getElementById('users');
// const form = document.forms.user;
// const showUsers = () => {
//     users.innerText = null
//     const arrUser = JSON.parse(localStorage.getItem('users')) || [];
//     arrUser.forEach((value, index) => {
//         const div = document.createElement('div');
//         const user = document.createElement('div');
//         user.innerText = JSON.stringify(value)
//         div.appendChild(user)
//         const button = document.createElement('button');
//         button.innerText = 'edit'
//         button.onclick = function () {
//             const objUser = JSON.parse(this.parentElement.firstElementChild.innerHTML);
//             console.log(objUser);
//             const arr = JSON.parse(localStorage.getItem('users'));
//
//
//             console.log(arr);
//
//
//
//             let a3 = arr.splice(index, 1);
//             arr.splice(index, 1)
//
//             let anew = a3[0];
//             console.log(anew);
//             for (const anewKey in anew) {
//                 console.log(anew[anewKey]);
//             }
//
//             localStorage.setItem('users', JSON.stringify(arr));
//             for (let key in objUser) {
//                 form[key].value = objUser[key]
//             }
//
//         }
//         const del = document.createElement('button');
//         del.innerText = 'del'
//         del.onclick = () => {
//             const arr = JSON.parse(localStorage.getItem('users'));
//             arr.splice(index, 1)
//             localStorage.setItem('users', JSON.stringify(arr))
//             showUsers()
//         }
//
//         div.appendChild(button)
//         div.appendChild(del)
//         users.appendChild(div)
//     })
// }
// showUsers()
// document.getElementById('btn').onclick = () => {
//     const arr = JSON.parse(localStorage.getItem('users')) || []
//     const obj = {}
//     for (let item of form) {
//         obj[item.name] = item.value
//     }
//     arr.push(obj)
//     localStorage.setItem('users', JSON.stringify(arr))
//     form.reset()
//     showUsers()
// }

// function count1() {
//     let x = 0;
//     return () => {
//         x++;
//         console.log(x);
//     }
// }
//
// let counter = count1();
// counter()
// counter()
// counter()
// counter()
// counter()
// counter = count1();
// counter()
// counter()
// counter()
// counter()

// let newArr = [];
//
// function mushrooms(arr2) {
//     let sumof3 = 0;
//     for (let i = arr2.length - 1; i > arr2.length - 4; i--) {
//         sumof3 += arr2[i];
//     }
//     return sumof3;
// }
//
// function nums() {
//     let arr = [];
//     let c = 0;
//     while (c !== 100) {
//         arr = [];
//         for (let i = 0; i < 7; i++) {
//             arr.push(Math.floor(Math.random() * 50));
//         }
//         c = arr.reduce((previousValue, currentValue) => {
//             currentValue = currentValue + previousValue;
//             return currentValue;
//         })
//     }
//     arr.sort((a, b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return false;
//         }
//     }
//
//
//     let arrinp = arr;
//     let aar =arrinp.join('');
//     if (!(newArr.includes(aar))){
//         newArr.push(aar);
//     }
//
//     return arr;
// }
//
//
// let erroring = 0;
// for (let i = 0; i < 100000; i++) {
//
//     let arr1 = nums();
//     if (!arr1) {
//         continue;
//     }
//     let sum3 = mushrooms(arr1);
//
//     if (sum3 < 50) {
//         erroring = 1;
//         console.log(erroring);
//     }
// }
// console.log(newArr);
// console.log(newArr.length);
