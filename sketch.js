
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2;
var bob3,bob4;
var bob5;

var roof1;

var rope1,rope2;
var rope3,rope4;
var rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(0,height,800,30);
	
	bob1 = new bob(20,400,20);
	bob2 = new bob(60,400,20);
	bob3 = new bob(100,400,20);
	bob4 = new bob(140,400,20);
	bob5 = new bob(180,400,20);

	rope1= new rope(roof1.body,bob1.body);
	rope2= new rope(roof1.body,bob2.body);
	rope3= new rope(roof1.body,bob3.body);
	rope4= new rope(roof1.body,bob4.body);
	rope5= new rope(roof1.body,bob5.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



