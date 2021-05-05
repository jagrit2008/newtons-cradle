
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
  bobDiameter=40;
   roof=new Roof(380,300,300,20)
	 bobObject1=new Bob(300,500,20,20)
   bobObject2=new Bob(340,500,20,20)
   bobObject3=new Bob(380,500,20,20)
   bobObject4=new Bob(420,500,20,20)
   bobObject5=new Bob(460,500,20,20)
  rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
  rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1,0)
  rope3=new Rope(bobObject3.body,roof.body,0,0)
  rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1,0)
  rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2,0)


  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(255);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-40})


  }
}

