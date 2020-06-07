let tableau = createArray(10,15);
let couleur = [];
let piece = creationT(tableau,couleur);
let gauche= document.getElementById('gauche');
let droite= document.getElementById('droite');
let routourne= document.getElementById('routourne');
let score = 0;
createGrid(10,15);
paintItWhite(tableau,piece,couleur);

gauche.addEventListener('click', function(){
    goLeft(tableau,piece);
});
droite.addEventListener('click', function(){
    goRight(tableau,piece);
});
routourne.addEventListener('click', function(){
    rotationD(tableau,piece);
});

window.addEventListener("keydown", function (event) {
    event.preventDefault();
    switch (event.key) {
        case "ArrowDown":
            rotationD(tableau,piece);
        break;
        case "ArrowUp":
            rotationG(tableau,piece);
        break;
        case "ArrowLeft":
            goLeft(tableau,piece);
        break;
        case "ArrowRight":
            goRight(tableau,piece);
        break;
    }
}); 
mouvementAuto(tableau,piece);



