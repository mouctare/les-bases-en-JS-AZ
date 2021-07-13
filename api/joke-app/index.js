
const header = document.getElementById("header");
const content = document.getElementById("content");

console.log(header, content);

function getJoke() {

    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
        const content = data.data.content;
        // J'appelle les data que je récupère content 
       console.log(content);
    
       header.textContent =  content.text_head;
       content.textContent =  content.text !== "" ? content.text : content.text_hiden
    });
}

getJoke();

document.body.addEventListener('click', getJoke);
// C'est à dire au click joue moi la function getJoke à laquelle , on a adossé un evenement


const init = {
    method : "POST",
    headers : {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "From Scratch",
        message: "Yo les gens !"
    }),
    mode: "cors",
    credentials: "same-origin"
}