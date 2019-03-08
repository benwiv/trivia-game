
$(document).ready(function(){
//  GAME VARIABLES  
  //  OBJECT conataining questions objects
  const qObject = {
    questionList:[
      'To keep Jack Nicholson in an right agitated mood, he was only fed this food for two weeks that he hates...', 
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
    $('#game-content-2').fadeOut("slow");
    $('#game-content-2').html('<section id="game-content-2" class="fade-in"></section>')
    let qWrong = 0;
    let qCorrect = 0; 

    
    for (let i=0; i < qArray; i++) {
      let currentQ = qObject.questionList[i];
      let currentAnswers = qObject.answerList[i];
      let currentCorrect = qObject.correctAnswerList[i];
      console.log(currentQ);
      console.log(currentAnswers);
      console.log(currentCorrect);

      let newDiv = $('<div id="game-content-"' + [i] + 'class="fade-in">').text(currentQ);
      $('#game-content-2').append(newDiv);
    };


  
  //  GAME FUNCTIONS
    //TIMER
    // let startTimer = function(duration, display) {
    //   var timer = duration, seconds;
    //   setInterval(function () {
    //       seconds = parseInt(timer % 60, 10);
    //       seconds = seconds < 10 ? "0" + seconds : seconds;
  
    //       display.text(" :" + seconds);
  
    //       if (--timer < 0) {
    //           timer = duration;
    //       }
    //   }, 1000);
    // }
  
      
    //  TIMER: 30 second timer that starts with question being displayed
    // jQuery(function ($) {
    //   var fortySec = 40,
    //       display = $('#timer').html('Come out, come out, wherever you are! Hurry up or Jack will find ya!  :' + count + ' seconds');
    //   startTimer(fortySec, display);
    // });  
    
    // var counter = setInterval(timer, 1000);
      // let count = 30;
      // 
      
      // function timer(){
      //   count-=1;
      //   if (count <= -1){
      //     if (clearInterval(counter)){
      //        alert('time is up!');
      //     }
      //   }
      //   console.log(count);
      
       
      
      // let currentKey = qObject[gameRound];
      // let currentObject = qObject[currentKey];
    
      // let questionObject = qObject[gameRound];
      // $('#start-btn').remove();
      // let timerSpan =  $('<span id="timer">')
      // $('#game-content-2').text(timerSpan);  
      // $('#question-text').text('test test test');


      // questionObject.question 

      
  });
});







  // let showAnswer = function(){

  // };

  // let checkAnswer = function(array){

  // };

  //  FIRST ACTION
  




  

