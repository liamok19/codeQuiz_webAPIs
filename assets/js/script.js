var startButton = document.getElementById('begin_btn');
var questionBox = document.getElementById('questionBox');

startButton.addEventListener('click', gameBegins);

function gameBegins (){
    console.log('BEGIN Bitch');  
    startButton.classList.add('invisible');
    questionBox.classList.remove('invisible');
}

function nextQuestion (){

}

function answerSelection() {

}