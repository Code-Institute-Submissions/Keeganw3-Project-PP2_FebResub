const questionContainer = document.getElementById('question-container');
const questions = [
    {
        'question': "Since 2011, Brendan O'Carroll has played the title character in what sitcom?",
        'A': "Mrs. Brown's Boys",
        'B': "Mrs. Brown's Babes",
        'C': "Mrs. Brown's Baboons",
        'D': "Mrs. Brown's Bust Ups",
        'correctAnswer': 'A'
      },
      {
        'question': 'Which of these is a breed of spaniel?',
        'A': 'King James',
        'B': 'King John',
        'C': 'King Charles',
        'D': 'King George',
        'correctAnswer': 'C'
      },  
      {
        'question': 'According to Robert Burns, which food is the “Great chieftain o’ the pudding-race”?',
        'A': 'Teacake',
        'B': 'Haggis',
        'C': 'Bacon roll',
        'D': 'sticky toffee pudding',
        'correctAnswer': 'B'
      }, 
      {
        'question': "What is the name of the character played by Daisy Ridley in ‘Star Wars: The Rise of Skywalker’?",
        'A': 'Doh',
        'B': 'Rey',
        'C': 'Mee',
        'D': 'Farr',
        'correctAnswer': 'B'
      },  
      {
        'question': 'Which of these is the title of a famous artwork by Tracey Emin?',
        'A': 'Our Settee',
        'B': 'Your Bench',
        'C': 'Her Desk',
        'D': 'My Bed',
        'correctAnswer': 'D'
      }, 
      {
        'question': 'The annual half-marathon the Great North Run starts in which UK city?',
        'A': 'Newscastle',
        'B': 'Sheffield',
        'C': 'Liverpool',
        'D': 'Leeds',
        'correctAnswer': 'A'
      },  
      {
        'question': 'For what reason did Professor Robert Kelly gain internet fame in 2017?',
        'A': 'Mistaken identity on news',
        'B': 'Chasing after his dog',
        'C': 'Kids gatecrashed interview',
        'D': 'Trying to catch a bat',
        'correctAnswer': 'C'
      },  
      {
        'question': 'A character named Ralph is elected leader of a group of boys at the beginning of which book?',
        'A': 'Lord of the Flies',
        'B': 'A CLockwork Orange',
        'C': 'The Jungle Book',
        'D': 'Brave New World',
        'correctAnswer': 'A'
      },  
      {
        'question': "In Hokusai’s print ‘The Great Wave’, which mountain is depicted in the background?",
        'A': 'Mount Emei',
        'B': 'Mount Kailash',
        'C': 'Mount Fuji',
        'D': 'Mount Sinai',
        'correctAnswer': 'C'
      },  
      {
        'question': "According to the Highway Code, what shape is the standard sign giving the order to ‘Stop’?",
        'A': 'Pentagon',
        'B': 'Hexagon',
        'C': 'Heptagon',
        'D': 'Octagon',
        'correctAnswer': 'D'
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

//function submissionRules() {
//  for (let button of buttons) {
//    button.addEventListener("click", function() {
//        if (this.getAttribute("data-type") === "submit") {
//            checkAnswer();
//        } else {
//            let gameType = this.getAttribute("data-type");
//            runGame(gameType)
//        }
//    })
//}
//}