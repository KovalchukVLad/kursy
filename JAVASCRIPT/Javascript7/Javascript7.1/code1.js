// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
let a = document.querySelectorAll('h2');

let divMain = document.createElement('div');
divMain.style.border = '2px solid black';
divMain.style.width = '360px';
divMain.style.lineHeight = '20px';

document.body.appendChild(divMain);


for (let i = 0; i < a.length; i++) {
    a[i].setAttribute('id',`href${i+1}`);
    let div1 = document.createElement('div');
div1.innerHTML = `<a href="#href${i+1}"> ${i+1}. ${a[i].innerHTML}     </a>    `;//??
divMain.appendChild(div1);
}
