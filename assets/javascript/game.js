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
		ans2: "Any material whose electrical resistance is less than a saturated saltwater solution at 20C",
		ans3: "A material that expels magnetic fields",
		ans4: "A metal whose electrical conductivity is less than that of pure copper",		
};
var quesSevenAns =  quesSeven.ans3;

var quesEight = {
		question: "How old was Sir Isaac Newton when  Principia Mathematica - the work that outlined the fundamentals of his new math known as calculus - was published?",
		ans1: "38",
		ans2: "41",
		ans3: "33",
		ans4: "24",		
};
var quesEightAns =  quesEight.ans4;

var quesNine = {
		question: "What is the maximum recorded G-load (acceleration) that the human body has survived?",
		ans1: "~10 Gs",
		ans2: "~60 Gs",
		ans3: "~15 Gs",
		ans4: "~40 Gs",		
};
var quesNineAns =  quesNine.ans4;

var quesTen = {
		question: "What sports did Dr. Neil deGrasse Tyson participate while studying physics at Harvard?",
		ans1: "Crew",
		ans2: "Wrestling",
		ans3: "Dance",
		ans4: "All of those",		
};
var quesTenAns =  quesTen.ans4;

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
var time = 20;
var readAnswer = false;
var userGuess = "";
var j
var ansKey = ["ans3", "ans4", "ans2", "ans1", "ans3", "ans2", "ans3", "ans4", "ans4", "ans4"]
var questionCount = 0;

//FUNCTIONS
//----------------------------------------------------------------------------------------
	
function run() {
	  $("#questions").show(300);
	  questionCount++;
	  $(".question-number").html(questionCount)
	  $(".total-correct").html(correct);
	  $(".total-questions").html(questionArr.length);
	  $("#question-box").html(questionArr[shuffledQuestionIndexes[j]].question)
	  $("#answer1").html(questionArr[shuffledQuestionIndexes[j]].ans1)
	  $("#answer2").html(questionArr[shuffledQuestionIndexes[j]].ans2)
	  $("#answer3").html(questionArr[shuffledQuestionIndexes[j]].ans3)
	  $("#answer4").html(questionArr[shuffledQuestionIndexes[j]].ans4)
      intervalId = setInterval(decrement, 1000);
    }

function decrement() {
      time--;
      $("#timer").html(time);
      console.log(time);

      if (time === 0 || userGuess !== "") {
         $("#timer").html(time);
        pause();
        $("#answers").show();
        //displayAns();
        setTimeout(displayAns, 500);
      }
    }

function pause() {

    clearInterval(intervalId);
}

function reset() {
    time = 20
    $("#timer").html(time);
    userGuess = ""
    console.log("User Guess: " + userGuess)
    $("#answers").hide(900)
    }

    // var j has to be global so the logArray function can increase it's value and NOT be overwritten
    var j = 0

function displayAns(){
		$("#questions").hide(250)
		$("#total-correct").html(correct);
		$("#total-questions").html(questionArr.length);
        var answerText = answerArr[shuffledQuestionIndexes[j]];
        if (ansKey[shuffledQuestionIndexes[j]] === userGuess){
        	console.log("Correct!")
        	correct++;
        	$(".total-correct").html(correct);
        	$("#rightorwrong").html("<h2>Correct!</h2>");
        } else {
        	$("#rightorwrong").html("<h2>I'm sorry, that is incorrect.</h2>")
        }
        console.log("Answer: " + answerText)
        $("#answer-box").html(answerText)
        if (j < questionArr.length){
          j++;
          console.log("j=" + j)
        }
       	setTimeout(reset, 3000);
        if (j < questionArr.length){
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
		$("#start-button").hide()
		shuffle(shuffledQuestionIndexes);
		console.log(shuffledQuestionIndexes);
		run();
	});


});

//--------------------------------------------------------------------------------------------------
	// function setOrder(questionArrays){
	// 	for (var i  = 0; i < questionArrays.length; i++){
	// 	}
	// 	var currentPick

	// }