let phone = document.querySelector("#phone");
let phoneName = ["Samsung","Oppo","Infinex"];
let ditiels = phoneName.map((nameList) => {
    let li =document.createElement("li");
    li.innerText = nameList;
    return li;
})
phone.append(...ditiels);

let phoneUser = document.querySelector("#phoneUser");
let userName = ["Mostakim","Mynul","Rabbani"];
let sell = userName.map((userList) =>{
    let li = document.createElement("li");
    li.innerText = userList;
    return li;
})
phoneUser.prepend(...sell);

let black =document.querySelector("#black");
black.insertAdjacentHTML("beforebegin","<h1>Black Sarker</h1>")
black.insertAdjacentHTML("afterbegin","<li>Sarker</li>")
black.insertAdjacentHTML("afterend","<h2>Rabbani</h2>")
black.insertAdjacentHTML("beforeend","<li>Mynul</li>")

// <==================== Replace,CloneNone/Copy,Remove =============>
let nav = document.querySelector("#nav");
let li = document.createElement("li");
li.textContent ="Home";
nav.replaceChild(li,nav.firstElementChild)

let li2 = document.createElement("li");
li2.textContent ="Login";
nav.replaceChild(li2,nav.lastElementChild)

let cloneNode = nav.cloneNode(true);
document.body.appendChild(cloneNode);