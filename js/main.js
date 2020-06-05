let tableau = createArray(10,15);
let carre = creationCarre(10);
let gauche= document.getElementById('gauche');
let droite= document.getElementById('droite');

createGrid(10,15);
paintItWhite(tableau,carre);

gauche.addEventListener('click', function(){
    goLeft(tableau,carre);
});

droite.addEventListener('click', function(){
    goRight(tableau,carre);
});

mouvementAuto(tableau,carre);







