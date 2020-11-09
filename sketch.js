
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ball2, ball3, ball4, ball5, ball6 

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
engine = Engine.create();
world = engine.world;
ground = new Ground(400, 780, 800, 20)
ball1 = new Ball (400,600,30)
ball2 = new Ball (450,600,30)
ball3 = new Ball (500,600,30)
ball4 = new Ball (550,600,30)
ball4 = new Ball (600,600,30)
ball5 = new Ball (650,600,30)
ball6 = new Ball (700,600,30)

	Engine.run(engine);
  
}


function draw() { 
  background("black");
  ball1.display();
  rectMode(CENTER);
  ground.display();
  drawSprites();
}



