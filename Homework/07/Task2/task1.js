// // //- создать 5 объектов. В каждом объекте не менее 3х полей.
// // // Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// //- При помощи for in вывести все ключи всех объектов из задания 1 и 2
// //- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//взять объекты из задания 1 и превратить каждый в json.
//- взять json из задания 11 и превратить их обратно в объекты.
// let student={
//     Name:"Oleh",
//     age:21,
//     isStudent:true,
// }
// for (let i in student){
//     console.log(i);
// }
// console.log(Object.keys(student));
// let stud=JSON.stringify(student);
// let student_copy=JSON.parse(stud);
// let dog={
//     color:"Black",
//     isdog:true,
//     age:3
// }
// for (let i in dog){
//     console.log(i);
// }
// console.log(Object.keys(dog));
// let dog1=JSON.stringify(dog);
// let dog_copy=JSON.parse(dog1);
// let team={
//     countPeople:8,
//     teamLead:"Bill Smith",
//     canAddPeopleInTeam:false,
// }
// for (let i in team){
//     console.log(i);
// }
// console.log(Object.keys(team));
// let team1=JSON.stringify(team);
// let team_copy=JSON.parse(team1);
// let table={
//     width:80,
//     leng:120,
//     height:100,
//     isWooden:true
// }
// console.log(Object.keys(table));
// for (let i in table){
//     console.log(i);
// }
// let table1=JSON.stringify(table);
// let table_copy=JSON.parse(table1);
// let bag={
//     PocketCount:4,
//     owner:"Sara Polson",
//     price:700
// }
// for (let i in bag){
//     console.log(i);
// }
// console.log(Object.keys(bag));
// let bag1=JSON.stringify(bag);
// let bag_copy=JSON.parse(bag1);

// // //создать 5 объектов с полностью разным набором полей.
// // // В каждом объекте должен присутсвовать массив и внутренний объект.
// // // Опишите что угодно, машину, картину, болт
// //- При помощи for in вывести все ключи всех объектов из задания 1 и 2
// //- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let car={
//     MaxSpeed:220,
//     owner:{Name:"Andriy",age:35},
//     MaxSpeedPerDay:[120,90,60,100,180,200],
//     color:"red"
// }
// for (let i in car){
//     console.log(i);
// }
// console.log(Object.keys(car));
//
// let picture={
//     color:["red","green","white"],
//     width:50,
//     height:50,
//     owner: {Name:"Picasso",ageWriten:24,isDead:true}
// }
// for (let i in picture){
//     console.log(i);
// }
// console.log(Object.keys(picture));
//
// let house={
//     owner:{FirstName:"",LastName:"",age:25,isDocument:true},
//     floorCount:5,
//     lives:["Oleh","Olga","Andriy"],
//     square: 300,
//     cost: "8 milions"
// }
// for (let i in house){
//     console.log(i);
// }
// console.log(Object.keys(house));
// let driver={
//     FirstName:"Bogdan",
//     LastName:"Ivanov",
//     age:32,
//     passenger:{firstName:"vladislav",lastName:"Pavlov",age:22,direction:"Soborna 22"},
//     countPassenger:[2,3,1,4,1,2,2,3,1,1]
// }
// for (let i in driver){
//     console.log(i);
// }
// console.log(Object.keys(driver));
//
// let toy= {
//     Name: "toy",
//     price: 150,
//     owner: {Name: "Alisa", age: 5},
//     ageFrom: 3,
//     WhoPlayWithToy: ["Alica", "Ann", "Bill", "Alica"]
// }
// for (let i in toy){
//     console.log(i);
// }
// console.log(Object.keys(toy));

// //- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// //- проитерировать каждый массив из задания 5,6,7 при помощи for .
// //- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let cars=[
//     {model:"Impala",year:2002,power:1.8,color:"black"},
//     {model:"Reno",year:2008,power:1.6,color:"white"},
//     {model:"Lada",year:2000,power:2.0,color:"red"},
//     {model:"Chevrole",year:2012,power:2.2,color:"silver"},
//     {model:"Opel",year:2010,power:1.7,color:"black"},
//     {model:"Mustang",year:2018,power:1.8,color:"grey"},
//     {model:"Ford",year:2012,power:1.9,color:"black"},
//     {model:"Voltsvagen",year:2014,power:2.5,color:"green"},
//     {model:"Honda",year:2020,power:1.6,color:"yellow"},
//     {model:"Impala",year:1967,power:1.8,color:"black"},
// ];
// let i=0;
// while (i<cars.length){
//     console.log(cars[i]);
//     i++
// }
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }
// for(let i of cars){
//     console.log(i);
// }
// for(let i=0;i<cars.length;i++){
//    let s = JSON.stringify(cars[i]);
// }

