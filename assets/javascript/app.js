// wire frame
// header & body
// create variables for correct/wrong answers
// a timer to run down through the questionare
// create a multiple choice questions and answer array/object
// show complition of quiz (correct/wrong answers) 

// created a timer to countdown from 10 seconds
var timeleft = 15;
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
        answers: ["Real Madrid", "Barcelona", "Bayern Munich", "AC Milan"],
        rightAns: "Barcelona"
    },
    {
        question: "Which team has won the competition the most?",
        answers: ["Liverpool", "Barcelona", "Bayern Munich", "Real Madrid"],
        rightAns: "Real Madrid"
    },
    {
        question: "Where does Cristiano Ronaldo play?",
    answers:["Real Madrid", "Inter Milan", "Juventus", "AC Milan"],
        rightAns: "Juventus"
    },
    {
        question: "The fastest goal scored in the Champions League was by Bayern Munich’s Roy Makkay versus Real Madrid in 2007. How fast did he score?",
        answers: [ "9.45 secs", "9.22 secs","10.12 secs","8.15 secs"],
        rightAns: "10.12 secs"
    },
    {
        question: "In 2006 Arsenal produced the best defensive effort in the history of the UEFA Champions League, how many games they go without conceding a goal?",
        answers: ["10", "9","11","8"],
        rightAns: "10"
    },
    {
        question: "______ has an unusual feat of having won the UEFA Champions League more often than they have won their domestic league.",
        answers: ["Nottingham Forest", "FC Porto","Celtic","AC Milan"],
        rightAns: "Nottingham Forest"
    },
    {
        question: "The competition has been won by how many different clubs",
        answers: ["19", "22","31","28"],
        rightAns: "22"
    },
    {
        question: "Who is the Current All-Time Goal scorer with 126 goals?",
        answers: ["Lionel Messi", "Zlatan Ibrahimovic","Cristiano Ronaldo","Robert Lewandowski"],
        rightAns: "Cristiano Ronaldo"
    },
    {
        question: "Who Currently holds the Most Apperances?",
        answers: ["Iker Casillas", "Ryan Giggs","Cristiano Ronaldo","Paolo Maldini"],
        rightAns: "Iker Casillas"
    },
    {
        question: "Who has won the tournament with Ajax (Netherlands), Real Madrid (Spain) and AC Milan (Italy)?",
        answers: ["David Beckham", "Zlatan Ibrahimovic","Cristiano Ronaldo","Clarence Seedorf"],
        rightAns: "Clarence Seedorf"
    }
];

var modal = document.getElementById('myModalSuccess');
var modal2 = document.getElementById('myModalFailure');
function uploadSuccess() {
    console.log("success modal");
      modal.style.display = "block";
};
function uploadFailure() {
    modal2.style.display = "block";
};
$(".closeBtn").on("click", function(){
    modal.style.display = "none";
    restartTimeorEndQuiz();
    modal2.style.display = "none";
}); 
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
function restartTimeorEndQuiz() {
    // checking to see if we're on the last question, if so end game & hide questions
    if (myQs.length == currentquestion) {
        $("#timeRR").text("Time's up");
        showResults();
        clearInterval(timeTicker);
        $("#quiz").hide();
    } else {
        //if myQs is not at last questions goes => to next guestion
        setQuestion(currentquestion);
        timeleft = 15;
    }
}
// function goes to next question,checks answer
function nextquestion() {
    checkAnswers();
    //goes to next possition in myQs array 
    currentquestion++;
    restartTimeorEndQuiz();
}
//function shows result of quiz
function showResults() {
    $("#correctAns").text("You Got " + correctanswers + " Correct ");
    $("#wrongAns").text("You Got " + wronganswers + " Wrong ");
    $("#giphyClap").removeAttr('hidden');
}
function setQuestion(currentquestion) {
    // shows the quiz to html
    $(".questS").text(myQs[currentquestion].question);

    $(".ans1").text(myQs[currentquestion].answers[0]);
    $(".ans2").text(myQs[currentquestion].answers[1]);
    $(".ans3").text(myQs[currentquestion].answers[2]);
    $(".ans4").text(myQs[currentquestion].answers[3]);
    //clears all check boxes from previous entry 
    $(".form-check-input").prop('checked', false);
}

// function to check radio buttons input
function checkAnswers() {
    //Get value from  check boxes are checked
    var answer = parseInt($(".form-check").children("input:checked").val());
    //if statement to check that its not Undefined (not empty) &
    //checked box equals answer
    if (answer != undefined && myQs[currentquestion].rightAns == myQs[currentquestion].answers[answer]) {
        // if right add to correct var
        correctanswers++;
        uploadSuccess();
        $("#ansCorrect").text(myQs[currentquestion].rightAns);
    } else {
        //if wrong add to wrong var
        wronganswers++;
        uploadFailure();
        $("#ansWrong").text("Your choice of " + myQs[currentquestion].answers[answer] + " was Incorrect");
    }

}
//calling function for first time starting at 0
setQuestion(currentquestion);







