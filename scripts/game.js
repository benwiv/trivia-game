
const startGame = $('#start-btn').on('click',function(){
  const qObject = {
    qOne: {
      question: 'To keep Jack Nicholson in an right agitated mood, he was only fed this food for two weeks that he hates...',
      answer: ['spaghetti','cheese sandwiches','hot dogs','tuna salad'],
      correctAnswers: 1,
      questionGIF: ''
    },
    qTwo: {
      question: 'Danny has an imaginary friend that lives in his mouth who tells him secrets about the world around him...what name does Danny give this friend?',
      answers: ['Charles','Bud','Tony','Chip'],
      correctAnswer: 2,
      questionGIF: ''
    },
    qThree: {
      question: '',
      answers: ['','','',''],
      correctAnswer: '',
      questionGIF: ''
    },
    qFour: {
      question: '',
      answers: ['','','',''],
      correctAnswer: '',
      questionGIF: ''
    },
    qFive: {
      question: '',
      answers: ['','','',''],
      correctAnswer: '',
      questionGIF: ''
    }
  };

  const qIndexArray = Object.keys(qObject);
  let currentKey = qObject[gameRound];
  let currentObject = qObject[currentKey];
  console.log(currentQ);

  let gameRound = 0;
  let questionsCorrect = 0;
  let questionsWrong = 0;


  //  remove the game description text and element + start button to allow for questions to 
  //  be appended with different formatting and attributes
  $('#hotel-key-div').fadeOut( "slow" );
  $('#game-content-1').fadeOut( "slow" );
  
  $('#game-content-2').text(currentQ.question);

  // displayQuestion(gameRound);
});
  
let displayQuestion = function(indexRound){

  
  let questionObject = qArray[indexRound];
  $('#start-btn').remove();
  let timerSpan =  $('<span id="timer">')
  $('#game-content-2').text(timerSpan);  
  $('#question-text').text('test test test');
  // questionObject.question 
  
  //  TIMER: 30 second timer that starts with question being displayed
  var counter = setInterval(timer, 1000);
  let count = 30;
  function timer(){
    count-=1;
    if (count <= -1){
       clearInterval(counter);
       alert('time is up!');
      //  showAnswer();
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
  




  

