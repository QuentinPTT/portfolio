
function onLoad(){
    document.getElementById("left").style.display ="none";
    document.getElementById("right").style.display ="none";
}


function change(){
    document.getElementById("btn").style.display ="none";
    document.getElementById("left").style.display ="block";
    document.getElementById("right").style.display ="block";
    document.getElementById("container").style.display ="none";
    let cases = 0;
    let wins = 0;
    let defeats = 0;
    let proba = 0;
    var changementPorte = document.querySelector('#cb').checked;
    let choix;
    let solution;
    for (let i = 0; i<1000000; i++){
        choix = Math.floor(Math.random() * 3) + 1;
        solution = Math.floor(Math.random() * 3) + 1;
        if (changementPorte){
            if (choix == 1){
                if (solution == 1) choix = 2;
                if (solution == 2) choix = 2;
                if (solution == 3) choix = 3;
                }
            else if (choix == 2) {
                if (solution == 1) choix = 1;
                if (solution == 2) choix = 1;
                if (solution == 3) choix = 3;
            }  
            else{
                if (solution == 1) choix = 1;
                if (solution == 2) choix = 2;
                if (solution == 3) choix = 1;
            }
        }
        if (choix == solution) {wins += 1;}
        else {defeats += 1;}
        cases = wins + defeats;
        proba = wins / cases;
    }
    document.getElementById("prob").innerHTML = proba;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("cases").innerHTML = cases;
    document.getElementById("defeats").innerHTML = defeats;
}