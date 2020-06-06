

// création d'un carré au milieu haut de l'écran

function creationO(tableau,couleur){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leO = [[posOrig, 0],[posOrig, 1],[posOrig+1, 0],[posOrig+1, 1]];
    couleur[0] = 'green';
    return leO;
}

function creationL(tableau,couleur){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leL = [[posOrig, 1],[posOrig, 0],[posOrig, 2],[posOrig+1, 2]];
    couleur[0] = 'blue';
    return leL;    
}

function creationJ(tableau,couleur){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leJ = [[posOrig, 3],[posOrig, 2],[posOrig, 4],[posOrig-1, 4]];
    couleur[0] = 'yellow';
    return leJ;    
}

function creationI(tableau,couleur){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leI = [[posOrig, 4],[posOrig, 2],[posOrig, 3],[posOrig, 5],[posOrig, 6]];
    couleur[0] = 'cyan';
    return leI;    
}

function creationZ(tableau,couleur){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leZ = [[posOrig, 2],[posOrig-1, 2],[posOrig, 3],[posOrig+1, 3]];
    couleur[0] = 'gold';
    return leZ;    
}

function creationS(tableau,couleur){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leS = [[posOrig, 2],[posOrig+1, 2],[posOrig, 3],[posOrig-1, 3]];
    couleur[0] = 'violet';
    return leS;    
}

function creationT(tableau,couleur){
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leT = [[posOrig, 2],[posOrig-1, 2],[posOrig+1, 2],[posOrig, 3]];
    couleur[0] = 'cornsilk';
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

