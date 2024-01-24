let para2 = document.querySelector('#para2');

setTimeout(() => {
  para2.style.color = 'blue';
},1000);

setTimeout(() => {
let section2 = document.querySelector('#section2');
  section2.style.border = '2px dotted black';
},2000);

// let sect2Colorful = document.querySelector('#section2 .colorful');
let sect2Colorful = document.getElementsByClassName('colorful')[1];

setTimeout(() => {
  sect2Colorful.style.backgroundColor = 'orange';
},3000);

let sect1H2 = document.querySelector('#section1 h2');
// let sect1H2 = document.getElementsByTagName('h2')[1];

setTimeout(() => {
  sect1H2.style.fontStyle = 'italic';
},4000);

let pColorful = document.querySelector('p .colorful')

setTimeout(() => {
  pColorful.style.display = 'none';
},5000);

setTimeout(() => {
  para2.textContent = 'Modified By JS';
},6000);

setTimeout(() => {
  let a = document.querySelector('a');
  a.href = 'https://www.lilo.org/';
},7000);
// le classList nous permet de manipuler plus facilement
// les classes css présentes sur l'élément sélectionné

setTimeout(() => {
  sect2Colorful.classList.add('big-text');
},8000);
// le querySelectorAll nous renvoie un tableau d'éléments
// correspondants au sélecteur CSS donné

setTimeout(() => {
  let tableauDesParas = document.querySelectorAll('p');
  // il faut donc faire une boucle pour parcourir le tableau
  // et effectuerla modification sur chaque élément de celui ci
  for (let ligne of tableauDesParas) {
      ligne.style.fontStyle = 'italic';
  }
},9000);
