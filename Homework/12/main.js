//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textarea= document.getElementById("form");
// textarea.oninput=()=> {
//     localStorage.setItem("txt", textarea.value);
// }
// let item = localStorage.getItem("txt");
// textarea.value = item;

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// let form = document.forms.form1;
// for (let i = 0; i < form.length; i++) {
//     form[i].oninput = () => {
//         if (form[i].type === "checkbox" || form[i].type === "radio") {
//             if (form[i].checked) {
//                 form[i].value = "true";
//             } else {
//                 form[i].value = "false";
//             }
//         }
//         localStorage.setItem(form[i].id, form[i].value);
//     }
//
// }
// for (let i of form) {
//     let element = localStorage.getItem(i.id);
//     if (element === "true") {
//         i.setAttribute("checked", "checked");
//     }
//     i.value = element;
// }

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let textarea= document.getElementById("form");
// let btn = document.getElementById("btn");
// let left = document.getElementById("left");
// let right = document.getElementById("right");
// btn.onclick=()=> {
//     localStorage.setItem(localStorage.length, textarea.value);
// }
// left.onclick=()=>{
//     let key;
//     for (let i in localStorage){
//         if(localStorage.getItem(i)===textarea.value){
//             key= i;
//         }
//     }
//     if(key==="0"){
//         alert("Start");
//         return;
//     }
//     textarea.value=localStorage.getItem(+key-1);
// }
// right.onclick=()=>{
//     let key;
//     for (let i in localStorage){
//         if(localStorage.getItem(i)===textarea.value){
//             key= i;
//         }
//     }
//     if(key===(localStorage.length-1).toString()){
//         alert("End")
//         return;
//     }
//     textarea.value=localStorage.getItem(+key+1);
// }

//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня.
// При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
let add = document.getElementById("add");
let show = document.getElementById("show");
let form = document.forms.form;
let users = [];
add.onclick = () => {
    let user = {};
    for (let item of form) {
        if (item.type !== "button") {
            user[item.name] = item.value;
        }
    }
    user.id = new Date().getMilliseconds();
    localStorage.setItem(user.id, JSON.stringify(user));

}

let main = document.createElement("div");
show.onclick = () => {

    for (let i in localStorage) {
        if (localStorage.hasOwnProperty(i)) {
            users.push(JSON.parse(localStorage.getItem(i)));
        }
    }
    main.innerText = "";
    for (let i of users) {
        let div = document.createElement("div");
        div.innerText = JSON.stringify(i);
        let edit = document.createElement("button");
        edit.innerText = "Edit";
        let del = document.createElement("button");
        del.innerText = "Delete";
        let change = document.createElement("button");
        change.innerText = "Save Changes";
        div.appendChild(edit);
        div.appendChild(del);
        main.appendChild(div);
        edit.onclick = () => {
            div.appendChild(change);
            for (let j of form) {
                if (j.type !== "button") {
                    j.value = i[j.name];
                }
            }
        }
        change.onclick=()=>{
            if (localStorage.hasOwnProperty(i.id)) {
                for (let item of form) {
                    if (item.type !== "button") {
                        i[item.name] = item.value;
                    }
                }
                localStorage.setItem(i.id, JSON.stringify(i));
            } else {
                for (let item of form) {
                    if (item.type !== "button") {
                        i[item.name] = item.value;
                    }
                }
                i.id = new Date().getSeconds();
                localStorage.setItem(i.id, JSON.stringify(i));
            }
        }
        del.onclick = () => {
            div.innerText = "";
            localStorage.removeItem(i.id);
        }
    }
    document.body.appendChild(main);
}

