

// création d'un carré au milieu haut de l'écran

function creationCarre(largTab){
    let posOrig = Math.round(largTab / 2);
    let carre = [[posOrig, 0],[posOrig, 1],[posOrig+1, 0],[posOrig+1, 1]];
    return carre;
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

