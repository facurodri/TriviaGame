// wire frame
// header & body
// create variables for correct/wrong answers
// a timer to run down through the questionare
// create a multiple choice questions and answer array/object
// collect choices picked before time runs out
// show complition of quiz (correct/wrong answers) 
// restart button 

// created a timer to countdown from 10 seconds
var timeleft = 10;
// start button countdown
function clockCountDown() {
    var timeTicker = setInterval(function () {
        $("#timeRR").text("Seconds Remaining: " + timeleft);
        timeleft -= 1;
        if (timeleft <= -1) {
            clearInterval(timeTicker);
            $("#timeRR").text("Time's up");
        }
    }, 1000);
}
//created an array to hold chosen answer
var clickedAns = [

];

// quiz question/answers
var quiz = [
    {
        question1: "Where does Messi play?",
        answer1: ["Real Madrid", "Barcelona", "Bayern Munich", "AC Milan"],
        rightAns: "Barcelona"
    },
    {
        question2: "Who won the last Champions League title?",
        answer2: ["Real Madrid", "Barcelona", "Bayern Munich", "AC Milan"],
        rightAns: "Real Madrid"
    }];

// how it shows up in screen 
$("#questS").text(quiz[0].question1);
$("#ans1").text(quiz[0].answer1[0]);
$("#ans2").text(quiz[0].answer1[1]);
$("#ans3").text(quiz[0].answer1[2]);
$("#ans4").text(quiz[0].answer1[3]);

// function to check radio buttons input
function checkAnswers(form) {
    if (form.elements[1].checked) {
           console.log("correct"); 
        } else {
            console.log("wrong");
        }

        
    }


