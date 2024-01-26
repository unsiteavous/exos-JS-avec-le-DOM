// capture de l'écran et des carrés
const playground = document.querySelector("#playground");
const redSquare = document.querySelector("#click-move");
const greenSquare = document.querySelector("#follow");
// variable boolean pour savoir si la souris est cliquée ou non
let isMouseClicked = false;

// en cas de click à un endroit de l'écran
// le carré rouge se déplace à cet endroit là
playground.addEventListener("click", (event) => {    
    let x = event.clientX - 50;
    let y = event.clientY - 50;
    console.log("Position X : " + x + " & position Y : " + y);
    redSquare.style.top = y + "px";
    redSquare.style.left = x + "px";
})

// en cas de click sur le carré vert
// celui ci se déplace avec la souris
playground.addEventListener("mousemove", (event) => {   
    let x = event.clientX - 50;
    let y = event.clientY - 50;

    // seulement si le bouton de la souris est cliqué
    if(isMouseClicked){
        greenSquare.style.top = y + "px";
        greenSquare.style.left = x + "px";
    }    
})

// on met le boolean à true si la souris est cliquée
greenSquare.addEventListener("mousedown", (event) => {
    console.log("mousedown");
    isMouseClicked = true;
    greenSquare.style.cursor = "grabbing";
})  

// on met le boolean à false si la souris est relâchée
greenSquare.addEventListener("mouseup", (event) => {
    console.log("mouseup");
    isMouseClicked = false;
    greenSquare.style.cursor = "grab";
})
