//storing page elements in variable

var quizBody = document.getElementById("quizBody");
var resultsEl = document.getElementById("results");
var finalScoreEl = document.getElementById("finalScore");
var gameoverEl = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startPage");
var hsContainer = document.getElementById("highscoreContainer");
var hsEl = document.getElementById("highscorePage");
var hsInputName = document.getElementById("initials");
var hsDisplayName = document.getElementById("highscoreInitials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var hsDisplayScore = document.getElementById("highscoreScore");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//global variables

var finalQuestion = questions.length;
var currentQuestion = 0;
var timeLeft = 75;
var timerInterval;
var score = 0;
var correct;

//questions

var questions = [
  {
    question: "What type of galaxy is out Milky Way?",
    choiceA: "Elliptical",
    choiceB: "Spiral",
    choiceC: "Irregular",
    correctAnswer: "b",
  },
  {
    question: "Which of these planets is the largest?",
    choiceA: "Earth",
    choiceB: "Mars",
    choiceC: "Venus",
    correctAnswer: "a",
  },
  {
    question: "What is the ultimate fate of our sun?",
    choiceA: "Red giant",
    choiceB: "White dwarf",
    choiceC: "Black hole",
    correctAnswer: "b",
  },
  {
    question: "How much of the galaxy can you see at night?",
    choiceA: "10%",
    choiceB: "1%",
    choiceC: "0.000003%",
    correctAnswer: "c",
  },
  {
    question: "How many galaxies are there in the observable universe?",
    choiceA: "100 million",
    choiceB: "200 billion",
    choiceC: "1 billion",
    correctAnswer: "b",
  },
  {
    question: "Light in one year travels 9,460,000,000,000 km.",
    choiceA: "True",
    choiceB: "False",
    correctAnswer: "a",
  },
  {
    question: "The Andromeda galaxy is 2,200,000 light years away from us.",
    choiceA: "True",
    choiceB: "False",
    correctAnswer: "a",
  },
  {
    question: "The largest planet in our solar system is?",
    choiceA: "Jupiter",
    choiceB: "Saturn",
    choiceC: "Uranus",
    correctAnswer: "a",
  },
  {
    question: "The coldest planet in our solar system is?",
    choiceA: "Uranus",
    choiceB: "Neptune",
    choiceC: "Venus",
    correctAnswer: "a",
  },
  {
    question: "Who first proposed the universe was expanding?",
    choiceA: "Einstein",
    choiceB: "Kepler",
    choiceC: "Hubbble",
    correctAnswer: "c",
  },
];

function startQuiz(){
    
}