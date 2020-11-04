// //- створити функцію яка виводить масив
// function ShowArr(arr){
//     for(let i of arr){
//         console.log(i)
//     }
// }
// //- створити функцію яка заповнює масив рандомними числами та виводить його.
// // Для виведення використати попвередню функцію.
// function Random(Length){
//     let arr=[];
//     for (let i=0;i<Length;i++) {
//         arr[i]=Math.round(Math.random()*(10-5)+5);
//     }
//     ShowArr(arr);
// }
// Random(10);

// //- створити функцію яка приймає три числа та виводить та повертає найменьше.
// function min(one,two,three){
//     if(one<two && one<three){
//         console.log(one);
//         return one;
//     }else if(two<three){
//         console.log(two)
//         return two;
//     }else{
//         console.log(three);
//         return three;
//     }
// }
// min(10,2,3);

// //- створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max(one,two,three){
//     if(one>two && one>three){
//         console.log(one);
//         return one;
//     }else if(two>three) {
//         console.log(two)
//         return two;
//     }
//     else {
//         console.log(three);
//         return three;
//     }
//
// }
// max(12,10,15);

// //- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function MaxMin(){
//     let max=0;
//     let min=arguments[0];
//     for(let i=0;i<arguments.length;i++) {
//         if(arguments[i]>max){
//             max=arguments[i];
//         }
//         if(arguments[i]<min){
//             min=arguments[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
// MaxMin(0,8,1,10,50);

// //- створити функцію яка виводить масив
// let printArr=function (arr){
//     for (let i of arr){
//         console.log(i);
//     }
// }

// //- створити функцію яка повертає найбільше число з масиву
// let Max=function (arr){
//     let max=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>max){
//             max=arr[i];
//         }
//
//     }
//     return max;
// }

// //- створити функцію яка повертає найменьше число з масиву
// let Min=function (arr){
//     let min=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<min){
//             min=arr[i];
//         }
//
//     }
//     return min;
// }

// //- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function Count(arr){
//     let count=0;
//     for (let i of arr) {
//         count+=i;
//     }
//     return count;
// }

// //- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function Average(arr){
//     let ave=0;
//     for (let i of arr) {
//         ave+=i;
//     }
//     return ave/arr.length;
// }

// //- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let MassObj=arr=>arr.length;

// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них ???
// function Obj(arr){
//     let count =0;
//     for (let i of arr){
//         for (let key in i)
//         count++;
//     }
//     return count;
// }
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
//     {id: 5, name: 'olya', age: 28, status: false},
// ];
// console.log(Obj(usersWithId));

// //- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function Add(arr1,arr2){
//     let result=[];
//     for (let i = 0; i < arr1.length; i++) {
//         result[i]=arr1[i]+arr2[i];
//     }
//     return result;
// }

// // //*** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function Swap(arr,index){
//     let elem=0;
//     if(index<arr.length-1) {
//         elem = arr[index];
//         arr[index] = arr[index + 1];
//         arr[index + 1] = elem;
//     }
//     return arr;
// }

// //*** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// // Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// function Zero(arr){
//     let zero=[];
//     let number=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===0){
//             zero.push(arr[i]);
//         }
//         else{
//             number.push(arr[i]);
//         }
//
//     }
//     return number.concat(zero);
// }
//
// console.log(Zero([0, 0, 5, 6, 8, 0, 0, 0, 0,]));

// //Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// function AddBlock(){
//     let div = document.createElement("div");
//     div.innerText="Hello owu";
//     document.body.appendChild(div);
// }
// AddBlock();

// //- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function AddElement(element,text){
//     let elem = document.createElement(element);
//     elem.innerText=text;
//     document.body.appendChild(elem);
// }
// AddElement("p","Hello everyone");

// //- приймає масив автомобілів (можна взяти з попередніх дз ),та
// // індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент,
// // індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// function Car(arr,element){
//     let elem =document.createElement(element);
//     for (let i of arr) {
//         let div=document.createElement("div");
//         div.innerHTML=i.model+", "+i.year+", "+i.color;
//         elem.appendChild(div);
//     }
//     document.body.appendChild(elem);
// }
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
//     ];
// Car(cars,"div");

// приймає масив автомобілів (можна взяти з попередніх дз ),та
// індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function Car(arr,element){
//     let elem =document.createElement(element);
//     let div=document.createElement("div");
//     for (let i of arr) {
//         let div=document.createElement("div");
//         let div_model=document.createElement("div");
//         let div_year=document.createElement("div");
//         let div_power=document.createElement("div");
//         let div_color=document.createElement("div");
//
//         div_model.innerText=i.model;
//         div_year.innerText=i.year;
//         div_power.innerText=i.power;
//         div_color.innerText=i.color;
//         div.appendChild(div_model);
//         div.appendChild(div_year);
//         div.appendChild(div_power);
//         div.appendChild(div_color);
//         elem.appendChild(div);
//     }
//     document.body.appendChild(elem);
// }
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
//     ];
// Car(cars,"p");

// //**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// //та повертає масив цих з'єднаних об'єктів.
// function Union(arr1,arr2){
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i].id === arr2[j].user_id) {
//                 arr1[i].address = arr2[j];
//             }
//         }
//     }
//     return arr1;
// }
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
//     {user_id: 4, country: 'USA', city: 'Miami'},];
//
// console.log(Union(usersWithId, citiesWithId));

// //***- беремо завдання з правилами з укроку №3 :
// // Та робимо це функцією.При цьому правила отримувати через аргумент.
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
//
// function Rules(arr) {
//     for (let i of arr) {
//         let h2 = document.createElement("h2");
//         let p = document.createElement("p");
//         let h2div = document.createElement("div");
//         let pdiv = document.createElement("div");
//         let div = document.createElement("div");
//         h2.innerText = i.title;
//         p.innerText = i.body;
//         h2div.appendChild(h2);
//         pdiv.appendChild(p);
//         div.appendChild(h2div);
//         div.appendChild(pdiv);
//         document.body.appendChild(div);
//     }
// }
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
// ];
// Rules(rules);