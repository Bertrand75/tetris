let largTab = 15;
let hautTab = 24;
let tableau = createArray(largTab,hautTab);
let couleur = ['white', 0];
let score = [0];
let stopper = [0]; // utile pour le perdu


 
// fonction qui gère le déplacement auto
let vitesse = [500];
function principale(tableau,piece){  
    // on vérifie que les cases du tableau situées sous la pièce sont libres

    let descendre = verifDessous(tableau, piece);
    if (descendre==true){
        setTimeout(function(){unCranBas(tableau,piece);}, vitesse[0]);
        setTimeout(function(){principale(tableau,piece);}, vitesse[0]);
        }
    // si elle est bloquée, on intègre la pièce au tableau JS dans sa position actuelle
    else{
        for (let n=0; n<piece.length;n++){
            let posX = piece[n][0];
            let posY = piece[n][1];
            tableau[posY][posX][0] = 2;
            tableau[posY][posX][1] = couleur[0]; // couleur[0] est la couleur de la pièce en cours  
            tableau[posY][posX][2] = couleur[1]; // couleur[1] identifiant de la pièce
        }
        paintItWhite(tableau,piece); 
        piece = randomPiece(tableau);   
        tableau = delLigne(tableau); 
        perdu(tableau);       
        if(stopper==0){
            principale(tableau,piece);
        }
    }     
}
   

// creation de la grille HTML

createGrid(largTab,hautTab);


// designation des elements du DOM

let gauche= document.getElementById('gauche');
let droite= document.getElementById('droite');
let routourne= document.getElementById('routourne');
let zizic = document.getElementById('options');


// activation des elements du DOM

// controle au clic

gauche.addEventListener('click', function(){
    goLeft(tableau,piece);
});
droite.addEventListener('click', function(){
    goRight(tableau,piece);
});
routourne.addEventListener('click', function(){
    rotationD(tableau,piece);
});

// la variable toucheDispo sert à modifier le comportement de la flèche du bas
let toucheDispo = true;
// controle au clavier

window.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key == "ArrowUp") {
            rotationG(tableau,piece);
    }
}); 


window.addEventListener("keydown", function (event){
    if (event.key == "ArrowDown"){
        unCranBas(tableau,piece);
    }
    else if (event.key == "ArrowLeft"){
        goLeft(tableau,piece);
    }
    else if (event.key == "ArrowRight"){
        goRight(tableau,piece);
    }
});


// pour lancer la musique

zizic.addEventListener('click', function(){
    play();
});


let emptyLine = lignVierg(tableau);

// Lancement de la fonction principale 
piece = randomPiece(tableau);
principale(tableau,piece);