var bullet1,bullet2,bullet3,bullet4;
var wall1,wall2,wall4,wall3;
var speed,weight,thickness;
var wall,bullet;

function setup() {
  createCanvas(1300,600);

  speed = random(220,320);
  weight = random(30,55);
  thickness = random(25,80);

  bullet1 = createSprite(50, 150,15,10);
  bullet1.velocityX=speed;
  
  bullet2 = createSprite(50,250,15,10);
  bullet2.velocityX=speed;
  
  bullet3 = createSprite(50,350,15,10);
  bullet3.velocityX=speed;
  
  bullet4 = createSprite(50,450,15,10);
  bullet4.velocityX=speed;
  
  wall1 = createSprite(1150, 150,thickness,height/2);
  wall1.shapeColor = "80,80,80";
 //wall1.debug = true;
  
  wall2 = createSprite(1150,250,thickness,height/2);
  wall2.shapeColor = "80,80,80";
  //wall2.debug = true;
  
  wall3 = createSprite(1150,350,thickness,height/2);
  wall3.shapeColor = "80,80,80";
 // wall3.debug = true;
  
  wall4 = createSprite(1150,450,thickness,height/2);
  wall4.shapeColor = "80,80,80";
  //wall4.debug = true;

}


function draw() {
  background(0,0,0); 
  
if(collide(wall,bullet))
{
  bullet1.velocityX=0;
var deformation = 0.5 * wieght * speed * speed/(thickness * thickness * thickness);
if(deformation >10)
{
  bullet1.shapeColor=color(255,0,0);
}
if(deformation <10)
{
  bullet1.shapeColor=color(0,255,0);
}
}

if(collide(wall,bullet))
{
  bullet2.velocityX=0;
var deformation = 0.5 * wieght * speed * speed/(thickness * thickness * thickness);
if(deformation >10)
{
  bullet2.shapeColor=color(255,0,0);
}
if(deformation <10)
{
  bullet2.shapeColor=color(0,255,0);
}
}

if(collide(wall,bullet))
{
  bullet3.velocityX=0;
var deformation = 0.5 * wieght * speed * speed/(thickness * thickness * thickness);
if(deformation >10)
{
  bullet3.shapeColor=color(255,0,0);
}
if(deformation <10)
{
  bullet3.shapeColor=color(0,255,0);
}
}

if(collide(wall,bullet))
{
  bullet4.velocityX=0;
var deformation = 0.5 * wieght * speed * speed/(thickness * thickness * thickness);
if(deformation >10)
{
  bullet4.shapeColor=color(255,0,0);
}
if(deformation <10)
{
  bullet4.shapeColor=color(0,255,0);
}
}

  drawSprites();
  collide(wall,bullet);
}

function collide(wall,bullet)
{
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
