var startButtonEl = document.getElementById('begin_btn');
var quizContainerEl = document.getElementById ('coding-quiz-game');
var highscoreEl = document.getElementById ('highScoreList');
var timerEl = document.getElementById('timer');
var count = 60;
var theQuestionEl = document.getElementById('theQuestion');
var currentQuestion = 0;
var scoreTrack = 0;
var results = document.getElementById('results');
var timerInterval;

//View highscore variables/consts. Score track is used aswell however, i have kept that seperate to this group below
// var endGameInitials = document.getElementById('initialFinish');
// var buttonInitial = document.getElementById('pushme');
var finalContainer = document.getElementById('container');
var username = document.getElementById('username');
var saveScoreBtn =document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
// var highest_MaxScore = 5;
//group above for localstorage portion.

var answer1El = document.getElementById('Answer_01');
var answer2El = document.getElementById('Answer_02');
var answer3El = document.getElementById('Answer_03');
var answer4El = document.getElementById('Answer_04');

quizContainerEl.style.display = 'none';
finalContainer.style.display = 'none';
results.style.display = 'none';

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
        options:["Toxic", " Circus", "Whoopsy I did it", "Work Bitch"],
        correct: 2, 
    },
    {
        question:"In the music video Gimme More, what is Britneys most prominent hair colour",
        options:["Black", "No hair", "Red", "Blonde"],
        correct: 0, 
    },
    {
        question:"In the 2012 hit Scream & Shout Britney featured in a song with what other artist",
        options:["Jay-Z", "Rihanna", "Will.I.Am", "Fergie"],
        correct: 2, 
    },
];


function startTimer() {

    timerInterval = setInterval(function(){
        timerEl.textContent = count;
        count --;

        if (count <= 0) {
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
    if (question[currentQuestion].correct === guessedAnswer) {
        // ...
        trackedScore();
    } else { 
        count -= 10
        
    }
    currentQuestion ++
    if (question[currentQuestion]) {
        // yay load the next one question.
        answerLoading ();
    } else {
        // we're all done with brit brit 
        endGame();
        localStorage.setItem('mostRecentScore', scoreTrack);

    }
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

//emd game to pause where the timer go to in the game. The score and the form containers will be visible and the quiz will hide. 
function endGame ()  {
    clearInterval(timerInterval);
    results.textContent = scoreTrack;
    quizContainerEl.style.display = 'none';
    finalContainer.style.display = 'flex';
    results.style.display = 'flex';
}

// function to track score. 1 correct answer equals 5 points. Triggered by the answerValidation.
function trackedScore () {
    scoreTrack +=5;
    // console.log(scoreTrack);

}


// Option1 for localstorageHighScore
const highScores= JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;
finalScore.textContent = 'Previous Score ' + mostRecentScore;
//current fucntion for the save button is set to disabled unless the username field (form) has been filled out.
username.addEventListener("keyup", () => { 
    saveScoreBtn.disabled = !username.value;
});
saveHighscore = function (event) {
    // console.log("hit me baby one more time");
    event.prevenDefault (); 
    const score = {
        score: scoreTrack,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score = a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
};  
var listof_scores = JSON.parse(localStorage.getItem('listof_scores')) || [];
highScores.map ( score => {
console.log('${score.username}-${score.score}');
});



// Option2 for localstorageHighScore:
// function nameHere () {
//     endGameInitials.value;
//     localStorage.setItem('endGameInitials',JSON.stringify(endGameInitials));
// }
// buttonInitial.addEventListener('click', nameHere); {
// }  


