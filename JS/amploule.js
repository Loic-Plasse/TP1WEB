//
// Nom : exercices.js
// Date et auteur :
//
// Description :
// Au clic sur l'ampoule, on change l'image de l'ampoule
//
// Fonction Allumer/Eteindre_Ampoule :
//		- Allume Ampoule
//      - lit l'immage dans l'entrée html
//		- appelle la fonction Changer()

function etatAmpoule()
{
    // lecture de la valeur saisie qui est convertie en nombre
    const image = document.getElementById("ampoule").src;
    
    // appel de la fonction Changer
    let resultat = Changer(image);
}   
function Changer(image) {  
    if (image == "http://localhost/web/TP1/images/pic_bulbon.gif") {
        document.getElementById("ampoule").src="../TP1/images/pic_bulboff.gif";
    }
    else {
        document.getElementById("ampoule").src="../TP1/images/pic_bulbon.gif";
    }
}


