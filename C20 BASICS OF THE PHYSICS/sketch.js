//add all physic engine
const Engine = Matter.Engine;
//connect real world objects to artificial world
const World = Matter.World;
//add behaviours to the objects
const Bodies = Matter.Bodies;

var engine , world;
var ball;
var ground;
var upbut , rightbut;

function setup(){
  createCanvas(600,600);

  // connect Engine to setup
  engine=Engine.create();
  world=engine.world;

  var balloptions={
    //gravity
    isStatic : false,
    //bounce off
    restitution:1
  }

  ball = Bodies.circle(300,300,30,balloptions);
  World.add(world,ball);

  ground = new Ground(300,590,600,20);
  topwall = new Ground(300,10,600,20);


  upbut=createButton("UP");
  upbut.position(100,100);
  upbut.mouseClicked(vertical);



}

function draw(){
  background("black");

  //update the engine
  Engine.update(engine);

  ellipseMode(RADIUS);
  rectMode(CENTER);

  fill("grey");
  ellipse(ball.position.x,ball.position.y,30,30);
  
  ground.show();
  topwall.show();

}

function vertical(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}