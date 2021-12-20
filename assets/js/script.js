const questionContainer = document.getElementById('question-container');
const questions = [
    {
        'question': 'What is the best language?',
        'A': 'JS',
        'B': 'HTML',
        'C': 'CSS',
        'D': 'Python',
        'correctAnswer': 'D'
      },
      {
        'question': 'Who is the president?',
        'A': 'John',
        'B': 'James',
        'C': 'Joe',
        'D': 'Micheal',
        'correctAnswer': 'A'
      }  
    ]

let questionNumber = 0;
questionContainer.innerHTML = displayQuestions(questions[questionNumber])

/**
 * This function displays the questions and possible answers for
 * the user to pick.
 */

function displayQuestions(question) {
  const options = ["A", "B", "C", "D"]
  const buttons = options.forEach(option => {
    return `<button class="option" id="${option}" data-value="${option}">${option} - ${question.option}</button>
    `
  });
  document.getElementById("question-container").innerHTML = buttons
  console.log(document.getElementById("question-container").innerHTML)
  let display = `
    <h2>${question.question}</h2>
      <ol>
      ${buttons}
      </ol>`
      const optionsRef = Array.from(document.querySelectorAll(".option"));
      optionsRef.forEach(button => {
        button.addEventListener("click", checkAnswer(this))  
    });
      return display
  }
  // console.log(displayQuestions(0))
 /**
 * This function checks if the answer chosen is correct and 
 * increases the number of correct or incorrect answers.
 */

function checkAnswer(buttonElement) {
  if (questions[questionNumber].correctAnswer == buttonElement.id){
    alert("Correct! You clicked on button: " + buttonElement.id);
    let correct = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++correct;
  }
  else {
    alert("Incorrect! You clicked on button: " + buttonElement.id);
    let incorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++incorrect;
  }
  runGame(questionNumber);
}

/**  
 *  The game will either end or continue based on the number 
 * of questions the user has answered.
*/

function runGame(questionNumber) {
  if (questions.length == questionNumber) {
    results();
} else {
  questionNumber++;
  questionContainer.innerHTML = displayQuestions(questions[questionNumber]);
  console.log(questions[questionNumber])
}
}
/**
 * This code will give your results from the quiz based 
 * on the number of correct answers.
 */
// results() {
//  if (checkAnswer(correct) <= 8) {
//  "You answered" + correct + "answers correctly! Congratulations!"
//} else if (checkAnswer(correct) <= 5) {
//  "You answered" + correct + "answers correctly! Good Job!"
//} else if (checkAnswer(correct) < 3) {
//  "You answered" + correct + "answers correctly! You could do better."
//} else if (checkAnswer(correct) >= 3) {
//  "You answered" + correct + "answers correctly! I'm impressed you got so many wrong."
//}  
// }