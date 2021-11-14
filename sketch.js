const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,flag,cart;
var backgroundImg;
var rock,rock2;
var log,log2,ball;

function preload(){
    backgroundImg = loadImage("./sprites/golf-background.jpg");
}

function setup(){
    canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width/2,height-10,width,20);
    flag = new Flag(1500,580,100,150);
    cart = new Cart(780,570,250,250);
    rock = new Rock(320,575,100,100);
    rock2 = new Rock(1130,575,100,100);
    log = new Log(300,575,250,20,-PI/4);
    log2 = new Log(1140,575,300,20,PI/4);
    ball = new Ball(350,405,500);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    flag.display();
    cart.display();
    rock.display();
    rock2.display();
    log.display();
    log2.display();
    ball.display()
}

