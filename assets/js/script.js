var startButtonEl = document.getElementById('begin_btn');
var quizContainerEl = document.getElementById ('coding-quiz-game');
var highscoreEl = document.getElementById ('highscore');
var timerEl = document.getElementById('timer');
var count = 60;
var theQuestionEl = document.getElementById('theQuestion');
var currentQuestion = 0;

var answer1El = document.getElementById('Answer_01');
var answer2El = document.getElementById('Answer_02');
var answer3El = document.getElementById('Answer_03');
var answer4El = document.getElementById('Answer_04');

quizContainerEl.style.display = 'none';

//building the Question portion of the Quiz
//building an array of questions using the object listed 'questions'
var question = [
    {
        question:"What is Pop Princess superstar Britney Spears middle name?",
        options:["Jean", "Rose", "Jane", "Rosalyn"],
        correct: 0,
    },
    {
        question:"What isn't a song sung by Britney Spears?",
        options:["Toxic", "Circus", "Whoopsy I did it", "Work Bitch"],
        correct: 2, 
    }
];


function startTimer() {

    var timerInterval = setInterval(function(){
        timerEl.textContent = count;
        count --;
        console.log('count');

        if (count === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}


function showQuiz() {
    startButtonEl.style.display = 'none';
    quizContainerEl.style.display = 'block';
}

function answerLoading () {

    var questionObject = question[currentQuestion];
    theQuestionEl.textContent = questionObject.question;

    var var_options = questionObject.options

        answer1El.textContent = var_options[0];

        answer2El.textContent = var_options[1];

        answer3El.textContent = var_options[2];

        answer4El.textContent = var_options[3];

            console.log(quizContainerEl);
            console.log(answer1El);
            console.log(answer2El);
            console.log(answer3El);
            console.log(answer4El);  
}

function answerValidation (guessedAnswer) {
    console.log('this one', question[currentQuestion])
    console.log('BBBB', guessedAnswer) 
    if (question[currentQuestion].correct !== guessedAnswer) {
        count -= 10
    }
    currentQuestion ++
}

startButtonEl.addEventListener('click', function(){
    startTimer();
    showQuiz();
    answerLoading ();

});

answer1El.addEventListener ('click', function() {
    answerValidation(0);
});
answer2El.addEventListener ('click', function() {
    answerValidation(1);
});
answer3El.addEventListener ('click', function() {
    answerValidation(2);
});
answer4El.addEventListener ('click', function() {
    answerValidation(3);
});



//once first question has been chosen. Use click fucntion to load question2. 
//if a question is wrong the timer reduces.


//if Q !=correct[0] then --count by 20secs
//if Q==correct then update currentuestion to =1
