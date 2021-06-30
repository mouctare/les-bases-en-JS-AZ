let array3 = ["Javascript", "Php", "Pyton"];
let array4 = ["Ruby", "Solidity"];

//let newArray = array3.concat(array4);
//console.log(newArray);

// spreadoperator
let newArray = [...array3, ...array4]
//console.log(newArray);
//console.log(array3.join(" "));

//console.log(array3.slice(3,5));
//console.log(array3.indexOf("Pyton"));
//console.log(array3.every((language) => language === "p"));
//console.log(array3.some((language) => language === "Php"));
// La méthode shift() permet de retirer le premier élément d'un tableau
// La méthode pop() permet de retirer le dernier élément d'un tableau

//const restArray = array3.splice(0,  2, ...array4);
//console.log(restArray);


// IMPORTANT //
let arrayNumber = [4, 74, 28, 12, 1];
//console.log(arrayNumber.reduce((x, y) => x + y)); 
// La méthode reduce permet de faire des calculs sur un tableau
//arrayNumber.push("Coucou");
//console.log(arrayNumber);

// FILTER, SORT, MAP

//console.log(arrayNumber.filter((number) => number > 10));
// Ici avec le filter , on lui dit à chaque tour comment on veut appelé l'element
// exemple ((number) => number > 10)) ici je le nomme number
// Tu me gardes les nombres supérieur à 10
//console.log(arrayNumber.sort());

//console.log(arrayNumber.sort((a, b) => b - a));
// trier comme on veut

// document.body.innerHTML = arrayNumber
// .map((number) => `<li>${number}</li>`)
// .join(" ");

// document.body.innerHTML = arrayNumber
// .map((number) => `<li>${number}</li>`)
// .join(" ");

const data = [ 
    {
     pseudo: "Denis",
     age: 30,
     technos: ["Javascript", "React", "NodeJs"],
     admin: false,
},
    {
     pseudo: "Samia",
     age: 43,
     technos: ["CSS", "React", "NodeJs"],
     admin: false,
},
    {
     pseudo: "Nikola",
     age: 53,
     technos: ["Php", "React", "NodeJs"],
     admin: false,
},
    {
     pseudo: "Jean",
     age: 33,
     technos: ["Java", "React", "NodeJs"],
     admin: true,
}

]

document.body.innerHTML = data
  .filter((user) => user.admin === false || true)
  //.filter((user) => user.pseudo.includes("Den"))
  .sort((a, b) => b.age - a.age)
  .map((user) =>
  `
   <div class="user-card">
   <h2>${user.pseudo}</h2>
   <p>Age : ${user.age} ans</p>
   <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
   
   </div>
  
  `
  ).join("");

  


 