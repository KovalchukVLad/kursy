// Callback
// let food = 2;
// let stamina = 15;
// // встаєш перевіряєш стаміну
// //якщо стаміна <10 то йдеш їсти,
// // якщо фуд менше 5 то йдеш в магазин і +20 до фуд але -5 до стаміни,
// // якщо їш то -5 до фуд + 10 до стаміни і миєш посуду
// //йдеш гуляти і перевіряєш перед тим стаміну після того -5 до стаміни
// // вчиш джс і перевіряєш перед тим стаміну після того -2 до стаміни
// // дивишся лекцію -2 до стаміни
// // йдеш спати, якщо стаміна менше 5 то спиш і потім стаміна знов 10, якщо нє то вчиш джс
//
// function wakeUp(stamina, callb) {
//     setTimeout(() => {
//         if (stamina >= 10) {
//             callb(null, "I wake up")
//         } else {
//             callb('I want sleep more');
//         }
//     }, 500)
//
// }
//
// function eat(food, callb) {
//     setTimeout(() => {
//         if (food >= 5) {
//             callb(null, 'Go eat');
//         } else {
//             callb('Go and buy food');
//         }
//     }, 1500)
// }
//
// function goMarket(isGo, callb) {
//     setTimeout(() => {
//         if (isGo) {
//             callb(null, 'Go already eat');
//         } else {
//             callb('1')
//         }
//     }, 4000);
// }
//
// function washDishes(isWash, callb) {
//     setTimeout(() => {
//         if (isWash) {
//             callb(null, 'Dishes is clear');
//         } else {
//             callb('You are buzy.');
//         }
//     }, 800)
// }
//
// function walk(stamina, callb) {
//     setTimeout(() => {
//         if (stamina >= 5) {
//             callb(null, 'Walk was fine');
//         } else {
//             callb('I am tired for walk');
//         }
//     }, 3000)
// }
//
// function learnJs(stm, callb) {
//     setTimeout(() => {
//         let i = 0;
//         while (stm > 2){
//             i++;
//             stm--;
//         }
//
//         if (i>0) {
//             callb(null, `I learn JS ${i} hours`);
//         } else {
//             callb('Why you dont learn JS');
//         }
//     }, 1000)
// }
//
// function watshLection(watch, callb) {
//     setTimeout(() => {
//         if (watch) {
//             callb(null, '2 hour');
//         } else {
//             callb('Why you dont listen Victor?');
//         }
//     }, 2000)
// }
//
// function goSleep(sleep, callb) {
//     setTimeout(() => {
//         if (sleep) {
//             callb(null, 'good night');
//         } else {
//             callb('SLEEEEEPP!');
//         }
//     }, 400)
// }
//
//
// wakeUp(stamina, (err, message) => {
//     if (!err) {
//         console.log('I ready for great day');
//     } else {
//         console.log('bye bye');
//     }
//     eat(food, (err, message) => {
//         if (!err) {
//             console.log('I ate');
//             food -= 5;
//             stamina += 10;
//             washDishes(true, (err, message) => {
//                 if (!err) {
//                     console.log('Dishes are clear');
//                 } else {
//                     console.log('Dishes arent clear. Later');
//                 }
//                 //
//                 walk(stamina, (err, message) => {
//                     if (!err) {
//                         console.log('I walk great');
//                         stamina -= 5;
//                     } else {
//                         console.log('I dont walk great');
//                     }
//                     learnJs(stamina, (err, message) => {
//                         if (!err) {
//                             console.log(message);
//                         } else {
//                             console.log('I am lazy ass');
//                         }
//                         watshLection(true, (err, message) => {
//                             if (!err) {
//                                 console.log('I listen Victor');
//                             } else {
//                                 console.log('I am lazy ass again');
//                             }
//                             goSleep(true, (err, message) => {
//                                 if (!err) {
//                                     console.log('I SLEEP');
//                                 } else {
//                                     console.log('I am NOT SLEEP');
//                                 }
//
//                             });
//                         });
//                     });
//
//                 });
//             });
//         } else {
//             console.log('Where is my food');
//                 goMarket(true, (err, message) => {
//                     if (!err) {
//                         console.log('I buy food');
//                         food += 20;
//                         stamina -= 5;
//                     } else {
//                         console.log('Market is closed');
//                         stamina -= 5;
//                     }
//                     food -= 5;
//                     washDishes(true, (err, message) => {
//                         if (!err) {
//                             console.log('Dishes are clear');
//                         } else {
//                             console.log('Dishes arent clear');
//                         }
//                         //
//                         walk(stamina, (err, message) => {
//                             if (!err) {
//                                 console.log('I walk great');
//                                 stamina -= 5;
//                             } else {
//                                 console.log('I dont walk great');
//                             }
//                                 learnJs(stamina, (err, message) => {
//                                     if (!err) {
//                                         console.log(message);
//                                     } else {
//                                         console.log('I am lazy ass');
//                                     }
//                                     watshLection(true, (err, message) => {
//                                         if (!err) {
//                                             console.log('I listen Victor');
//                                         } else {
//                                             console.log('I am lazy ass again');
//                                         }
//                                         goSleep(true, (err, message) => {
//                                             if (!err) {
//                                                 console.log('I SLEEP');
//                                             } else {
//                                                 console.log('I am NOT SLEEP');
//                                             }
//
//                                         });
//                                     });
//                                 });
//
//                         });
//                     });
//                 });
//         }
//
//
//     });
// });
//
//
//
//
//

