// si la plus haute pièce stoppée est en haut, le message "vous avez perdu" s'affiche
function perdu(tableau){
    for (let i = 1; i<tableau[0].length - 1; i++){
        if(tableau[2][i] != 0){
            let perdu = document.getElementById('perdu');
            perdu.classList.remove("hidden");
        }
    }
}


// affichage du score
function affichScore(score){
    let cadre = document.getElementById('chiffre');
    cadre.innerHTML = score.toString().padStart(4, 0);
}