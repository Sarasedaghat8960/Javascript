let Name=prompt("Vad heter du ?");
let age=prompt("Hur gammal är du ?");
let animalName=prompt("Vilket djur gillar du?");
let cityName=prompt("vart bor du?");
let story="Du heter " + Name + ", " + "du är " + age  + " år gammal" + ", " +"ditt favoritdjur är " + animalName   +" och du bor i " + cityName +"." ;
alert(story);
console.log(story);
let textbox= document.getElementById("textbox");
textbox.insertAdjacentHTML("beforeend" , story);


