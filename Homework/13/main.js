//Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
//
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
// 
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// function getUp(hour, callback) {
//     setTimeout(() => {
//         if (hour === 8) {
//             callback(null, "Я прокинувся");
//         } else {
//             callback("Я проспав", null);
//         }
//     }, Math.random() * 3000);
// }
//
// function Lunch(eat, callback) {
//     setTimeout(() => {
//         if (eat) {
//             callback(null, "Я поїв");
//         } else {
//             callback("Я голодний", null);
//         }
//     }, Math.random() * 3000);
// }
//
// function ClearTeeth(IsPaste, callback) {
//     setTimeout(() => {
//         if (IsPaste) {
//             callback(null, "Я почистив зуби");
//         } else {
//             callback("Купи зубну пасту", null);
//         }
//     }, Math.random() * 3000);
// }
//
// function GoToUniversity(lessonCount, callback) {
//     setTimeout(() => {
//         if (lessonCount < 4) {
//             callback(null, "Я йду вчитись");
//         } else {
//             callback("Я не хочу вчитись", null);
//         }
//     }, Math.random() * 3000);
// }
//
// function Dinner(diningRoomIsOpen, callback) {
//     setTimeout(() => {
//         if (diningRoomIsOpen) {
//             callback(null, "Ура обід");
//         } else {
//             callback("Ех, залишусь голодним", null);
//         }
//     }, Math.random() * 3000);
// }
//
// function GoHome(CatchBus, callback) {
//     setTimeout(() => {
//         if (CatchBus === "Zovkva") {
//             callback(null, "Я їду додому");
//         } else {
//             callback("Я не туди поїхав", null);
//         }
//     }, Math.random() * 3000);
// }
//
// function Sapper(mamDish, callback) {
//     setTimeout(() => {
//         if (mamDish === "Вареники") {
//             callback(null, "Я повечеряв. Дякую мам");
//         } else {
//             callback(`Я не хочу ${mamDish}`, null);
//         }
//     }, Math.random() * 3000);
// }
//
// function DoHomeTask(isInternet, isLight, callback) {
//     setTimeout(() => {
//         if (isInternet && isLight) {
//             callback(null, "Сідаю вчити уроки");
//         } else {
//             callback(`Нема світла та інтернету`, null);
//         }
//     }, Math.random() * 3000);
// }
//
// function Sleep(hour, callback) {
//     setTimeout(() => {
//         if (hour > 23) {
//             callback(null, "Пора спати");
//         } else {
//             callback("Не хочу ще спати", null);
//         }
//     }, Math.random() * 3000);
// }
//
// getUp(8, (error, date) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(date);
//         Lunch(true, (error, date) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(date);
//                 ClearTeeth(true, (error, date) => {
//                     if (error) {
//                         console.log(error);
//                     } else {
//                         console.log(date);
//                         GoToUniversity(3, (err, data) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(data);
//                                 Dinner(true, (err, date) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else {
//                                         console.log(date);
//                                         GoHome("Zovkva", (err, date) => {
//                                             if (err) {
//                                                 console.log(err);
//                                             } else {
//                                                 console.log(date);
//                                                 DoHomeTask(true, true, (err, data) => {
//                                                     if (err) {
//                                                         console.log(err);
//                                                     } else {
//                                                         console.log(data);
//                                                         Sapper("Вареники", (err, data) => {
//                                                             if (err) {
//                                                                 console.log(err);
//                                                             } else {
//                                                                 console.log(data);
//                                                                 Sleep(24, (err, data) => {
//                                                                     if (err) {
//                                                                         console.log(err);
//                                                                     } else {
//                                                                         console.log(data);
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

function getUp(hour) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hour === 8) {
                resolve("Я прокинувся");
            } else {
                reject("Я проспав");
            }
        }, Math.random() * 3000);
    });
}

function Lunch(eat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eat) {
                resolve("Я поїв");
            } else {
                reject("Я голодний");
            }
        }, Math.random() * 3000);
    });
}

function ClearTeeth(IsPaste) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (IsPaste) {
                resolve("Я почистив зуби");
            } else {
                reject("Купи зубну пасту");
            }
        }, Math.random() * 3000);
    });
}

function GoToUniversity(lessonCount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lessonCount < 4) {
                resolve("Я йду вчитись");
            } else {
                reject("Я не хочу вчитись");
            }
        }, Math.random() * 3000);
    });
}

function Dinner(diningRoomIsOpen) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (diningRoomIsOpen) {
                resolve("Ура обід");
            } else {
                reject("Ех, залишусь голодним");
            }
        }, Math.random() * 3000);
    });
}

function GoHome(CatchBus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (CatchBus === "Zovkva") {
                resolve("Я їду додому");
            } else {
                reject("Я не туди поїхав");
            }
        }, Math.random() * 3000);
    });
}

function Sapper(mamDish) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mamDish === "Вареники") {
                resolve("Я повечеряв. Дякую мам");
            } else {
                reject(`Я не хочу ${mamDish}`);
            }
        }, Math.random() * 3000);
    });

}

function DoHomeTask(isInternet) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isInternet) {
                resolve("Сідаю вчити уроки");
            } else {
                reject("Нема світла");
            }
        }, Math.random() * 3000);
    });

}

function Sleep(hour) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hour > 23) {
                resolve(null, "Пора спати");
            } else {
                reject("Не хочу ще спати", null);
            }
        }, Math.random() * 3000);
    });
}

// getUp(8)
//     .then(value => {
//         console.log(value);
//         return ClearTeeth(true);
//     })
//     .then(value => {
//         console.log(value);
//         return Lunch(true);
//     })
//     .then(value => {
//         console.log(value);
//         return GoToUniversity(3);
//     })
//     .then(value => {
//         console.log(value);
//         return Dinner(true);
//     })
//     .then(value => {
//         console.log(value);
//         return GoHome("Zovkva");
//     })
//     .then(value => {
//         console.log(value);
//         return Sapper("Вареники");
//     })
//     .then(value => {
//         console.log(value);
//         return DoHomeTask(true);
//     })
//     .then(value => {
//         console.log(value);
//         return Sleep(24);
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(res => {
//         console.log(res);
//     });

async function Myday(){
    try {


        const GetUp = await getUp(8);
        console.log(GetUp);
        const teeth = await ClearTeeth(true);
        console.log(teeth);
        const lunch = await Lunch(true);
        console.log(lunch);
        const goUniver = await GoToUniversity(3);
        console.log(goUniver);
        const dinner = await Dinner(true);
        console.log(dinner);
        const goHome = await GoHome("Zovkva");
        console.log(goHome);
        const doHW = await DoHomeTask(false);
        console.log(doHW);
        const sapper = await Sapper("Варкеики");
        console.log(sapper);
        const sleep = await Sleep(24);
        console.log(sleep);
    }
    catch (e){
        console.log(e);
    }
}
Myday();