function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible && !reveals[i].classList.contains("active")){
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function makeSorting(classeChosen) {
    let pannel = document.getElementsByClassName("pannel");
    for (let i = 0; i < pannel.length; i++) {
        pannel[i].classList.remove("reveal");
        pannel[i].classList.remove("active");
        pannel[i].style.display = "none";
        
    }
    let target = document.getElementsByClassName(classeChosen);
    for (let i = 0; i < target.length; i++) {
        target[i].style.display = "flex";
    }
}

// Date button
document.getElementById("date").addEventListener("click", function() {
    //set all div with class "AI" to display none
    let pannel = document.getElementsByClassName("pannel");
    for (let i = 0; i < pannel.length; i++) {
        pannel[i].style.display = "flex";
    }
});

// School button
document.getElementById("web").addEventListener("click", function() {
    makeSorting("web");
});

// Personal button
document.getElementById("ai").addEventListener("click", function() {
    makeSorting("ai");
});

// Web button
document.getElementById("hardware").addEventListener("click", function() {
    makeSorting("hardware");
});

// AI button
document.getElementById("mobile").addEventListener("click", function() {
    makeSorting("mobile");
});

// scraping button
document.getElementById("scraping").addEventListener("click", function() {
    makeSorting("scraping");
});


function makeSkills(skill_name) {
    const skills_div = document.getElementsByClassName("skills-content");
    const elements_skills = document.getElementsByClassName("img-skill");
    for (let i = 0; i < skills_div.length; i++) {
        skills_div[i].style.display = "none";

    }
    const target_a_to_reset = document.getElementsByClassName("skills-button");
    for (let i = 0; i < target_a_to_reset.length; i++) {
        target_a_to_reset[i].style.color = "white";
    }
    const target_div = document.getElementById(skill_name);
    target_div.style.display = "flex";
    const target_a = document.getElementById(skill_name + "_button");
    target_a.style.color = "#ce3b3b";
}

makeSkills("web_dev");

document.getElementById("web_dev_button").addEventListener("click", function() {
    makeSkills("web_dev");
});

document.getElementById("mobile_dev_button").addEventListener("click", function() {
    makeSkills("mobile_dev");
});

document.getElementById("hardware_button").addEventListener("click", function() {
    makeSkills("hardware_dev");
});

document.getElementById("machine_learning_button").addEventListener("click", function() {
    makeSkills("machine_learning");
});

document.getElementById("design_button").addEventListener("click", function() {
    makeSkills("design");
});

// Récupération de tous les éléments de navigation
let navLinks = document.querySelectorAll('.nav-links');

// Boucle sur tous les éléments de navigation pour ajouter un écouteur d'événement click
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut (rechargement de la page)
    let targetId = this.getAttribute('href'); // Récupère l'attribut href de l'élément cliqué
    let targetPosition = document.querySelector(targetId).offsetTop; // Récupère la position de l'élément ciblé
    let startPosition = window.pageYOffset; // Récupère la position actuelle de la fenêtre
    let distance = targetPosition - startPosition; // Calcule la distance à parcourir
    let duration = 1000; // Durée de l'animation en ms
    let start = null;

    // Fonction d'animation qui sera appelée à chaque frame
    function animate(currentTime) {
      if (!start) start = currentTime;
      let timeElapsed = currentTime - start;
      let run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animate);
    }

    // Fonction ease-in-out
    function easeInOutQuad (t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
    return -c/2 * (t*(t-2) - 1) + b;
}
// Demander la première frame d'animation
requestAnimationFrame(animate);
});
});