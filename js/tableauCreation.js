
// TABLEAU HTML

// création d'un tableau (dans le dom = partier visible à l'écran) de dimension X * Y
function createGrid(x,y) {
    let tableau = document.getElementById('tableau');
    for (let i=0; i<y; i++){
        let tr = document.createElement("div");
        // les 3 premières lignes sont cachées pour que la pièce puisse apparaitre progressivement
        if(i<=3 || i== y-1) {
            tr.hidden = true;
        }
        for (let j=0; j<x; j++){
            let td = document.createElement("div");
            td.setAttribute('id', i+"_"+j);
            tr.append(td);
        }
        tableau.append(tr);
    }
}



// TABLEAU JAVASCRIPT


// création d'une ligne

function ligne(largeurTableau,contenu){
    let lign = [[1,'couleur',0]];
     for (let m = 1; m<(largeurTableau-1); m++){
        lign.push([contenu,'couleur',0]);
    }
    lign.push([1,'couleur',0]);
    return lign;
}


// création d'un tableau JS de X * Y pour effectuer les calculs
function createArray(x,y) {
    let tableauJS = [];
    // on ajoute y-1 lignes de "0"
    for(let i=0;i<y-1;i++){
        tableauJS.push(ligne(x,0));  
    }
    // on remplit la dernière ligne de "1" pour indiquer la limite basse du cadre
    tableauJS.push(ligne(x,1));
    return tableauJS;
}



// affichage du tableau JS et de la pièce dans le tableau HTML

function paintItWhite(tableauJSY,piece) {
    let td;
    for (let i=0; i<tableauJSY.length; i++){
        for (let j=0; j<tableauJSY[0].length; j++){
            td = document.getElementById(i+"_"+j);
            td.classList.remove('shadUp','shadDown','shadRight','shadLeft');
            if (tableauJSY[i][j][0]==1) {
                td.style.backgroundColor= "white";
            }
            else if(tableauJSY[i][j][0]!=0) {
                td.style.backgroundColor= tableauJSY[i][j][1];
                // ajout des ombres
                if (i>0){
                    if (tableauJSY[i][j][2] != tableauJSY[i-1][j][2]){
                        td.classList.add('shadUp');
                    };
                    if (tableauJSY[i][j][2] != tableauJSY[i+1][j][2]){
                        td.classList.add('shadDown');
                    };    
                    if (tableauJSY[i][j][2] != tableauJSY[i][j-1][2]){
                        td.classList.add('shadLeft');
                    }; 
                    if (tableauJSY[i][j][2] != tableauJSY[i][j+1][2]){
                        td.classList.add('shadRight');
                    };                                                         
                }
            
            }
            else if(tableauJSY[i][j][0]==0) {
                td.style.backgroundColor= "black";
                td.classList.remove('shadUp','shadDown','shadRight','shadLeft');
            }       
        }
    }
    for (let k=0; k <piece.length; k++){
        let posX = piece[k][0];
        let posY = piece[k][1];
        td = document.getElementById(posY+"_"+posX);
        td.style.backgroundColor= couleur[0]; 

        // ajout des ombres à la pièce en mouvement

        // exemple pour les ombres au dessus
        let sUp = true;
        // pour toutes les parties de la pièce
        for (let l=0; l<piece.length;l++){
            // si il y a un composant situé juste au dessus
            if(piece[l][0] == posX && piece[l][1] == posY-1){
                // on ne mettra pas d'ombre à ce niveau là
                sUp = false;
            }                
        }
        if(sUp == true){
            td.classList.add('shadUp');
        }

        let sDown = true;
        for (let m=0; m<piece.length;m++){
            if(piece[m][0] == posX && piece[m][1] == posY+1){
                sDown = false;
            }                
        }
        if(sDown == true){
            td.classList.add('shadDown');
        }

        let sRight = true;
        for (let n=0; n<piece.length;n++){
            if(piece[n][0] == posX+1 && piece[n][1] == posY){
                sRight = false;
            }                
        }
        if(sRight == true){
            td.classList.add('shadRight');
        }
                        
        let sLeft = true;
        for (let o=0; o<piece.length;o++){
            if(piece[o][0] == posX-1 && piece[o][1] == posY){
                sLeft = false;
            }                
        }
        if(sLeft == true){
            td.classList.add('shadLeft');
        }                                  
    }
}

// effacement de la piece à l'écran
function paintItBlack(piece) {
    for (let z=0; z <piece.length; z++){
        let posX = piece[z][0];
        let posY = piece[z][1];
        let td = document.getElementById(posY+"_"+posX);
        td.style.backgroundColor= "black";
    }
}


// integration de la piece dans le tableau

function integrerPiece(tableauJS, piece){
    for (let n=0; n<piece.length;n++){
        let posX = piece[n][0];
        let posY = piece[n][1];
        tableauJS[posY][posX][0] = 2;
        tableauJS[posY][posX][1] = couleur[0]; // couleur[0] est la couleur de la pièce en cours  
        tableauJS[posY][posX][2] = couleur[1]; // couleur[1] identifiant de la pièce
    }
}