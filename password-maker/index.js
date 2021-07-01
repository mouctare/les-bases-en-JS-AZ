const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);


// Les dates

let date = new Date();

//console.log(date);

//console.log(date.toISOString());

function dateParser(chaine)  {
   let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
      year : "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
   });
   return newDate;
}

//console.log(dateParser(date));

// Destrictiring



const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  console.log("ma date" + newDate)
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
//console.log(dateDestructuring(date));

let mail = "from_scratch33@gmail.com";

//console.log(mail.replace(/from/, "de"));
//console.log(mail.match(/Scratch/i));
//console.log(mail.match(/[zug]/));

// Tous les chiffres
//console.log(mail.match(/\d/));

// Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));
 //console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2 , 4}$/i));
// console.log(mail.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"));

let separator = 12356789
console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\(d))/g, " "));