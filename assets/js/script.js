var startButtonEl = document.getElementById('begin_btn');
var questionBoxEl = document.getElementById('questionBox');
var highscoreEl = document.getElementById ('highscore');
var timerEl = document.getElementById('timer');
var count = 61;


startButtonEl.addEventListener('click', function(){
    var timerInterval = setInterval(function(){
        count --;
        timerEl.textContent = count;
        console.log('count');

        if (count === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
   var visible = startButtonEl.hidden = true;
   if (visible === true) {
    questionBoxEl.hidden = false;
   }
});




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
//     {
//         question:"What isn't a song sung by Britney Spears?",
//         options:["Toxic", "Circus", "Whoopsy Daisy", "Work Bitch"],
//         correct: 4, 
//     },
//     {
//         question:"What isn't a song sung by Britney Spears?",
//         options:["Toxic", "Circus", "Whoopsy Daisy", "Work Bitch"],
//         correct: 2, 
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
//     var answer3El = document("Question_03");
//         answer3El.innertext = questionObject.answers[2];
//     var answer4El = document("Question_04");
//         answer4El.innertext = questionObject.answers[3];

//     choicesEl.appendChild(answer1El);
//     choicesEl.appendChild(answer2El);
//     choicesEl.appendChild(answer3El);
//     choicesEl.appendChild(answer4El);
    

// }
