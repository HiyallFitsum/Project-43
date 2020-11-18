const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var hourHand;
var minuteHand;
var secondHand;


function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);



  hourHand = new Clock(500,500);
 
  minuteHand = new Clock(hourHand.x,hourHand.y);
 
  secondHand = new Clock(hourHand.x,hourHand.y);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  

  hourHand.clockHours();

  minuteHand.clockMinutes();

  secondHand.clockSeconds();

  drawSprites();
}