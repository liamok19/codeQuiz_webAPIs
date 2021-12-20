
var startButtonEl = document.getElementById('begin_btn');
var quizContainerEl = document.getElementById ('coding-quiz-game');
var highscoreEl = document.getElementById ('highscore');
var timerEl = document.getElementById('timer');
var count = 61;

var questionBoxEl = document.getElementById('questionBox');
var resultsContainer = document.getElementById('#results')
var submittedAnswer = document.getElementById ('#Question_01')


quizContainerEl.style.display = 'none';

startButtonEl.addEventListener('click', function(){
    var timerInterval = setInterval(function(){
        count --;
        timerEl.textContent = count;
        console.log('count');

        if (count === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

});

startButtonEl.addEventListener('click', function(){
    startButtonEl.style.display = 'none';
    quizContainerEl.style.display = 'block';


});

//building the Question portion of the Quiz
function buildQuiz (){}

function showResults(){}

buildQuiz();

console.log(buildQuiz);

submittedAnswer.addEventListener('click', showResults);



// var questions = [
//     {
//         question:"What is Pop Princess superstar Britney Spears middle name?",
//         options:["Jean", "Rose", "Jane", "Rosalyn"],
//         correct: 1, 
//     },
//     {
//         question:"What isn't a song sung by Britney Spears?",
//         options:["Toxic", "Circus", "Whoopsy Daisy", "Work Bitch"],
//         correct: 3, 
//     },
// ];

// var currentQuestion = 0;

// function showQuestion() {

//     var questionObject = questions[currentQuestion];
//         questionBoxEl.innertext = questionObject.question;
//     var answer1El = document("Question_01");
//         answer1El.innertext = questionObject.answers[0];
//     var answer2El = document("Question_02");
//         answer2El.innertext = questionObject.answers[1];

//     choicesEl.appendChild(answer1El);
//     choicesEl.appendChild(answer2El);

    

// }
