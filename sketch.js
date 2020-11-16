const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var line1;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  line1 = new Clock(400, 200);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  

  fill("red");
  line1.display();

  drawSprites();
}