let tableau = createArray(10,15);
let piece = creationCarre(tableau);
let gauche= document.getElementById('gauche');
let droite= document.getElementById('droite');

createGrid(10,15);
paintItWhite(tableau,piece);

gauche.addEventListener('click', function(){
    goLeft(tableau,piece);
});
droite.addEventListener('click', function(){
    goRight(tableau,piece);
});

mouvementAuto(tableau,piece);


