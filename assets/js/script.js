const questionContainer = document.getElementById('question-container');
const questions = [{
        'question': "1. Since 2011, Brendan O'Carroll has played the title character in what sitcom?",
        'A': "Mrs. Brown's Boys",
        'B': "Mrs. Brown's Babes",
        'C': "Mrs. Brown's Baboons",
        'D': "Mrs. Brown's Bust Ups",
        'correctAnswer': 'A'
    },
    {
        'question': '2. Which of these is a breed of spaniel?',
        'A': 'King James',
        'B': 'King John',
        'C': 'King Charles',
        'D': 'King George',
        'correctAnswer': 'C'
    },
    {
        'question': '3. According to Robert Burns, which food is the “Great chieftain o the pudding-race”?',
        'A': 'Teacake',
        'B': 'Haggis',
        'C': 'Bacon roll',
        'D': 'sticky toffee pudding',
        'correctAnswer': 'B'
    },
    {
        'question': "4. What is the name of the character played by Daisy Ridley in 'Star Wars: The Rise of Skywalker'?",
        'A': 'Doh',
        'B': 'Rey',
        'C': 'Mee',
        'D': 'Farr',
        'correctAnswer': 'B'
    },
    {
        'question': '5. Which of these is the title of a famous artwork by Tracey Emin?',
        'A': 'Our Settee',
        'B': 'Your Bench',
        'C': 'Her Desk',
        'D': 'My Bed',
        'correctAnswer': 'D'
    },
    {
        'question': '6. The annual half-marathon the Great North Run starts in which UK city?',
        'A': 'Newscastle',
        'B': 'Sheffield',
        'C': 'Liverpool',
        'D': 'Leeds',
        'correctAnswer': 'A'
    },
    {
        'question': '7. For what reason did Professor Robert Kelly gain internet fame in 2017?',
        'A': 'Mistaken identity on news',
        'B': 'Chasing after his dog',
        'C': 'Kids gatecrashed interview',
        'D': 'Trying to catch a bat',
        'correctAnswer': 'C'
    },
    {
        'question': '8. A character named Ralph is elected leader of a group of boys at the beginning of which book?',
        'A': 'Lord of the Flies',
        'B': 'A Clockwork Orange',
        'C': 'The Jungle Book',
        'D': 'Brave New World',
        'correctAnswer': 'A'
    },
    {
        'question': "9. In Hokusai's print 'The Great Wave', which mountain is depicted in the background?",
        'A': 'Mount Emei',
        'B': 'Mount Kailash',
        'C': 'Mount Fuji',
        'D': 'Mount Sinai',
        'correctAnswer': 'C'
    },
    {
        'question': "10. According to the Highway Code, what shape is the standard sign giving the order to 'Stop'?",
        'A': 'Pentagon',
        'B': 'Hexagon',
        'C': 'Heptagon',
        'D': 'Octagon',
        'correctAnswer': 'D'
    }
];

let questionNumber = -1;

/**
 * This function displays the questions and possible answers for
 * the user to pick.
 */

function displayQuestions(question) {
  const options = ["A", "B", "C", "D"];
  questionContainer.innerHTML = "";
  let questionElement = document.createElement("h2");
  questionElement.innerText = question.question;
  questionContainer.appendChild(questionElement);

  let buttonsContainer = document.createElement("div");
  buttonsContainer.id = "buttons-container";
  buttonsContainer.classList.add("buttons-container");
  questionContainer.appendChild(buttonsContainer);

  options.forEach(option => {
    let btn = document.createElement("button");
    btn.addEventListener("click", checkAnswer);
    btn.id = option;
    btn.classList.add("option");
    btn.innerText = `${option} - ${question[option]}`;
    buttonsContainer.appendChild(btn);
  });
}

/**
 * This function checks if the answer chosen is correct and 
 * increases the number of correct or incorrect answers.
 */

function checkAnswer(e) {
    let buttonElement = e.target;
    if (questions[questionNumber].correctAnswer == buttonElement.id) {
        alert("Correct! You clicked on button: " + buttonElement.id);
        let correct = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++correct;
    } else {
        alert("Incorrect! You clicked on button: " + buttonElement.id);
        let incorrect = parseInt(document.getElementById("incorrect").innerText);
        document.getElementById("incorrect").innerText = ++incorrect;
    }
    runGame();
}

/**  
 *  The game will either end or continue based on the number 
 * of questions the user has answered.
 */

function runGame() {
    questionNumber++;
    if (questions.length == questionNumber) {
        results();
    } else {
        displayQuestions(questions[questionNumber]);
    }
}

/**
 * This code will give your results from the quiz based 
 * on the number of correct answers.
 */

function results() {
    if (score.innerText >= 8) {
        alert("You answered " + score.innerText + " answers correctly! Congratulations!");
    } else if (score.innerText > 5) {
        alert("You answered " + score.innerText + " answers correctly! Good Job!");
    } else if (score.innerText > 3) {
        alert("You answered " + score.innerText + " answers correctly! You could do better.");
    } else {
        alert("You answered " + score.innerText + " answers correctly! I'm impressed you got so many wrong.");
    }
    document. location. reload();
}

runGame();