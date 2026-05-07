// <<==============Javascript Data Type==============>>
let strType = "Black Sarker";
console.log(typeof strType);
console.log(strType);

let numType = 111;
console.log(typeof numType);
console.log(numType);

let boolType = false;
console.log(typeof boolType);
console.log(boolType);

// <<================toUpper or toLower Case Method===============>>
const bigLeter = "i'm comening!";
console.log(bigLeter.toUpperCase());

const smallLeter = "I'M COMENING!"
console.log(smallLeter.toLowerCase());

// <<================ For Exampel ===============>>
//const userInput = prompt("Write Your Capetal Text");
//console.log(userInput.toLowerCase());

// <<=========Js indexOf() Or split() =============>>
let nagative = "I Love You";
console.log(nagative.split("You"));

let position = "I Heat You";
console.log(position.indexOf("You"));

// <<=========Js parseFlot() Or parseInt() =============>>
let num1 = 22;
let num2 = 44;
let total = num1 + num2;
console.log(total);

let num3 = "22.54"; //string 
let num4 = 44;
num3 = parseFloat(num3); //convart number
let mot = num3 + num4;
console.log(mot);

let num7= "22.55"; // string
let num8 = 44;
num7 = parseInt(num7); //convart number
let mote = num7 + num8;
console.log(mote);

let num5 = 22; //int number
let num6 = 44;
num5 = " " + num5; //convart string
let result = num5 + num6;
console.log(result);

// <<=================Javasceipt Operators===================>>
let num9 = 50;
let num10 = 70;
let addition = num9 + num10;
console.log(addition);

let num11 = 50;
let num12 = 70;
let subtraction = num11 - num12;
console.log(subtraction);

let num13 = 50;
let num14 = 70;
let multiplication = num13 * num14;
console.log(multiplication);

let num15 = 30;
let num16 = 5;
let division = num15 / num16;
console.log(division);

let num17 = 30;
let num18 = 5;
let remainder = num17 % num18;
console.log(remainder);

// <<=================Javasceipt Predifined Math Function===================>>
let num20 = 10;
let num21 = 20;
let num22 = num20 - num21;
let sum = Math.abs(num22); //result Positive korbe
console.log(sum);

let num23 = 10.5;
let num24 = 20;
let num25 = num23 + num24;
let sum1 = Math.round(num25); //result 10.5 =11 korbe
console.log(sum1);

let num26 = 10.3;
let num27 = 20;
let num28 = num26 + num27;
let sum2 = Math.round(num28); //result 10.3 =10 korbe
console.log(sum2);

let num29 = 10.3;
let num30 = 20;
let ceil = num29 + num30;
let sum3 = Math.ceil(ceil); //result 10.3 =11 korbe
console.log(sum3);

let num32 = 20;
let num33 = 10.7;
let floor = num32 + num33;
let sum4 = Math.floor(floor); //result 10.7 =10 korbe
console.log(sum4);

let target = Math.random();
console.log(target);



let randomNumber= Math.random() * 10; // string
let addNumber = 1;
randomNumber = parseInt(randomNumber); //convart numb
let lock = randomNumber + addNumber;
console.log(lock); 

/*let input1 = parseFloat(prompt("Enter First Number"));
let input2 = parseFloat(prompt("Enter Sceound Number"));
let ceil1 = input1 + input2;
let sum5 = Math.ceil(ceil1); //result 10.3 =11 korbe
console.log(sum5);*/

//<<=======Logical Conditional Statement=========>>
// <<======if, else, else if or Switch ==========>>
let a = 10;
let b = 10;
if(a > b){
    console.log("One Statement");
}
else if(a < b){
    console.log("Tow Statement");
}else{
    console.log("Three Satement");
}

let x = 500;
switch(x){
    
    case 40:
        console.log("One Statement");
        break;
    case 30:
        console.log("Yow Statement");
        break;
    case 50:
        console.log("Three Statement");
        break;
    default:
        console.log("foure Statement")
}

// <<==========Javascript Date object ===============>>
let myDate = new Date();
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.getDate());
console.log(myDate.getTime());
console.log(myDate.toLocaleDateString());

