
//  ===========GLOBAL VARIABLES==========  //
//  ======OBJECT conataining questions objects====== //
const questionData = [
  {
    question:'To keep Jack Nicholson in the right agitated mood, he was only served a food that he hates. The food was...',
    answers:['spaghetti','cheese sandwiches','hot dogs','tuna salad'],
    correctAnswer: "1",
    postAnswerCorrect: 'nice! try not to get too comfortable though...',
    postAnswerWrong: 'Wronggg. "cheese sandwiches" are tasty, we get it...',
    postAnswerTime: 'time is up! gotta run faster than that...it was "cheese sandos" by the way',
    questionGif: 'https://media.giphy.com/media/8oH9JAdQ7ncCA/giphy.gif'
  }, 
  {
    question:'Danny has an imaginary friend that lives in his mouth who tells him secrets about the world around him...what name does Danny give this friend?',
    answers:['Charles','Bud','Tony','Chip'],
    correctAnswer: "2",
    postAnswerCorrect: 'Did "tony" tell you that?! is it cheating if the people in your head tell you things?',
    postAnswerWrong: 'nope. alliteration always awards an answer, especially with toothy "tony"',
    postAnswerTime: 'faster i say! the answers were even short on this one, "tony" told me so',
    questionGif: 'https://66.media.tumblr.com/7685ec6ca8a121c6727a100647da4b53/tumblr_inline_nvx56wX89M1toovv8_500.gif'
  },
  {
    question:'How many years did it take Kubrick and his team to create "The Shining"?',
    answers:['1 year', '3 years', '5 years', '8 years'],
    correctAnswer: "2",
    postAnswerCorrect: 'eureka! five years and a lifetime of nightmares...thanks Stanimal!',
    postAnswerWrong: 'what did the "5" fingers say to the face:? WRONG!!! wow this hotel has us feeling a tad aggresive',
    postAnswerTime: 'at this rate it would take you 237 years to finish a movie...five...five was the answer',
    questionGif: 'http://i.imgur.com/sepx30l.gif'
  },
  {
    question:'After 1 week in theatres, Kubrick decided to use a different ending and yanked the first version from cinemas around the country. In that first version...',
    answers:[
      'Jack dissappears and is never found, and Wendy is shown crying in a bathroom', 
      'the entire family goes missing, and all that a search party finds is a typewriter in the snow',
      'Jack wakes up from snoozing at his typewriter, and we hear Wendy calling for him while a creepy grin comes across his face',
      'the hotel manager tells Wendy there is no sign of any trouble and that the Overlook is reopening'
      ],
    correctAnswer: "3",
    postAnswerCorrect: 'damn, thought we had ya there! nice guess...now tell us who gave you the hint',
    postAnswerWrong: 'no no no, although that would have been interesting. "the Overlook reopens" in the first ending, wish we could get our hands on it!  ',
    postAnswerTime: 'the Overlook reopens. geeze, you could at least try to answer. are you there? hello? HELLO?!',
    questionGif: 'https://media.giphy.com/media/ov6FFjcGiZlde/giphy.gif'
  },
  {
    question:'"The Shining" followed the biggest box office failure Kubrick ever experienced. What film was this?',
    answers:['Barry Lyndon', '2001: A Space Odyssey', 'Eyes Wide Shut', 'Dr. Strangelove'],
    correctAnswer: "0",
    postAnswerCorrect: 'oh wow i need to go watch some movies. oh, uh yea you got it right, really impressive...',
    postAnswerWrong: 'wow we softballed that in there. as soft as the lighting in "barry lyndon", now go watch it',
    postAnswerTime: 'you took too long, which is the same thing people say about "barry lyndon", now go watch it',
    questionGif: 'https://thumbs.gfycat.com/GeneralCleverGyrfalcon-size_restricted.gif'
  }
];

const numQuestions = questionData.length;

let round = 0;
let questionTimer;
let timerAmount = 20;
let count = timerAmount;

let totalWrong = 0;
let totalCorrect = 0;
let userAnswer = "0";
let answerNow = questionData[round].correctAnswer;
let postTextCorrect = questionData[round].postAnswerCorrect;
let postTextWrong = questionData[round].postAnswerWrong;
let postTextTime = questionData[round].postAnswerTime;

// ========FUNCTIONS========  //

const renderQuestion = function() {
  const newDiv = $("<p class='game-q fade-in'>").text(questionData[round].question);
  $('#game-content-2').html(newDiv);
};

