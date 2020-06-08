function goRight(tableauJS,piece){
    // on vérifie que les cases du tableau situées à droite de la pièce sont libres
    let ouiNonNonOui=true;
    for (let i=0; i<piece.length; i++){
        let posX = piece[i][0];
        let posY = piece[i][1];
        if (tableauJS[posY][posX+1] != 0){
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
        if (tableauJS[posY][posX-1] != 0){
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


function rotationD(tableauJS,piece){
    // on vérifie que les cases occupées potentiellement par la pièce après une rotation (éventuelle) sont disponibles dans le tableau
    let ouiNonNonOui=true;
    let centreRotX = piece[0][0];
    let centreRotY = piece[0][1];
    for (let p=0; p<piece.length;p++){
        let xOrigin = piece[p][0] - centreRotX;
        let yOrigin = piece[p][1] - centreRotY; 
        let xRot = - yOrigin;
        let yRot = xOrigin;
        if (tableauJS[yRot + centreRotY][xRot + centreRotX]!=0){
            ouiNonNonOui=false;
        }
    }
    // si c'est le cas on effectue la rotation
    if (ouiNonNonOui==true){
        paintItBlack(piece);
        for (let p=0; p<piece.length;p++){
            let xOrigin = piece[p][0] - centreRotX;
            let yOrigin = piece[p][1] - centreRotY; 
            let xRot = - yOrigin;
            let yRot = xOrigin;
            piece[p][0] = xRot + centreRotX;
            piece[p][1] = yRot + centreRotY;
        }
        paintItWhite(tableauJS,piece);
    }
}

function rotationG(tableauJS,piece){
    // on vérifie que les cases occupées potentiellement par la pièce après une rotation (éventuelle) sont disponibles dans le tableau
    let ouiNonNonOui=true;
    let centreRotX = piece[0][0];
    let centreRotY = piece[0][1];
    for (let p=0; p<piece.length;p++){
        let xOrigin = piece[p][0] - centreRotX;
        let yOrigin = piece[p][1] - centreRotY; 
        let xRot = yOrigin;
        let yRot = - xOrigin;
        if (tableauJS[yRot + centreRotY][xRot + centreRotX]!=0){
            ouiNonNonOui=false;
        }
    }
    // si c'est le cas on effectue la rotation
    if (ouiNonNonOui==true){
        paintItBlack(piece);
        for (let p=0; p<piece.length;p++){
            let xOrigin = piece[p][0] - centreRotX;
            let yOrigin = piece[p][1] - centreRotY; 
            let xRot = yOrigin;
            let yRot = - xOrigin;
            piece[p][0] = xRot + centreRotX;
            piece[p][1] = yRot + centreRotY;
        }
        paintItWhite(tableauJS,piece);
    }
}


// verification que la place est libre pour descendre

function verifDessous(tableau, piece){
  // on regarde la position que les composants de la pièce occupe
    let libre = true;
    for (let i=0; i<piece.length; i++){
        let posX = piece[i][0];
        let posY = piece[i][1];
        // si les places du dessous sont occupées dans le tableau
        if (tableau[posY+1][posX] != 0){
            // la piece n'est pas libre de se déplacer
            libre = false;
        }
    }
    return libre;
}


// déplacement de la pièce d'un cran vers le bas

function unCranBas(tableau,piece){
    // on enlève la pièce de l'affichage
    paintItBlack(piece);
    // on incrémente y de 1 afin de déplacer la pièce en dessous
    for (let i=0; i<piece.length; i++){        
        piece[i][1] += 1;
    };
    // on reaffiche la pièce à la bonne position
    paintItWhite(tableau,piece);
}