//PROMISE
//
// встав поїв + 10 до стаміни,
// погуляв +5 до стаміни
// дивишся лекцію +2 до скіла -5 до стаміни
// пишеш код + 5 до скіла -5 до стаміни
// відпочиваєш +10 до стаміни
// пишеш код поки не буде 0 стаміни і тоді йдеш спати
//
//
// let stamina = 15;
// let skills = 0;
// let food = 7;
// let dish = false;
// let a1 = 0;
//
// function wakeUp(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stamina > 10) {
//                 console.log('Я виспався');
//                 resolve(stamina);
//             } else {
//                 reject('Я хочу спати ще');
//             }
//         }, 2000)
//     })
// }
//
// function eat(food, stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food > 5) {
//                 stamina += 10;
//                 food -= 5;
//                 dish = true;
//                 console.log('Я поїв');
//                 resolve(stamina, dish);
//             } else if (stamina > 0) {
//                 dish = true;
//                 console.log('Холодильник пустий');
//                 resolve(stamina, dish);
//             } else {
//                 reject('Немає сил для подальших дій')
//             }
//         }, 3000)
//     })
// }
//
// function washDishes(stamina, isWash) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWash) {
//                 console.log('Посуда помита');
//                 resolve(stamina, isWash);
//             } else {
//                 reject('Посуда не помита')
//             }
//         }, 1500)
//     })
// }
//
// function walk(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stamina > 10) {
//                 stamina += 5;
//                 console.log('Прогулянка');
//                 resolve(stamina);
//             } else {
//                 reject('Прогулянка не задалась')
//             }
//         }, 4000)
//     })
// }
//
// function watchLection(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stamina < 25) {
//                 console.log('Відпочити б');
//                 resolve(stamina);
//             } else if (stamina > 25) {
//                 skills += 2;
//                 stamina -= 5;
//                 console.log('Лекція закінчилась');
//                 resolve(stamina, skills);
//             } else {
//                 reject('Лінь')
//             }
//         }, 3000)
//     })
// }
//
// function learnJs(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             while (stamina >= 5) {
//                 stamina -= 5;
//                 skills += 5;
//                 a1++;
//             }
//             if (stamina<5){
//                 resolve(stamina, skills , a1);
//             }
//             else {
//                 reject('Хватить на сьогодні');
//             }
//         }, 1000)
//     })
// }
//
// function rest(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             stamina +=10;
//             if (stamina>=10){
//                 console.log('Rest is done');
//                 resolve(stamina);
//             }
//             else {
//                 reject('Не виходить відпочити');
//             }
//         }, 1500)
//     })
// }
//
// function sleep(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (stamina>=0){
//                 resolve(stamina);
//             }
//             else {
//                 reject("Стаміна мінусова");
//             }
//         }, 5000)
//     })
// }
//
// wakeUp(stamina)
//     .then(value => {
//         console.log(`Моя стаміна - ${value}`);
//         return eat(food, value);
//     })
//     .then((value) => {
//         console.log(`Моя стаміна - ${value}`);
//         return washDishes(value, dish);
//     })
//     .then((value, dish) => {
//         console.log(`Моя стаміна - ${value}`);
//         return walk(value);
//     })
//     .then(value => {
//         console.log(`Моя стаміна - ${value}`);
//         return watchLection(value);
//     })
//     .then(value => {
//         if (value < 25) {
//             return walk(value).then(value => {
//                 console.log(`Моя стаміна - ${value}`);
//                 return watchLection(value);
//             })
//         }
//         console.log(`Моя стаміна - ${value}`);
//         console.log(`Мої скіли - ${skills}`);
//         return learnJs(value, skills);
//     })
//     .then((value) => {
//         console.log(`Моя стаміна - ${value}`);
//         console.log(`Мої скіли - ${skills}`);
//         console.log(`Загалом я вчився - ${a1} годин`);
//         return rest(value);
//     })
//     .then(value => {
//         console.log(`Моя стаміна - ${value}`);
//         return learnJs(value);
//     })
//     .then(value => {
//         console.log(`Моя стаміна - ${value}`);
//         console.log(`Мої скіли - ${skills}`);
//         console.log(`Загалом я вчився - ${a1} годин`);
//         return sleep(value);
//     })
//     .then(value => {
//             console.log('------------------------');
//             console.log('День видався продуктивним');
//             console.log(`Моя стаміна - ${value}`);
//             console.log(`Мої скіли - ${skills}`);
//             console.log(`Загалом я вчився - ${a1} годин`);
//             console.log('Час спати');
//     })
//     .catch(reason => {
//         console.warn(reason);
//     })

