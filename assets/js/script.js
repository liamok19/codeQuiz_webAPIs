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

//View highscore variables/consts. Score track is used aswell however, i have kept that seperate to this group below
// var endGameInitials = document.getElementById('initialFinish');
// var buttonInitial = document.getElementById('pushme');
var finalContainer = document.getElementById('container');
// const mostRecentScore = localStorage.getItem("mostRecentScore");
// var highest_MaxScore = 5;
//group above for highscore portion.

var answer1El = document.getElementById('Answer_01');
var answer2El = document.getElementById('Answer_02');
var answer3El = document.getElementById('Answer_03');
var answer4El = document.getElementById('Answer_04');

quizContainerEl.style.display = 'none';
finalContainer.style.display = 'none';
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


function endGame ()  {
    clearInterval(timerInterval);
    results.textContent = scoreTrack;
    quizContainerEl.style.display = 'none';
    finalContainer.style.display = 'flex';

}
// function to track score. 1 correct answer equals 5 points. Triggered by the answerValidation.
function trackedScore () {
    scoreTrack +=5;
    // console.log(scoreTrack);

}


// const highScore_Result = JSON.parse(localStorage.getItem("highScore_Result")) || [];


// scoreTrack.innerText = mostRecentScore;

// endGameInitials.addEventListener("keyup", () => { 
//     buttonInitial.disabled = !endGameInitials.value;
// });

saveHighscore = e => {
    console.log("hit me baby one more time")
        e.preventDefault();
};

//     const score = {
//         score: scoreTrack,
//         name: endGameInitials.value
//     };
//     highScore_Result.push(score);
//     highScore_Result.sort((a, b) => b.score = a.score);
//     highScore_Result.splice(5);

//     localStorage.setItem('highScore_Result', JSON.stringify(highScore_Result));
//     window.location.assign("/");

// }






// endGameInitials = JSON.parse(localStorage.getItem("endGameInitials")) || [];

// function nameHere () {
//     endGameInitials.value;
//     localStorage.setItem('endGameInitials',JSON.stringify(endGameInitials));

// }

// buttonInitial.addEventListener('click', nameHere); {
// }  






//once first question has been chosen. Use click fucntion to load question2. 
//if a question is wrong the timer reduces.


//if Q !=correct[0] then --count by 20sec
//if Q==correct then update currentuestion to =1
