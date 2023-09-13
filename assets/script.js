var questionsBank = [
  {
    question:
      "What is the output of the following code? console.log(typeof null);",
    selection: [
      { textA: "A. null", answer: false },
      { textB: "B. undefined", answer: false },
      { textC: "C. object", answer: true },
      { textD: "D. number", answer: false },
    ],
  },

  {
    question: "What is a string in JavaScript?",
    selection: [
      { textA: "A. stored data that can be used later on", answer: false },
      { textB: "B. It runs a block of code until specific conditions are met", answer: false },
      { textC: "C. A a sequence of characters that can include letters, numbers, symbols, and spaces", answer: true },
      { textD: "D. None of the above", answer: false },
    ],
  },

  {
    question: "Why is JavaScript important for web development?",
    selection: [
      { textA: "A. Allows to make dynamic and interactive web pages", answer: true },
      { textB: "B. Helps control the layout, formatting, and appearance of web pages", answer: false },
      { textC: "C. It is the structure of the webpage", answer: false },
      { textD: "D. JavaScript is not important to web development", answer: false },
    ],
  },

  {
    question:
      "Which of the following operators is a strict equal in JavaScript?",
    selection: [
      { textA: "A. ||", answer: false },
      { textB: "B. ==", answer: false },
      { textC: "C. <=", answer: false },
      { textD: "D. ===", answer: true },
    ],
  },

  {
    question: "What is an object in JavaScript?",
    selection: [
      { textA: "A. It's an ordered list of elements xontaining any data type", answer: false },
      { textB: "B. A collection of properties containing primitive data", answer: true },
      { textC: "A reusable piece of code that can be used to perform a specific task", answer: false },
      { textD: "An action or occurrence that happens as a result of user interaction", answer: false },
    ]
  }
];

var timerEl = document.querySelector("#timer")
var ruleEL = document.querySelector("#rule-container")
var startButton = document.querySelector("#start-button")
var questionContainer = document.querySelector("#question-container")
var questionEl = document.querySelector("#question")
var answerEl = document.querySelector(".btn")


startButton.addEventListener('click', startGame)

function countDown() {
    var timeRemaining = 75
    var timeInterval = setInterval(() => {
    
        if(timeRemaining > 1){
            timerEl.textContent = "Remaining Time: " + timeRemaining + " seconds"
            timeRemaining--
        }else if(timeRemaining === 1){
            timerEl.textContent = "Remaining Time: " + timeRemaining + " second"
            timeRemaining--
        }else{
            timerEl.textContent = "Times up!"
            clearInterval(timeInterval)
        }
    }, 1000)
}

function startGame() {
    
 
    ruleEL.classList.add('hide')
    questionContainer.classList.remove('hide')
    countDown()
    
}

function nextQuestion(){
    

}
console.log(questionsBank[0].selection[3].textD)
