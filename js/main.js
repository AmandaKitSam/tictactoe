// console.log( 'Is this working? ... Yes!' );

// x = Team Captain
// y = Team IronMan

///////// Wining combinations for the game:
let x = [];
let y = [];

const success = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];

const checkWin = function() {
  for (let i = 0; i < success.length; i++ ) {
    let winningScore = success[i];
    // from success: if x/y clicked all 3 numbers with the success, the player wins.
    if ( $(`#${winningScore[0]}`).hasClass('x') && $(`#${winningScore[1]}`).hasClass('x') && $(`#${winningScore[2]}`).hasClass('x') ) {
      $('.winner').text('Team Captain has won!');
      let score = $('.scoreOne').text();  // set the score = $('.class').text()
      $('.scoreOne').text(+(score) + 1); // If x win, the score addes to scoreOne

      // (set timer: auto re-start)
      setTimeout(function () {
        $('.box').removeClass('x y');
      }, 3000)
      // window.location.reload(); // .reload() - too quick
      // alert('x has won'); // dont's use alert window - can't see the last img flip
      return 'x';

    } else if ( $(`#${winningScore[0]}`).hasClass('y') && $(`#${winningScore[1]}`).hasClass('y') && $(`#${winningScore[2]}`).hasClass('y') ) {
      $('.winner').text('Team IronMan has won!');
      let score = $('.scoreTwo').text();
      $('.scoreTwo').text(+(score) + 1); // If y win, the score addes to scoreTwo

      setTimeout(function () {
        $('.box').removeClass('x y');
      }, 3000)
      return 'y';

    } else if ($('.x, .y').length === 9) {
      $('.winner').text('No one has won.'); // shows the message if it's a tie
      setTimeout(function () {
        $('.box').removeClass('x y');
      }, 3000)
    }
    // console.log( winingScore ); // check if it works
  } // for let

}


///////// Box click and take turns:
let turn = 'x';

$(document).ready(function(){
  $('.box').click(function(){
    //check if this square already has x OR y class
    if ( $(this).hasClass('x') || $(this).hasClass('y') ) {
      console.log('already taken');
      return;
    }

    $(this).addClass(turn).addClass('animated tada');
    // add animated + download the animated.css

    console.log( 'Winer:', checkWin());
    if ( turn === 'x') {
        turn = 'y';
    } else {
      turn = 'x';
    }

  });
});


///////// Reload Button - Reloads the game:
$(".button").on("click",function () {
location.reload();
});








////////////////////////////////////
// Thinking Steps:
// $(`#${winningScore[0]}.x, #${winningScore[1]}.x, #${winningScore[2]}.x`).length === 3;
// $(`#${winningScore[0]}.y, #${winningScore[1]}.y, #${winningScore[2]}.y`).length === 3;

////////////////////////////////////
// To use sound/music for the webpage:
// (In HTML):
// <audio id="swooshAudio" preload="auto">
//     <source src="assets/swoosh.mp3"></source>
//   </audio>
//
// (In JS):
// swooshAudio: $('#swooshAudio')[0],
//
// gameLogic.swooshAudio.play();


////////////////////////////////////
