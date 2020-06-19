var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var man, obs;
var track, manimg, obsimg;

function preload(){
    track = loadImage("../img/sprite_O 2.png");
    manimg = loadAnimation("../img/Imported piskel.gif");
    obsimg = loadImage("../img/sprite_O copy.png");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}