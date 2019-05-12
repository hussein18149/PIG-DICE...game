// ***************THE ROLLING LOGINC*********************************************

function Kadweka1() {

  var temp=0;

  var image = new Array(6);
image[0]= 'images/img6.png';
image[1]= 'images/img3.png';
image[2]= 'images/img7.png';
image[3]= 'images/img8.png';
image[4]= 'images/img9.png';
image[5]= 'images/img10.png';

  temp = Math.floor(Math.random() * 6);

  document.getElementById("image1").src=image[temp];

}


function Kadweka2() {

  var temp=0;

  var image = new Array(6);
image[0]= 'images/img6.png';
image[1]= 'images/img3.png';
image[2]= 'images/img7.png';
image[3]= 'images/img8.png';
image[4]= 'images/img9.png';
image[5]= 'images/img10.png';

  temp = Math.floor(Math.random() * 6);

  document.getElementById("image2").src=image[temp];
}


var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

class Player {
  constructor(turn) {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
  }


//  ***********ESSENCE OF ROLLING ONE ****************
  
  rollone() {
    if (this.roll === 1) {
      this.tempscore = 0;
      alert("SORRY!.." + this.playerName + " IT'S SECOND PLAYER'S CHANCE");
    }
    else {
      this.tempscore += this.roll;
    }
  };

  // hold
  hold() {
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    // this.changeturn();
    alert("SORRY!.." + this.playerName + " IT'S FIRST PLAYER'S CHANCE");
  }

  // check for 100
  checkingWinner() {
    if (this.totalscore == 100) {
      alert(this.playerName + " CONGRATULATION " + this.playerName + " YOU WON!.");
    }
  }

  // **************constructor to get what we need**********************************************
  newGame() {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.playerName = "";
  }
}


// *************USER INTERFACE*********************************************
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $("#game").show();
    $("#game2").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  $("button#game2").click(function(event){
    $(".game").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-1").empty();
    $("#total-1").empty();
    $("#roll-1").empty();
    $("#total-2").empty();
    $("#total-2").empty();
    $("#roll-2").empty();

    $("#game2").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#roll-1").text(player1.roll);
    player1.rollone();
    $("#round-1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = throwdice();
    $("#roll-2").text(player2.roll);
    player2.rollone();
    $("#round-2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-1").text(player1.totalscore);
    $("#round-1").empty();
    $("#roll-1").empty();
    player1.winnerHere();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-2").text(player2.totalscore);
    $("#round-2").empty();
    $("#roll-2").empty();
    player2.winnerHere();
  });
});
