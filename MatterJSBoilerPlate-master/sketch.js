
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var block1,block2,block3;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new paper(100,500,20)
block1 = new dustbin(600,650,190,20)
block2 = new dustbin(500,610,20,100)
block3 = new dustbin(700,610,20,100)

ground1=new ground(400,670,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine);
paper1.display();
block1.display();
block2.display();
block3.display();
ground1.display()

  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50})

}


}


