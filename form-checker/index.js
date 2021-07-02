const form = document.querySelector("form");
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');

const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;


const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};



const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    // Si jamais pseudo ne repond pas à cette condition , on bloque la validation du formulaire
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
     // Si jamais pseudo ne repond pas à cette condition , on bloque la validation du formulaire
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
     // Si jamais pseudo ne repond  à cette condition , on incrémente l'input
    pseudo = value;
  }
}

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
}

const passwordChecker = (value) => {
  progressBar.classList = "";

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay("password","Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial");
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};



inputs.forEach((input) => {
   input.addEventListener('input', (e) => {
     switch(e.target.id){
       case "pseudo" : 
        pseudoChecker(e.target.value)
        break;
       case "email" : 
        emailChecker(e.target.value)
        break;
       case "password" : 
        passwordChecker(e.target.value)
        break;
       case "confirm" : 
        confirmChecker(e.target.value)
        break;
        default:
          null
     }
   });
});

// Gestion de la soummission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo,
      email,
      password,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    // On vide les inputs et la progessBar
    progressBar.classList = "";
    
    // On réunitialise les champs
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validée !");
  } else {
    alert("veuillez remplir correctement les champs");
  }
});