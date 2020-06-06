

// rafraichissement tableau html
// essayer de suivre la pièce uniquement
// déplacement latéral dans une fourchette (largeur grille - largeur piece)

function mouvementAuto(tableauJS,piece){
    console.log(couleur);
    let interv = setInterval(function(){
        // on vérifie que les cases du tableau situées sous la pièce sont libres
        let ouiNonNonOui=true;
        for (let i=0; i<piece.length; i++){
            let posX = piece[i][0];
            let posY = piece[i][1];
            // si elles sont occupées
            if (tableauJS[posY+1][posX] != 0){
                // il ne continue pas vers le bas
                ouiNonNonOui = false;
                // on intègre la pièce au tableau JS
                for (let n=0; n<piece.length;n++){
                    let posX = piece[n][0];
                    let posY = piece[n][1];
                    tableauJS[posY][posX] = couleur[0];        
                }
                // on relance le processus (on réorganisera plus tard tout le bazar; pour l'instant ça marche;) )
                clearInterval(interv);
                // function creationS ci dessous à remplacer par randomPiece par la suite
                piece = creationS(tableauJS,couleur);
                gauche.addEventListener('click', function(){
                    goLeft(tableauJS,piece);
                });
                droite.addEventListener('click', function(){
                    goRight(tableauJS,piece);
                });
                routourne.addEventListener('click', function(){
                    rotation(tableauJS,piece);
                });
                mouvementAuto(tableauJS,piece);
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
        paintItWhite(tableauJS,piece,couleur);
    },1000);
}


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
    paintItWhite(tableauJS,piece,couleur);
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
    paintItWhite(tableauJS,piece,couleur);
}

function rotation(tableauJS,piece){
    // on vérifie que les cases occupées potentiellement par la pièce après une rotation (éventuelle) sont disponibles dans le tableau
    let ouiNonNonOui=true;
    let centreRotX = piece[0][0];
    let centreRotY = piece[0][1];
    for (let p=0; p<piece.length;p++){
        let caseX = piece[p][1] - centreRotY + centreRotX;
        let caseY = piece[p][0] + centreRotY - centreRotX ;
        if (tableau[caseY][caseX]!=0){
            ouiNonNonOui=false;
        }
    }
    // si c'est le cas
    if (ouiNonNonOui==true){
        paintItBlack(piece);
        for (let p=0; p<piece.length;p++){
            let memoriserX = piece[p][0];
            piece[p][0] = piece[p][1] - centreRotY + centreRotX;
            piece[p][1] = memoriserX + centreRotY - centreRotX ;
        }
        paintItWhite(tableauJS,piece,couleur);
    }
}

