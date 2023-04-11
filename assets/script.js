
var quizData = [
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
var startButton = document.querySelector("#start");

// Get the quiz container element
var quizContainer = document.querySelector('.container');

// Get the question and options elements
var questionElement = document.getElementById('question');
var optionButtons = document.getElementById('options').querySelectorAll('button');

var timerElement = document.getElementById('timer');
var submitButton = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let countdown;

// start-btn.addEventListener ("click",startQuiz)
// startQuiz();


function startQuiz() {
	showQuestion();
	startTimer();
}

function showQuestion() {
	var question = quizData[currentQuestion];
	questionElement.textContent = question.question;
	optionButtons.forEach((button, index) => {
		button.textContent = question.options[index];
		button.addEventListener('click', selectOption);
	});
}


function selectOption(event) {
	var selectedButton = event.target;
	var answer = quizData[currentQuestion].answer;
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
		<h2>All done!</h2> 
		<p> Your final score is
		${score} out of ${quizData.length}!</h2>
		
		<div>
		<button onclick="location.reload()">Go Back</button>
		
		</div>
	`;
}

// var initialsInput = document.querySelector("#initials");

// 		enterInitials.addEventListener("click", function(event) {
// 			event.preventDefault();

// 		var user = {
// 				initials: initialsInput.value.trim(),
// 			  };

// 			  localStorage.setItem("user", JSON.stringify(user));

// 			});

submitButton.addEventListener('click', endQuiz);

startQuiz();

