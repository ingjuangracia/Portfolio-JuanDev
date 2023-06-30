let menuVisible = false;
//Function to show or hide the menu
function mostrarOcultarMenu() { 
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive"
        menuVisible = true;
    }
}

function seleccionar () {
    //Hide Menu when choose everyone
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
