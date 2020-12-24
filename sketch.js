const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,roof,rope;
var ball2,ball3,ball4,ball5;
var rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(400,350);
	ball2 = new Ball(440,350);
	ball3 = new Ball(480,350);
	ball4 = new Ball(360,350);
	ball5 = new Ball(320,350);
	roof = new Roof(400,200,300,30);
	rope = new Rope(ball.body,{x:400, y:200});
	rope2 = new Rope(ball2.body,{x:440, y:200});
	rope3 = new Rope(ball3.body,{x:480, y:200});
	rope4 = new Rope(ball4.body,{x:360, y:200});
	rope5 = new Rope(ball5.body,{x:320, y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball5.body, ball5.body.position, {x: -20, y: -20});
	}
}