// <<==========Javascript Array ===============>>
let firendName = ["Black Sarker","Mynul","Anwer","Mostakim"];
    firendName[0] = "Sakil"
    firendName.push("Rabbani");
    firendName.unshift("Hablo");
    firendName.shift();
    firendName.pop();
    console.log(firendName);

    let fdName = ["Mynul","Anwer","Mostakim","Sakil","Hablo"];
    console.log(fdName.slice(2,3));
    fdName.splice(1,3,"html","css","java");
    console.log(fdName);

    // <<==========Javascript Loops for while ===============>>
    let forLoop = [1,2,3,4,5];
    for(let f = 0; f < forLoop.length; f++){
        console.log("Welcome");
    };

    let whileLoop = [1,2,3,4,5];
    let w = 0;
    while(w < whileLoop.length){
        console.log("Hi EveryOne");
        w++;
    };

    // <<==========Javascript Function ===============>>
    function Fun(){
        let p=10;
        let q=30;
        let r= p+q;
        console.log(r);
    }
    Fun();

    function Func(p,q){
        let r= p-q;
        console.log(r);
    }
    Func(20,10);

    function Funct(y){
        let result = y * 10;
        console.log(result);
    }
    Funct(10);

    function call(run1,run2){
        let run=run1*run2;
        return run;
    }
    let run3 = call(20,10);
    console.log(run3);

    // <<==========Javascript Object this display ===============>>
    let obo = {
        names: "Sakil",
        age:23,
        phoneNo: 8801796675373,
        gmail: "sssarker2526@gmail.com",
        contry:"Bangladesh",
        currentLocation: "Gazipur_Dhaka_Bangladesh",
        jobs: "Student"

    }
    console.log(obo.contry);

    function User(names,age,job){
        this.names = names;
        this.age = age;
        this.job = job
        this.display = function(){
            console.log(this.names);
            console.log(this.age);
            console.log(this.job);
        }
    }
    let show = new User("Black Sarker",23,"Student");
    let showOne = new User("Sarker",23,"Developer");
    show.display();
    showOne.display();

    // <<==========Javascript Tarnary Operator ===============>>
    let tarnar = 30;
    let tarn = (tarnar > 40) ? "Tarnary Operator" : "Tarnary Operator!";
    console.log(tarn);
    // <<==========Javascript Brack or Continue ===============>>

    for(let brackCon = 0; brackCon <=10; brackCon++){
        if (brackCon == 5){
            console.log("Brack It");
            //brack;
            continue;
        }
        console.log(brackCon);
    };

    // <<==========Javascript Function Exprenssion ===============>>
    let exprenssion = function(expen,sion){
        console.log(expen + sion)
    }
    exprenssion("javascript","Expenssion");
    // <<==========Javascript Function inner ===============>>
    function world(man,men){
        let myNam = man;
        function bangladesh(){
            let yourNam = men;
            console.log(yourNam);
        }
        console.log(myNam)
        bangladesh();
    }
    world("Black sarker","Sarker");


    // <<==========Javascript ES6 Defult Function Parameter ===============>>
    function defaultPara(massage = "Black Sarker"){
        console.log(massage)
    }
    defaultPara("Javascript Parameter");

    function createPara(massage){
        massage = typeof massage !== "undefined" ? massage:"Create Parameter";
        console.log(massage);
    }
    createPara(" Yes! Create Parameter");

    // <<==========Javascript ES6 Rest Function Parameter ===============>>
    function rest(num1,num2, ...num){
        console.log(num1,num2,num);
    }
    rest(1,2,3,4,5,); //value 3,4,5 is store rest ...num>>

    // <<==========Javascript ES6 Speared Parameter ===============>>
    const speardPara = [1,2,3,4];
    //const speardPara1 = [speardPara,5,6,7,8]; //2nd Array Crate
    const speardPara1 = [...speardPara,5,6,7,8]; //spared Parameter
    console.log(speardPara1);

    // <<==========Javascript object literals Function ===============>>
    function say(mass,names){
        return{mass,names}
    }
    console.log(say("this is a object literal","Sakil"));

    // <<==========Javascript for of, for in ===============>>
    const forOf =[1,2,3,4,5];
    for(arraya of forOf){
        console.log(arraya);
    }

    const forIn =[100,200,300,400,500];
    for(arrayTwo in forIn){
        console.log(arrayTwo);
    }

    const objectPro ={
        names:"sakil",
        age:23,
        roll:2503
    }
    for(NewObj in objectPro){
        console.log(NewObj);
    }

    // <<==========Javascript ES6 Templet litarals ===============>>
    const templetStr = `Hablo`;
    const templetStr1 = 55;
    console.log(`My Name Is ${templetStr} & My Age is ${templetStr1} Yers Old`);

    const str = `i love bangladesh
                "black" 
                "sarker" `;
    console.log(str);
    

    //old templets
    /*const templetStrOne = `Hablo mama`;
    const templetStrTwo = 50;
    console.log("My Name " + templetStrOne + " & My Age is " + templetStrTwo + " Yers Old");*/

    // <<==========Javascript ES6 Array===============>>
    let one =[1,2,3,4,5,6,7,8];
    let [anwer, mostakim, ...sakil] = one;
    console.log(anwer,mostakim,sakil);

    // <<==========Javascript ES6 Object===============>>
    const objOne ={
        names: "Kamrul",
        age: 25,
        wifie: "Samiya"
    }
    const {names,age,wifie} =objOne;
    console.log(names,age,wifie);

 // <<==========Javascript ES6 Class constaktur===============>>
    class mobaile{
        constructor(names,model,price){
            this.names = names;
            this.model = model;
            this.price = price;
        }
    }
    const mobaileDetils = new mobaile("Tablet","ProX","$800");
    console.log(mobaileDetils);

    //<<==========Javascript ES6 Class Expression constaktur===============>>
    let profile = class{
        constructor(names,phoneNo,roll){
            this.names = names;
            this.phoneNo = phoneNo;
            this.roll = roll;
        }
    }
    const userInfo = new profile("Mostakim","01324952008", 100);
    console.log(userInfo);

    //<<==========Javascript ES6 Class Statick===============>>
    class hero{
        static Boss(){
            console.log("01324952005", 1000)
        }
    }
    hero.Boss();

    //<<==========Javascript ES6 Class inheritenc & super expend person===============>>
    class parent{
        mather(){
            console.log("Ma Amer Jannat");
        }
        father(){
            console.log("Baba Amer world");
        }
    }
    class iam extends parent{
        amerTarget(){
            super.mather();
            super.father();
        }
    }
    //let mytarget = new iam();
    //mytarget.mather();

    let mytarget = new iam()
    mytarget.amerTarget();

 //<<==========Javascript ES6 Array Function Expenssion===============>>
    let arrFunExp = function(x,y){
        return x + y;
    }
    console.log(arrFunExp(10,40));

    let arrayExpen = (x,y) => x + y; // Array Function Exprenssion
    console.log(arrayExpen(41,10));

    //<<==========Javascript ES6 Simbel===============>>
    let sim1 = "Sakil";
    let sim2 = "Sakil";
    console.log(sim1===sim2);

    let sim3 = Symbol("Sakil");
    let sim4 = Symbol("Sakil");
    console.log(sim3===sim4);

    //<<==========Javascript ES6 for each===============>>
    let each = [10,20,30,40,50];
    each.forEach(lopCrate)
    function lopCrate(s){
        console.log(s);
    }

    let eachOne = [100,200,300,400,500];
    eachOne.forEach((x) => console.log(x));

