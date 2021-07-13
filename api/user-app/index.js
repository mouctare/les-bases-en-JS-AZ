let userData = [];

const fetchUser =  async () => {
   await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json ())
    .then((data) =>  (userData =  data.results))
    //.then(() => console.log(userData)); on remplace cette ligne par le async

    console.log(userData);
      
    
    // Il affiche vide au niveau du console log car au momment de lire le log, 
    // il n'a pas fini d'éxécuter la function 
}

fetchUser();