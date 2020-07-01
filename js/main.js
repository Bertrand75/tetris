let largTab = 15;
let hautTab = 24;
let tableau = createArray(largTab,hautTab);
let couleur = ['white', 0];
let score = [0];
let stopper = [0]; // utile pour le perdu
let prochaine = [];
let vitesse = 500;
 

// fonction qui gère le déplacement auto
function principale(tableau,piece){  
    // on vérifie que les cases du tableau situées sous la pièce sont libres
    let descendre = verifDessous(tableau, piece);
    // si elle est bloquée...
    if(descendre == false){
        // on intègre la pièce au tableau JS dans sa position actuelle
        integrerPiece(tableau, piece);   
        // on actualise l'affichage
        paintItWhite(tableau,piece); 
        // on supprime les lignes pleines s'il y en a
        tableau = delLigne(tableau); 
        // on renvoie la piece suivante
        let r = prochaine[0];
        nextPieceEmpty();
        nextPiece();
        piece = placePiece(tableau,r);      
        }
    else{
        deplacement(tableau,piece,"bas");
    }
    // on regarde si le jeu peut se poursuivre ou si le message perdu doit s'afficher
    perdu(tableau);    
}
   

// creation de la grille HTML

createGrid(largTab,hautTab);

// designation des elements du DOM

let gauche= document.getElementById('gauche');
let droite= document.getElementById('droite');
let routourne= document.getElementById('routourne');
let zizic = document.getElementById('options');
let cadre = document.getElementById('chiffre');

// activation des elements du DOM
// controle au clic

gauche.addEventListener('click', function(){
    deplacement(tableau,piece,"gauche");
});
droite.addEventListener('click', function(){
    deplacement(tableau,piece,"droite");
});
routourne.addEventListener('click', function(){
    rotation(tableau,piece,"droite");
});

// controle au clavier

window.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key == "ArrowUp") {
        rotation(tableau,piece,"gauche");
    }
}); 

window.addEventListener("keydown", function (event){
    if (event.key == "ArrowDown"){
        deplacement(tableau,piece,"bas");
    }
    else if (event.key == "ArrowLeft"){
        deplacement(tableau,piece,"gauche");
    }
    else if (event.key == "ArrowRight"){
        deplacement(tableau,piece,"droite");
    }
});


// pour lancer la musique

zizic.addEventListener('click', function(){
    play();
});


// Lancement de la fonction principale 
let r = randomPiece(7);
nextPiece();
piece = placePiece(tableau,r); 
let mouvementPerpet = setInterval(function(){
    principale(tableau,piece);
    if(stopper!=0){
        clearInterval(mouvementPerpet);
    }
}, vitesse);
