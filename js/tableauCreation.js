// création d'un tableau dans le dom de X * Y
function createGrid(x,y) {
    let tableau = document.getElementById('tableau');
    for (let i=0; i<y; i++){
        let tr = document.createElement("tr");
        if(i<=4 || i== y-1) {
            tr.hidden = true;
        }
        for (let j=0; j<x; j++){
            let td = document.createElement("td");
            td.setAttribute('id', i+"_"+j);         
            tr.append(td);

        }
        tableau.append(tr);
    }
}
// création d'un tableau js de X * Y permettant de suivre l'évolution de la grille
function createArray(x,y) {
    // création tableau X (remarque: on y place déjà un "1" qui correspondra à la colonne de gauche)
    let tableauJSX = [1];
    // création tableau Y; il regroupera l'ensemble des tableaux/lignes X
    let tableauJSY = [];
    // pour chaque ligne (sauf la dernière qui sera créée plus tard)
    for(let i=0;i<y-1;i++){
        // on remplit chaque "colonne" de la ligne de "0" (cases inoccupées) 
        // remarque: j est < à x-2 pour laisser la place aux "1"(= cases occupées = les limites du cadre de jeu) que l'on a ajoutés et que l'on va ajouter
        for(let j=0;j<x-2;j++){
            tableauJSX.push(0);
        }
        // on ajoute une case occupée à la fin de la ligne
        tableauJSX.push(1);
        // quand la ligne est générée on l'ajoute à la suite (en dessous si l'on veut) des autres lignes
        tableauJSY.push(tableauJSX);
        // on vide (presque) la ligne pour pouvoir générer la suivante 
        tableauJSX = [1];
    }
    // on remplit la dernière ligne de "1" pour indiquer la limite basse du cadre
    for(let l=0; l<x-1; l++) {
        tableauJSX.push(1);
    }
    // on ajoute la dernière ligne de "1" à la suite des autres
    tableauJSY.push(tableauJSX); 
    return tableauJSY;

}

// creé une ligne vierge prete à etre insérée dans le tableau lorsqu'une ligne est effacée

function lignVierg(tableau){
    let lign = [[1]];
     for (let m = 1; m<(tableau[0].length-1); m++){
        lign[0].push(0);
    }
    lign[0].push(1);
    return lign;
}

// affichage du tableau JS et de la pièce dans le tableau HTML

function paintItWhite(tableauJSY,piece) {
    let td;
    for (let i=0; i<tableauJSY.length; i++){
        for (let j=0; j<tableauJSY[0].length; j++){
            td = document.getElementById(i+"_"+j);
            if (tableauJSY[i][j]==1) {;
                td.style.backgroundColor= "white";
            }
            else if(tableauJSY[i][j]!=0) {
                td.style.backgroundColor= tableauJSY[i][j];
            }
            else if(tableauJSY[i][j]==0) {
                td.style.backgroundColor= "black";
            }       
        }
    }
    for (let z=0; z <piece.length; z++){
        posX = piece[z][0];
        posY = piece[z][1];
        td = document.getElementById((posY)+"_"+posX);
        td.style.backgroundColor= couleur[0];
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