let para2 = document.querySelector('#para2');
para2.style.color = 'blue';

let section2 = document.querySelector('#section2');
section2.style.border = '2px dotted black';

let sect2Colorful = document.querySelector('#section2 .colorful');
sect2Colorful.style.backgroundColor = 'orange';

let sect1H2 = document.querySelector('#section1 h2');
sect1H2.style.fontStyle = 'italic';

let pColorful = document.querySelector('p .colorful')
pColorful.style.display = 'none';

para2.textContent = 'Modified By JS';
para2.textContent = "Titre modifié";

let a = document.querySelector('a');
a.href = 'https://www.ecosia.org/';

// le classList nous permet de manipuler plus facilement
// les classes css présentes sur l'élément sélectionné
sect2Colorful.classList.add('big-text');

// le querySelectorAll nous renvoie un tableau d'éléments 
// correspondants au sélecteur CSS donné
let paras = document.querySelectorAll('p');
// il faut donc faire une boucle pour parcourir le tableau
// et effectuerla modification sur chaque élément de celui ci
for (let p of paras) {
    p.style.fontStyle = 'italic';
} 