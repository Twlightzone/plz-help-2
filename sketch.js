const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge, base1, base2, joinPoint, joinLink;
var stoneA = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  bridge = new Bridge(20,{x:350,y:250})
  joinPoint = new Base(1050,250,1,1)
  Matter.Composite.add(bridge.body,joinPoint);
  joinLink = new link(bridge,joinPoint);
  base1= new Base(200,250,400,100)
  base2= new Base(1500,250,900,100)
  frameRate(80);

}

function draw() {
  background(51);
  bridge.display();
  base1.show();
  base2.show();
 Engine.update(engine);
 
 for (let i = 0; i <1.0; i++) {
   var x = random(width/2-200,width/2+300);
   var y = random(-10,140);
   var stone = new Stone(x,y,80,80)
   stoneA.push(stone);
 }
for (let i = 0; i < stoneA.length; i++) {
  ShowSTONES(stoneA[i],i);
}
}


function ShowSTONES(stone,index){
 stone.show();
}