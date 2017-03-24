trivia = function() {
    start();
    trivia.userChoice = null;
    trivia.questions = [{
        question: "what is Judge Bao known for?",
        choices: [" His rocking hair ", " Sense of justice", " Corruption", " Nobility"],
        correct: 1
    }, {
        question: "Who is Lv Bu's, ancient warrior from the Romance of the Three Kingdom, adopted father?",
        choices: [" Guan Yu ", " Zhang Fei", " Dong Zhuo", " Diao Chan"],
        correct: 2

    }, {
        question: "Where does Judge Bao live?",
        choices: [" Huang Shan", " Hu Bei", " Kai Feng", " Qing Dao"],
        correct: 2

    }, {
        question: "What dynasty did Judge Bao live in?",
        choices: [" Tang", " Song", " Qing", " Qin"],
        correct: 1

    }, {
        question: "What is the Monkey King's name?",
        choices: [" Sun WuKong"," Sun ZhuBa "," Zhang Fei"," PuSa"],
        correct: 0

    }, {
        question: "What power does the monk hold over the Monkey King?",
        choices: [" Giving him a stomach ache ", " Taking away his powers", " Giving him a headache", " Freezing him"],
        correct: 2

    }, {
        question: "What level of hell was Liu JinChan setenced to in Zha PanGuan?",
        choices: [" The third ", "The sixth ", "The fifth ", " The first"],
        correct: 2

    }, {
        question: "What color embodies the warrior in Beijing Opera costumes?",
        choices: [" Red", " Green", " Purple", " Pink"],
        correct: 3
    }];

    trivia.answers = {
    correct: 0,
    incorrect: 0,
    };


for (var key in trivia.questions[0].question) {
  

$("#questionSpace").append('<p>'+trivia.questions[key].question+'</p>');
var string = '<form class="questionAccuracy" action ="">'
for (i=0; i<trivia.questions[key].choices.length; i++) {
    string+='<input type="radio" name="questions" value="">' + trivia.questions[key].choices[i] + '<br>';

}
string+= '</form>';
$("#questionSpace").append(string);

}; //for In loop closure
 

    if (trivia.userChoice === trivia.questions.correct){
       trivia.answers.correct++;
        $("#correct").html("Correct!");
    }
    else if (trivia.userChoice !== trivia.questions.correct)
         trivia.answers.incorrect++
         $("#incorrect").html("Incorrect!");

};//END BRACKET
        var time = 30;

        function start() {
        // Clear the button alert's timeout.
      intervalId = setInterval(count, 1000);
    } 

     function count() {
    time--;
    var currentTime = timeConverter(time);
    $("#timer").html(currentTime);
    if (time === 0){
        clearInterval(intervalId);
        $("#questionSpace").hide();
    }
  }

   function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  };
  function evaluate(){

  }