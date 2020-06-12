let largTab = 15;
let hautTab = 24;
let tableau = createArray(largTab,hautTab);
let couleur = ['white'];
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
            tableau[posY][posX] = couleur[0]; // la couleur[0] est le tableau dans lequel est stockée la couleur de la pièce en cours       
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
   


function play() {
    var audio = document.getElementById("audio");
    var onOff = document.getElementById("onOff");
    var note = document.getElementById("options");
    if(audio.paused){
        audio.play();
        onOff.innerText = "on";
        note.setAttribute('src','images/music.png');
    }
    else{
        audio.pause();
        onOff.innerText = "off";
        note.setAttribute('src','images/musicoff.png');
    }
    return audio;
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


// controle au clavier

window.addEventListener("keyup", function (event) {
    event.preventDefault();
    switch (event.key) {
        case "ArrowDown":
            rotationD(tableau,piece);
            vitesse[0] = 500;
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


window.addEventListener("keydown", function (event){
    if (event.key == "ArrowDown"){
        vitesse[0] = 50;
    }
});

// pour lancer la musique

zizic.addEventListener('click', function(){
    play();
});


let emptyLine = lignVierg(tableau);

// Lancement de la fonction principale 
piece = randomPiece(tableau);
principale(tableau,piece,emptyLine);