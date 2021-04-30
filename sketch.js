var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayers=0
var passedFinish;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //start the game
  if (playerCount === 4 && finishedPlayers === 0) {
    game.update(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  if (finishedPlayers === 4) {
    game.update(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 4) {
    game.displayRanks();
  }
}
