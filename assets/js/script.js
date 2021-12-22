var startButtonEl = document.getElementById('begin_btn');
var quizContainerEl = document.getElementById ('coding-quiz-game');
var highscoreEl = document.getElementById ('highscore');
var timerEl = document.getElementById('timer');
var count = 60;
var theQuestionEl = document.getElementById('theQuestion');
var currentQuestion = 0;
var scoreTrack = 0;
var results = document.getElementById('results');
var timerInterval;
var endGameInitials = document.getElementById('initialFinish');
var buttonInitial = document.getElementById('pushme');
var finalResults = document.getElementById('finalResults-container');

var answer1El = document.getElementById('Answer_01');
var answer2El = document.getElementById('Answer_02');
var answer3El = document.getElementById('Answer_03');
var answer4El = document.getElementById('Answer_04');

quizContainerEl.style.display = 'none';
finalResults.style.display = 'none';
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
    },
    {
        question:"blajjj?",
        options:["workk", "bitch", "Whoopsy I did it", "Work Bitch"],
        correct: 1, 
    },
    {
        question:"gay ",
        options:["Toxic", "Circus", "Whoopsy I did it", "dadddddy"],
        correct: 3, 
    },
];


function startTimer() {

    timerInterval = setInterval(function(){
        timerEl.textContent = count;
        count --;

        if (count === 0) {
            endGame();
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

}

function answerValidation (guessedAnswer) {
    console.log('this one', question[currentQuestion])
    console.log('BBBB', guessedAnswer) 
    if (question[currentQuestion].correct === guessedAnswer) {
        // ...
        trackedScore();
    } else { 
        count -= 10
        
    }
    currentQuestion ++
    if (question[currentQuestion]) {
        // yay load the next one
        answerLoading ();
    } else {
        // we're all done daddy 
        endGame();
    }
    console.log('question[currentQuestion]', question[currentQuestion])
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


function endGame ()  {
    clearInterval(timerInterval);
    results.textContent = scoreTrack;
    quizContainerEl.style.display = 'none';
    nameHere();
    finalResults.style.display = 'block';
    
}

function trackedScore () {
    scoreTrack +=5;
    console.log(scoreTrack);

}

function nameHere () {
    endGameInitials.value;
    console.log(endGameInitials);
}
//once first question has been chosen. Use click fucntion to load question2. 
//if a question is wrong the timer reduces.


//if Q !=correct[0] then --count by 20sec
//if Q==correct then update currentuestion to =1
