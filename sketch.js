const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var dustbin1, dustbin2, dustbin3, dustbin4;
var dustbinImage;

function preload(){
  dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;	
    
  ground = new Ground(400,595,800,10);
  dustbin4 = createSprite(670,540,10,10);
  dustbin4.addImage(dustbinImage);
  dustbin4.scale = 0.3;
  paper = new Paper(160,200,20);
  
  dustbin1 = new Dustbin(670,585,100,10);
  dustbin2 = new Dustbin(625,545,10,90);
  dustbin3 = new Dustbin(715,545,10,90);
}

function draw() { 
  background(230,230,230);
  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  dustbin4.display();
  ground.display();
  paper.display(); 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Body.applyForce(paper.body,paper.body.position,{x:50, y:-75});
  }
}