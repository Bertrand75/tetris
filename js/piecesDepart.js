
// création d'une piece au milieu haut de l'écran

function creationO(tableau){
    couleur[0] = 'blue';
    couleur[1] += 1;
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leO = [[posOrig, 0],[posOrig, 1],[posOrig+1, 0],[posOrig+1, 1]];
    return leO;
}

function creationL(tableau){
    couleur[0] = 'violet';
    couleur[1] += 1;
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leL = [[posOrig, 1],[posOrig, 0],[posOrig, 2],[posOrig+1, 2]];
    return leL;    
}

function creationJ(tableau){
    couleur[0] = 'yellow'; 
    couleur[1] += 1;   
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leJ = [[posOrig, 1],[posOrig, 0],[posOrig, 2],[posOrig-1, 2]];
    return leJ;    
}

function creationI(tableau){
    couleur[0] = 'red';   
    couleur[1] += 1; 
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leI = [[posOrig, 2],[posOrig, 0],[posOrig, 1],[posOrig, 3]];
    return leI;    
}

function creationZ(tableau){
    couleur[0] = 'orange';   
    couleur[1] += 1; 
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leZ = [[posOrig, 0],[posOrig-1, 0],[posOrig, 1],[posOrig+1, 1]];
    return leZ;    
}

function creationS(tableau){
    couleur[0] = 'cyan';  
    couleur[1] += 1;  
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leS = [[posOrig, 0],[posOrig+1, 0],[posOrig, 1],[posOrig-1, 1]];
    return leS;    
}

function creationT(tableau){
    couleur[0] = 'green';
    couleur[1] += 1;
    let largTab = tableau[0].length;
    let posOrig = Math.round(largTab/2 - 1);
    let leT = [[posOrig, 0],[posOrig-1, 0],[posOrig+1, 0],[posOrig, 1]];
    return leT;
}


// choix aléatoire d'une piece
// random entre 0 et nb de pièces diférentes
function randomPiece(nbPiece){
    let r = Math.floor(Math.random() * nbPiece);
    return r;
}


function placePiece(tableau,r){    
    switch(r){
        case 0:
            piece =	creationO(tableau);
            break;
        case 1:
            piece =	creationL(tableau);
            break;
        case 2:
            piece =	creationJ(tableau);
            break;
        case 3:
            piece =	creationI(tableau);
            break;
        case 4:
            piece =	creationZ(tableau);
            break;
        case 5:
            piece =	creationS(tableau);
            break;
        case 6:
            piece =	creationT(tableau);
            break;
    }
	return piece;
}


// affichage prochaine pièce  

function nextPieceJS(){

    // creation cadre JS  
    let cadreJS = new Array(7);
    for (let j=0; j<7; j++){
        cadreJS[j] = new Array(5);
    }
    let ran = randomPiece(7);
    prochaine[0] = ran;
    let nextP = placePiece(cadreJS,ran); 

    // remplissage cadre JS
    for (let i=0; i<nextP.length; i++){
        let posX = nextP[i][0];
        let posY = nextP[i][1];
        cadreJS[posY+2][posX+1] = couleur[0];
    }
    return cadreJS;
}

function nextPieceHTML(cadreJS){
    // creation cadre HTML
    let cadreH = document.getElementById('piece');    
    for(let i=0; i<7;i++){
        let tr = document.createElement("div");
        for (let j=0; j<5; j++){
            let td = document.createElement("div");
            td.setAttribute('id', (i+10000)+"_"+(j+10000)); // on modifie les id pour ne pas les confondre avec ceux du tableau principal
            tr.append(td);
        }
        cadreH.append(tr);
    }    
    // remplissage cadre HTML
    for (let i=0; i<cadreJS.length; i++){
        for (let j=0; j<cadreJS[0].length; j++){
            if(typeof cadreJS[i][j] === "string"){
                let cadreHCase = document.getElementById((i+10000)+"_"+(j+10000));
                cadreHCase.style.backgroundColor = cadreJS[i][j];
                // ajout des ombres
                if (cadreJS[i][j] != cadreJS[i-1][j]){
                    cadreHCase.classList.add('shadUp');
                }
                if (cadreJS[i][j] != cadreJS[i+1][j]){
                    cadreHCase.classList.add('shadDown');
                }  
                if (cadreJS[i][j] != cadreJS[i][j-1]){
                    cadreHCase.classList.add('shadLeft');
                } 
                if (cadreJS[i][j] != cadreJS[i][j+1]){
                    cadreHCase.classList.add('shadRight');
                }                  
            }
        }
    }
}


function nextPieceEmpty(){
    let cadreH = document.getElementById('piece'); 
    cadreH.innerHTML = '';
}

