// Déclarer les variables globales ici
// CONFIG //
    const FAQ_PARAGRAPH_SPEED = 25;
    const SCROLL_DURATION = 500;
///////////

let $root = $('html, body');
let questions;

window.onload = () =>{
    questions = document.querySelectorAll(".question");
    loadQuestion();
    setInterval(update, 33);
};


const loadQuestion = ()=>{ // Charge chaque questions de la FAQ et leur assigne un event click pour faire apparaitre leur contenu
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
    if(element.classList.contains("opened")){
        element.classList.remove("opened");
    }
    else{
        closeAllQuestion();
        element.classList.add("opened");
    }
};

const closeAllQuestion = ()=>{
    for(let question of questions){
        let questionHeader = question.querySelector("h3");
        if(questionHeader.classList.contains("opened")){
            questionHeader.classList.remove("opened");
        }
    }
};

const update = ()=>{
    //Gère le déroulement/enroulement des paragraphes de la FAQ
    let questions = document.querySelectorAll(".question");
    for(let question of questions){
        let questionHeader = question.querySelector('h3');
        let questionParagraph = question.querySelector('p');
        let currentHeight = parseInt(questionParagraph.style.height.substring(0, questionParagraph.style.height.length - 2));
        let dataHeight = questionParagraph.getAttribute("data-height");

        if(questionHeader.classList.contains("opened") && currentHeight < dataHeight){
            currentHeight += FAQ_PARAGRAPH_SPEED;

            if(currentHeight > questionParagraph.getAttribute("data-height")){
                currentHeight = questionParagraph.getAttribute("data-height");
            }

            questionParagraph.style.height = currentHeight + "px";
        }
        else if(!questionHeader.classList.contains("opened") && currentHeight > 0){
            currentHeight -= FAQ_PARAGRAPH_SPEED;

            if(currentHeight < 0){
                currentHeight = 0;
            }

            questionParagraph.style.height = currentHeight + "px";
        }
    }
};

$('a[href^="#"]').click(function(){
    let href = $.attr(this, 'href');

    $root.animate(
        {
            scrollTop: $(href).offset().top
        }, 
        SCROLL_DURATION,
        ()=>{
            window.location.hash = href;
        }
    );

    return false;
});


// Lazy loads
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});