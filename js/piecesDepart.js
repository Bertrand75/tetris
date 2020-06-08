
// création d'une piece au milieu haut de l'écran

function creationO(tableau){
    couleur[0] = 'green';    
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leO = [[posOrig, 0],[posOrig, 1],[posOrig+1, 0],[posOrig+1, 1]];
    return leO;
}

function creationL(tableau){
    couleur[0] = 'blue';
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leL = [[posOrig, 1],[posOrig, 0],[posOrig, 2],[posOrig+1, 2]];
    return leL;    
}

function creationJ(tableau){
    couleur[0] = 'yellow';    
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leJ = [[posOrig, 1],[posOrig, 0],[posOrig, 2],[posOrig-1, 2]];
    return leJ;    
}

function creationI(tableau){
    couleur[0] = 'cyan';    
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leI = [[posOrig, 2],[posOrig, 0],[posOrig, 1],[posOrig, 3]];
    return leI;    
}

function creationZ(tableau){
    couleur[0] = 'gold';    
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leZ = [[posOrig, 0],[posOrig-1, 0],[posOrig, 1],[posOrig+1, 1]];
    return leZ;    
}

function creationS(tableau){
    couleur[0] = 'violet';    
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leS = [[posOrig, 0],[posOrig+1, 0],[posOrig, 1],[posOrig-1, 1]];
    return leS;    
}

function creationT(tableau){
    couleur[0] = 'cornsilk';
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leT = [[posOrig, 0],[posOrig-1, 0],[posOrig+1, 0],[posOrig, 1]];
    return leT;
}


// choix aléatoire d'une piece

function randomPiece(tableau){
    // random entre 0 et nb de pièces diférentes
    let r = Math.floor(Math.random() * 6);
    // switch
    switch(r){
        case 0:
            piece =	creationO(tableau);
            break;
        case 1:
            piece =	creationL(tableau);
            break;
        case 2:
            piece =	creationJ(tableau);
            break;
        case 3:
            piece =	creationI(tableau);
            break;
        case 4:
            piece =	creationZ(tableau);
            break;
        case 5:
            piece =	creationS(tableau);
            break;
        case 6:
            piece =	creationT(tableau);
            break;
}
	return piece;
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

