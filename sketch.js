const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dustbin1;
var ground;
var paper1;
var backgroundImg;
var slingshot;

function preload()
{
}

function setup() {
	createCanvas(1240,580);

	engine = Engine.create();
  world = engine.world;
  
	ground = new Ground(width/2,570,width,20);
  paper1 = new Paper(200,100,70);
  dustbin1 = new Dustbin(1100,550);

  slingshot = new Slingshot(paper1.body,{x:100,y:100});
  

	Engine.run(engine);
}

function draw() {
  background("pink");
  rectMode(CENTER);
  dustbin1.display();
  ground.display();
  paper1.display();
  slingshot.display();    
  drawSprites(); 
}
function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}