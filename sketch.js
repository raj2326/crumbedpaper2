
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(800,390,1600,20)
	//Create the Bodies Here.
dustbin=new Dustbin(800,350)
paper=new Paper(30,200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 
  
  dustbin.display();
  paper.display ();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
		
	}
}


