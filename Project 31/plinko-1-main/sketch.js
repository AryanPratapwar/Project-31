const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var plinkos = [];
var particles = [];
var divisions= [];
var divisionHeight = 300

function setup() {
  createCanvas(510,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,540,20);

  
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  } 


  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75, 10));
  }

  for (var j = 20; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 175, 10))
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 275, 10))
}

for (var j = 20; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 375, 10))
}
}

function draw() {
  background("black"); 
  
  fill("white");
  textSize(30);
  text("PLINKO", 160, 50)

  Engine.update(engine);

  ground.display();

  console.log(frameCount);

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

 for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
 
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  

  drawSprites();
}