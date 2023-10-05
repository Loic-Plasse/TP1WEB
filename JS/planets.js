//
// Nom : exercices.js
// Date et auteur :
//
// Description :
// Au clic sur l'ampoule, on change l'image de l'ampoule
//
// Fonction Soleil :
//		- afficher un descriptif de la planète
//      - afficher une image de la planète
//

function soleil()
{
    //afficher descriptif soleil
    document.getElementById("descriptif").innerHTML = "The Sun and the gas giant planets like Jupiter are by far the largest objects in our Solar System.";
    document.getElementById("vide").src="../TP1/images/sun.gif";
}   
function mercure() {  

    //afficher descriptif mercure
    document.getElementById("descriptif").innerHTML = "The planet Mercury is very difficult to study from the Earth because it is always so close to the Sun.";

    //afficher image mercure
    document.getElementById("vide").src="../TP1/images/merglobe.gif";

}

function venus() { 
    
        //afficher descriptif venus
        document.getElementById("descriptif").innerHTML = "Until the 1960s, Venus was often considered a twin sister to the Earth because Venus is the nearest planet to us, and because the two planets seem to share many characteristics.";
    
        //afficher image venus
        document.getElementById("vide").src="../TP1/images/venglobe.gif";
    
}

function writeDefault() {
    //afficher descriptif reset
    document.getElementById("descriptif").innerHTML = "Mouse over the sun and the planets and see the different descriptions.";
    
    //afficher image reset
    document.getElementById("vide").src="";
}