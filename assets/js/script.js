// Déclarer les variables globales ici

window.onload = () =>{
    // Nos scripts ici
    loadQuestion();
    setInterval(update, 33);
};


const loadQuestion = ()=>{ // Charge chaque questions de la FAQ et leur assigne un event click pour faire apparaitre leur contenu
    let questions = document.querySelectorAll(".question");
    for(let question of questions){
        let questionHeader = question.querySelector("h3");
        questionHeader.addEventListener('click', toogleContent);
        let questionParagraph = question.querySelector("p");
        questionParagraph.setAttribute("data-height", questionParagraph.offsetHeight);
        questionParagraph.style.height = 0;
    }
};

const toogleContent = (event) => { // Masque les paragraphes ouverts et affiche le paragraph demandé
    let element = event.target;
    
    // Ajoute ou supprime la class 'opened' au titre
    if(element.classList.contains("opened")){
        element.classList.remove("opened");
    }
    else{
        element.classList.add("opened");
    }
    
    // let paragraph = element.parentNode.querySelector('p');
    // const paragraphHeight = paragraph.style.height;

    // let paragraphs = document.querySelectorAll(".question>p");
    // for(let currentParagraph of paragraphs){
    //     if(currentParagraph.style.height == "auto"){
    //         currentParagraph.style.height = "0";
    //     }
    // }
    
    // if(paragraphHeight != "auto"){
    //     paragraph.style.height = "auto";
    // }
};

const update = ()=>{
    let questions = document.querySelectorAll(".question");
    for(let question of questions){
        let questionHeader = question.querySelector('h3');
        let questionParagraph = question.querySelector('p');

        if(questionHeader.classList.contains("opened")){
            let currentHeight = parseInt(questionParagraph.style.height.substring(0, questionParagraph.style.height.length - 2));
            if(currentHeight < questionParagraph.getAttribute("data-height")){
                currentHeight += 10;
                if(currentHeight > questionParagraph.getAttribute("data-height")){
                    currentHeight = questionParagraph.getAttribute("data-height");
                }
            }
            questionParagraph.style.height = currentHeight + "px";
        }
    }
};