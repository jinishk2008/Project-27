var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,150,400,50);
	World.add(world,roof);
	
	bob1=new Bob(250,500,50);
	World.add(world,bob1);
	bob2=new Bob(350,500,50);
	World.add(world,bob2);
	bob3=new Bob(455,500,50);
	World.add(world,bob3);
	bob4=new Bob(555,500,50);
	World.add(world,bob4);

	rope1 = new Rope(roof.body,bob1.body,250,150);
    rope2 = new Rope(roof.body,bob2.body);
    rope3 = new Rope(roof.body,bob3.body);
    rope4 = new Rope(roof.body,bob4.body);
	
	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  drawSprites();
 
}



