var startButtonEl = document.getElementById('begin_btn');
var quizContainerEl = document.getElementById ('coding-quiz-game');
var highscoreEl = document.getElementById ('highscore');
var timerEl = document.getElementById('timer');
var count = 61;
var questionBoxEl = document.getElementById('questionBox');

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

    function quizContainerEl() {

        var questionObject = question[currentQuestion];
            questionBoxEl.textContent = questionObject.question;
        var answer1El = document.getElementById("#Question_01");
            answer1El.textContent = options[0];
        var answer2El = document.getElementById("#Question_02");
            answer2El.textContent = options[1];
    
            answer1El.appendChild(answer1El);
            answer2El.appendChild(answer2El);
            console.quizContainerEl();


};

    //building the Question portion of the Quiz
    //building an array of questions using the object listed 'questions'
var question = [
    {
        question:"What is Pop Princess superstar Britney Spears middle name?",
        options:{
            a: "Jean", 
            b: "Rose", 
            c: "Jane", 
            d: "Rosalyn",
        },
        correct: [1],
    },
    {
        question:"What isn't a song sung by Britney Spears?",
        options:{
            a: "Toxic", 
            b: "Circus", 
            c: "Whoopsy I did it", 
            d: "Work Bitch",
        },
        correct: [3], 
    },
];

var currentQuestion = 0;






