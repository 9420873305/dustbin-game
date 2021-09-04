
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	var ground;
	var wall1;
	var wall2;

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
restitution=0.95,
	}

	//Create the Bodies Here.
 ground=new Ground(700,300,400,20);
wall_1=new Ground(700,300,400,20);
wall_2=new Ground(660,690,29,80);
wall_3=new Ground(760,690,29,80);

	var ball_options={
    isStatic:false,
	restitution:0.3,
	friction:0,
    density:1.2
	}

	ball=Bodies.circle(100,200,20,ball_options);
	world.add(world,ball);
	
	Engine.run(engine);
	rectMode(CENTER);
	background(0);
}


function draw() 
{
	ellipse(ball.position.x,ball.position.y,20);
background(51);
ground.show();
wall_1.show();	
wall_2.show();
wall_3.show();
	
	Engine.update(engine);
	
}
  drawSprites();

function hForce()
{

	Matter.body.applyForce(ball{x:0,y:0},{x:0.05,y:0});
}