//async
//
//
//
// let stamina = 42;
// let skills = 12;
// let food = 7;
// let dish = false;
// let a1 = 0;
//
// function wakeUp(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stamina > 10) {
//                 console.log('Я виспався');
//                 resolve(stamina);
//             } else {
//                 reject('Я хочу спати ще');
//             }
//         }, 2000)
//     })
// }
//
// function eat(food, stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food > 5) {
//                 stamina += 10;
//                 food -= 5;
//                 dish = true;
//                 console.log('Я поїв');
//                 resolve(stamina);
//             } else if (stamina > 0) {
//                 dish = true;
//                 console.log('Холодильник пустий');
//                 resolve(stamina, dish);
//             } else {
//                 reject('Немає сил для подальших дій')
//             }
//         }, 3000)
//     })
// }
//
// function washDishes(stamina, isWash) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWash) {
//                 console.log('Посуда помита');
//                 resolve(stamina);
//             } else {
//                 reject('Посуда не помита')
//             }
//         }, 1500)
//     })
// }
//
// function walk(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stamina > 10) {
//                 stamina += 3;
//                 console.log('Прогулянка');
//                 resolve(stamina);
//             } else {
//                 reject('Прогулянка не задалась')
//             }
//         }, 4000)
//     })
// }
//
// function watchLection(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stamina > 25) {
//                 skills += 2;
//                 stamina -= 5;
//                 console.log('Лекція закінчилась');
//                 resolve(stamina);
//             } else {
//                 reject('Лінь')
//             }
//         }, 3000)
//     })
// }
//
// function learnJs(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             while (stamina >= 5) {
//                 stamina -= 5;
//                 skills += 5;
//                 a1++;
//             }
//             if (stamina < 5) {
//                 resolve(stamina);
//             } else {
//                 reject('Хватить на сьогодні');
//             }
//         }, 1000)
//     })
// }
//
// function rest(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             stamina += 10;
//             if (stamina >= 10) {
//                 console.log('Rest is done');
//                 resolve(stamina);
//             } else {
//                 reject('Не виходить відпочити');
//             }
//         }, 1500)
//     })
// }
//
// function sleep(stamina) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stamina >= 0) {
//                 resolve(stamina);
//             } else {
//                 reject("Стаміна мінусова");
//             }
//         }, 5000)
//     })
// }
//
// async function setupdDay() {
//     let stamin = await wakeUp(stamina);
//     console.log(`Моя стаміна - ${stamin}`);
//
//     stamin = await eat(food, stamin);
//     console.log(`Моя стаміна - ${stamin}`);
//
//     stamin = await washDishes(stamin, dish);
//     console.log(`Моя стаміна - ${stamin}`);
//
//     stamin = await walk(stamin);
//     console.log(`Моя стаміна - ${stamin}`);
//
//     if (stamin < 25) {
//         console.log('Відпочити б');
//         stamin = await walk(stamin);
//         console.log(`Моя стаміна - ${stamin}`);
//     }
//
//     stamin = await watchLection(stamin);
//     console.log(`Моя стаміна - ${stamin}`);
//     console.log(`Мої скіли - ${skills}`);
//
//     stamin = await learnJs(stamin);
//     console.log(`Моя стаміна - ${stamin}`);
//     console.log(`Мої скіли - ${skills}`);
//     console.log(`Загалом я вчився - ${a1} годин`);
//
//     stamin = await rest(stamin);
//     console.log(`Моя стаміна - ${stamin}`);
//
//     stamin = await learnJs(stamin);
//     console.log(`Моя стаміна - ${stamin}`);
//     console.log(`Мої скіли - ${skills}`);
//     console.log(`Загалом я вчився - ${a1} годин`);
//
//     stamin = await sleep(stamin);
//     console.log('--------------------------');
//     console.log('День видався продуктивним');
//     console.log(`Моя стаміна - ${stamin}`);
//     console.log(`Мої скіли - ${skills}`);
//     console.log(`Загалом я вчився - ${a1} годин`);
//     console.log('Час спати');
//
//
// }
//
// setupdDay();
