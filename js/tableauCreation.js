// création d'un tableau dans le dom de X * Y
function createGrid(x,y) {
    let tableau = document.getElementById('tableau');
    for (let i=0; i<y; i++){
        let tr = document.createElement("div");
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
// création d'un tableau js de X * Y permettant de suivre l'évolution de la grille
function createArray(x,y) {
    // création tableau X (remarque: on y place déjà un "1" qui correspondra à la colonne de gauche)
    let tableauJSX = [[1,'couleur',0]];
    // création tableau Y; il regroupera l'ensemble des tableaux/lignes X
    let tableauJSY = [];
    // pour chaque ligne (sauf la dernière qui sera créée plus tard)
    for(let i=0;i<y-1;i++){
        // on remplit chaque "colonne" de la ligne de "0" (cases inoccupées) 
        // remarque: j est < à x-2 pour laisser la place aux "1"(= cases occupées = les limites du cadre de jeu) que l'on a ajoutés et que l'on va ajouter
        for(let j=0;j<x-2;j++){
            tableauJSX.push([0,'couleur',0]);
        }
        // on ajoute une case occupée à la fin de la ligne
        tableauJSX.push([1,'couleur',0]);
        // quand la ligne est générée on l'ajoute à la suite (en dessous si l'on veut) des autres lignes
        tableauJSY.push(tableauJSX);
        // on vide (presque) la ligne pour pouvoir générer la suivante 
        tableauJSX = [[1,'couleur',0]];
    }
    // on remplit la dernière ligne de "1" pour indiquer la limite basse du cadre
    for(let l=0; l<x-1; l++) {
        tableauJSX.push([1,'couleur',0]);
    }
    // on ajoute la dernière ligne de "1" à la suite des autres
    tableauJSY.push(tableauJSX); 
    return tableauJSY;

}

// creé une ligne vierge prete à etre insérée dans le tableau lorsqu'une ligne est effacée

function lignVierg(tableau){
    let lign = [[1,'couleur',0]];
     for (let m = 1; m<(tableau[0].length-1); m++){
        lign.push([0,'couleur',0]);
    }
    lign.push([1,'couleur',0]);
    return lign;
}

// affichage du tableau JS et de la pièce dans le tableau HTML

function paintItWhite(tableauJSY,piece) {
    let td;
    for (let i=0; i<tableauJSY.length; i++){
        for (let j=0; j<tableauJSY[0].length; j++){
            td = document.getElementById(i+"_"+j);
            if (tableauJSY[i][j][0]==1) {
                td.style.backgroundColor= "white";
            }
            else if(tableauJSY[i][j][0]!=0) {
                td.style.backgroundColor= tableauJSY[i][j][1];
                td.classList.remove('shadUp','shadDown','shadRight','shadLeft');
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
    for (let z=0; z <piece.length; z++){
        let posX = piece[z][0];
        let posY = piece[z][1];
        td = document.getElementById(posY+"_"+posX);
        td.style.backgroundColor= couleur[0]; 

        // ajout des ombres à la pièce en mouvement

        // exemple pour les ombres au dessus
        let sUp = true;
        // pour toutes les parties de la pièce
        for (let i=0; i<piece.length;i++){
            // si il y a un composant situé juste au dessus
            if(piece[i][0] == posX && piece[i][1] == posY-1){
                // on ne mettra pas d'ombre à ce niveau là
                sUp = false;
            }                
        }
        if(sUp == true){
            td.classList.add('shadUp');
        }

        let sDown = true;
        for (let i=0; i<piece.length;i++){
            if(piece[i][0] == posX && piece[i][1] == posY+1){
                sDown = false;
            }                
        }
        if(sDown == true){
            td.classList.add('shadDown');
        }

        let sRight = true;
        for (let i=0; i<piece.length;i++){
            if(piece[i][0] == posX+1 && piece[i][1] == posY){
                sRight = false;
            }                
        }
        if(sRight == true){
            td.classList.add('shadRight');
        }
                        
        let sLeft = true;
        for (let i=0; i<piece.length;i++){
            if(piece[i][0] == posX-1 && piece[i][1] == posY){
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
        posX = piece[z][0];
        posY = piece[z][1];
        td = document.getElementById(posY+"_"+posX);
        td.style.backgroundColor= "black";
    }
}