//- создать массив с 20 числами.
// let arr=[];
// for (let i=0;i<20; i++) {
//     arr[i] = Math.round(Math.random() * (50 + 10) - 10);
// }

//-- при помощи метода sort и колбека  отсортировать массив.
// let sorted = arr.sort((a,b)=> a-b);
// console.log(sorted);

//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sorted1 = arr.sort((a,b)=> b-a);
// console.log(sorted1);

//-- при помощи filter получить числа кратные 3
// let filter1 = arr.filter(value => {
//     if(value%3===0){
//         return value
//     }
// });
// console.log(filter1);

//-- при помощи filter получить числа кратные 10
// let filter2 = arr.filter(value => {
//     if(value%10===0){
//         return value
//     }
// });
// console.log(filter2);

//-- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach(value => {
//     console.log(value);
// });

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let mass=arr.map(value => {
//     console.log(value);
//     return value*3;
// });
// console.log(mass);

//- создать массив со словами на 15-20 элементов.
//let str=["Hello","my","name","is","Oleh","Welcome","dear","friend","National","Okten","house","Vasya","homework","task","JS","C++","Java","Forest"];

//-- отсортировать его по алфавиту в восходящем порядке.
// let sort1 = str.sort((a,b)=>{
//     if(a.toUpperCase()>b.toUpperCase()){
//         return 1;
//     }
//     return -1
// });
// console.log(sort1);

// //-- отсортировать его по алфавиту  в нисходящем порядке.
// let sort2 = str.sort((a,b)=>{
//     if(a.toLowerCase()>b.toLocaleLowerCase()){
//         return -1;
//     }
//     return 1
// });
// console.log(sort2);

//-- отфильтровать слова длиной менее 4х символов
// let filter_str = str.filter(value => {
//     if(value.length>4){
//         return value;
//     }
// });
// console.log(filter_str);

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map_str = str.map(value => {
//     return value+"!";
// });
// console.log(map_str);

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
//     ];
// let new_users=JSON.parse(JSON.stringify(users));
//- відсортувати його за  віком (зростання , а потім окремо спадання)
// let increase=new_users.sort((a ,b)=>{
//     return a.age - b.age;
// });
// console.log(increase);
//
// let decrease=new_users.sort((a ,b)=>{
//     return b.age - a.age;
// });
// console.log(decrease);

//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let increase_count_letter=new_users.sort((a,b)=>{
//     return  a.name.length-b.name.length;
// });
// console.log(increase_count_letter);
// let decrease_count_letter=new_users.sort((a,b)=>{
//     return  b.name.length-a.name.length;
// });
// console.log(decrease_count_letter);

//пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let new_users1=JSON.parse(JSON.stringify(users));
// let user_id=new_users1.map((value,index) => {
//         value.id=index;
//     return value;
// });
// console.log(user_id);
//
// //- відсортувати його за індентифікатором
// let new_users_id=JSON.parse(JSON.stringify(user_id));
// let sorted_id = new_users_id.sort((a, b)=>b.id-a.id);
// console.log(sorted_id);

//=============КЛАССНАЯ РАБОТА=================
// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//     ];
//
// //Відфільтрувати масив за наступними крітеріями :
// //- двигун більше 3х літрів
// let vol_3l=cars.filter(value=>value.volume>3);
// console.log(vol_3l);
// // - двигун = 2л
// let vol2=cars.filter(value=>value.volume===2);
// console.log(vol2);
// // - виробник мерс
// let prod=cars.filter(value=>value.producer==="mercedes");
// console.log(prod);
// // - двигун більше 3х літрів + виробник мерседес
// let prod_and_vol3l=cars.filter(value=>{
//      return (value.producer==="mercedes")&&(value.volume>=3);
// });
// console.log(prod_and_vol3l);
// // - двигун більше 3х літрів + виробник субару
// let subaru_and_vol3l=cars.filter(value=>(value.producer==="subaru")&&(value.volume>=3));
// console.log(subaru_and_vol3l);
// // - сили більше ніж 300
// let power=cars.filter(value=>value.power>300);
// console.log(power);
// // - сили більше ніж 300 + виробник субару
// let power_and_subaru=cars.filter(value=>value.power>300&&value.producer==="subaru");
// console.log(power_and_subaru);
// // - мотор серіі ej
// let engine=cars.filter(value=>value.engine.includes("ej"));
// console.log(engine);
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter1=cars.filter(value=>value.engine.includes("ej")&&value.producer==="subaru"&&value.power>300);
// console.log(filter1);
// // - двигун меньше 3х літрів + виробник мерседес
// let merc=cars.filter(value=>value.producer==="mercedes"&&value.volume<3);
// console.log(merc);
// // - двигун більше 2л + сили більше 250
// let power250_and_volume=cars.filter(value=>value.power>250&&value.volume>2);
// console.log(power250_and_volume);
// // - сили більше 250  + виробник бмв
// let power250_and_prod=cars.filter(value=>value.power>250&&value.producer==="bmw");
// console.log(power250_and_prod);

// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
//     ];
//  let new_users=JSON.parse(JSON.stringify(usersWithAddress));
// -- отсортировать его по id пользователей
// let sorted = new_users.sort((a, b)=>a.id-b.id);
// console.log(sorted);

// // -- отсортировать его по id пользователей в обратном опрядке
// new_users.sort((a,b)=>b.id-a.id);
// console.log(new_users);

// -- отсортировать его по возрасту пользователей
// new_users.sort((a,b)=>a.age-b.age);
// console.log(new_users);

// -- отсортировать его по возрасту пользователей в обратном порядке
// new_users.sort((a,b)=>b.age-a.age);
// console.log(new_users);

// -- отсортировать его по имени пользователей
// new_users.sort((a,b)=>{
//     if(a.name>b.name){
//         return 1;
//     }
//     return -1;
// });
// console.log(new_users);

// -- отсортировать его по имени пользователей в обратном порядке
// new_users.sort((a,b)=>{
//     if(a.name>b.name){
//         return -1;
//     }
//     return 1;
// });
// console.log(new_users);

// -- отсортировать его по названию улицы  в алфавитном порядке
// new_users.sort((a,b)=>{
//     if(a.address.street>b.address.street){
//         return 1;
//     }
//     return -1;
// });
// console.log(new_users);

// // -- отсортировать его по номеру дома по возрастанию
//  new_users.sort((a,b)=>a.address.number-b.address.number);
//  console.log(new_users);

// -- отфильтровать (оставить) тех кто младше 30
// let young = usersWithAddress.filter(value => value.age<30);
// console.log(young);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let status = usersWithAddress.filter(value => !value.status);
// console.log(status);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let status_age = usersWithAddress.filter(value => !value.status&& value.age<30);
// console.log(status_age);

// // -- отфильтровать (оставить) тех у кого номер дома четный
// let house = usersWithAddress.filter(value => value.address.number%2===0);
// console.log(house);


//======ДОПОЛНИТЕЛЬНО========
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
//     Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// let cars = [
//     {producer:"subaru",power: 400,owner:{name:"Andriy",age:25,exp:2},price:55000,year: 2010},
//     {producer:"bmw",power: 500,owner:{name:"Oleh",age:21,exp:1},price:50000,year: 2012},
//     {producer:"mercedes",power: 550,owner:{name:"Vasya",age:40,exp:5},price:40000,year: 2011},
//     {producer:"reno",power: 300,owner:{name:"Igor",age:35,exp:7},price:12000,year: 2008},
//     {producer:"opel",power: 250,owner:{name:"Valentyn",age:22,exp:3},price:6000,year: 2007},
//     {producer:"lada",power: 150,owner:{name:"Mykola",age:27,exp:6},price:4000,year: 2005},
//     {producer:"bmw",power: 450,owner:{name:"Andriy",age:45,exp:10},price:35000,year: 2016},
//     {producer:"mazda",power: 500,owner:{name:"Kyrylo",age:37,exp:8},price:20000,year: 2014},
//     {producer:"reno",power: 350,owner:{name:"Misha",age:33,exp:13},price:16000,year: 2009},
//     {producer:"honda",power: 600,owner:{name:"Sasha",age:29,exp:4},price:65000,year: 2017},
//     {producer:"subaru",power: 650,owner:{name:"Bodya",age:26,exp:3},price:95000,year: 2018},
//     {producer:"porshe",power: 700,owner:{name:"Yura",age:44,exp:8},price:100000,year: 2020},
//     {producer:"voltsvagen",power: 400,owner:{name:"Roma",age:39,exp:11},price:8000,year: 2008},
//     {producer:"toyota",power: 350,owner:{name:"Kolya",age:19,exp:1},price:6000,year: 2004},
//     ];
//Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// for (let i = 0; i < cars.length/2; i++) {
//     cars[i].power *= 0.1;
// }

//Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// for (let i = 0; i < cars.length; i+=2) {
//     cars[i].power *= 0.1;
//     cars[i].price *= 0.05;
// }

//// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// for (let i = 0; i < cars.length; i++) {
//     if(cars[i].owner.exp<5&& cars[i].owner.age>25)
//     cars[i].owner.exp += 1;
// }

////     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sum=0;
// for (let i = 0; i < cars.length; i++) {
//        sum += cars[i].price;
// }
// console.log(sum);

//Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//    Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//    Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// function FindMaxMinIndex(arr,element){
//     let min=arr.indexOf(element);
//     let max=arr.lastIndexOf(element);
//     if(min!==-1){
//         console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}.`);
//     }else {
//         console.log(-1);
//     }
// }
// FindMaxMinIndex([1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14],4);
