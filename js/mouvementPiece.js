

// rafraichissement tableau html
// essayer de suivre la pièce uniquement
// déplacement latéral dans une fourchette (largeur grille - largeur piece)

function mouvementAuto(tableauJS,piece){
    setInterval(function(){
        // on vérifie que les cases du tableau situées sous la pièce sont libres
        let ouiNonNonOui=true;
        for (let i=0; i<piece.length; i++){
            let posX = piece[i][0];
            let posY = piece[i][1];
            if (tableauJS[posY+1][posX] == 1){
                ouiNonNonOui = false;
            };
        };
        // si c'est le cas
        if (ouiNonNonOui==true){
            paintItBlack(piece);
            for (let j=0; j<piece.length; j++){
                // on incrémente x de 1 afin de déplacer la pièce vers la droite
                piece[j][1] += 1;
            };
        };
        paintItWhite(tableauJS,piece);
    },1000);
}


function goRight(tableauJS,piece){
    // on vérifie que les cases du tableau situées à droite de la pièce sont libres
    let ouiNonNonOui=true;
    for (let i=0; i<piece.length; i++){
        let posX = piece[i][0];
        let posY = piece[i][1];
        if (tableauJS[posY][posX+1] == 1){
            ouiNonNonOui = false;
        };
    };
    // si c'est le cas
    if (ouiNonNonOui==true){
        paintItBlack(piece);
        for (let j=0; j<piece.length; j++){
            // on incrémente x de 1 afin de déplacer la pièce vers la droite
            piece[j][0] += 1;
        };
    };
    paintItWhite(tableauJS,piece);
}

function goLeft(tableauJS,piece){
    //on vérifie que les cases du tableau situées à gauche de la pièce sont libres
    let ouiNonNonOui=true;
    for (let i=0; i<piece.length; i++){
        let posX = piece[i][0];
        let posY = piece[i][1];
        if (tableauJS[posY][posX-1] == 1){
            ouiNonNonOui = false;
        }
    };
    // si c'est le cas
    if (ouiNonNonOui==true){
        paintItBlack(piece);
        for (let j=0; j<piece.length; j++){
            // on décrémente x de 1 afin de déplacer la pièce vers la gauche
            piece[j][0] -= 1;
        }
    };
    paintItWhite(tableauJS,piece);
}


