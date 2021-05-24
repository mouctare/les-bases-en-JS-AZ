let chiffre = 24;
let array = ["je", "suis", 24, false];
let object = {
    prenom: "audrey",
    age: 34,
    ville: "Bordeau"
};

//let chaine = "Le chiffre attendu est : " + chiffre + 
// " degrés";
//  L es formes de concatenations

let chaine = `Le chiffre attendu est : ${chiffre} degrés;`

let total = 2;
//total = total + 1;
//total++
total +=5
//console.log(typeof array);
let x = 5;
let y = 5;

if (x < y) {
    //()  entre parenthése ce qu'on compare
    // ensuite valeur qui suis >= supérieur ou égal
    //console.log("x est inférieur à y");
    
}else {
   // console.log("x est supérieur à y");
}
if (x === y &&   x > 3 && y < 10) {
    //()  entre parenthése ce qu'on compare
    // ensuite valeur qui suis >= supérieur ou égal
   // console.log("True");
    
}else {
   // console.log("false");
}

if (x == y ? console.log("true") :  console.log("false"));
   
function faireQuelqueChose() {
    // Tout une serie d'istruction
    console.log("Test");
}

faireQuelqueChose();

const faireUneTache = (tache) => {
    console.log(`Je fais :  ${tache} `);

}
faireUneTache("Les couses");

function add2()  {
    let a = 4
    return a + 2;

}






// (function maFonction(){
//     console.log("Je me joue toute seule");
// })();

// Function anonyme
 (() => {
    console.log("Je me joue toute seule");
})();