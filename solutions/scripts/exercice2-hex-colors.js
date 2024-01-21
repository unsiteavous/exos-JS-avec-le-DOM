// Tableaux contenant les couleurs et les options hexadecimales
const colors = ['green', 'rgba(133,122,200)', 'yellow', 'red', 'blue', '#f15525', 'purple'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const lengthOfHexColor = 6;

// Elements HTML ciblés / sélectionnés / capturés
const color = document.querySelector(".color");
const btnHex = document.querySelector('#btnHex');
const btnColors = document.querySelector('#btnColors');

// Ecouteur sur le bouton pour changer la couleur parmi la sélection
btnColors.addEventListener('click', onClickBtnColors);
function onClickBtnColors() {
    // Couleur sélectionnée de manière aléatoire
    let selectedColor = getRandomColorFromSelection();
    // Appliquée au backgroundColor du body
    document.body.style.backgroundColor = selectedColor;
    // Et affichée dans l'élément HTML color
    color.textContent = selectedColor;
}

btnHex.addEventListener('click', onClickBtnHex);
function onClickBtnHex() {
     // Construction de la couleur hexédécimale
    let hexColor = "#";
    for(let i = 0 ; i < 6; i++){
        hexColor += getRandomHexPartColor();
    }   
    // Appliquée au backgroundColor du body
    document.body.style.backgroundColor = hexColor;
    // Et affichée dans l'élément HTML color
    color.textContent = hexColor;
}

// Retourne un chiffre aléatoire entre 0 et la taille du tableau
// @params : arraySize (taille du tableau)
function getRandomNumber(arraySize){
    return Math.floor(Math.random() * arraySize);
}

// Retourne une des couleurs de la sélection
function getRandomColorFromSelection(){
    return colors[getRandomNumber(colors.length)];
}

// Retourne une des possibilités de "partie" de couleur hexadécimale
// C'est à dire un chiffre entre 0 et 9
// Ou une lettre entre A et F
function getRandomHexPartColor(){
    return hex[getRandomNumber(hex.length)];
}