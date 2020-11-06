// //-  Створити функцію конструктор для об'єкту який описує теги
// function Tag(name,description,attribute){
//     this.name=name;
//     this.description=description;
//     this.attribute=attribute;
// }
// //Таким чином описати теги
// //  -a
// let a_attr=[
//     {attribute_name:"href",attribute_desc:"Задает адрес документа, на который следует перейти."},
//     {attribute_name:"title",attribute_desc:"Добавляет всплывающую подсказку к тексту ссылки."},
//     {attribute_name:"type",attribute_desc:"Указывает MIME-тип документа, на который ведёт ссылка."},
// ]
// let a = new Tag("a","Тег a является одним из важных элементов HTML и предназначен для создания ссылок",a_attr);
// console.log(a);
// //-div
// let div_attr=[
//     {attribute_name:"align",attribute_desc:"Задает выравнивание содержимого тега <div>."},
//     {attribute_name:"title",attribute_desc:"Добавляет всплывающую подсказку к содержимому."},
// ];
// let div_desc="Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.";
// let div= new Tag("div",div_desc,div_attr);
// console.log(div);
// //-h1
// let h1_desc="HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.";
// let h1_attr=[
//     {attribute_name:"align",attribute_desc:"Определяет выравнивание заголовка."},
// ];
// let h1=new Tag("h1",h1_desc,h1_attr);
// console.log(h1);
// //-span
// let span_desc="Тег <span> предназначен для определения строчных элементов документа. ";
// let span_attr=[
//     {attribute_name:"id",attribute_desc:"Указывает имя стилевого идентификатора."},
//     {attribute_name:"title",attribute_desc:"Описывает содержимое элемента в виде всплывающей подсказки."},
//     {attribute_name:"class",attribute_desc:"Определяет имя класса, которое позволяет связать тег со стилевым оформлением"},
//
// ];
// let span= new Tag("span",span_desc,span_attr);
// console.log(span);
// //-input
// let input_desc="Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let input_attr=[
//     {attribute_name:"accept",attribute_desc:"Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
//     {attribute_name:"align",attribute_desc:"Определяет выравнивание изображения."},
//     {attribute_name:"alt",attribute_desc:"Альтернативный текст для кнопки с изображением."},
//
// ];
// let input = new Tag("input",input_desc,input_attr);
// //-form
// let form_desc="Тег <form> устанавливает форму на веб-странице. ";
// let form_attr=[
//     {attribute_name:"action",attribute_desc:"Адрес программы или документа, который обрабатывает данные формы."},
//     {attribute_name:"method",attribute_desc:"Метод протокола HTTP"},
//     {attribute_name:"name",attribute_desc:"Имя формы."},
//
// ];
// let form=new Tag("form",form_desc,form_attr);
// //-option
// let option_desc="Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ";
// let option_attr=[
//     {attribute_name:"id",attribute_desc:"Указывает имя стилевого идентификатора."},
//     {attribute_name:"title",attribute_desc:"Описывает содержимое элемента в виде всплывающей подсказки."},
//     {attribute_name:"class",attribute_desc:"Определяет имя класса, которое позволяет связать тег со стилевым оформлением"},
// ];
// let option=new Tag("option",option_desc,option_attr);
// //-select
// let select_desc="Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.";
// let select_attr=[
//     {attribute_name:"accesskey",attribute_desc:"Позволяет перейти к списку с помощью некоторого сочетания клавиш."},
//     {attribute_name:"disabled",attribute_desc:"Блокирует доступ и изменение элемента."},
//     {attribute_name:"form",attribute_desc:"Связывает список с формой."},
// ];
// let select=new Tag("select",select_desc,select_attr);
//-  Створити класс  для об'єкту який описує теги

