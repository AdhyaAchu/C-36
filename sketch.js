var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

//create a variable called 'allPlayers' --> store the info (name and distance) of all 4 players
var allPlayers;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    //update(state) belongs to the Game class
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play();
  }
  
}
