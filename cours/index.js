// SELECTEURS
//document.querySelector("h4").style.background = "yellow";

//const baliseHTML = document.querySelector("h4");

//baliseHTML.style.background = "yellow";

// Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
console.log("p");


//questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener('click', () => {
    // addEventListener reçoi en premier param l'evenement en 2eme la function
    //questionContainer.style.background = "red";
    //questionContainer.style.border = "3px solid teal";
    questionContainer.classList.toggle("question-clicked")
});

btn1.addEventListener('click', () => {
  //  c'est à dire dés que tu vois un click , je veux que tu m'exécute cette function
    response.classList.add("show-response");
    response.style.background = "green";
})

btn2.addEventListener('click', () => {
  //  c'est à dire dés que tu vois un click , je veux que tu m'exécute cette function
   response.classList.add("show-response");
    response.style.background = "red";
})

// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
 


