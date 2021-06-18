// SELECTEURS
//document.querySelector("h4").style.background = "yellow";

//const baliseHTML = document.querySelector("h4");

//baliseHTML.style.background = "yellow";

// Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");



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
 
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px soliod teal";
});


questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
  mousemove.style.border = "2px soliod teal";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
 
});

response.addEventListener("mouseout", () => {
  response.style.transform = "rotate(2deg)";
 
})
//-------------------------------
//KeyPress event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");

document.addEventListener('keypress', (e) =>{
  key.textContent = e.key;

  if(e.key === "j") {
    keypressContainer.style.background ="pink"
  } else if (e.key === "h") {
    keypressContainer.style.background ="teal"
  } else {
    keypressContainer.style.background ="red"
  }
 // ring(e.key);
})

// const ring = (key) => {
//  // const audio = new Audio();
//   audio.src =  key + ".mp3";
//  // audio.play();
// }
//--------------------
//Scroll Event

const nav =  document.querySelector("nav");
window.addEventListener('scroll', () =>{

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

console.log(form);

inputName.addEventListener("input", (e) => {
 pseudo =   e.target.value;
 console.log("Le pseudo est",  pseudo);
});

select.addEventListener("input", (e) => {
  language =  e.target.value; 
  
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (cgv.checked) {
    // Afficher le contenu des variables
    document.querySelector('form > div').innerHTML = `
    <h3>Pseudo : ${pseudo} </h3>
    <h4>Langage préféré : ${language} </h4>
    `;
  }else {
    alert('Veuillez accepter les CGV')
  }
});


//-------------
// Load event il se déclenche une fois que la page a été fermé
window.addEventListener("load", () => {
  console.log("Document Chargé ")
});

//-------------
// 
window.addEventListener("load", () => {
  console.log("Document Chargé ")
});

//-------------
// On utilise getElementsByClassName est utilisé quand on a plusieurs  éléménts dans la class
//const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
// On ne peut pas faire un addEventListener sur plusieurs éléments
// boxes.addEventListener('click', () => console)
 boxes.forEach((box) => {
   box.addEventListener('click', (e) => {
    e.target.style.transform = "scale(0.7)";
   })
   
 });
 // Usecapture
 document.body.addEventListener(
   "click",
   () => {
     console.log("click, 2 !");
   },
   true
 );


 //----------
 // Stop propagation d'evenement
 questionContainer.addEventListener('click', (e) => {
 //  alert("Test !");
   e.stopPropagation();
 });

 // removeEventListener

 // BOM 

// console.log(window.innerHeight);
 
 //console.log(window.scrollY);

 // confirm
 btn2.addEventListener("click", () =>{
   confirm("Voulez vous vraiment vous tromper ?");
 })
 
 // prompt
 btn1.addEventListener("click", () =>{
 let answer =  prompt("Entrez votre nom !");
 questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>";
 })
 
 setTimeout(() =>{
// logique à exécuter
questionContainer.style.borderRaduis = "300px";
 }, 2000);


 let interval = setInterval(() =>{
document.body.innerHTML +=
`
 <div class='box'>
   <h2>Nouvelle Boite !</h2>
 </div>
`
 }, 2000)
 document.body.addEventListener('click', (e) => {
   e.target.remove();
   clearInterval(interval);
 })