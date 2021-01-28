var fairy,bg
var fairyimg
var star
var starimg


function preload()
{
   //preload the images here
  fairyimg=loadImage('images/fairy.png');
  bg=loadImage('images/starnight.png');
  starimg=loadImage('images/star.png');
}

function setup() {
  createCanvas(800, 750);
  fairy=createSprite(200,400);
  fairy.scale=0.3;
  fairy.addImage(fairyimg)
  star=createSprite(400,10);
  star.addImage(starimg);
  star.scale=0.3;
}


function draw() {
  background(bg);

  if(fairy.isTouching(star))
  {
    star.velocityY=0;
  }
  drawSprites();

}
function keyPressed()
{
if(keyCode===RIGHT_ARROW)
{
  fairy.x=fairy.x+20
}
if(keyCode===LEFT_ARROW)
{
  fairy.x=fairy.x-20
}
if(keyCode===DOWN_ARROW)
{
  star.velocityY=3;
}

}
