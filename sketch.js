
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boy_img

function preload()
{
	boy_img = loadImage("boy.png")
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	stoneobj = new Stone(120,465,50)
	boy = createSprite(200,550,50,50)
	boy.addImage(boy_img,10,10,10,10)
	boy.scale=0.15

	ground = new Ground(800,650,1600,20);

   tree = new Tree(1000,350,700,600)
	mango1= new Mango(1050,270,50)
	mango2= new Mango(950,200,50)
	mango3= new Mango(900,340,50)
	mango4= new Mango(1250,230,50)
	mango5= new Mango(1100,100,50)
	mango6= new Mango(750,270,50)

	chain = new Chain(stoneobj.body,{x:120,y:450})

	

	


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  drawSprites();
 
  textSize(34)
  text("Press Space to get second to play!!",100,70)
 
  
  tree.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  
  stoneobj.display();
  ground.display();
  chain.display()
  detectcollision(stoneobj,mango1);
  detectcollision(stoneobj,mango2);
  detectcollision(stoneobj,mango3);
  detectcollision(stoneobj,mango4);
  detectcollision(stoneobj,mango5);
  detectcollision(stoneobj,mango6);
  console.log(stoneobj.radius+mango1.radius);

 


  
  
  


  
}
function keyPressed(){

	if(keyCode===32){

		Matter.Body.setPosition(stoneobj.body,{x:120,y:465})
		chain.attach(stoneobj.body);
	}
}

function mouseDragged(){

	Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY})


}


function mouseReleased(){

	chain.fly();

}
function detectcollision(lstone,lmango){
	

	mbp=lmango.body.position
	  sbp=lstone.body.position
	  
	  var distance=dist(sbp.x,sbp.y,mbp.x,mbp.y)
	  
 
	  
		  if(distance<=lstone.radius+lmango.radius)
		{
		 
			 Matter.Body.setStatic(lmango.body,false);
		}
	
 }
   







	