// //Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// //- проитерировать каждый массив из задания 5,6,7 при помощи for .
// //- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let cities=[
//     {Name:"Lviv",population:1.1,country:"Ukrainian",region:"Lvivskyy"},
//     {Name:"Kyiv",population:2.4,country:"Ukrainian",region:"Kyivskyi"},
//     {Name:"Zovkva",population:690,country:"Ukrainian",region:"Zovkivskyi"},
//     {Name:"Ivano-Frankivsk",population:990,country:"Ukrainian",region:"Ivano-Frankivskiy"}
// ];
// let i=0;
// while (i<cities.length){
//     console.log(cities[i]);
//     i++
// }
// for(let i=0;i<cities.length;i++){
//     console.log(cities[i]);
// }
// for(let i of cities){
//     console.log(i);
// }
// for(let i of cities){
//     let s = JSON.stringify(i);
// }

// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
//- проитерировать каждый массив из задания 5,6,7 при помощи for .
//- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let cars=[
//     {model:"Impala",year:2002,power:1.8,color:"black",driver:{Name:"Bill",age:32,sex:"Male",experience:2}},
//     {model:"Reno",year:2008,power:1.6,color:"white",driver:{Name:"Karl",age:38,sex:"Male",experience:4}},
//     {model:"Lada",year:2000,power:2.0,color:"red",driver:{Name:"Boby",age:52,sex:"Male",experience:10}},
//     {model:"Chevrole",year:2012,power:2.2,color:"silver",driver:{Name:"Paige",age:22,sex:"Female",experience:1}},
//     {model:"Opel",year:2010,power:1.7,color:"black",driver:{Name:"Billy",age:30,sex:"Female",experience:8}},
//     {model:"Mustang",year:2018,power:1.8,color:"grey",driver:{Name:"Kas",age:40,sex:"Male",experience:6}},
//     {model:"Ford",year:2012,power:1.9,color:"black",driver:{Name:"Din",age:35,sex:"Male",experience:5}},
//     {model:"Voltsvagen",year:2014,power:2.5,color:"green",driver:{Name:"Bill",age:28,sex:"Male",experience:2}},
//     {model:"Honda",year:2020,power:1.6,color:"yellow",driver:{Name:"Sara",age:32,sex:"Female",experience:3}},
//     {model:"Impala",year:1967,power:1.8,color:"black",driver:{Name:"Sam",age:24,sex:"Male",experience:1}},
// ];
// let i=0;
// while (i<cars.length){
//     console.log(cars[i]);
//     i++
// }
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }
// for(let i of cars){
//     console.log(i);
// }
// for(let i of cars){
//     let s = JSON.stringify(i);
//     let cars_copy=JSON.parse(s);
// }

// //Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// // Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users=[
//     {Name:"Oleh",age:21,skills:["JS","HTMl","CSS"]},
//     {Name:"Andriy",age:18,skills:["Word","PowerPoint"]},
//     {Name:"Yura",age:22,skills:["JS","React","Node"]},
//     {Name:"Hrisina",age:20,skills:["Matlab","Word"]},
//     {Name:"Maryan",age:25,skills:["Solid","3dMax","C#","Java"]},
// ];
// //Скопировать все skills всех пользователей в отедльный массив
// for(let i of users){
//     console.log(i);
//    console.log(i.skills);
//     let skill=i.skills;
// }

// //За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//     ];
// for(let i of users){
//     console.log(i);
// }
// for(let i of users){
//     console.log(i.skills);
// }

