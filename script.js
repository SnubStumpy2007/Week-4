// ideas
// https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
// https://github.com/WebDevSimplified/JavaScript-Quiz-App
// https://stackoverflow.com/questions/66488667/javascript-how-do-i-save-the-score-and-initials-once-the-page-is-refreshed-and

// define a constant object called questions.
// This object contains various questions and answers in the form of arrays.
// Arrays can even be housed in objects.
// Arrays can have other arrays nested in them as elements.
const questions = [
    {
    question: "What type of variable cannot be changed later in the code?",
    option: ['const', 'let', 'var', 'double', 'string'],
    answer: 'const' 
    },
    {
    question: "What is an array?",
    option: ['Assigns a value to a variable', 'A power grid', 'A variable that changes at the end of the program', 'A variable that holds many properties', 'A variable that holds more than one value.'],
    answer: 'A variable that holds more than one value.' 
    },
    {
    question: "What is an object?",
    option: ['Assigns a value to a variable', 'A power grid', 'A variable that changes at the end of the program', 'A variable that holds many properties', 'A variable that holds more than one value.'],
    answer: 'A variable that holds many properties.' 
    },
    {
    question: "What is a method?",
    option: ['Method and Red, a tv show from the mid-2000s', 'A power grid', 'A shorter syntax for defining a function property in the initalizer', 'A variable that holds many properties', 'A string of text.'],
    answer: 'A shorter syntax for defining a function property in the initalizer.' 
    },
    {
    question: "What is a function?",
    option: ['An exercise at the gym', 'A block of code designed to perform a task', 'Creates a health bar in a video game', 'A variable that can be changed later in the code', 'A variable that holds more than one value.'],
    answer: 'A block of code designed to perform a task.' 
    }
]


// variables definining initial variables.
// Current question (First question), timer, and score starting at 0
// are the first values.
// Use let as this allows these variables to change over the course of the program
// do these at the top of the program
let currentQuestionIndex = 0;
let timer = 60;
let score = 0;
let timerInterval;

// getElementByIds
// provides access to DOM elements to manipulate them in the HTML
// ID's are done with spans as well.
// Text will be displayed on the page via JavaScript
// El means element.  Parent, child elements
const questionEl = document.getElementById('questions');
const optionsEl = document.getElementById('options');
const startButton = document.getElementById('startButton');
const submitButton = document.getElementById('submitButton');
const timeEL = document.getElementById('timer');
const scoreEl = document.getElementById('score');


// Adds an event listener for the start quiz button.
// Once the Start Quiz button is pressed, then start the quiz
// Always use a document.getElementById for an event listener
document.getElementById('startButton').addEventListener('click', startQuiz);

// Function to start the quiz.  
// Once the start button is pressed, display for that 
// is set to none, then questions and timer functions are called in the function
// This is a DOM function
// This sets the display property to 'none', and the display style to 'block"
// https://www.w3schools.com/jsref/prop_style_display.asp
function startQuiz() {
   document.getElementById('startButton').style.display = 'none';
   document.getElementById('questions').style.display = 'block';
   showQuestions();
   startTime();
}

// function to show questions
// pulls from the questions object, then pulls from the options array
function showQuestions() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML= '';

    for (let i = 0; i < currentQuestion.option.length; i++) {
        const option = document.createElement('button');
        option.textContent = currentQuestion.option[i];
        option.addEventListener('click', handleOptionClick);
        optionsEl.appendChild(option);
    }
}

// function for click options
function handleOptionClick(event) {
    const selectedOption = event.target;
    const selectedAnswer = selectedOption.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }
    
    selectedOption.classList.add('selected');

    const submitButton = document.getElementById('submitButton');
    if (!submitButton) {
    const newSubmitButton = document.createElement('button');
    newSubmitButton.textContent = 'Submit';
    newSubmitButton.id = 'submitButton';
    newSubmitButton.addEventListener('click', handleNextQuestion);    
    optionsEl.appendChild(newSubmitButton);
    }

}

// extra function for pulling next questions from the questions object
function handleNextQuestion() {
    currentQuestionIndex++;
    const selectedOption = document.querySelector('.selected');
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }

    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    if (currentQuestionIndex < questions.length) {
        showQuestions(); 
        } else {
            clearInterval(timerInterval);
            endQuiz();
        }
    }


function startTime() {
    const timerInterval = setInterval(() => {
        timer--;
        timeEL.textContent = timer;

        if (timer <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// inspiration https://stackoverflow.com/questions/66488667/javascript-how-do-i-save-the-score-and-initials-once-the-page-is-refreshed-and
function endQuiz() {
    const quizSpace = document.getElementsByClassName('quizSpace')[0];
    quizSpace.textContent = `Quiz is over. Your score is ${score}/${questions.length}`;
    
    const initialsInput = document.createElement('input');  // creates an input element in the JavaScript file
    initialsInput.setAttribute('type', 'text');  // sets the input type to text
    initialsInput.setAttribute('placeholder', 'Enter your initials'); // sets placeholder text
    initialsInput.id = 'initialsInput';  // sets the id of this input form to initialsInput

    // save button code
    const saveButton = document.createElement('button');  // creates the button elements
    saveButton.textContent = 'Submit';  // assigns text to the button.  In this case, submit
    saveButton.id = 'saveButton';  // Assigns an id to the button

    // apphends elements
    quizSpace.appendChild(initialsInput);
    quizSpace.appendChild(saveButton);

    // function for the save button
    saveButton.addEventListener('click', () => {
        const initials = initialsInput.value.trim();
        if (initials !=='') {
            const quizResult = {
                initials: initials,
                score: score  // quizResult object
            };

            // Setup the LocalStoreage element of storing the score and initials of the player
            let quizResults = JSON.parse(localStorage.getItem('quizResults')) || []; // retrieves a string from the localStorage, the parses the number with JSON.parse.  
            quizResults.push(quizResult); // pushes the quiz result into the quizResult object above
            localStorage.setItem('quizResults', JSON.stringify(quizResults)); // then converts (parse) back into text using stringify, then stores it in localStorage
        }
    })
  }

//document.getElementById('submitButton')
submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('selected');
    const timerInterval = setInterval(timer);

    if (selectedOption) {
        selectedOption.classList.remove('selected');
        submitButton.disable = true;

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestions();
        } else {
            clearInterval(timerInterval);
            endQuiz();
        }
    }
});