
var quizData = [
    {
		question: 'Which property is used to change the background color?',
		qoptions: ['background-color', 'bgcolor', 'color', 'backgroundcolor'],
		answer: 'background-color'
	},
	{
		question: 'Inside which HTML element do we put the JavaScript?',
		qoptions: ['<js>>', '<scripting>', '<javascript>', '<script>'],
		answer: '<script>'
	},
    {
		question: 'Choose the correct HTML element for the largest heading:',
		qoptions: ['<heading>', '<h6>', '<h1>', '<head>'],
		answer: '<h1>'
	},
	{
		question: 'How do you create a function in JavaScript?',
		qoptions: ['function:myFunction()', 'function myFunction', 'function= = myFunction()', 'function:myFunction;'],
		answer: 'function myFunction'
	},
    {
		question: 'How can you make a numbered list?',
		qoptions: ['<ul>', '<list>', '<ol>', '<dl>'],
		answer: '<ol>'
	},
	{
		question: 'How do you call a function named "myFunction"?',
		qoptions: ['myFunction()', 'call myFunction()', 'consolelog myFunction', 'call function myFunction'],
		answer: 'myFunction()'
	},
    {
		question: 'Which property is used to change the font of an element?',
		qoptions: ['font-weight', 'font', 'font-style', 'font-family'],
		answer: 'font-family'
	}

];

// Access opening quiz container
var startContainer = document.querySelector('.start-container');
// Get the start button element
var startButton = document.querySelector("#start-btn");

// Get the quiz container element
var quizContainer = document.querySelector('.quiz-container');

// Get the question and options elements
var questionElement = document.getElementById('question');
var optionButtons = document.getElementById('options').querySelectorAll('button');

// Get the timer and submit elements
var timerElement = document.getElementById('timer');
var submitButton = document.getElementById('submit');

// Variable for the ID Question box div
var questionBox = document.getElementById('question-box');

let currentQuestion = 0;
let score = 0;
let timeLeft =  60;
let countdown;
	

// This function starts the quiz by starting the questions and timer

function startQuiz() {
	startContainer.style.display = 'none'
// to remove the div questions from being hidden once the quiz begins
	questionBox.classList.remove("hidden");
	console.log("I called the start quiz function")
	showQuestion();
	startTimer();
	
}

startButton.addEventListener('click', startQuiz);

// This function shows the questions
function showQuestion() {
	
	var question = quizData[currentQuestion];
	questionElement.textContent = question.question;
	optionButtons.forEach((button, index) => {
		button.textContent = question.qoptions[index];
		button.addEventListener('click', selectOption);
	});
}

// This function presents the 4 option buttons for answers
function selectOption(event) {
	var selectedButton = event.target;
	var answer = quizData[currentQuestion].answer;
	if (selectedButton.textContent === answer) {
		score++;
	} else {
		console.log("wrong")
		console.log(timeLeft)
		reduceTime();
		console.log(timeLeft)
	}

	currentQuestion++;
	if (currentQuestion >= quizData.length) {
		endQuiz();
	} else {
		showQuestion();
	}
}

// This function starts the timer remember the quoted text is what's seen on the page the 
// plus sign the variable timeLeft 
function startTimer() {
	timerElement.textContent = 'Timer ' + timeLeft;
	countdown = setInterval(() => {
		timeLeft--;
		timerElement.textContent = 'Timer ' +  timeLeft;
		if (timeLeft === 0) {
			endQuiz();
		}
	}, 1000);
}

// This function will reduce the time if the answer is wrong
function reduceTime () {

// set timeLeft to be -5
		timeLeft =  timeLeft - 5;
		console.log(timeLeft)
	}


var inputContainer = document.querySelector("#input-group");
var initialsInput = document.querySelector("#initials");


// function that will trigger at the end of the quiz
function endQuiz() {
	quizContainer.style.display = 'none'
	clearInterval(countdown);
	
	inputContainer.innerHTML= "";
	

	addInitialsForm () 
}

// form that shows when function endQuiz() triggers this form is submitted to the High Scores page
function addInitialsForm () {

// Used the example below to reduce score
// document.getElementById("demo").innerHTML = Math.round(2.5);

	// creATE
	var h2 =document.createElement('h2');
	var p =document.createElement('p');
	var button =document.createElement('button')
	var label = document.createElement ('label')
	var input = document.createElement('input')
	// MODIFY
	h2.textContent='All Done!';
	p.textContent=`Your final score is a ${Math.round((score/7)*100)}`;
	button.setAttribute('id', 'submit');
	button.textContent='submit';
	label.setAttribute ('id','label');
	label.textContent ='Enter Initials';
	input.setAttribute ('id','input');
	// APPEND
	inputContainer.appendChild(h2);
	inputContainer.appendChild(p);
	inputContainer.appendChild(button);
	inputContainer.appendChild(label);
	inputContainer.appendChild(input);


}

// Once the submit button is hit the highscores.html page
// Add go back and Clear form buttons 
function submitInitials () {

		// enterInitials.addEventListener("click", function(event) {
		// 	event.preventDefault();

 		var user = {
				initials: initialsInput.value.trim(),
 			  };
			   console.log("user", user)
		  localStorage.setItem("user", JSON.stringify(user));
//   Don't forget to get Item from local storage
// Use hidden and remove for Highscores
// 

		
// }
// submitButton.addEventListener('click', submitInitials);

// startQuiz();

}