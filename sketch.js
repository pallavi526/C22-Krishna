const Engine= Matter.Engine;
const World=  Matter.World;
const Bodies= Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var ball_options={
    restitution:0.8
  }
  ball=Bodies.rectangle(200,200,20,20,ball_options)
  World.add(world,ball)
  

  console.log(ball)
}

function draw() {
  background("red");  
  Engine.update(engine)
rectMode(CENTER); 
rect(ball.position.x,ball.position.y,20,20);


}