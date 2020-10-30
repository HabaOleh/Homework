// //1 --створити масив та вивести його в консоль:
// // - з 5 числових значень
// let mass=[20,50,-36,28.5,44];
//  console.log(mass[0]);
//  console.log(mass[1]);
//  console.log(mass[2]);
//  console.log(mass[3]);
//  console.log(mass[4]);
// //- з 5 стічкових значень
// let mass1=["Hello", "World", "a","58","true"];
// console.log(mass1[0]);
// console.log(mass1[1]);
// console.log(mass1[2]);
// console.log(mass1[3]);
// console.log(mass1[4]);
// //- з 5 значень стрічкового, числового та булевого типу
// let arr=["Hello",22,28.5,true,false]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// //2  Створити пустий масив. Наповнити його будь-якими значеннями
// // звертаючись до конкретного індексу. Вивести в консоль
// let arr=[];
// arr[0]="Okten";
// arr[1]=56;
// arr[2]=true;
// arr[3]=21.5;
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// //3 - За допомогою циклу for і document.write()
// // вивести 10 блоків div c довільним текстом всередині
// for(let i=0;i<10;i++){
//     document.write("<div>Hello Oleh </div>");
// }

// //4- За допомогою циклу for і document.write() вивести 10 блоків div
// // c довільним текстом і індексом всередині
// for(let i=0;i<10;i++){
//      document.write("<div>Hello "+i+" </div>");
// }


// //5- За допомогою циклу while вивести в документ 20 блоків h1
// // c довільним текстом всередині.
// let i=0;
// while(i<20) {
//     document.write("<h1>How are you</h1>");
//     i++;
// }

// //6 - За допомогою циклу while вивести в документ 20 блоків h1
// // c довільним текстом і індексом всередині.
// let i=0;
// while(i<20) {
//     document.write(`<h1>How are you ${i}</h1>`);
//     i++;
// }

// //7 - Створити масив з 10 числових елементів.
// // Вивести в консоль всі його елементи в циклі.
// let arr=[0,5,7,9,25,36,2,84,103,-56];
// for(let i=0;i<10;i++){
//     console.log(arr[i]);
// }

// //8- Створити масив з 10 строкрових елементів.
// // Вивести в консоль всі його елементи в циклі.
// let arr=["five","56","three","b","true","Hello","5","f","g","one"];
// for(let i=0;i<10;i++){
//     console.log(arr[i]);
// }

// //9 - Створити масив з 10 елементів будь-якого типу.
// // Вивести в консоль всі його елементи в циклі.
// let arr=["five",5,"three",36.6,true,"Hello",5,"f",-15,"one"];
// for(let i=0;i<10;i++){
//     console.log(arr[i]);
// }

// //10- Створити масив з 10 елементів числового, стірчкового і булевого типу.
// // За допомогою if та typeof вивести тільки булеві елементи
// let arr=[5,"true",false,-36.5,true,"false",1,"gggg",false,true];
// for(let i=0;i<10;i++){
//     if(typeof arr[i]=="boolean"){
//         console.log(arr[i]);
//     }
// }

// //11 - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// // За допомогою if та typeof вивести тільки числові елементи
// let arr=[5,"true",999,-36.5,true,"false",1,"gggg",-6,true];
// for(let i=0;i<10;i++){
//     if(typeof arr[i]=="number"){
//         console.log(arr[i]);
//     }
// }

// //12- Створити масив з 10 елементів числового, стрічкового і булевого типу.
// // За допомогою if та typeof вивести тільки рядкові елементи
// let arr=[5,"true",999,-36.5,true,"false","1","gggg",-6,true];
// for(let i=0;i<10;i++){
//     if(typeof arr[i]=="string"){
//         console.log(arr[i]);
//     }
// }

// //13- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// // Вивести в консоль всі його елементи в циклі.
// let arr=[];
// arr[0]=56;
// arr[1]="Hello";
// arr[2]=true;
// arr[3]=36.6;
// arr[4]=-90;
// arr[5]="true";
// arr[6]=false;
// arr[7]="fffff";
// arr[8]=8;
// arr[9]=true;
// for(let i=0;i<10;i++){
//     console.log(arr[i]);
// }

// //14 - Створити цикл for на 10  ітерацій з кроком 1.
// // Вивести поточний номер кроку через console.log та document.write
// for(let i=0;i<10;i++){
//     console.log(i);
//     document.write(i+" ");
// }

// //15- Створити цикл for на 100 ітерацій з кроком 1.
// // Вивести поточний номер кроку через console.log та document.write
// for(let i=0;i<100;i++){
//     console.log(i);
//     document.write(i+" ");
// }

