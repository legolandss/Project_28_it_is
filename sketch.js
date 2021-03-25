
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2,  mango3 , mango4 ,mango5,mango6;
var mango7,mango8,mango9,mango10 , stoneAAA , chaiM;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	stoneAAA=new stone(250,400,100,100);

	mango1=new mango(1130,100,31);
	mango2=new mango(1200,130,27);
	mango3=new mango(1150,175,31);
	mango4=new mango(1000,190,29);
	mango5=new mango(990,100,30);
	mango6=new mango(990,230,33);
	mango7=new mango(1070,180,31);
	mango8=new mango(1050,140,31);
	mango9=new mango(1230,198,31);
	mango10=new mango(940,179,38);

	chaiM = new chain(stoneAAA.body,{x:250, y:400});
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display(); 
  mango8.display();
  mango9.display();
  mango10.display();
  stoneAAA.display();
  chaiM.display();

  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stoneAAA.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   chaiM.fly();
}