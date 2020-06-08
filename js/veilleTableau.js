// si la plus haute pièce stoppée est en haut, le message "vous avez perdu" s'affiche
function perdu(tableau){
    for (let i = 1; i<tableau[0].length - 1; i++){
        if(tableau[5][i] != 0){
            let perdu = document.getElementById('perdu');
            perdu.classList.remove("hidden");
            stopper[0]=1;
            return true;
        }
    }
}


// la fonction qui suit a l'air de bien deconner
function delLigne(tableau){
     // pour chaque ligne du tableau
    let nb2zero = 0;
    for (let l = 0; l<tableau.length-1; l++){
        nb2zero = 0;
        // s'il y a 0 dedans
        for (let i = 0; i<tableau[0].length; i++){
            if(tableau[l][i] == 0){
                // c'est que la ligne est incomplete
                nb2zero += 1;
                console.log(nb2zero);
            }
        }
        if(nb2zero == 0){
            // on deplace toutes les cases du tableau situées au dessus de une case vers le bas
            // c'est à dire que chaque ligne du tableau à partir de la ligne complete incluse est remplacée par celle immédiatement au dessus...
            for (let h=1; h<tableau.length; h++){
                tableau[h] = tableau[h-1];
                paintItWhite(tableau,piece);
            }            
            // la première ligne du haut est remplacée par une nouvelle ligne vide
            tableau[0][0] = 1;
            for (let m = 1; m<(tableau[0].length-1); m++){
                tableau[0][m] = 0;
            }
            tableau[0].push(1);
            score[0] += 1;
            affichScore(score);
        }        
    }
}


// affichage du score
function affichScore(score){
    let cadre = document.getElementById('chiffre');
    cadre.innerHTML = score.toString().padStart(4, '0');
}


// Partie Gilles
function deleteLine1(tableauJS){
    let ymin = 5;
    let ymax = tableauJS.length - 2;
    let xmin = 1;
    let xmax = tableauJS[0].length - 2;

    for (let i= ymax; i> ymin; i--){
        let counter= 0;
        for (let j= xmin; j< xmax; j++){
            if (tableauJS[i][j]!= 0){ counter+= 1; }
        }
        if (counter== xmax){
            for (k= i; k> ymin; k--){
                for (l= xmin; l<xmax; l++){
                    tableauJS[k][l]= tableauJS[k-1][l];
                } 
            }
        counter= 0;
        }
    }
}

