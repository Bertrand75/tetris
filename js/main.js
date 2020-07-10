let largTab = 15;
let hautTab = 24;
let tableau = createArray(largTab,hautTab);
let couleur = ['white', 0];
let score = [0];
let level = [0];
let stopper = [0]; // utile pour le perdu
let prochaine = []; // permet de mémoriser la prochaine pièce à arriver
let vitesse = [500];
let compteur = [0]; // utile pour retarder l'affichage de la prochaine piece
 

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
        cadreJS = nextPieceJS();
        compteur[0]=0;
        piece = placePiece(tableau,r);      
        }
    else{
        deplacement(tableau,piece,"bas");
        if (compteur[0]==2){
            nextPieceEmpty();
            nextPieceHTML(cadreJS);
        }
        compteur[0]++;
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
let cadreNiv = document.getElementById('niveau');

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
    event.preventDefault();
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
let cadreJS = nextPieceJS();
piece = placePiece(tableau,r); 



function perpert(levelDepart){
    let variableStop = setInterval(function(){
        principale(tableau,piece);
        if(stopper!=0){
            clearInterval(variableStop);
        }
        else if (level[0]>levelDepart && vitesse[0]>=100){
            clearInterval(variableStop);
            vitesse[0] -= 50;
            console.log('vitesse ='+vitesse[0]);
            levelDepart++;
            perpert(levelDepart);
        }
        console.log('niveau = '+level[0]);
    }, vitesse[0]);
}
let levelDepart = 0;
perpert(levelDepart);