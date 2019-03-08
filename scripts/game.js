
$(document).ready(function(){

  var result = $('#result')
  $('#yes-audio').attr('play',true);


  //  GAME VARIABLES  
  //  OBJECT conataining questions objects
  const qObject = {
    questionList:[
      'To keep Jack Nicholson in the right agitated mood, he was only fed this food for two weeks that he hates...', 
      'Danny has an imaginary friend that lives in his mouth who tells him secrets about the world around him...what name does Danny give this friend?',
      'How many years did it take Kubrick and his team to create "The Shining"?',
      'After 1 week in theatres, Kubrick decided to use a different ending and yanked the first version from cinemas around the country. In that first version...',
      '"The Shining" followed the biggest box office failure Kubrick ever experienced. What film was this?',
    ],
    answerList: [
      ['spaghetti','cheese sandwiches','hot dogs','tuna salad'],
      ['Charles','Bud','Tony','Chip'],
      ['1 year', '3 years', '5 years', '8 years'],
      ['Jack dissappears and is never found, and Wendy is shown crying in a bathroom', 'the entire family goes missing, and all that a search party finds is a typewriter in the snow','Jack wakes up from snoozing at his typewriter, and we hear Wendy calling for him while a creepy grin comes across his face','the hotel manager tells Wendy there is no sign of any trouble and that the Overlook is reopening'],
      ['Barry Lyndon', '2001: A Space Odyssey', 'Eyes Wide Shut', 'Dr. Strangelove']
    ],
    correctAnswerList: [
      1, 2, 2, 3, 0
    ],
    questionGifs: [
      '','','','',''
    ]
  };
  
  let qArray = 5;

  $('#start-btn').on('click',function(){  
    
    $('#hotel-key-div').fadeOut("slow");
    $('#game-content-1').fadeOut("slow");
    // $('#game-content-2').fadeOut("slow");
    // $('#game-content-2').html('<section id="game-content-2"></section>')
    
    let newDiv = $("<p class='game-q' class='fade-in'>").text(qObject.questionList[0]);
    $('#game-content-2').append(newDiv);

    // let newDiv2 = $("<p class='game-answers' class='fade-in'>").text(qObject.answerList[0]);
    // $('#game-content-2').append(newDiv2);
    let answerArr = qObject.questionList[i];
    for (let k=0; k<4;j++){
      let newDiv2 = $("<p class='game-answer-single' class='fade-in'>").text(answerArr[k]);
      $('#game-content-2').append(newDiv2);
    };

    const qWrong = 0;
    let qCorrect = 0; 
    let playerGuess = 99;

    let count = 45;
    var i = 0;

    var intervalId = setInterval(function(){
      let currentQ = qObject.questionList[i];
      let currentAnswers = qObject.answerList[i];
      let currentCorrect = qObject.correctAnswerList[i];
      
      if(i === (qArray-1)){
        clearInterval(intervalId);
      }
      // else if ($(playerGuess).val){
      //   //check answer
      // }
      
      let newDiv = $("<p class='game-q' class='fade-in'>").text(currentQ);
      $('#game-content-2').append(newDiv);
      
      let answerArr = qObject.questionList[i];
      for (let j=0; j<4;j++){
        let newDiv2 = $("<p class='game-answer-single' class='fade-in'>").text(answerArr[j]);
        $('#game-content-2').append(newDiv2);
      };

      i++;
      count--;
      $('#timer').html('Come out, come out, wherever you are! Hurry up or Jack will find ya!  :' + count + ' seconds')
    }, 1000*45);
  });
});

    // for (let i=0; i < qArray; i++) {
    //   let currentQ = qObject.questionList[i];
    //   let currentAnswers = qObject.answerList[i];
    //   let currentCorrect = qObject.correctAnswerList[i];

    // let currentKey = qObject[gameRound];
    // let currentObject = qObject[currentKey];
  
    // let questionObject = qObject[gameRound];
    // $('#start-btn').remove();
    // let timerSpan =  $('<span id="timer">')
    // $('#game-content-2').text(timerSpan);  
    // $('#question-text').text('test test test');
    // questionObject.question 

      








  // let showAnswer = function(){

  // };

  // let checkAnswer = function(array){

  // };

  //  FIRST ACTION
  




  

