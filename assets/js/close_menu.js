let menu = document.getElementById("menu");
let checkboxMenu = document.getElementById("burger");
function closeMenu() {
    // On vérifie si checbox est cochée
    if (checkboxMenu.checked) {
        checkboxMenu.checked = false; // On décoche la case 
    }
}
menu.addEventListener("click", closeMenu);