//<<==========Javascript ES6 map Function===============>>
let mapFun = [1,2,3,4];
let mapFun1 = mapFun.map(fun);
function fun(m){
    return m * 2;
}
console.log(mapFun1);


let maps = [10,20,30];
let you = [];
maps.forEach(map)
function map(y){
    you.push(y * 2)
}
console.log(you);

//<<==========Javascript ES6 Array Function Filter()===============>>
let filtering =[1,2,3,4,5,7,8];
let filterNow = filtering.filter(funFun)
function funFun(y){
    return y > 4;
}

console.log(filterNow);

//<<==========Javascript ES6 async seync function===============>>
/*let seync = () => {
    console.log("Seync");
}
let lodingTime = () => {
    console.log("Seync1");
}
let seync1 = () => {
    setTimeout(lodingTime, 2000)
}
let seync2 = () => {
    console.log("Seync2");
}
seync();
seync1();
seync2();*/

//<<==========Javascript ES6 callback and higer Oder function===============>>
let display = (sakil) => {
    console.log(sakil)
}

let callBackFun = (names,age,callBackFuncition) => {
    const ditelis = `My Name Is ${names} & My Old ${age}`;
    callBackFuncition(ditelis)
}
callBackFun("Sakil",23,display)

//<<==========Javascript ES6 Promise function===============>>
let userPromise = true;
let promise = new Promise((rselove,reject) =>{
    if(userPromise){
        rselove([
        {names: "sakil",email: "sarkergmail.com"},
        {names: "mostakim",email: "mostakimgmail.com"}
    ])
    }else{
        reject("User is Not Valid")
    }
})
promise.then((s) =>{
    console.log(s);
})
promise.catch((error) => {
    console.log(error);
})

//<<==========Javascript ES6 Async and Await function===============>>