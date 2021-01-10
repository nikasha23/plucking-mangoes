
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("Pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	tree= new Tree(900,300);

	mango1= new Mango(850,300,30);
	mango2= new Mango(870,280,30);
	mango3= new Mango(890,260,30);

	stone= new Stone(250,400,30);

	launcher= new Launcher(stone.body,{x:250,y:400});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  image(boyImg,200,360,200,300);
  ground.display();

  tree.display();
	
  //boy(boyImg);

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display(),

  launcher.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    stone.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
		if(distance<-lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		launcherObject.attach(stone.body);

	}
}

