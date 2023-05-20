// ideas
// https://www.codingnepalweb.com/quiz-app-with-timer-javascript/

// define a constant object called questions.
// This object contains various questions and answers in the form of arrays.
// Arrays can even be housed in objects.
// Arrays can have other arrays nested in them as elements.
const questions = [
    {
    question: "What type of variable cannot be changed later in the code?",
    options: ['const', 'let', 'var', 'double', 'string'],
    answer: 'const' 
    },
    {
    question: "What is an array?",
    options: ['Assigns a value to a variable', 'A power grid', 'A variable that changes at the end of the program', 'A variable that holds many properties', 'A variable that holds more than one value.'],
    answer: 'A variable that holds more than one value.' 
    },
    {
    question: "What is an object?",
    options: ['Assigns a value to a variable', 'A power grid', 'A variable that changes at the end of the program', 'A variable that holds many properties', 'A variable that holds more than one value.'],
    answer: 'A variable that holds many properties.' 
    },
    {
    question: "What is a method?",
    options: ['Method and Red, a tv show from the mid-2000s', 'A power grid', 'A shorter syntax for defining a function property in the initalizer', 'A variable that holds many properties', 'A string of text.'],
    answer: 'A shorter syntax for defining a function property in the initalizer.' 
    },
    {
    question: "What is a function?",
    options: ['An exercise at the gym', 'A block of code designed to perform a task', 'Creates a health bar in a video game', 'A variable that can be changed later in the code', 'A variable that holds more than one value.'],
    answer: 'A block of code designed to perform a task.' 
    }
]


// variables definining initial variables.
// Current question (First question), timer, and score starting at 0
// are the first values.
// Use let as this allows these variables to change over the course of the program
// do these at the top of the program
let currentQuestion = 0;
let timer = 15;
let score = 0;

// getElementByIds
// provides access to DOM elements to manipulate them in the HTML
// ID's are done with spans as well.
// Text will be displayed on the page via JavaScript
// El means element.  Parent, child elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const startButton = document.getElementById('start-quiz');
const submitButton = document.getElementById('submit');
const timeEL = document.getElementById('timer');
const scoreEl = document.getElementById('score');

// Adds an event listener for the start quiz button.
// Once the Start Quiz button is pressed, then start the quiz
startButton.addEventListener('click', startQuiz);