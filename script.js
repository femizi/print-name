const button = document.querySelector('.btn')
console.log(button)

button.addEventListener("click", showAlert)
function showAlert() {
    let myText = "Femi Efejuku";
    alert (myText);
}