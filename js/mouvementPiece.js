

// rafraichissement tableau html
// essayer de suivre la pièce uniquement
// déplacement latéral dans une fourchette (largeur grille - largeur piece)

function mouvementAuto(piece, tableauJS){
// si aucun point n'est occupé sous chacun des composants de la pièce

    // translation vers le bas js (Y+1) pour chacun des points constituant

}

setInterval(mouvementAuto, 1000);

function goRight(piece, tableauJS){
    // on vérifie que les cases du tableau situées à droite de la pièce sont libres
    let ouiNonNonOui;
    for (let i=0; i<piece.length; i++){
        let posX = piece[i][0];
        let posY = piece[i][1];
        if (tableauJS[posY][posX+1] == 1){
            ouiNonNonOui = false;
        }
    }
    // si c'est le cas
    if (ouiNonNonOui){
        for (let j=0; j<piece.length; j++){
            // on incrémente x de 1 afin de déplacer la pièce vers la droite
            piece[j][0] += 1;
        }
    }
}

function goLeft(piece, tableauJS){
    //on vérifie que les cases du tableau situées à gauche de la pièce sont libres
    let ouiNonNonOui;
    for (let i=0; i<piece.length; i++){
        let posX = piece[i][0];
        let posY = piece[i][1];
        if (tableauJS[posY][posX-1] == 1){
            ouiNonNonOui = false;
        }
    }
    // si c'est le cas
    if (ouiNonNonOui){
        for (let j=0; j<piece.length; j++){
            // on décrémente x de 1 afin de déplacer la pièce vers la gauche
            piece[j][0] -= 1;
        }
    }
}