const renderAnswers = function(){
  for (let i=0; i<4; i++){
    const newDiv2 = $("<p class='game-answer-single fade-in grow'>").text(questionData[round].answers[i]);
    $(newDiv2).attr('data-answer',i)
    $('#game-content-2').append(newDiv2);
  }; 

  const newDivTimer = $("<p class='timer fade-in'>").text('Come out, come out, wherever you are!');
  $('#timer-container').html(newDivTimer); 
  const newDivTime = $("<p class='time fade-in'>").text(count + 'seconds left...');
  $('#timer-container').append(newDivTime);
};

const renderPostAnswer = function(){
  console.log(userAnswer);
  console.log('answer correct' + answerNow);
  $('#game-content-2').attr('style',"display:''");
  const newDiv = $("<p class='post-answer fade-in'>");
  // .text(answerFeedback);
  if (userAnswer==answerNow) {
    $(newDiv).text(postTextCorrect);
  }
  else if (count<=0) {
    $(newDiv).text(postTextTime);
  }
  else{
    $(newDiv).text(postTextWrong);
  }
  // const newDivImg3 = $("<img id='post-tv-frame-BG' class='fade-in'>").attr('src','./assets/shining_tv_smart_BG.png') 
  // const newDivImg2 = $("<img id='post-tv-frame' class='fade-in'>").attr('src','./assets/shining_tv_smart.png') 
  const newDivImg = $("<img id='post-gif' class='gif fade-in'>").attr('src',questionData[round].questionGif) 
  const nextButton = $("<p id='click-next' class='fade-in grow pulse'>").text('go look around the corner');
  const nextButton2 = $("<p id='click-next' class='fade-in grow pulse'>").text('(click here)');
  // $('#game-content-2').html(newDiv).append(newDivImg2).append(newDivImg3).append(nextButton).append(nextButton2).append(newDivImg);
  $('#game-content-2').html(newDiv).append(newDivImg).append(nextButton).append(nextButton2);

};

const resetBoardPost = function() {
  $('#game-content-2').fadeOut('fast').empty();
  $('.time').fadeOut('fast').empty();
  $('.timer').fadeOut('fast', function(){
    $('.timer').empty();
    if (round<numQuestions) {
      renderQuestion();
      renderAnswers();
      questionTimer = setInterval(questionSequence,1000);
    }
    else if (round===numQuestions) {
      renderGameOver();
    }
  });
}

const resetBoardQuestion = function() {
  clearInterval(questionTimer);
  $('#game-content-2').fadeOut('fast').empty();
  $('.time').fadeOut('fast').empty();
  $('.timer').fadeOut('fast', function(){
    $('.timer').empty();
    renderPostAnswer();
    count=timerAmount;
  });
}

const resetBoardOver = function() {
  $('#game-content-2').fadeOut('fast').empty();
  $('.time').fadeOut('fast').empty();
  $('.timer').fadeOut('fast', function(){
    $('.timer').empty();
    renderGameOver();
  });
}

const renderGameOver = function() {
  const newContainer = $("<div id='game-content-3' class=''>")
  const newDiv = $("<p id='game-over-screen fade-in'>").text('donezo');  
  const newDivImg = $("<img class='gif fade-in'>").attr('src','http://awesomenator.com/content/2012/12/jack-nicholson-gif-7.gif') 
  $('#wrapper').append(newContainer)
  $('#game-content-3').html(newDiv).append(newDivImg);
}

const renderTime = function(){
  $('.time').html(':' + count + ' seconds left...');
}

const questionSequence = function(){
  if (count === (timerAmount)) {
    $('#game-content-2').attr('style',"display:''");  
  }

  else if ((count === 0) && (round<numQuestions)){
    resetBoardQuestion();
  } 

  else if ((count === 0) && (round===numQuestions)){
    resetBoardQuestion();
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
    // $('#game-title').toggle('scale')
    $('#game-title').attr('class','zoom-out');
    $('#hotel-key-div').fadeOut('fast');
    $('#game-content-1').fadeOut('fast', function(){
      renderQuestion();
      renderAnswers();
    });
    
    questionTimer = setInterval(questionSequence,1000);    
  });

  $(document).on('click','.game-answer-single', function(){

    userAnswer = $(this).attr('data-answer');
    answerNow = questionData[round].correctAnswer;
    postTextCorrect = questionData[round].postAnswerCorrect;
    postTextWrong = questionData[round].postAnswerWrong; 
    postTextTime = questionData[round].postAnswerTime;
    resetBoardQuestion();
  });

  $(document).on('click','#click-next', function(){
    round++;
    if (round===numQuestions) {
      resetBoardOver();
    }
    else {
      resetBoardPost();
    }
  });
});