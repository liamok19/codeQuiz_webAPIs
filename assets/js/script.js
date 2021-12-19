var startButtonEL = document.getElementById('begin_btn');
var questionBoxEL = document.getElementById('questionBox');
var highscoreEL = document.getElementById ('highscore');
var timerEL = document.getElementById('timer');

startButtonEL.addEventListener('click', gameBegins);



var questions = [
    {
        question:"What is Pop Princess superstar Britney Spears middle name?",
        options:["Jean", "Rose", "Jane", "Rosalyn"],
        correct: 1, 
    },
    {
        question:"What isn't a song sung by Britney Spears?",
        options:["Toxic", "Circus", "Whoopsy Daisy", "Work Bitch"],
        correct: 3, 
    },
];

var currentQuestion = 0;

var gameBegins = function(){

    var timer = 60;

    var timeInterval = setInterval(function() {
        time--;
        timeInterval.textcontent = time;

        if (timer === 0 ) {
            clearInterval(timeInterval);
        }
    },1000);

    function showQuestion() {
        var questionObject = questions[currentQuestion];
            questionEl.innertext = questionObject.question;
            

    }


}

// var timer. Must start at 60 and set to 10milliseconds

// function gameBegins (){}
// function nextQuestion (){}
// function answerSelection() {}
// build variables. An object conatining an array of the questons 


