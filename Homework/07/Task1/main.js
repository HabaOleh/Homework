// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// let dog={
//     name:"Bim",
//     age:3,
//     color:"black",
//     sex:"Male",
//     family:true
// }
// let people={
//     FirstName:"Oleh",
//     LastName:"Haba",
//     age:21,
//     girlfriend:false,
//     isStudent:true
// }
// let car={
//     color:"black",
//     engine:1.8,
//     engineType:"diesel",
//     brand:"Volkswagen ",
//     model:"Passat"
// }
// let apartment={
//     countRoom:3,
//     floor:7,
//     square:120,
//     region:"Frankivskyi",
//     cost:"2 milions"
// }
// let book={
//     name:"Harry Potter",
//     genre:"Fantasic",
//     author:"J.Roaling",
//     pageCount:356,
//     price:200
// }
// //Створити масив та вивести його в консоль:
// let dogs=[
//     {name:"Rex", age:5, color:"black and white", sex:"Male", family:true},
//     {name:"Bim", age:3, color:"black", sex:"Male", family:false},
//     {name:"Berta", age:1, color:"orange", sex:"Female", family:true},
//     {name:"Topik", age:3, color:"white", sex:"Male", family:false},
//     {name:"Asti", age:2, color:"brown", sex:"Female", family:true}
// ];
// for(let i of dogs){
//     console.log(i);
// }
// let peoples=[
//     {FirstName:"Oleh", LastName:"Haba", age:21, girlfriend:false, isStudent:true},
//     {FirstName:"Andriy", LastName:"Haba", age:18, girlfriend:true, isStudent:true},
//     {FirstName:"Nazar", LastName:"Pavnuk", age:17, girlfriend:false, isStudent:true},
//     {FirstName:"Mariya", LastName:"Panochko", age:39, boyfriend:true, isStudent:false},
//     {FirstName:"Zoryana", LastName:"Haba", age:42, boyfriend:true, isStudent:false},
// ];
// for(let i of peoples){
//     console.log(i);
// }
// let cars=[
//     {color:"black", engine:1.8, engineType:"diesel", brand:"Volkswagen ", model:"Passat"},
//     {color:"white", engine:1.9, engineType:"gasoline", brand:"Volkswagen ", model:"Golf"},
//     {color:"red", engine:2.0, engineType:"gas", brand:"Reno ", model:"Megane"},
//     {color:"green", engine:2.3, engineType:"diesel", brand:"Opel ", model:"Combo"},
//     {color:"yellow", engine:1.6, engineType:"gasoline", brand:"Chevrolet  ", model:"Camaro"},
// ]
// for(let i of cars){
//     console.log(i);
// }

// //-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// let house={
//     owner:{FirstName:"",LastName:"",age:25,isDocument:true},
//     floorCount:5,
//     lives:["Oleh","Olga","Andriy"],
//     square: 300,
//     cost: "8 milions"
// }
// let driver={
//     FirstName:"Bogdan",
//     LastName:"Ivanov",
//     age:32,
//     passenger:{firstName:"vladislav",lastName:"Pavlov",age:22,direction:"Soborna 22"},
//     countPassenger:[2,3,1,4,1,2,2,3,1,1]
// }
// let toy={
//     Name:"toy",
//     price:150,
//     owner:{Name:"Alisa",age:5},
//     ageFrom:3,
//     WhoPlayWithToy:["Alica","Ann","Bill","Alica"]
// }
// let table={
//     width:50,
//     long:100,
//     height:120,
//     predmetsOnTable:["laptop","notebook","pen","flowers"],
//     owner:{FirstName:"Bill",LastName:"Smit",age:28}
// }
// let bag={
//     owner:{FirstName:"Sara",LastName:"Elison",age:24},
//     predmetsInBag:["laptop","notebook","pen","money"],
//     color:"red",
//     countPocket:3,
//     isNew:true
// }

// //звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// //- статус Андрія
// console.log(users[7].status);
// //- статус Максима
// console.log(users[4].status);
// console.log(users[10].status);
// // - ім'я передостаннього об'єкту
// console.log(users[10].name);
// // - ім'я третього об'єкта
// console.log(users[2].name);
// // - вік Олега
// console.log(users[6].age);
// // - вік Олі
// console.log(users[3].age);
// console.log(users[9].age);
// // - вік + ім'я 5го об'єкта
// console.log(users[4].age+" "+users[4].name);
// // - вік + сатус Анни
// console.log(users[5].age+" "+users[5].status);

//Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

////- отримує текст з параграфа з id "content"
// let elem=document.getElementById("content");
// let text = elem.innerText;
// console.log(text);

// //- отримує текст з блоку з id "rules"
// let elem=document.getElementById("rules");
// let text = elem.innerText;
// console.log(text);

// // замініть текст параграфа з id 'content' на будь-який інший
// let elem=document.getElementById("content");
// elem.innerText="hfdjbndfnbikdjnvodnvkz";

// //- замініть текст параграфа з id 'rules' на будь-який інший
// let elem=document.getElementById("rules");
// elem.innerText="nfdkjvndfjknbkfnjvkzdj";

// //- змініть кожному елементу колір фону на червоний
// let x=document.getElementsByTagName("*");
// for (let i of x){
//     i.style.backgroundColor="red";
// }

// //- змініть кожному елементу колір тексту на синій
// let x=document.getElementsByTagName("*");
// for (let i of x){
//     i.style.color="blue";
// }

// //- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let element=document.getElementById("rules");
// let x=element.getAttribute("class");
// console.log(x);

// //- отримати всі елементи з класом fc_rules
// let elements=document.getElementsByClassName("fc_rules")
// for (let i of elements){
//     console.log(i);
// }

// //- поміняти колір тексту у всіх елементів fc_rules на червоний
// let elements=document.getElementsByClassName("fc_rules")
// for (let i of elements){
//     i.style.color="red";
// }