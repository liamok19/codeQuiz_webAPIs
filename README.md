# codeQuiz_webAPIs

## User Story

```
AS A Britney Enthusiast
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

Acceptance Criteria:

- GIVEN I am taking a code quiz
- WHEN I click the start button
- THEN a timer starts and I am presented with a question
- WHEN I answer a question
- THEN I am presented with another question
- WHEN I answer a question incorrectly
- THEN time is subtracted from the clock
- WHEN all questions are answered or the timer reaches 0
- THEN the game is over
- WHEN the game is over
- THEN I can save my initials and my score

Pseudo Code: 

HTML:
1. Basic wireframe
2. Static header
3. ordered list for of Questiosn items.List items
4. two buttons Start and the Leaderboard to check Highscores
5. ID tags and classes to refer to in Javascript


CSS: 
1. reset default CSS
2. build a simple styling 


JS: 
1. Link start button to begin the game
2. build question first
3. build a time to count down from 60 seconds. include a tumeout. 
4. use form to stor 'player name'
5. create click lisetn event to sue in strat/stop and for the leader baord 
6. pulls question fromt he array and puts question in the ul and assign
