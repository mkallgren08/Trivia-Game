

var quesOne = {
		question: "What is piezoelectricty?",
		ans1: "The first electrical effect observed in biological creatures, documented by Italian biologist Vincente Piezo.",
		ans2: "An electrical discharge that occurs when the mineral piezite is heated.",
		ans3: "An electrical charge that accumulates in certain materials in response to mechanical stress. From the Greek 'piezo' - 'to squeeze'.",
		ans4: "The amount of electricty needed to safely cook a 14-inch classic-crust pizza, or 'piezo' in Urdu.",		
};
var quesOneAns =  quesOne.ans3;

var quesTwo = {
		question: "What is the average flight speed velocity of an unladen swallow?",
		ans1: "A duck",
		ans2: "The Knights who now say 'Eeki ekki poing zhong z'whup!'",
		ans3: "A parrot",
		ans4: "African or European?",		
};
var quesTwoAns =  quesTwo.ans4;

var quesThree = {
		question: "Which of the following is a non-Newtonian liquid?",
		ans1: "Molten gold",
		ans2: "Ketchup",
		ans3: "Salt water",
		ans4: "Bourbon",		
};
var quesThreeAns =  quesThree.ans2;

var quesFour = {
		question: "Which naturally occuring (i.e. not manufactured) element has the highest melting point?",
		ans1: "Tungsten",
		ans2: "Astatine",
		ans3: "Titanium",
		ans4: "Uranium",		
};
var quesFourAns =  quesFour.ans1;

var quesFive = {
		question: "Which of these animals can hit thin bulletproof glass hard enough to shatter it?",
		ans1: "Pistol shrimp",
		ans2: "Shard-nose viper",
		ans3: "Mantis shrimp",
		ans4: "Snapping turtle",		
};
var quesFiveAns =  quesFive.ans3;

var quesSix = {
		question: "What is the tallest mountain?",
		ans1: "Denali",
		ans2: "Olympus Mons",
		ans3: "K2",
		ans4: "Mt. Everest",		
};
var quesSixAns =  quesSix.ans2;

var quesSeven = {
		question: "What is a superconductor?",
		ans1: "A fantastic leader of a music ensemble.",
		ans2: "Ketchup",
		ans3: "Salt water",
		ans4: "Bourbon",		
};
var quesSevenAns =  quesSeven.ans2;

var quesEight = {
		question: "How old was Sir Isaac Newton when  Principia Mathematica - the work that outlined the fundamentals of his new math known as calculus - was published?",
		ans1: "38",
		ans2: "41",
		ans3: "33",
		ans4: "24",		
};
var quesEightAns =  quesEight.ans4;

var quesNine = {
		question: "Which of the following is a non-Newtonian liquids?",
		ans1: "Molten gold",
		ans2: "Ketchup",
		ans3: "Salt water",
		ans4: "Bourbon",		
};
var quesNineAns =  quesNine.ans2;

var quesTen = {
		question: "Which of the following is a non-Newtonian liquids?",
		ans1: "Molten gold",
		ans2: "Ketchup",
		ans3: "Salt water",
		ans4: "Bourbon",		
};
var quesTenAns =  quesTen.ans2;

var questionArr = [quesOne, quesTwo, quesThree, quesFour, quesFive, 
				   quesSix, quesSeven, quesEight, quesNine, quesTen]
var answerArr = [quesOneAns, quesTwoAns, quesThreeAns, quesFourAns, quesFiveAns, 
				 quesSixAns, quesSevenAns, quesEightAns, quesNineAns, quesTenAns]

var index = ""
var indexOrder = []
var correct = 0
var total = questionArr.length

$(document).ready(function() {
	function QuesandAnsCheck(array1, array2){
		for (var i = 0; i <array1.length; i++ ){
			console.log(array1[i].question);
			console.log(array2[i]);
		}
	} 
	// Create a timer function that will count down from 15 seconds - see interval-unsolved.html

	//Create a timer reset function

	// Create a function to display all the questions in a certain order to be invoked on "start" button click:

		// - use a for-loop, where var i = the indexes of QuestionArr
				// - show the "#main-body" row
				// - run timerreset function to set timer to 15 sec
				// - display questionArr[i].question to the question-box
				// - display the 4 answers to their respective answer buttons using questionArr[i].ans1, .ans2, etc.)
				// - set a half-second delay and then run the timercountdownfunction
				// - set a .click(function(){}) to hide the question row and display the answer row
				// 		- include a userGuess = $("this").attr("id")
				// 		- if (questionArr[i].userGuess = answerArr[i]){
				//			correct++;
				// 		}
				// 	- if (time-left === 0){
				//		hide the question row, show the answer row
				// 		}
				// When answer row is shown, set 10 second timer
				//  to include in answer row:
				//   - the correct answer to the answer
				//   - write the correct score into the current score div

				// The function SHOULD loop after the 10 secs....




	// QuesandAnsCheck(questionArr, answerArr);
	function shuffleArray(array_to_shuffle){
			indexOrder = Collections.shuffle(Arrays.asList(array_to_shuffle));
			return indexOrder;
	}

	console.log(questionArr[0].question);

	shuffleArray(questionArr);

});

//--------------------------------------------------------------------------------------------------
	// function setOrder(questionArrays){
	// 	for (var i  = 0; i < questionArrays.length; i++){
	// 	}
	// 	var currentPick

	// }