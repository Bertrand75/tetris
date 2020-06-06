let tableau = createArray(10,15);
let couleur = [];
let piece = creationT(tableau,couleur);
let gauche= document.getElementById('gauche');
let droite= document.getElementById('droite');
let routourne= document.getElementById('routourne');

createGrid(10,15);
paintItWhite(tableau,piece,couleur);

gauche.addEventListener('click', function(){
    goLeft(tableau,piece);
});
droite.addEventListener('click', function(){
    goRight(tableau,piece);
});
routourne.addEventListener('click', function(){
    rotation(tableau,piece);
});

mouvementAuto(tableau,piece);



