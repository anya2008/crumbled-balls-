
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paddle1; var paddle2;var paddle3
function preload()




{
	
}

function setup() {
	createCanvas(800, 700);
	paddle1 = createSprite(750,600,30,150)
    
	paddle2 = createSprite(600,660,270,30)
	
	paddle3 = createSprite(450,600,30,150)
	
	ball = createSprite(50,650,30,30)
    
	engine = Engine.create();
	world = engine.world;
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.position,{x : 85, y : 85});
	}
}

