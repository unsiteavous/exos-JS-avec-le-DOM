// capture des boutons et du compteur
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#counter");

// valeur du compteur initialisée à 0
let count = 0;

// pour tous les boutons on vérifie le style 
// et on incrémente/décrémente/reset le compteur
// en changeant sa couleur
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         if (btn.classList.contains('reset')) {
//             // code à exécuter pour le bouton "reset"
//             console.log("reset");
//         } else if (btn.classList.contains('decrease')) {
//             // code à exécuter pour le bouton "decrease"
//             console.log("decrease");
//         } else if (btn.classList.contains('increase')) {
//             // code à exécuter pour le bouton "increase"
//             console.log("increase");
//         }
//     });
// });

// pour chaque bouton sélectionné grâce au querySelectorAll(".btn")
btns.forEach(btn => addListenerForEachButton(btn));

// on ajoute un listener avec le bouton en paramètre
function addListenerForEachButton(btn) {
    console.log("Ajout du listener pour chaque bouton");
    btn.addEventListener('click', () => onButtonClicked(btn));
}

// et lors du click sur ce bouton 
function onButtonClicked(btn) {
    // on vérifie le style (btn.classList)
    // et on incrémente/décrémente/reset la variable count
    if (btn.classList.contains('reset')) {
        // code à exécuter pour le bouton "reset"
        count = 0;
        console.log("reset : " + count);
    } else if (btn.classList.contains('decrease')) {
        // code à exécuter pour le bouton "decrease"
        count--;
        console.log("decrease : " + count);
    } else if (btn.classList.contains('increase')) {
        // code à exécuter pour le bouton "increase"
        count++;
        console.log("increase : " + count);
    }

    // on met à jour l'affichage pour le compteur (value) dans le HTML
    value.textContent = count;
    
    // on peut faire un test pour "faker" une valeur qui n'est pas un chiffre
    // count = "aaa";

    // en fonction de la valeur on change sa couleur
    if(count > 0){
        value.style.color = "green";
    }
    else if (count < 0){
        value.style.color = "red";
    }
    else if (count == 0){
        value.style.color = "grey";
    }
    else {
        // et on prévoit le cas où on aurait une valeur qui n'est pas un chiffre
        // en affichant un message d'erreur dans la console
        console.error("ERREUR : count n'est pas un chiffre");
    }
}
    