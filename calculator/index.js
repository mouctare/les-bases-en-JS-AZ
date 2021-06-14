const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      result.textContent += e.target.id
    });
});

equal.addEventListener('click', () =>{
    // La methode eval permet d ecalculer cce qui est à l'interireur
    result.textContent = eval(result.textContent);
})
clear.addEventListener('click', () =>{
    result.textContent = "";
});

//-----------------
// addEventListener Vs onClick
document.body.onclick = function() {
    console.log("Click");
}