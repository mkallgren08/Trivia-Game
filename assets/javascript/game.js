// QUESTION OBJECTS AND answers
//-----------------------------------------------------

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

var IntervalID = ""

// var timer = {
// 		  reset: function() {
// 		    time = 20;
// 		    $("#timer").html(timer)

// 		  },

// 		  runTimer: function() {
// 		           intervalID = setInterval(timer.decrement, 1000)
// 		      },

		  
// 		  stop: function() {
// 		    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
// 		        clearInterval(IntervalID);
// 		  },

// 		  decrement: function() {
// 			time--;
// 			$("#timer").html(time)
// 			if (time === 0){
// 				$("#answers").show();
// 				$("#answer-box").html(answerArr[shuffledQuestionIndexes[j]]);
// 				while (readAnswer = false){ 
// 					if(questionArr[shuffledQuestionIndexes[j]].userGuess = answerArr[shuffledQuestionIndexes[j]]){
// 						$("#rightorwrong").html("<h2>Correct!</h2>");
// 						correct++;
// 						$("#correct-answer-count").html(correct);
// 						setTimeout(nextQuestion, 5000);
// 					} else {
// 						$("#rightorwrong").html("<h2>I'm sorry, that is incorrect.</h2>")
// 						setTimeout(nextQuestion, 12000);
// 					}
// 				}; 

// 			}; 			

// 		  }
		      
// 		 } // End of timer object

// GENERAL VARIABLES
//-------------------------------------------------------------
var questionArr = [quesOne, quesTwo, quesThree, quesFour, quesFive, 
				   quesSix, quesSeven, quesEight, quesNine, quesTen]

var answerArr = [quesOneAns, quesTwoAns, quesThreeAns, quesFourAns, quesFiveAns, 
				 quesSixAns, quesSevenAns, quesEightAns, quesNineAns, quesTenAns]

var shuffledQuestionIndexes = [0,1,2,3,4,5,6,7,8,9]
var correct = 0;
var total = questionArr.length;
var time = 4;
var readAnswer = false;
var userGuess = "";
var j
var ansKey = ["ans3", "ans4", "ans2", "ans1"]

//FUNCTIONS
//-------------------------------------------------------------
	

	// function QuesandAnsCheck(array1, array2){
	// 	for (var i = 0; i <array1.length; i++ ){
	// 		console.log(array1[i].question);
	// 		console.log(array2[i]);
	// 	}
	// } 
	// Create a timer function that will count down from 15 seconds - see interval-unsolved.html

	//Create a timer reset function

	// Create a function to display all the questions in a certain order to be invoked on "start" button click:

		// - use a for-loop, where var i = the indexes of QuestionArr

	// function runTrivia(){
		// shuffle the index questions
		// - show the "#main-body-questions" row
		// $("#questions").show();
		// //Start the for-loop for the main automation
		// for (j = 0; j < (questionArr.length-1); j++)
		// 	// Set readAnswer = false
		// 	// Populate the question box and the answer buttons
		// 	$("#question-box").html(questionArr[shuffledQuestionIndexes[j]].question);
		// 	console.log(j);
		// 	console.log(shuffledQuestionIndexes[j]);
		// 	console.log(questionArr[shuffledQuestionIndexes[j]]);
		// 	$("#ans1").html(questionArr[shuffledQuestionIndexes[j]].ans1);
		// 	$("#ans2").html(questionArr[shuffledQuestionIndexes[j]].ans2);
		// 	$("#ans3").html(questionArr[shuffledQuestionIndexes[j]].ans3);
		// 	$("#ans4").html(questionArr[shuffledQuestionIndexes[j]].ans4);
		// 	// - run timerreset function to set timer to 15 sec & begin counting down from new time
		// 	timer.reset();
		// 	setTimeout(timer.runTimer, 650)
		// 	// Log the userGuess via button input
		// 	$(".ans-btn").click(function(){
		// 		userGuess = $(this).attr("id")
		// 		console.log(userGuess);
		// 	});
			// if (time === 0){
			// 	$("#answers").show();
			// 	$("#answer-box").html(answerArr[shuffledQuestionIndexes[j]]);
			// 	while (readAnswer = false){ 
			// 		if(questionArr[shuffledQuestionIndexes[j]].userGuess = answerArr[shuffledQuestionIndexes[j]]){
			// 			$("#rightorwrong").html("<h2>Correct!</h2>");
			// 			correct++;
			// 			$("#correct-answer-count").html(correct);
			// 			setTimeout(nextQuestion, 5000);
			// 		} else {
			// 			$("#rightorwrong").html("<h2>I'm sorry, that is incorrect.</h2>")
			// 			setTimeout(nextQuestion, 12000);
			// 		}
			// 	}; 

			// }; 
		// 	$("#answers").hide();
		

		// };
	
function run() {
	  $("#questions").show()
      intervalId = setInterval(decrement, 1000);
    }

function decrement() {
      time--;
      $("#timer").html(time);
      console.log(time);

      if (time === 0 || userGuess !== "") {
         $("#timer").html(time);
        pause();
        $("#answer").show();
        //displayAns();
        setTimeout(displayAns, 500);
      }
    }

function pause() {

    clearInterval(intervalId);
}

function reset() {
    time = 4
    $("#timer").html(time);
    userGuess = ""
    console.log("User Guess: " + userGuess)
    $("#answers").hide(900)
    }

    // var j has to be global so the logArray function can increase it's value and NOT be overwritten
    var j = 0

function displayAns(){
        var answerText = answerArr[shuffledQuestionIndexes[j]];
        if (ansKey[shuffledQuestionIndexes[j]] === userGuess){
        	console.log("Correct!")
        	correct++;
        	$("#correct-answer-count").html(correct);
        	$("#rightorwrong").html("<h2>Correct!</h2>");
        } else {
        	$("#rightorwrong").html("<h2>I'm sorry, that is incorrect.</h2>")
        }
        console.log("Answer: " + answerText)
        $("#answer-box").html(answerText)
        if (j < 4){
          j++;
          console.log("j=" + j)
        }
       	setTimeout(reset, 3000);
        if (j < 4){
          setTimeout(run, 4000);
        }
    }          



// shuffle function from AnnaLisa
function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
		}

// };

function nextQuestion(){
	readAnswer = true;

	};
//EXECUTABLE CODE
//-------------------------------------------------------------

$(document).ready(function() {
	// $("#questions").hide();
	// $("#answers").hide();
	// for (var k = 0; k< questionArr.length; k++){
	// 	console.log("k =" + shuffledQuestionIndexes[k])
	// }
	// console.log(questionArr.length);
	// console.log(quesOne.ans1)
	// console.log(questionArr[shuffledQuestionIndexes[0]].ans1)
	// $("#total-correct").html(correct)
	// $("#total-questions").html(total)


	// $("#start-button").click(function(){
	// 	runTrivia();
	// })
	$("#questions").hide();
	$("#answers").hide();
	$(".ans-btn").click(function(){
		userGuess = $(this).attr("id")
		console.log(userGuess)
		// console.log(questionArr[shuffledQuestionIndexes[j]].userGuess)
		console.log(answerArr[shuffledQuestionIndexes[j]])
	})

	$("#start-button").click(function(){
		run();
	});


});

//--------------------------------------------------------------------------------------------------
	// function setOrder(questionArrays){
	// 	for (var i  = 0; i < questionArrays.length; i++){
	// 	}
	// 	var currentPick

	// }