// création d'un tableau dans le dom de X * Y
function createGrid(x,y) {
    let tableau = document.getElementById('tableau');
    for (let i=0; i<y; i++){
        let tr = document.createElement("tr");
        if(i==0 || i==1 || i== y-1) {
            tr.hidden = true;
        }
        for (let j=0; j<x;j++){
            let td = document.createElement("td");
            td.setAttribute('id', i+" "+j);
            tr.append(td);
        }
        tableau.append(tr);
    }
}
// création d'un tableau js de X * Y permettant de suivre l'évolution de la grille
function createArray(x,y) {
    let tableauJSX = [];
    let tableauJSY = [];
    for(i=0;i<y;i++){
        for(j=0;j<x;j++){
            tableauJSX.push(0);
        }
        tableauJSY.push(tableauJSX);
        tableauJSX = [];
    }
    return tableauJSY;
}


// on va essayer de faire le lien entre la grille html et la grille js
// lorsque les valeurs de la grille seront différentes de 0 (dans js) elle s'afficheront d'une couleur particulière (html) pour marquer leur présence
// la valeur des cases occupées oscillera entre 1 et h (h=hauteur max de la pièce) et décroira (-1) lorsque la pièce descendra
// ex:
// 1 1 1
// 2 2 2
//
// 1
// 2
// 3 1 1
//   2
//
// de façon à ne pas repasser prématurement à 0 "inoccupé" lorsqu'elles descendront