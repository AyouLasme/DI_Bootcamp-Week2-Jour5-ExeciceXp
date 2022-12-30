// partie1

function playTheGame() {
    let confirmation = confirm("Souhaitez vous jouer le jeu?");
    if (confirmation == false) {
        alert("Pas de probleme aurevoir");
    }else{
        let numero = prompt("Entrer un nombre entre 0 et 10");
        typeof(numero);
        if (isNaN(numero)) {
            alert("Désolé, pas un numéro, au revoir ");
        }else {
            if(numero >= 0 && numero < 10){
                let computerNumber = Math.floor(Math.random() * 10);
                compareNumbers(numero,computerNumber);
            }else{
                alert("Désolé, ce n'est pas un bon chiffre, au revoir");
            } 
        }
    }
  }


  // partie2

function compareNumbers(userNumber,computerNumber) {
    do {
        const nombreDeChance = 3;
        let i = 0;
        if(userNumber == computerNumber){
            alert("WINNER");
            return;
        }else if (userNumber > computerNumber){
            alert("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau");
            userNumber = prompt("Entrer un nouveau numero")
        }else {
            alert("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau");
            userNumber = prompt("Entrer un nouveau numero")
        }
    } while (i < nombreDeChance);
}