//З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// let address=[];
// for (let i in users) {
//     address[i] = users[i].address;
// }
//console.log(address);

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let i of users) {
//     let div = document.createElement("div");
//     div.innerHTML=i.name+"<br>"+i.age+"<br>"+i.status+"<br>"+i.address.city+"<br>"+i.address.country+"<br>"+i.address.street+"<br>"+i.address.houseNumber;
//    document.body.appendChild(div);
// }

//- За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (let i of users) {
//     let div = document.createElement("div");
//     let div_name = document.createElement("div");
//     let div_age = document.createElement("div");
//     let div_status = document.createElement("div");
//     let div_address = document.createElement("div");
//     div_name.innerText=i.name;
//     div_age.innerText=i.age;
//     div_status.innerText=i.status;
//     div_address.innerText=i.address.city+", "+i.address.country+", "+i.address.street+", "+i.address.houseNumber;
//     div.appendChild(div_name);
//     div.appendChild(div_age);
//     div.appendChild(div_status);
//     div.appendChild(div_address);
//     document.body.appendChild(div);
// }

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i of users) {
//     let div = document.createElement("div");
//     let div_name = document.createElement("div");
//     let div_age = document.createElement("div");
//     let div_status = document.createElement("div");
//     let div_address = document.createElement("div");
//     let div_city = document.createElement("div");
//     let div_country = document.createElement("div");
//     let div_street = document.createElement("div");
//     let div_houseNumber = document.createElement("div");
//
//     div_name.innerText=i.name;
//     div_age.innerText=i.age;
//     div_status.innerText=i.status;
//     div_city.innerText=i.address.city;
//     div_country.innerText=i.address.country;
//     div_street.innerText=i.address.street;
//     div_houseNumber.innerText=i.address.houseNumber;
//     div_address.appendChild(div_city);
//     div_address.appendChild(div_country);
//     div_address.appendChild(div_street);
//     div_address.appendChild(div_houseNumber);
//     div.appendChild(div_name);
//     div.appendChild(div_age);
//     div.appendChild(div_status);
//     div.appendChild(div_address);
//     document.body.appendChild(div);
// }

//Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
// let UserAndCity=[];
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if(usersWithId[i].id===citiesWithId[j].user_id){
//             usersWithId[i].address=citiesWithId[j];
//         }
//     }
//     UserAndCity[i]=usersWithId[i];
//     console.log(UserAndCity[i]);
// }

// //- створити розмітці блок з id, class та текстом в середені.
// // Зчитати окремо цей текст з селекторів по id , class та тегу
//змінити цей текст використовуючи селектори id, class,  tag
// змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let div= document.createElement("div");
// div.className="block";
// div.id="first_div"
// div.textContent="vdsjvnosdvnso";
// document.body.appendChild(div);
//
// let getTextFromId=document.getElementById("first_div");
// let textId=getTextFromId.innerText;
// getTextFromId.innerText="fdslkdklsmks";
// getTextFromId.style.width="150px";
// getTextFromId.style.height="50px";
//
//
// let getTextFromClass=document.getElementsByClassName("block");
// let textClass=getTextFromClass[0].innerText;
// getTextFromClass[0].innerText="fdgkjdozl";
// getTextFromClass[0].style.width="120px";
// getTextFromClass[0].style.height="50px";
//
// let getTextFromTag=document.getElementsByTagName("div");
// let textTag= getTextFromTag[0].innerText;
// getTextFromTag[0].innerText="sdfkawopkpos";
// getTextFromTag[0].style.width="100px";
// getTextFromTag[0].style.height="30px";

//- за допомоги document.createElement та appendChild створити
// таблицю на 1 рядок з трьома ячейками всередені
// let table=document.createElement("table");
// let tr =document.createElement("tr");
// let td1 =document.createElement("td");
// let td2 =document.createElement("td");
// let td3 =document.createElement("td");
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.style.border="1px black solid";
// table.style.width="150px";
// table.style.height="150px";
// table.appendChild(tr);
// document.body.appendChild(table);

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table=document.createElement("table");
// for(let i=0;i<10;i++) {
//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     table.style.border = "1px black solid";
//     table.style.width = "150px";
//     table.style.height = "150px";
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table=document.createElement("table");
// for(let i=0;i<10;i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//         td.style.border = "1px black solid";
//     }
//
//     table.style.border = "1px black solid";
//     table.style.width = "150px";
//     table.style.height = "150px";
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю
// на n рядків з m ячейками всередені. n та m отримати з prompt
// let n=prompt("Enter count of row");
// let m=prompt("Enter count of col");
// let table=document.createElement("table");
// for(let i=0;i<n;i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < m; j++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//         td.style.border = "1px black solid";
//     }
//
//
//     table.style.border = "1px black solid";
//     table.style.width = "150px";
//     table.style.height = "150px";
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

//--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// //- знайти всі елементі, які мають class
// let elements=document.getElementsByTagName("*");
// let FindClass=[];
// for(let i of elements) {
//     if(i.getAttribute("class")){
//         FindClass.push(i);
//         console.log(i);
//     }
// }

//- знайти всі параграфи ,та змінити текст на hello oktenweb!
// let paragrafs=document.getElementsByTagName("p");
// for (let i of paragrafs){
//     i.innerText="hello okten";
// }

//    - знайти всі div та змінити ім колір на червоний
// let divs=document.getElementsByTagName("div");
// console.log(divs);
// for (let i=0;i<divs.length;i++){
//     divs[i].style.color="red";
// }



