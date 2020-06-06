

// création d'un carré au milieu haut de l'écran

function creationO(tableau){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leO = [[posOrig, 0],[posOrig, 1],[posOrig+1, 0],[posOrig+1, 1]];
    return leO;
}

function creationL(tableau){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leL = [[posOrig, 0],[posOrig, 1],[posOrig, 2],[posOrig+1, 2]];
    return leL;    
}

function creationJ(tableau){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leJ = [[posOrig, 0],[posOrig, 1],[posOrig, 2],[posOrig-1, 2]];
    return leJ;    
}

function creationI(tableau){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leI = [[posOrig, 0],[posOrig, 1],[posOrig, 2],[posOrig, 3]];
    return leI;    
}

function creationZ(tableau){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leZ = [[posOrig, 0],[posOrig-1, 0],[posOrig, 1],[posOrig+1, 1]];
    return leZ;    
}

function creationS(tableau){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leS = [[posOrig, 0],[posOrig+1, 0],[posOrig, 1],[posOrig-1, 1]];
    return leS;    
}

function creationT(tableau){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leT = [[posOrig, 0],[posOrig-1, 0],[posOrig+1, 0],[posOrig, 1]];
    return leT;    
}



// compléter avec d'autres pièces


// choix aléatoire d'une piece

function randomPiece(){
    // random entre 0 et nb de pièces diférentes

    // switch

    }

    
// Arrivée d'une pièce en haut de l'écran
// fonction inutile compte tenu de la nouvelle stratégie

function ajoutPieceHaut(piece, tableauJS){
    // on parcourt chaque composant de la pièce et on récupère ses coordonnées
    for (let i=0; i<piece.length; i++){
        let posX = piece[i][0];
        let posY = piece[i][1];
        //on mofifie les valeurs dans le tableau JS aux endroits concernés
        tableauJS[posX][posY] = 1;            
        }
}

