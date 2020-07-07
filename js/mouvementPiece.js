
function deplacement (tableauJS, piece, cote){
    let dirX;
    let dirY;

    if(cote == "droite"){
        dirX = 1;
        dirY = 0;
        }
    else if(cote == "gauche"){
        dirX = -1;
        dirY = 0;        
    }
    else {
        dirX = 0;
        dirY = 1;
    }

    // on vérifie que les cases du tableau situées du côté où l'on souhaite aller sont libres
    let libre=true;

    for (let i=0; i<piece.length; i++){
        let posX = piece[i][0];
        let posY = piece[i][1];
        if (tableauJS[posY+dirY][posX+dirX][0] != 0){
            libre = false;
        };
    };
    // si c'est le cas
    if (libre==true){
        paintItBlack(piece);
        for (let j=0; j<piece.length; j++){
            // on incrémente x de dirX et ("ou" en réalité) y de dirY afin de déplacer la pièce du bon côté
            piece[j][0] += dirX;
            piece[j][1] += dirY;
        };
    };
    paintItWhite(tableauJS,piece);

}


function rotation(tableauJS, piece, cote){
    // si la piece n'est pas un carré dont la couleur est bleu; les rotations sur les carrés ne servant à rien et étant même problématiques
    if(couleur[0] != 'blue'){
        let libre=true;
        let centreRotX = piece[0][0];
        let centreRotY = piece[0][1];
        let facteurY;
        let facteurX;

        // en fonction du sens de rotation le calcul des coordonnées  varie
        if (cote=="droite"){
            facteurY = -1;
            facteurX = 1;
        }
        else {
            facteurY = 1;
            facteurX = -1;                      
            }

        // on vérifie que les cases occupées potentiellement par la pièce après une rotation (éventuelle) sont disponibles dans le tableau
        for (let p=0; p<piece.length;p++){
            let xOrigin = piece[p][0] - centreRotX;
            let yOrigin = piece[p][1] - centreRotY; 
            let xRot = facteurY * yOrigin;
            let yRot = facteurX * xOrigin;
            if (tableauJS[yRot + centreRotY][xRot + centreRotX][0]!=0){
                libre=false;
            }
        }
        // si c'est le cas on effectue la rotation
        if (libre==true){
            paintItBlack(piece);
            for (let p=0; p<piece.length;p++){
                let xOrigin = piece[p][0] - centreRotX;
                let yOrigin = piece[p][1] - centreRotY; 
                let xRot = facteurY * yOrigin;
                let yRot = facteurX * xOrigin;
                piece[p][0] = xRot + centreRotX;
                piece[p][1] = yRot + centreRotY;
            }
            paintItWhite(tableauJS,piece);
        }   
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
          if (tableau[posY+1][posX][0] != 0){
              // la piece n'est pas libre de se déplacer
              libre = false;
          }
      }
      return libre;
  }