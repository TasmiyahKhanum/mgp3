var bgimg;
var database, gameState;
var form, player, playerCount;
var canvas;
var dragon,gon1;
var dragon2,gon2; 
var dragon3,gon3;
var dragons=[];
var allPlayers;
var x,y;
var player;
var ascore=0,bscore=0,cscore=0;
var fireBall, fireBallImg, fireBalls;
var demo;


function preload(){
 bgimg=loadImage("assets/wallpaper2.jpg");

 dragon = loadAnimation("assets/d1.png","assets/d1.png","assets/d2.png","assets/d2.png","assets/d3.png",
 "assets/d3.png","assets/d4.png","assets/d4.png","assets/d5.png","assets/d5.png","assets/d6.png","assets/d6.png",
 "assets/d7.png","assets/d7.png");
 //dragon.playing=true;
 //dragon.looping=true;

 dragon2 = loadAnimation("assets/dd1.png","assets/dd1.png","assets/dd1.png","assets/dd2.png","assets/dd2.png",
 "assets/dd2.png","assets/dd3.png","assets/dd3.png","assets/dd3.png");
  //monarch.playing=true;
 //monarch.looping=true;

 dragon3 = loadAnimation("assets/ddd1.png","assets/ddd1.png","assets/ddd1.png","assets/ddd2.png","assets/ddd2.png",
 "assets/ddd2.png","assets/ddd3.png","assets/ddd3.png","assets/ddd3.png");

 fireBallImg = loadAnimation("assets/f1.png","assets/f2.png","assets/f3.png","assets/f4.png","assets/f5.png",
 "assets/f6.png","assets/f7.png","assets/f8.png","assets/f9.png","assets/f10.png","assets/f11.png","assets/f12.png","assets/f13.png");
}

function setup(){
 //createCanvas(1250,613);
 canvas = createCanvas(windowWidth-18,windowHeight-0);
 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
 //butterfly.frameDelay = 400;
 //butterflya.addAnimation('flap',butterfly);
 //monarch.frameDelay = 400;
 //monarcha.addAnimation('flap',monarch);
}

function draw(){
 // console.log(mouseX,mouseY);
  background(bgimg);
  image(bgimg,0,0,width,height);

  if (playerCount === 3) {
    game.update(1);
  }

  if (gameState === 1) {
   game.play();
  }

  if (gameState === 2) {
  game.showScoreboard();
  game.end();
  }
 // butterfly.frameDelay = 10;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}