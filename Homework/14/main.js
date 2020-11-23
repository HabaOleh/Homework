//Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
let txt = "Hello World";
let str=txt.split("");
console.log(str);
function TypeMachine(letter){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(letter+" (затримка:"+Math.round(Math.random()*1000)+"ms)");
        },Math.random()*1000);
    });
}
async function Do(){
    for (let i of str) {
        const let1 = await TypeMachine(i);
        console.log(let1);
    }
}
Do();