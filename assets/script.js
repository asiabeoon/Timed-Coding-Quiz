// var startButton = document.getElementsByClassName("start")[0]

// var questionOne = document.getElementsByClassName("question1")[0]
// var questionTwo = document.getElementsByClassName("question2")[0]
// var questionThree =document.getElementsByClassName("question3")[0]
// var questionFour=document.getElementsByClassName("question4")[0]

// <button id="start-btn" onclick="startFunction()">Start</button> connect start to start of quiz

// document.getElementById("start-btn").onclick = function() {;


// // Add an event listener to the start button
// startButton.addEventListener("click", () => {
// 	// Hide the start button
// 	startButton.classList.add("container");
	
// 	// Show the quiz div
// 	quizData.classList.remove("container");
	
// 	// Load the first question
// 	showQuestion(0);
// });



const quizData = [
    {
		question: 'Which property is used to change the background color?',
		options: ['background-color', 'bgcolor', 'color', 'backgroundcolor'],
		answer: 'background-color'
	},
	{
		question: 'Inside which HTML element do we put the JavaScript?',
		options: ['<js>>', '<scripting>', '<javascript>', '<script>'],
		answer: '<script>'
	},
    {
		question: 'Choose the correct HTML element for the largest heading:',
		options: ['<heading>', '<h6>', '<h1>', '<head>'],
		answer: '<h1>'
	},
	{
		question: 'How do you create a function in JavaScript?',
		options: ['function:myFunction()', 'function myFunction', 'function= = myFunction()', 'function:myFunction;'],
		answer: 'function myFunction'
	},
    {
		question: 'How can you make a numbered list?',
		options: ['<ul>', '<list>', '<ol>', '<dl>'],
		answer: '<ol>'
	},
	{
		question: 'How do you call a function named "myFunction"?',
		options: ['myFunction()', 'call myFunction()', 'consolelog myFunction', 'call function myFunction'],
		answer: 'myFunction()'
	},
    {
		question: 'Which property is used to change the font of an element?',
		options: ['font-weight', 'font', 'font-style', 'font-family'],
		answer: 'font-family'
	}

];
// Get the start button element
const startButton = document.getElementById("start-btn");

// Get the quiz container element
const quizContainer = document.querySelector('.container');

// Get the question and options elements
const questionElement = document.getElementById('question');
const optionButtons = document.getElementById('options').querySelectorAll('button');

const timerElement = document.getElementById('timer');
const submitButton = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let countdown;

function startQuiz() {
	showQuestion();
	startTimer();
}

function showQuestion() {
	const question = quizData[currentQuestion];
	questionElement.textContent = question.question;
	optionButtons.forEach((button, index) => {
		button.textContent = question.options[index];
		button.addEventListener('click', selectOption);
	});
}

function selectOption(event) {
	const selectedButton = event.target;
	const answer = quizData[currentQuestion].answer;
	if (selectedButton.textContent === answer) {
		score++;
	}
	currentQuestion++;
	if (currentQuestion >= quizData.length) {
		endQuiz();
	} else {
		showQuestion();
	}
}

function startTimer() {
	timerElement.textContent = timeLeft;
	countdown = setInterval(() => {
		timeLeft--;
		timerElement.textContent = timeLeft;
		if (timeLeft === 0) {
			endQuiz();
		}
	}, 1000);
}

function endQuiz() {
	clearInterval(countdown);
	quizContainer.innerHTML = `
		<h2>You scored ${score} out of ${quizData.length}!</h2>
		<button onclick="location.reload()">Try again</button>
	`;
}

submitButton.addEventListener('click', endQuiz);

startQuiz();

