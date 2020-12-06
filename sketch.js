//const { load } = require("./p5");

//Making constrained bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


// Variables
var back1,background

function preload(){

back1=loadImage("./Background.jpg");

}

function setup(){
createCanvas(1000,1000);
fill("black");

}


function draw() {
 // text(mouseX + ',' + mouseY, 20, 15);
  //background("255,255,255"); 
 image(back1,10,50,1000,1000);
  drawSprites();

}