// class Tag{
//     constructor(name,description,attribute) {
//         this.name=name;
//         this.description=description;
//         this.attribute=attribute;
//     }
// }
// //Таким чином описати теги
// //  -a
// let a_attr=[
//     {attribute_name:"href",attribute_desc:"Задает адрес документа, на который следует перейти."},
//     {attribute_name:"title",attribute_desc:"Добавляет всплывающую подсказку к тексту ссылки."},
//     {attribute_name:"type",attribute_desc:"Указывает MIME-тип документа, на который ведёт ссылка."},
// ]
// let a = new Tag("a","Тег a является одним из важных элементов HTML и предназначен для создания ссылок",a_attr);
// console.log(a);
// //-div
// let div_attr=[
//     {attribute_name:"align",attribute_desc:"Задает выравнивание содержимого тега <div>."},
//     {attribute_name:"title",attribute_desc:"Добавляет всплывающую подсказку к содержимому."},
// ];
// let div_desc="Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.";
// let div= new Tag("div",div_desc,div_attr);
// console.log(div);
// //-h1
// let h1_desc="HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.";
// let h1_attr=[
//     {attribute_name:"align",attribute_desc:"Определяет выравнивание заголовка."},
// ];
// let h1=new Tag("h1",h1_desc,h1_attr);
// console.log(h1);
// //-span
// let span_desc="Тег <span> предназначен для определения строчных элементов документа. ";
// let span_attr=[
//     {attribute_name:"id",attribute_desc:"Указывает имя стилевого идентификатора."},
//     {attribute_name:"title",attribute_desc:"Описывает содержимое элемента в виде всплывающей подсказки."},
//     {attribute_name:"class",attribute_desc:"Определяет имя класса, которое позволяет связать тег со стилевым оформлением"},
//
// ];
// let span= new Tag("span",span_desc,span_attr);
// console.log(span);
// //-input
// let input_desc="Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.";
// let input_attr=[
//     {attribute_name:"accept",attribute_desc:"Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."},
//     {attribute_name:"align",attribute_desc:"Определяет выравнивание изображения."},
//     {attribute_name:"alt",attribute_desc:"Альтернативный текст для кнопки с изображением."},
//
// ];
// let input = new Tag("input",input_desc,input_attr);
// //-form
// let form_desc="Тег <form> устанавливает форму на веб-странице. ";
// let form_attr=[
//     {attribute_name:"action",attribute_desc:"Адрес программы или документа, который обрабатывает данные формы."},
//     {attribute_name:"method",attribute_desc:"Метод протокола HTTP"},
//     {attribute_name:"name",attribute_desc:"Имя формы."},
//
// ];
// let form=new Tag("form",form_desc,form_attr);
// //-option
// let option_desc="Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ";
// let option_attr=[
//     {attribute_name:"id",attribute_desc:"Указывает имя стилевого идентификатора."},
//     {attribute_name:"title",attribute_desc:"Описывает содержимое элемента в виде всплывающей подсказки."},
//     {attribute_name:"class",attribute_desc:"Определяет имя класса, которое позволяет связать тег со стилевым оформлением"},
// ];
// let option=new Tag("option",option_desc,option_attr);
// //-select
// let select_desc="Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.";
// let select_attr=[
//     {attribute_name:"accesskey",attribute_desc:"Позволяет перейти к списку с помощью некоторого сочетания клавиш."},
//     {attribute_name:"disabled",attribute_desc:"Блокирует доступ и изменение элемента."},
//     {attribute_name:"form",attribute_desc:"Связывает список с формой."},
// ];
// let select=new Tag("select",select_desc,select_attr);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car={
//     model:"Impala",
//     maker:"Chevrolet",
//     year:1967,
//     max_speed:220,
//     engine:2.4,
//     drive:function (){
//         console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`);
//     },
//     info:function (){
//         if(this.driver) {
//             console.log(`model:${this.model},
//                 maker:${this.maker},
//                 year:${this.year},
//                 max_speed:${this.max_speed},
//                 engine:${this.engine},
//                 driver: name:${this.driver.name} age:${this.driver.age} `);
//         }
//         else{
//                 console.log(`model:${this.model},
//                 maker:${this.maker},
//                 year:${this.year},
//                 max_speed:${this.max_speed},
//                 engine:${this.engine}`);
//         }
//     },
//     increaseMaxSpeed:function (newSpeed){
//         this.max_speed+=newSpeed;
//     },
//     changeYear:function (newValue){
//         this.year=newValue;
//     },
//     addDriver:function (driver) {
//         this.driver = driver;
//     }
// }
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// let driver={name:"Andriy",age:32};
// car.addDriver(driver);
// car.info();

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(model, maker, year, max_speed, engine){
//     this.model=model;
//     this.maker=maker;
//     this.year=year;
//     this.max_speed=max_speed;
//     this.engine=engine;
//
//     this.drive =function() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`);
//     }
//      this.info=function()
//     {
//         if(this.driver) {
//             console.log(`model:${this.model},
//                 maker:${this.maker},
//                 year:${this.year},
//                 max_speed:${this.max_speed},
//                 engine:${this.engine},
//                 driver: name:${this.driver.name} age:${this.driver.age} `);
//         }
//         else{
//             console.log(`model:${this.model},
//                 maker:${this.maker},
//                 year:${this.year},
//                 max_speed:${this.max_speed},
//                 engine:${this.engine}`);
//         }
//     }
//     this.increaseMaxSpeed=function (newSpeed){
//         this.max_speed+=newSpeed;
//     }
//     this.changeYear=function (newValue){
//         this.year=newValue;
//     }
//     this.addDriver=function (driver) {
//         this.driver = driver;
//     }
// }
// let impala=new Car("Impala","Chevrolet",1967,220,3.4);
// impala.drive();
// impala.info();
// impala.increaseMaxSpeed(40);
// impala.drive();
// impala.changeYear(2020);
// let driver={name:"Oleh",age:21};
// impala.addDriver(driver);
// impala.info();

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car{
//     constructor(model, maker, year, max_speed, engine) {
//         this.model=model;
//         this.maker=maker;
//         this.year=year;
//         this.max_speed=max_speed;
//         this.engine=engine;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`);
//     }
//     info()
//     {
//         if(this.driver) {
//             console.log(`model:${this.model},
//                 maker:${this.maker},
//                 year:${this.year},
//                 max_speed:${this.max_speed},
//                 engine:${this.engine},
//                 driver: name:${this.driver.name} age:${this.driver.age} exp:${this.driver.exp}`);
//         }
//         else{
//             console.log(`model:${this.model},
//                 maker:${this.maker},
//                 year:${this.year},
//                 max_speed:${this.max_speed},
//                 engine:${this.engine}`);
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         this.max_speed+=newSpeed;
//     }
//     changeYear(newValue){
//         this.year=newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
// let impala=new Car("Impala","Chevrolet",1989,220,3.4);
// impala.drive();
// impala.info();
// impala.increaseMaxSpeed(20);
// impala.drive();
// impala.changeYear(2015);
// let driver={name:"Vasya",age:40,exp:5};
// impala.addDriver(driver);
// impala.info();

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Cinderella{
//     constructor(name,age,foot_size) {
//         this.name=name;
//         this.age=age;
//         this.foot_size=foot_size;
//     }
// }
// let Cinderella1= new Cinderella("Cinderella1",21,34.5);
// let Cinderella2= new Cinderella("Cinderella2",22,35);
// let Cinderella3= new Cinderella("Cinderella3",20,36.5);
// let Cinderella4= new Cinderella("Cinderella4",19,35.5);
// let Cinderella5= new Cinderella("Cinderella5",25,36);
// let Cinderella6= new Cinderella("Cinderella6",24,37.5);
// let Cinderella7= new Cinderella("Cinderella7",18,34);
// let Cinderella8= new Cinderella("Cinderella8",17,35);
// let Cinderella9= new Cinderella("Cinderella9",22,36);
// let Cinderella10= new Cinderella("Cinderella10",21,38);
// let Cinderellas=[Cinderella1,Cinderella2,Cinderella3,Cinderella4,Cinderella5,Cinderella6,Cinderella7,Cinderella8,Cinderella9,Cinderella10];
// class Prince{
//     constructor(name,age,shoes_size) {
//         this.name=name;
//         this.age=age;
//         this.shoes_size=shoes_size;
//     }
// }
// let Artur = new Prince("Artur",21,34);
// for (let i of Cinderellas){
//     if (Artur.shoes_size===i.foot_size){
//         console.log(`Prince ${Artur.name} find ${i.name} with foot size ${i.foot_size}`);
//     }
// }

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderella(name,age,foot_size){
        this.name=name;
        this.age=age;
        this.foot_size=foot_size;
}
let Cinderella1= new Cinderella("Cinderella1",21,34.5);
let Cinderella2= new Cinderella("Cinderella2",22,35);
let Cinderella3= new Cinderella("Cinderella3",20,36.5);
let Cinderella4= new Cinderella("Cinderella4",19,35.5);
let Cinderella5= new Cinderella("Cinderella5",25,36);
let Cinderella6= new Cinderella("Cinderella6",24,37.5);
let Cinderella7= new Cinderella("Cinderella7",18,34);
let Cinderella8= new Cinderella("Cinderella8",17,35);
let Cinderella9= new Cinderella("Cinderella9",22,36);
let Cinderella10= new Cinderella("Cinderella10",21,38);
let Cinderellas=[Cinderella1,Cinderella2,Cinderella3,Cinderella4,Cinderella5,Cinderella6,Cinderella7,Cinderella8,Cinderella9,Cinderella10];
function Prince(name,age,shoes_size){
        this.name=name;
        this.age=age;
        this.shoes_size=shoes_size;
    this.findCinderella=function (arr){
        for (let i of arr) {
            if (this.shoes_size === i.foot_size) {
                console.log(`Prince ${this.name} find ${i.name} with foot size ${i.foot_size}`);
            }
            else{
                console.log(`Prince ${this.name} can not find Cinderella with foot size ${this.shoes_size}`);
                break;
            }
        }
    }
}
let Artur = new Prince("Artur",21,40);
Artur.findCinderella(Cinderellas);