
// GLOBAL VARIABLES
qArray = [{
    question: 'To keep Jack Nicholson in an right agitated mood, he was only fed this food for two weeks that he hates...',
    answer: ['spaghetti','cheese sandwiches','hot dogs','tuna salad'],
    correctAnswers: 1,
    questionGIF: ''
  },
  {
    question: 'Danny has an imaginary friend that lives in his mouth who tells him secrets about the world around him...what name does Danny give this friend?',
    answers: ['Charles','Bud','Tony','Chip'],
    correctAnswer: 2,
    questionGIF: ''
  },
  {
    question: '',
    answers: ['','','',''],
    correctAnswer: '',
    questionGIF: ''
  },
  {
    question: '',
    answers: ['','','',''],
    correctAnswer: '',
    questionGIF: ''
  },
  {
    question: '',
    answers: ['','','',''],
    correctAnswer: '',
    questionGIF: ''
}];
  
//  GLOBAL VARIABLES
// const questionObject = Object.keys(questions);
let gameRound = 0;
let questionsCorrect = 0;
let questionsWrong = 0;

//  FUNCTIONS
//  function to start game on click of button
const startGame = $('#start-btn').on('click',function(){
  //  remove the game description text and element + start button to allow for questions to 
  //  be appended with different formatting and attributes
  displayQuestion(gameRound);
});
  
let displayQuestion = function(indexRound){

  let questionObject = qArray[indexRound];
  $('#game-content-1').empty();
  $('#start-btn').remove();
  let timerSpan =  $('<span id="timer">')
  $('#game-content-2').append(timerSpan);  
  let newDiv = ('<p id="question-div">');
  $('#question-div').text(questionObject.question);
  $('#game-content-2').append(newDiv); 
  
  //  TIMER: 30 second timer that starts with question being displayed
  var counter = setInterval(timer, 1000);
  let count = 30;
  function timer(){
    count-=1;
    if (count <= -1){
       clearInterval(counter);
       alert('time is up!');
       showAnswer();
    };
    console.log(count);
    $('#timer').html('Come out, come out, wherever you are! Hurry up or Jack will find ya!  :' + count + ' seconds');
  }
  
  gameRound++;
};

  // let showAnswer = function(){

  // };

  // let checkAnswer = function(array){

  // };

  //  FIRST ACTION
  




  

