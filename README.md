# Exercices de JS avec manipulation du DOM
Où on va voir comment manipuler le DOM avec Javascript.

## Exercice 1 : Changer les styles CSS grâce au DOM [html initial](exercices/exercice1-dom.html)
1. Mettre le texte de l'élément avec l'id para2 en bleu.
2. Mettre un border en pointillé noir à la section2.
3. Mettre un background color orange à l'élément de la classe colorful de la section2 .
4. Mettre le h2 de la section1 en italique.
5. Cacher l'élément colorful situé dans un paragraphe.
6. Changer le texte de para2 pour "modified by JS".
7. Changer le href du lien de la section1 pour le faire aller sur https://www.lilo.org/.
8. Rajouter la classe big-text sur le h2 de la section2.
9. Bonus 1 : Faire que tous les paragraphes du document soient en italique.
10. Bonus 2 : Faire en sorte que les modifications arrivent petit à petit, les unes après les autres, avec des setTimeout de 1 seconde.

Les concepts clefs couverts sont :
- document.querySelector()
- document.body.style
- textContent (savoir expliquer la différence avec innerHTML)
- classList
- querySelectorAll
- for
- setTimeout

## Exercice 2 : Changer la couleur de fond [html initial](exercices/exercice2-hex-colors.html)
Première partie de l'exercice, nous voulons changer la couleur du background grâce à un tableau contenant déjà une sélection de couleurs.
1. Créer un tableau contenant une sélection de 5 à 10 couleurs, mélangeant nom de couleurs (par exemple "green"), couleurs RGB (par exemple "rgba(133,122,200)") et couleurs hexadécimales (par exemple "#f15025").
2. Capturer le bouton "btnColors" avec un querySelector et lui ajouter un EventListener pour détecter le clic.
3. Créer une fonction getRandomNumber() qui prend en paramètre la taille du tableau qu'on veut parcourir et retourne de manière aléatoire un des indexs du tableau (indice : Math.random() et Math.floor seront parfaits, et comme on veut récupérer l'index tiré au sort, ne pas oublier le return).
4. Créer une fonction getRandomColorFromSelection() qui grâce à getRandomNumber() retourne l'un des éléments du tableau de couleurs. 
5. Stocker cette couleur dans une variable selectedColor et l'assigner en backgroundColor du body.
6. Afficher le nom de cette couleur dans l'élément color grâce à un querySelector, et modifier la couleur de fond du body.
Deuxième partie de l'exercice, nous voulons maintenant générer une couleur hexadécimale alétoire ! :)
7. Cette fois ci, créer un tableau contenant toutes les possibilités de chiffres et lettres d'une couleur hexadécimale (indice : de 0 à 9, et de A à F).
8. Capturer le bouton "btnHex" et ajouter un listener de la même manière que pour "btnColors".
9. Créer une variable hexColor qui commence par "#" et lui ajouter 6 chiffres/lettres tirés au sort grâce à getRandomHexColor() (indice : les boucles for c'est cool)
10. Afficher le nom de cette couleur dans l'élément color grâce à un querySelector, et modifier la couleur de fond du body.

Les concepts clefs couverts sont :
- arrays
- document.getElementById()
- document.querySelector()
- addEventListener()
- document.body.style.backgroundColor
- Math.floor()
- Math.random()
- array.length

## Exercice 3 : Mettre à jour un compteur [html initial](exercices/exercice3-counter.html)
Dans le HTML, dans une balise main, créer une div de classe "container", avec à l'intérieur un h1 avec le titre de l'exercice, un span d'id "counter", une div de class "button-container", avec à l'intérieur de celle là un bouton de classe "decrease", un bouton de classe "reset" et un bouton de classe "increase".
1. Capturer tous les boutons dans une seule variable "btns" ainsi que le compteur dans une autre variable "counter".
2. Créer une variable "count" qui va contenir la valeur actuelle du compteur initialisée à zéro.
3. Rajouter un EventListener sur chaque bouton grâce à forEach() en vérifiant le style de classe de chaque bouton pour les différencier. 
4. Faire en sorte que si on a cliqué sur le bouton "decrease" alors on désincrémente le compte, sinon si c'est "increase" alors on incrémente le compte et sinon si c'est "reset" on remet le compteur à zéro.
5. Lorsqu'on clique sur l'un ou l'autre des boutons, ça vient mettre à jour le texte du compteur.
6. Enfin, si le compteur est supérieur à zéro, le chiffre du compteur est affiché en vert, si le compteur est inférieur à zéro, le chiffre du compteur est affiché en rouge, et si le compteur est égal à zéro, le chiffre du compteur est affiché en gris.

Les concepts clefs couverts sont :
- document.querySelectorAll()
- forEach()
- styles.contains
- currentTarget property
- classList
- textContent

## Exercice 4 : Faire bouger des carrés [html initial](exercices/exercice4-event.html)
1. Créer dans le HTML une div avec une classe square, et faire une règle CSS pour qu'elle ressemble à un carré (rouge, de 400px de périmètre), en position absolute en 0,0. Rajouter également une div #playground autour de la div #square qui fera 100 vh et 100 vw).
2. Dans le Javascript, capturer la div #playground et lui rajouter un événement au click qui fera un console log de la position de la souris. Pour ça, vous aurez besoin du paramètre event sur la fonction du EventListener (je vous laisse chercher).
3. Capturer également le carré rouge, et faire en sorte que lorsqu'on clique sur playground, celui ci se "téléporte" à l'endroit où on a cliqué. Aide : il va falloir changer son top et son left en leur donnant les positions x et y de la souris. Le centre du carré sera sur la position de la souris. Le centre, par un des coins ;)
4. (Si on est d'humeur fancy, pourquoi pas rajouter une petite transition en css pour faire qu'au lieu de se téléporter, il glisse avec grâce jusqu'à sa destination)
5. Ajouter un second carré (vert) dans le HTML (attention, lui il ne doit pas avoir de transition en css) et le capturer dans le JS.
6. Rajouter un événement sur le playground pour savoir quand la souris bouge, et faire en sorte de changer la position du carré vert pour la position actuelle de la souris, comme si le centre du carré était collé à la souris.
7. Bonus : faire en sorte que le carré commence à suivre seulement quand on appuie le bouton de la souris sur lui et qu'il arrête lorsqu'on relâche le bouton de la souris. (Drag and drop ^^) On pourra modifier le curseur, en fonction de si on clique ou non.

Les concepts clefs couverts sont :
- mousedown
- mouseup
- event.clientX
- event.clientY