// //16- Створити цикл for на 100 ітерацій з кроком 2.
// //Вивести поточний номер кроку через console.log та document.write
// for(let i=0;i<100;i+=2){
//     console.log(i);
//     document.write(i+" ");
// }

// //17 - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки.
// // через console.log + document.write
// for(let i=0;i<100;i++){
//     if(i%2===0) {
//         console.log(i);
//         document.write(i + " ");
//     }
// }

// //18 - Створити цикл while на 100 ітерацій. Вивести тільки парні кроки.
// // // через console.log + document.write
// let i=0;
// while(i<100){
//     if(i%2===0) {
//         console.log(i);
//         document.write(i + " ");
//     }
//     i++;
// }

// //19 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
// // через console.log + document.write
// for(let i=0;i<100;i++){
//     if(i%2!==0) {
//         console.log(i);
//         document.write(i + " ");
//     }
// }

// // 20 - Відтворити роботу годинника,відрахувавши 2 хвилини
// // (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i=0;i<2;i++){
//     for(let j=0;j<60;j++){
//         console.log(i,j);
//     }
// }

// //21Відтворити роботу годинника, відрахувавши  2 години 20 хвилини
// // (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let i=0;i<3;i++){
//     for(let j=0;j<30;j++){
//         for (let k=0;k<60;k++){
//             console.log(i,j,k);
//         }
//     }
// }

// //22- Дано масив: [ 'a', 'b', 'c'] .
// // За допомогою циклу for зібрати всі букви в слово.
// let word="";
// let arr=[ 'a', 'b', 'c'];
// for (let i=0;i<3;i++){
//     word+=arr[i];
// }
// console.log(word);

// //23 - Дано масив: [ 'a', 'b', 'c'] .
// // За допомогою циклу while зібрати всі букви в слово.
// let i=0;
// let arr=['a', 'b', 'c'];
// let word="";
// while (i<3){
//     word+=arr[i];
//     i++;
// }
// console.log(word);

// //24 - Дано масив: [ 'a', 'b', 'c'] .
// // За допомогою циклу for of зібрати всі букви в слово.
// let word="";
// let arr=[ 'a', 'b', 'c'];
// for (let i of arr){
//     word+=i;
// }
// console.log(word);

//25 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr=[2,17,13,6,22,31,45,66,100,-18];
//// 1. перебрати його циклом while
// let i=0;
// while (i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// //2. перебрати його циклом for
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// //3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=0;
// while (i<10){
//     if(i%2!==0){
//         console.log(arr[i]);
//     }
//     i++;
// }

// //4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i=0;i<10;i++){
//     if(i%2!==0){
//         console.log(arr[i]);
//     }
// }

// //5. перебрати циклом while та вивести  числа тільки парні  значення
// let i=0;
// while (i<10){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
//     i++;
// }

// //6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i=0; i<10;i++){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// //7. замінити кожне число кратне 3 на слово "okten"
// for (let i=0;i<10;i++){
//     if(arr[i]%3===0){
//         arr[i]="okten";
//     }
//     console.log(arr[i]);
// }

// //8. вивести масив в зворотньому порядку.
// for (let i=9;i>=0;i--){
//     console.log(arr[i]);
// }

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let i=9;
// while (i>=0){
//     console.log(arr[i]);
//     i--;
// }
// for (let i=9;i>=0;i--){
//     console.log(arr[i]);
// }
// let i=9;
// while (i>=0){
//     if(i%2!==0){
//         console.log(arr[i]);
//     }
//     i--;
// }
// for (let i=9;i>=0;i--){
//     if(i%2!==0) {
//         console.log(arr[i]);
//     }
// }
// let i=9;
// while (i>=0){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
//     i--;
// }
// for (let i=9;i>=0;i--){
//     if(arr[i]%2===0) {
//         console.log(arr[i]);
//     }
// }
// for (let i=9;i>=0;i--){
//     if(arr[i]%3===0){
//         arr[i]="okten";
//     }
//     console.log(arr[i]);
// }

//10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
// let mas=[];
// for (let i=0;i<50;i++){
//     let rand=Math.round(Math.random()*100);
//     if(rand%2===0){
//         mas[i]=rand;
//         console.log(mas[i]);
//     }
// }
let mas=[];
let i=0;
while (i<50){
    let rand=Math.round(Math.random()*100);
    if(rand%2!==0){
        mas[i]=rand;
        console.log(mas[i]);
    }
    i++;
}
