var questionsBank = [
  {
    question:
      "What is the output of the following code? console.log(typeof null);",
    selection: [
      { choice: "A. null", answer: false },
      { choice: "B. undefined", answer: false },
      { choice: "C. object", answer: true },
      { choice: "D. number", answer: false },
    ],
  },

  {
    question: "What is a string in JavaScript?",
    selection: [
      { choice: "A. stored data that can be used later on", answer: false },
      {
        choice: "B. It runs a block of code until specific conditions are met",
        answer: false,
      },
      {
        choice:
          "C. A sequence of characters that can include letters, numbers, symbols, and spaces",
        answer: true,
      },
      { choice: "D. None of the above", answer: false },
    ],
  },

  {
    question: "Why is JavaScript important for web development?",
    selection: [
      {
        choice: "A. Allows to make dynamic and interactive web pages",
        answer: true,
      },
      {
        choice:
          "B. Helps control the layout, formatting, and appearance of web pages",
        answer: false,
      },
      { choice: "C. It is the structure of the webpage", answer: false },
      {
        choice: "D. JavaScript is not important to web development",
        answer: false,
      },
    ],
  },

  {
    question:
      "Which of the following operators is a strict equal in JavaScript?",
    selection: [
      { choice: "A. ||", answer: false },
      { choice: "B. ==", answer: false },
      { choice: "C. <=", answer: false },
      { choice: "D. ===", answer: true },
    ],
  },

  {
    question: "What is an object in JavaScript?",
    selection: [
      {
        choice: "A. It's an ordered list of elements containing any data type",
        answer: false,
      },
      {
        choice: "B. A collection of properties containing primitive data",
        answer: true,
      },
      {
        choice:
          "C. A reusable piece of code that can be used to perform a specific task",
        answer: false,
      },
      {
        choice:
          "D. An action or occurrence that happens as a result of user interaction",
        answer: false,
      },
    ],
  },
];

var timerEl = document.querySelector("#timer");
var ruleEL = document.querySelector("#rule-container");
var startButton = document.querySelector("#start-button");

var highScoreEl = document.querySelector("#score-button");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answer-btn");
var nextEl = document.querySelector("#next-btn");

var selectEl = document.querySelector(".select");
var contain = document.querySelector(".container");
var scoreCard = document.querySelector("#score-card")

var inputEl = document.querySelector("#input-initial");
var playEl = document.querySelector("#play-again");
var index = 0;
var timeRemaining = 75;
var timeInterval = null;
var gameComplete = false;






function countDown() {
  timeInterval = setInterval(() => {
    if (timeRemaining > 1) {
      timerEl.textContent = "Remaining Time: " + timeRemaining + " seconds";
      timeRemaining--;
    } else if (timeRemaining === 1) {
      timerEl.textContent = "Remaining Time: " + timeRemaining + " second";
      timeRemaining--;
    } else {
      timerEl.textContent = "Times up!";
      clearInterval(timeInterval);
      score();
    }
  }, 1000);
}

function startGame() {
  ruleEL.classList.add("hide");
  questionContainer.classList.remove("hide");
  selectEl.classList.add("hide");
 
  countDown();
  currentQuestion();
}


function currentQuestion() {
  var selectedQuestion = questionsBank[index];
  var questionNum = index + 1;
  questionEl.textContent = questionNum + ". " + selectedQuestion.question;
  answerEl.textContent = selectedQuestion.selection.choice;
  selectedQuestion.selection.forEach(function (selection) {
    var button = document.createElement("button");
    button.textContent = selection.choice;
    button.classList.add("btn");
    answerEl.appendChild(button);

    if (selection.answer) {
      button.dataset.answer = selection.answer;
    }
    button.addEventListener("click", chosenAnswer);
  });
  
}


function chosenAnswer(event) {
  event.preventDefault();
  var chosenButton = event.target;
  var correct = chosenButton.dataset.answer === "true";

  if (correct) {
    chosenButton.classList.add("correct");
  } else if (!correct) {
    chosenButton.classList.add("incorrect");
    timeRemaining -= 10;
  }
  Array.from(answerEl.children).forEach(function (button) {
    if (button !== chosenButton) {
      button.disabled = true;
    }
     button.disabled = true;
  });
  
}

function score() {
  timerEl.textContent = "Your Score: " + timeRemaining
  nextEl.style.display = "none";
  questionContainer.style.display = "none";
  ruleEL.style.display = "none"
  selectEl.style.display = "none"
  scoreCard.classList.remove("hide")
  clearInterval(timeInterval);
  
  
}

function nextBtn() {
  index++;
  if (index < questionsBank.length) {
    currentQuestion();
  } else {
    score();
  }
}

nextEl.addEventListener("click", function () {
  if (index < questionsBank.length) {
    nextBtn();
  } 
});

var playAgain = document.querySelector('#play-again')
var refreshPage = function() {
  location.reload();

}
playAgain.addEventListener('click', refreshPage)


// the initial list

var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");
var initial = [];

function renderScore() {
  scoreList.innerHTML = "";
  for (var i = 0; i < initial.length; i++) {
    var initials = initial[i];
    var li = document.createElement("li");
    li.textContent = initials.int + "'s " + "Highscore " + initials.score;
    scoreList.appendChild(li);
  }
}


function init() {
  var storedInitial = JSON.parse(localStorage.getItem("initial"));
  if (storedInitial !== null) {
    initial = storedInitial;
  }
  renderScore();
}

function storeScore() {
  localStorage.setItem("initial", JSON.stringify(initial));
  
  localStorage.setItem("score", JSON.stringify(timeRemaining));
  console.log(timeRemaining)
}

scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var text = scoreInput.value.trim();
  if (text === "") {
    alert("please enter name")
    return;
  }
  // timeRemaining = timeRemaining + 1
  var combine = {int:text, score:timeRemaining}
  initial.push(combine);
  scoreInput.value = "";
  storeScore();
  renderScore();
});

scoreList.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    initial.splice(index, 1);
    storeScore();
    renderScore();
  }
});


init()


highScoreEl.addEventListener("click", function(event){
  var element = event.target;
  if (element.matches("button") === true) {

  timerEl.textContent = ""
  nextEl.style.display = "none";
  questionContainer.style.display = "none";
  ruleEL.style.display = "none"
  selectEl.style.display = "none"
  scoreInput.style.display = "none"
  scoreCard.classList.remove("hide")
  }

})


startButton.addEventListener("click", startGame);

