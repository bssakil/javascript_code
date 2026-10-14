let btn = document.querySelector("#btn"); // 2label Event Handiling
btn.addEventListener("click",function(e){
    alert("2 Label Handiling")
});

let btnOne = document.querySelector("#btnOne");
function clickMe(){
    alert("Hi Sakil")
};

let mous = document.querySelector("#mous");
function mousEvent(e){
    console.log(e.type)
};
//mous.addEventListener("mousdown",mousEvent);
//mous.addEventListener("mousup",mousEvent);
//mous.addEventListener("click",mousEvent);
//mous.addEventListener("dbClick",mousEvent);
mous.addEventListener("mousenter",mousEvent);
mous.addEventListener("mouslave",mousEvent);
mous.addEventListener("mousmove",mousEvent);

let keybord = document.querySelector("#keybord");
function keyEvent(e){
    console.log(e.key)
};
keybord.addEventListener("keypress",keyEvent)