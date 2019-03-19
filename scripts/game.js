
//  ===========GLOBAL VARIABLES==========  //
//  ======OBJECT conataining questions objects====== //
const questionData = [
  {
    question:'To keep Jack Nicholson in the right agitated mood, he was only served a food that he hates. The food was...',
    answers:['spaghetti','cheese sandwiches','hot dogs','tuna salad'],
    correctAnswer: 1,
    postAnswer: 'how shocking! we forgive you Jack...',
    questionGif: 'https://media.giphy.com/media/hNNIEcRzZanWU/giphy.gif'
  }, 
  {
    question:'Danny has an imaginary friend that lives in his mouth who tells him secrets about the world around him...what name does Danny give this friend?',
    answers:['Charles','Bud','Tony','Chip'],
    correctAnswer: 2,
    postAnswer: '',
    questionGif: ''
  },
  {
    question:'How many years did it take Kubrick and his team to create "The Shining"?',
    answers:['1 year', '3 years', '5 years', '8 years'],
    correctAnswer: 2,
    postAnswer: '',
    questionGif: ''
  },
  {
    question:'After 1 week in theatres, Kubrick decided to use a different ending and yanked the first version from cinemas around the country. In that first version...',
    answers:[
      'Jack dissappears and is never found, and Wendy is shown crying in a bathroom', 
      'the entire family goes missing, and all that a search party finds is a typewriter in the snow',
      'Jack wakes up from snoozing at his typewriter, and we hear Wendy calling for him while a creepy grin comes across his face',
      'the hotel manager tells Wendy there is no sign of any trouble and that the Overlook is reopening'
      ],
    correctAnswer: 3,
    postAnswer: '',
    questionGif: ''
  },
  {
    question:'"The Shining" followed the biggest box office failure Kubrick ever experienced. What film was this?',
    answers:['Barry Lyndon', '2001: A Space Odyssey', 'Eyes Wide Shut', 'Dr. Strangelove'],
    correctAnswer: 0,
    postAnswer: '',
    questionGif: ''
  }
];

// const keyArray = Object.keys(questionData);
const numQuestions = questionData.length;

let round = 0;
let questionTimer;
let timerAmount = 45;
let count = 45;
let isAnswered = false;

let totalWrong = 0;
let totalCorrect = 0;
let userAnswer = 0;
let answerNow = questionData[round].correctAnswer;


// ========FUNCTIONS========  //

const renderQuestion = function() {
  const newDiv = $("<p class='game-q fade-in'>").text(questionData[round].question);
  $('#game-content-2').append(newDiv);
};

const renderAnswers = function(){
  //  creates div and appends each answer  //
  for (let i=0; i<4; i++){
    const newDiv2 = $("<p class='game-answer-single fade-in grow'>").text(questionData[round].answers[i]);
    $(newDiv2).attr('data-answer',i)
    $('#game-content-2').append(newDiv2);
  }; 

  let newDivTimer = $("<p class='timer fade-in'>").text('Come out, come out, wherever you are! Hurry up or Jack will find ya!');
  $('#timer-container').append(newDivTimer); 
  const newDivTime = $("<p class='time fade-in'>").text(count + 'seconds left...');
  $('#timer-container').append(newDivTime);
};

const renderPostAnswer = function(){
  const newDiv = $("<p class='post-answer fade-in'>").text(questionData[round].postAnswer);
  $('#game-content-2').append(newDiv);
  const newDivImg = $("<img class='gif fade-in'>").attr('src',questionData[round].questionGif) 
  $('#game-content-2').append(newDivImg);
  let nextButton = $("<p id='click-next' class='fade-in grow'>").text('go look around the corner');
  $('#game-content-2').append(nextButton);

  count=timerAmount;
};

const resetBoard = function() {
  $('#game-content-2').fadeOut('fast');
  $('.timer').fadeOut('fast')
  $('.time').fadeOut('fast',renderPostAnswer);
}

const renderGameOver = function() {
  let newDiv = $("<p id='game-over-screen fade-in'>").text('');  
  $('#game-content-2').append(newDiv);
  let newDivImg = $("<img class='gif fade-in'>").attr('src','http://awesomenator.com/content/2012/12/jack-nicholson-gif-7.gif') 
  $('#game-content-2').append(newDivImg);
}

const renderTime = function(){
  $('.time').text(':' + count + ' seconds left...');
}

const questionSequence = function(){
  // let currentQuestion = keyArray[round];
  // let answerNow = questionData[currentQuestion].correctAnswer;

  if (count === (timerAmount-1)) {
    renderQuestion();
    renderAnswers();
  }
  else if ((count === 0) && (round<numQuestions)){
    round++;
    clearInterval(questionTimer);
    resetBoard();
    // renderPostAnswer();
  } 
  else if ((count === 0) && (round===numQuestions)){
    clearInterval(questionTimer);
    resetBoard();
    // renderGameOver();
  }

  else if (isAnswered===true) {
    clearInterval(questionTimer);
    console.log('true switch confirm')
    console.log(round);
    console.log(isAnswered)
    console.log(answerNow);
    round++;
  }

  renderTime();
  count--;
};



//  ===============EVENT LISTENERS/FUNCTIONS==============  //
$(document).ready(function(){
  //  autoplays music  //
  $('#yes-audio').attr('play',true);

  //  ===START GAME FUNCTION on click of start room key/start button=====  //
  $('#start-btn').on('click',function(){  
    //  clear out intro materials
    $('#hotel-key-div').fadeOut('fast');
    $('#game-content-1').fadeOut('fast');
    
    //  setInterval function @ :45s
    let count = timerAmount;
    questionTimer = setInterval(questionSequence,(1000));    
  });

  $(document).on('click','.game-answer-single', function(){
    isAnswered = true;
    console.log('click working');
    userAnswer = $(this).attr('data-answer');
    resetBoard();
    console.log(userAnswer);
    // renderPostAnswer(currentQuestion);


    // resetBoard();
    // $('#game-content-2').promise().done(questionSequence());

  });

});


// for (let k=0; k<numQuestions; k++){
//   questionSequence();
// }