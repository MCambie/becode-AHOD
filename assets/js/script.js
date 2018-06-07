// Déclarer les variables globales ici

window.onload = () =>{
    // Nos scripts ici
    loadQuestion();
};

// Déclaration de nos fonctions ici (par exemple)

const loadQuestion = ()=>{ // Charge chaque questions de la FAQ et leur assigne un event click pour faire apparaitre leur contenu
    let questions = document.querySelectorAll(".question");
    for(let question of questions){
        question.addEventListener('click', showContent);
    }
};

const showContent = (event) => { // Masque les paragraphes ouverts et affiche le paragraph demandé
    let paragraphs = document.querySelectorAll(".question>p");
    for(let paragraph of paragraphs){
        if(paragraph.style.height == "auto"){
            paragraph.style.height = "0";
        }
    }

    let element = event.target;
    let paragraph = element.parentNode.querySelector('p');
    paragraph.style.height = "auto";
}