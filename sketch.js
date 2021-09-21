const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg;


function preload(){
    backgroundImg = loadImage("./sprites/golf-background.jpg");
}

function setup(){
    canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width/2,height-10,width,20);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();

}

