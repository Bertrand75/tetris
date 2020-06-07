// si la plus haute pièce stoppée est en haut, le message "vous avez perdu" s'affiche
function perdu(tableau){
    for (let i = 1; i<tableau[0].length - 1; i++){
        if(tableau[2][i] != 0){
            let perdu = document.getElementById('perdu');
            perdu.classList.remove("hidden");
        }
    }
}


function delLigne(tableau){
    // pour chaque ligne du tableau
    for (let l = 0; l<tableau.length; l++){
        let complet = true;
        // s'il y a 0 dedans
        for (let i = 0; i<tableau[0].length; i++){
            if(tableau[l][i] == 0){
                // c'est que la ligne est incomplete
                complet = false;
                // on passe à la ligne suivante en sortant de la boucle i
                break;
            }
        }
        if(complet == true){
            // on deplace toutes les cases du tableau situées au dessus de une case vers le bas
            // c'est à dire que chaque ligne du tableau à partir de la ligne complete incluse est remplacée par celle immédiatement au dessus
            for (let h=1; h<l+1; h++){
                tableau[h] = tableau[h-1];
            }
            // et que la première ligne du haut est remplacée par une nouvelle ligne vide
            tableau[0][0] = 1;
            for (let m = 1; m<tableau.length-1; m++){
                tableau[0][m] = 0;
            }
            tableau[0].push(0);
            score[0] += 1;
            affichScore(score);
        }    
    }
}


// affichage du score
function affichScore(score){
    let cadre = document.getElementById('chiffre');
    cadre.innerHTML = score.toString().padStart(4, 0);
}