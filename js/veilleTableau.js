// si la plus haute pièce stoppée est en haut, le message "vous avez perdu" s'affiche
function perdu(tableau){
    for (let i = 1; i<tableau[0].length - 1; i++){
        if(tableau[4][i][0] != 0){
            let perdu = document.getElementById('perdu');
            perdu.classList.remove("hidden");
            stopper[0]=1;
            return true;
        }
    }
}

function delLigne(tableau){
     // pour chaque ligne du tableau (sauf la dernière)
    
    for (let l = 0; l<tableau.length-1; l++){
	let nb2zero = 0;
        // s'il y a 0 dedans
        for (let i = 0; i<tableau[0].length; i++){
            if(tableau[l][i][0] == 0){
                // c'est que la ligne est incomplete
                nb2zero += 1;
            }
        }
        // S'il n'y a pas de "0" dedans c'est qu'elle est complète
        if(nb2zero == 0){
            // on supprime la ligne
            tableau.splice(l,1);
            // on rajoute une ligne en haut
            tableau.unshift(ligne(tableau[0].length,0));
            score[0] += 1;
            affichScore(score,cadre);
            affichNiv(score,cadreNiv);            
        }
    }
    return tableau;
}


// affichage du score et du niveau
function affichScore(score,cadre){
    cadre.innerHTML = score[0].toString().padStart(4,'0');
}

function affichNiv(score,cadreNiv){
    let niveau = Math.floor(score[0]/5);
    cadreNiv.innerHTML = niveau.toString().padStart(2,'0');
    level[0] = niveau; 
}


// Partie Gilles (à compléter; ne fonctionne pas encore)
function deleteLine1( tableauJS){
    let ymin = 2; // 1ere ligne visible du joueur
    let ymax = tableauJS.length - 2;  // derniere ligne visible du joueur
    let xmin = 1; // 1ere colonne visible du joueur
    let xmax = tableauJS[0].length - 2; // derniere colonne visible du joueur
    // Parcours de toutes les lignes de bas en haut
    for (let i= ymax; i> ymin; i--){
        let counter= 0;
        // Addition de toutes les cases occupées de la ligne
        for (let j= xmin; j< xmax; j++){
            if (tableauJS[i][j]!= 0){ counter+= 1; }
        }
        if (counter== xmax){
            // Une ligne est complète, on déplace toutes les lignes au dessus d'une ligne vers le bas ainsi que la piece
            for (k= i; k> ymin; k--){
                for (l= xmin; l<xmax; l++){
                    tableauJS[k][l]= tableauJS[k-1][l];
                } 
            }
            
        counter= 0;
        }
    }
}


