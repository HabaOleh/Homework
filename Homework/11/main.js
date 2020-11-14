//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement("div");
// div.setAttribute("id","text");
// div.innerText=" произвольный елемент с id = text";
// div.style.backgroundColor="green";
// document.body.appendChild(div);
// let btn = document.createElement("button");
// btn.innerText="Click me";
// document.body.appendChild(btn);
// btn.onclick=()=>{
//     document.getElementById('text').style.display="none";
// }

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement("button");
// btn.innerText="Click me";
// document.body.appendChild(btn);
// btn.onclick=()=>{
//     btn.style.display="none";
// }

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
// let input = document.createElement("input");
// let btn = document.createElement("button");
// btn.innerText="Ok";
// document.body.appendChild(input);
// document.body.appendChild(btn);
// btn.onclick=()=>{
//     if(+input.value<18){
//         alert("You did not have 18");
//     }
// }

//- Создайте меню, которое раскрывается/сворачивается при клике
// let ul = document.createElement("ul");
// ul.innerText="Menu"
// let li=[];
// for (let i =0 ; i<5; i++){
//     li.push(document.createElement("li"));
//     li[i].innerText=i;
//     ul.appendChild(li[i]);
// }
// document.body.appendChild(ul);
// let flag = false;
// ul.onclick=()=>{
//     if(flag){
//         for (const i of li) {
//             i.style.display="block";
//         }
//         flag=false;
//     }else{
//         for (const i of li) {
//             i.style.display="none";
//         }
//         flag=true;
//     }
// }

// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let coments=[
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ];
// let main= document.createElement("div");
// for (const coment of coments) {
//     let  div= document.createElement("div");
//     let  h3= document.createElement("h3");
//     let  p= document.createElement("p");
//     let  btn= document.createElement("button");
//     btn.innerText="Click me";
//     h3.innerText=coment.title;
//     p.innerText=coment.body;
//     div.appendChild(h3);
//     div.appendChild(p);
//     div.appendChild(btn);
//     document.body.appendChild(div);
//     btn.onclick=()=>{
//         if(p.style.display==="none") {
//             p.style.display = "block";
//         }else {
//             p.style.display = "none";
//         }
//     }
// }

// //- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// //Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.createElement("form");
// form1.setAttribute("name","form1");
// let input1 = document.createElement("input");
// input1.setAttribute("name","input1");
// input1.setAttribute("type","text");
// let input2 = document.createElement("input");
// input2.setAttribute("name","input2");
// form1.appendChild(input1);
// form1.appendChild(input2);
// document.body.appendChild(form1);
//
// let form2 = document.createElement("form");
// form2.setAttribute("name","form2");
// let input3 = document.createElement("input");
// input3.setAttribute("name","input21");
// let input4 = document.createElement("input");
// input4.setAttribute("name","input22");
// form2.appendChild(input3);
// form2.appendChild(input4);
// document.body.appendChild(form2);
//
// let btn = document.createElement("button");
// btn.innerText="Ok";
// document.body.appendChild(btn);
//
// btn.onclick=()=>{
//     console.log(document.form1.input1.value);
//     console.log(document.form1.input2.value);
//     console.log(document.form2.input21.value);
//     console.log(document.form2.input22.value);
// }

// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кліькіть ячеєк в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// function GenerateTable(row,cow,element){
//     let table= document.createElement("table");
//     table.style.width="30%";
//     table.style.height="300px";
//     let el=document.createElement(element);
//     for (let i=0; i<row;i++){
//         let tr=document.createElement("tr");
//         for(let j=0;j<cow;j++){
//             let td= document.createElement("td");
//             td.style.border="1px solid black";
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//    el.appendChild(table);
//     document.body.appendChild(el);
// }
// GenerateTable(3,4,"div");

// //- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// let label1= document.createElement("label");
// label1.innerText="Enter rows";
// let input1 = document.createElement("input");
// let label2= document.createElement("label");
// label2.innerText="Enter columns";
// let input2 = document.createElement("input");
// let label3= document.createElement("label");
// label3.innerText="Enter content";
// let input3 = document.createElement("input");
// let btn = document.createElement("button");
// btn.innerText="Ok";
// document.body.appendChild(label1);
// document.body.appendChild(input1);
// document.body.appendChild(label2);
// document.body.appendChild(input2);
// document.body.appendChild(label3);
// document.body.appendChild(input3);
// document.body.appendChild(btn);
// btn.onclick=()=>{
//     let table= document.createElement("table");
//     table.style.width="30%";
//     table.style.height="400px";
//     for (let i=0; i<input1.value;i++){
//         let tr=document.createElement("tr");
//         for(let j=0;j<input2.value;j++){
//             let td= document.createElement("td");
//             td.style.border="1px solid black";
//             td.innerText=input3.value;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }

