function mostrarMenu(){
    var menu = document.querySelector('.navigation');
    if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
}