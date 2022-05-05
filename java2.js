
                function pintar() {
                    var color = prompt("Inserta un color para pintar el primer div");
                    var divs = document.getElementsByClassName("clase1");
for (let i = 0; i < divs.length; i++) {
    divs[i].style = 'background-color: ' +color;
    
}
}