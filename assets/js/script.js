const questionContainer = document.getElementById('question-container')
console.log(questionContainer)

const questions = [
    {
        'question': 'What is the best language?',
        'a': 'JS',
        'b': 'HTML',
        'c': 'CSS',
        'd': 'Python',
        'correctAnswer': 'd'
      },
      {
        'question': 'Who is the president?',
        'a': 'John',
        'b': 'James',
        'c': 'Joe',
        'd': 'Micheal',
        'correctAnswer': 'a'
      }  
    ]

console.log(questions)
questionContainer.innerHTML = generateQuestionHTML(questions[0])

function displayQuestions(question) {
    let html = `
      <h2>${question.question}</h2>
      <ul>
        <button id="a" data-value="a" onclick="checkAnswer(this)">A - ${question.a}</button>
        <button id="b" data-value="b" onclick="checkAnswer(this)">B - ${question.b}</button>
        <button id="c" data-value="c" onclick="checkAnswer(this)">C - ${question.c}</button>
        <button id="d" data-value="d" onclick="checkAnswer(this)">D - ${question.d}</button>
      </ul>`   
    return html
  }

// if questions.

/**  
 *  This will show the user their total score out of the 
 * questions asked
*/
// Results()