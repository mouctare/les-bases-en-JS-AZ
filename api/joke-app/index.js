
const header = document.getElementById("header");
const content = document.getElementById("content");

console.log(header, content);

function getJoke() {

    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
       console.log(data.data.content);
    
       header.textContent =  data.data.content.text_head;
       content.textContent = 
        data.data.content.text !== ""
          ? data.data.content.text
          : data.data.content.text_hiden
    });
}

getJoke();

document.body.addEventListener('click', getJoke);
// C'est à dire au click joue moi la function getJoke à laquelle , on a adossé un evenement
