// on récupère le lien 
const scrollBtn = document.getElementById("scrall_top");
//on récupere le header
const header = document.querySelector("header");
//fontion qqui affiche le lien vers le haut de la page dès que le header n'est plus visible
function scrollTop() {
    if (window.scrollY > header.clientHeight) {
        scrollBtn.style.display = "flex";
     
    } else {
        scrollBtn.style.display = "none";
    }
}
//écouter d'évenement qui appel la focntion scrollTop au scroll de la page
window.addEventListener("scroll", scrollTop);