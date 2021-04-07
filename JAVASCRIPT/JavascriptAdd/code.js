// Cоздать функцию которая принимает число и возвращает  текст как в примере:
    // 3275  —>  "3000 + 200 + 70 +5"
// console.log('vlad');
// console.time('st');
// function parseStr(inputNum = ''){
//     let pars = '';
//     let nuls = 0;
//     let number  = inputNum.toString();
//     let al = number.length;
//
//     for (let i = 0; i < al; i++) {
//         pars +=number[i];
//         nuls = al-i-1;
//         for ( let j = 0; j<nuls; j++ ){
//             pars += 0;
//         }
//         nuls > 0 ?  pars += '+' : pars += '';
//     }
//     return pars;
// }


// console.time('here');
// let a = 0;
// let max = 0;
//
// for ( let i = 99999; i>80000; i--) {
//     for (let j = 99999; j > 80000; j--) {
//         a = i * j;
//         let b = a.toString();
//
//         if (b[0] === b[b.length - 1] && b[1] === b[b.length - 2] && b[2] === b[b.length - 3] && b[3] === b[b.length - 4] && b[4] === b[b.length - 5]) {
//             if (max < b) {
//                 max = b;
//                 console.log(i);
//                 console.log(j);
//             }
//
//         }
//     }
// }
// console.log(max);
// console.timeEnd('here');


// let a = 0;
// let arr = [2,1,0,6,0,4,3,5,8,3,1,7,1,5,6,10,5,8,0,1,1,25,11,8,7,6,5,4,3,2,1]; // 10 25 11
// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     a = arr[i];
//     arr.splice(i,1);
//     if (arr.includes(a) || arr1.includes(a)) {
//         arr1.push(a);
//     }
//     else {
//         arr2.push(a);
//     }
//     i--;
// }
// console.log(arr2);

