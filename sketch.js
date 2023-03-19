const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball;
var ground, leftSide, rightSide;

function setup() {
	createCanvas(1745, 876);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(875, 875, 1750, 50);
	leftSide = new Ground(1000, 800, 10, 100);
	rightSide = new Ground(1200, 800,  10, 100);

	var ball_options = {
		restitution: 0.3,
		density: 1.2
	}
	//Create the Bodies Here.

	ball = Bodies.circle(100, 700, 20, ball_options);
	World.add(world, ball);

	if(keyDown(UP_ARROW)){
		keyPressed();
	}

	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
	background(0);
	Engine.update(engine);

	ground.show();
	leftSide.show();
	rightSide.show();

	push();
	stroke("cyan");
	fill("lime")
	ellipse(ball.position.x, ball.position.y, 20);
	pop();

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {
			x: 0,
			y: 0
		}, {
			x: 25,
			y: 25
		});
	}
}