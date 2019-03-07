
const intiateGame = $(document).on('ready',function(){

//  GAME VARIABLES  
  //  OBJECT conataining questions objects
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

  //  GLOBAL GAME VARIABLES
  const qIndexArray = Object.keys(qObject);
  console.log(qIndexArray);
  
  let gameRound = 0;
  let qCorrect = 0;
  let qWrong = 0;

//  GAME FUNCTIONS


  let displayQuestion = function(){
    
    $('#timer').html('Come out, come out, wherever you are! Hurry up or Jack will find ya!  :' + count + ' seconds');

  //  TIMER: 30 second timer that starts with question being displayed
    const counter = setInterval(timer, 1000);
    let count = 30;
    function timer(){
      count-=1;
      if (count <= -1){
         if (clearInterval(counter);
         alert('time is up!');
        //  showAnswer();
      }
      else if (qAnswered === true) {
        clearInterval(counter);

      }
      console.log(count);
    
    let qAnswered = false;  
    
    let currentKey = qObject[gameRound];
    let currentObject = qObject[currentKey];
  
    let questionObject = qObject[gameRound];
    $('#start-btn').remove();
    let timerSpan =  $('<span id="timer">')
    $('#game-content-2').text(timerSpan);  
    $('#question-text').text('test test test');
    // questionObject.question 
    
    
    }
  };

  
//  FUNCTION CALLS AND GAME INTERACTION
  //  remove the game description text and element + start button to allow for questions to 
  //  be appended with different formatting and attributes  
  const startGame = $('#start-btn').on('click',function(){  
    $('#hotel-key-div').fadeOut( "slow" );
    $('#game-content-1').fadeOut( "slow" );
    
    for (let i=0; i< qIndexArray.length; i++) {
      displayQuestion();
    };
  });




  // let showAnswer = function(){

  // };

  // let checkAnswer = function(array){

  // };

  //  FIRST ACTION
  




  