// //- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let images=[
//     {id:1,imgName:"img/autmn.jpg"},
//     {id:2,imgName:"img/bamboo.jpg"},
//     {id:3,imgName:"img/men.jpg"},
//     {id:4,imgName:"img/road.jpg"},
//     {id:5,imgName:"img/tree.jpg"},
// ];
// //let div = document.createElement("div");
// let img = document.createElement("img");
// let right_btn = document.createElement("button");
// let left_btn = document.createElement("button");
// right_btn.innerText="Right";
// left_btn.innerText="Left";
// let index = 0;
// img.src=images[index].imgName;
// img.style.width="400px";
// document.body.appendChild(img);
// document.body.appendChild(left_btn);
// document.body.appendChild(right_btn);
// right_btn.onclick=()=>{
//     if(index-1<0){
//         index= images.length-1;
//     }
//     else {
//         index--;
//     }
//     img.src=images[index].imgName;
// }
// left_btn.onclick=()=>{
//     if(index+1>images.length-1){
//         index= 0;
//     }
//     else {
//         index++;
//     }
//     img.src=images[index].imgName;
// }

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let str=["блять","сука","хуй","жопа","пиздець"];
// let input = document.createElement("input");
// input.setAttribute("type","text");
// let btn = document.createElement("button");
// btn.innerText="Check";
// document.body.appendChild(input);
// document.body.appendChild(btn);
// btn.onclick=()=>{
//     for (let i of str){
//         let p=i.toLowerCase();
//         if(input.value.toLowerCase().includes(p)){
//             alert("18+");
//         }
//     }
// }

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// let str=["блять","сука","хуй","жопа","падло"];
// let input = document.createElement("input");
// input.setAttribute("type","text");
// let btn = document.createElement("button");
// btn.innerText="Check";
// document.body.appendChild(input);
// document.body.appendChild(btn);
// btn.onclick=()=>{
//     for (let i of str){
//         let p=i.toLowerCase();
//         if(input.value.toLowerCase().includes(p)){
//             alert("18+");
//         }
//     }
// }

//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let h2 = document.getElementsByTagName("h2");
// let div_wrap = document.getElementById("wrap");
// let div = document.createElement("div");
// let ul = document.createElement("ul");
// ul.innerText="Menu";
// for (let i =0; i<h2.length;i++){
//     let li = document.createElement("li");
//     let a = document.createElement("a");
//     let mitka = "mitka"+i;
//     h2[i].setAttribute("id",mitka);
//     a.href="#"+mitka;
//     a.innerText=h2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// div.appendChild(ul);
//
// div.style.width="30%";
// div.style.float="right";
// div_wrap.style.float="left";
// div_wrap.style.width="70%";
// document.body.appendChild(div);


// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let div = document.createElement("div");
let check1 = document.createElement("input");
check1.type = "checkbox";
let check2 = document.createElement("input");
check2.type = "checkbox";
let check3 = document.createElement("input");
check3.type = "checkbox";

let label1 = document.createElement("label");
label1.innerText = "status false";
let label2 = document.createElement("label");
label2.innerText = "over 29";
let label3 = document.createElement("label");
label3.innerText = "city Kyiv";

div.appendChild(label1);
div.appendChild(check1);
div.appendChild(label2);
div.appendChild(check2);
div.appendChild(label3);
div.appendChild(check3);

let btn = document.createElement("button");
btn.innerText = "Filter";
div.appendChild(btn);
document.body.appendChild(div);

let users = document.createElement("div");
btn.onclick = () => {
    let FilterUsers = JSON.parse(JSON.stringify(usersWithAddress));
    if (check1.checked) {
        FilterUsers = FilterUsers.filter(value => !value.status);
    }
    if (check2.checked) {
        FilterUsers = FilterUsers.filter(value => value.age >= 29);
    }
    if (check3.checked) {
        FilterUsers = FilterUsers.filter(value => value.address.city === "Kyiv");
    }
    if(check1.checked || check2.checked||check3.checked) {
        users.innerHTML += `____${check1.checked?"Status_False":"___"}____${check2.checked?"Over 29":"___"}__${check3.checked?"City Kyiv":"___"}____________________<br>`
        for (let i of FilterUsers) {

            users.innerHTML += (`id:${i.id} ,name: ${i.name}, age: ${i.age}, status: ${i.status}, address: city: ${i.address.city}, street: ${i.address.street}, number: ${i.address.number}${"<br>"}`);
        }
    }
    document.body.appendChild(users);

}


