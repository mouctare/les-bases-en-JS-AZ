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
const userDisplay = async () => {
    // Si l'erreur dit connot red map off indifinded 
    //c'est à dire que les data ne sont pas charchées probléme d'asncy
    // Strigify convertit en Json
    // Parse => transforme json en object js
    await fetchUser();

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric"
        });
        return newDate;
    }
   
    const dayCal = (date) => {
        let today = new Date();
        let todayTimestamp = Date.parse(today);
        let timestamp = Date.parse(date);

        return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
};
   document.body.innerHTML = userData.map((user) => 
   `
   <div class="card">
   <img src=${user.picture.large} alt="photo de ${user.name.last}"
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
    <em>Membre depuis : ${dayCal(user.registered.date)} jours </em>
    </div>
   `
   ).join("")

}

userDisplay();