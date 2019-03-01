// wire frame
// header & body
// create variables for correct/wrong answers
// a timer to run down through the questionare
// create a multiple choice questions and answer array/object
// show complition of quiz (correct/wrong answers) 
 
// created a timer to countdown from 10 seconds
var timeleft = 10;
//my possition in array
var currentquestion = 0;
//collect answers input 
var correctanswers = 0;
var wronganswers = 0;
var timeTicker;
// quiz array question/answers
var myQs = [
    {
        question: "Where does Lionel Messi play?",
        answers: {a: "Real Madrid", b: "Barcelona",c: "Bayern Munich",d: "AC Milan"},
        rightAns: "b"
    },
    {
        question: "Which team has won the competition the most?",
        answers: {a: "Liverpool", b: "Barcelona",c: "Bayern Munich",d: "Real Madrid"},
        rightAns: "d"
    },
    {
        question: "Where does Cristiano Ronaldo play?",
        answers: {a: "Real Madrid", b: "Inter Milan",c: "Juventus",d: "AC Milan"},
        rightAns: "c"
    },
    {
        question: "The fastest goal scored in the Champions League was by Bayern Munich’s Roy Makkay versus Real Madrid in 2007. How fast did he score?",
        answers: {a: "9.45 secs", b: "9.22 secs",c: "10.12 secs",d: "8.15 secs"},
        rightAns: "c"
    },
    {
        question: "In 2006 Arsenal produced the best defensive effort in the history of the UEFA Champions League, how many games they go without conceding a goal?",
        answers: {a: "10", b: "9",c: "11",d: "8"},
        rightAns: "a"
    },
    {
        question: "______ has an unusual feat of having won the UEFA Champions League more often than they have won their domestic league.",
        answers: {a: "Nottingham Forest", b: "FC Porto",c: "Celtic",d: "AC Milan"},
        rightAns: "a"
    }];
// function starts game/ counter
function clockCountDown() {
     // start button hides
     $("#startbtn").hide();   
     // next button shows    
     $("#nextbtn").removeAttr('hidden');
     //quiz questions/ answers shows 
     $("#quiz").removeAttr('hidden');
    //function to start interval timer to repeat 
    timeTicker = setInterval(function () {
        //shows counter time on html
        $("#timeRR").text("Seconds Remaining: " + timeleft);
        //time decreses by 1 
        timeleft -= 1;
        // if there's no more time => goes next question
        if (timeleft <= -1) {
            nextquestion(); 
        }
        // interval time of 10 seconds decresing by 1 second
    }, 1000);
}
//function restarts questions timer or ends quiz
function restartTimeorEndQuiz(){
    // checking to see if we're on the last question, if so end game & hide questions
    if(myQs.length == currentquestion)
    {
        $("#timeRR").text("Time's up");
        showResults();
        clearInterval(timeTicker);
        $("#quiz").hide();
    }else{
        //if myQs is not at last questions goes => to next guestion
        setQuestion(currentquestion);
        timeleft = 10;
    }
}
// function goes to next question,checks answer
function nextquestion(){
    checkAnswers();
    //goes to next possition in myQs array 
    currentquestion++;
    restartTimeorEndQuiz();
}
//function shows result of quiz
function showResults(){
    $("#correctAns").text("You Got " + correctanswers + " Correct ");
    $("#wrongAns").text("You Got " + wronganswers + " Wrong " ); 
}
function setQuestion(currentquestion){
// shows the quiz to html
    $(".questS").text(myQs[currentquestion].question);
    $(".ans1").text(myQs[currentquestion].answers["a"]);
    $(".ans2").text(myQs[currentquestion].answers["b"]);
    $(".ans3").text(myQs[currentquestion].answers["c"]);
    $(".ans4").text(myQs[currentquestion].answers["d"]); 
    //clears all check boxes from previous entry 
    $(".form-check-input").prop('checked', false);  
}

// function to check radio buttons input
function checkAnswers() {
    //Get value from  check boxes are checked
   var answer = $(".form-check").children("input:checked").val();
   //if statement to check that its not Undefined (not empty) &
   //checked box equals answer
   if(answer != undefined && answer == myQs[currentquestion].rightAns)
   {
    // if right add to correct var
    correctanswers++;
   }else{
    //if wrong add to wrong var
    wronganswers++;
   }
}
//calling function for first time starting at 0
setQuestion(currentquestion);

function restartBTN(){
    currentquestion = 0;
    $("#startbtn").show();
}




