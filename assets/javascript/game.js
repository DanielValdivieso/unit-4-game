// you will be given a random number at the start of the game.
// there are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score
// you win the game by matching your total acore to random number, you lose the game if your total score goes above the ramdom number
// The value of each crystal is hidden from you until you click on it.
// Each time when the game starts, the game will change the values of each crystal


$( document ).ready(function(){
    // Generates random number to guess
    var Random=Math.floor(Math.random()*1001+1)
    
    // Display random number
    $('#target').text(Random);
    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*102+1)
    var num2= Math.floor(Math.random()*102+1)
    var num3= Math.floor(Math.random()*102+1)
    var num4= Math.floor(Math.random()*102+1)
    
    // Variables to keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset game
  function reset(){
        Random=Math.floor(Math.random()*102+1);
        console.log(Random)
        $('#target').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#score').text(playerTotal);
        } 
  // Display wins
  function woohoo(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("Sorry! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals
    $('#Cry1').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#score').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('#Cry2').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#score').text(playerTotal); 
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#Cry3').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#score').text(playerTotal);
  
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#Cry4').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#score').text(playerTotal); 
        
            if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 

