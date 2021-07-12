// XMLHttpRequest

function reqListener() {
console.log("les data");
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.text", true);
//req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues" , true);
req.send()

//---
// FETCH  (va chercher)
//---

// fetch("https://api.blablagues.net/?rub=blagues").then((response) => {
//      console.log(response)
// }).catch((err) => console.log(err))

//fetch("https://api.blablagues.net/?rub=blagues").then((res) => console.log(res));
// va me chercher (url), then ensuite fait un log(reponse)
 