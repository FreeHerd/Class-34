const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(3000,800);
class Box {
  constructor(x,y,width, height, options);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);
}

display();
  var pos =this.body.position;
  var angle = this.body.angle;
Push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(4);
stroke("green")
Fill(255);
rect(0, 0, this.width, this.height);
Pop();
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

