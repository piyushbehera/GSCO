var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,400);
 car =  createSprite(50, 200, 100, 50);
 wall = createSprite(1000,300,10,600);
}

function draw() {
  background(255,255,255);  
  car.velocityX = 10;

if (car.isTouching(wall)){
  car.velocityX = 0;
  var deformation=0.5 * weight * speed* speed/22509;
  if (deformation>180)
  {
    car.shapecolor = color(255,0,0);
  }
  if (deformation = 180 && deformation>100){
    car,shapecolor = color(230,230,0);
  }
  if (deformation < 100){
    car.shapecolor=color(0,255,0);
  }
}




  drawSprites();
}