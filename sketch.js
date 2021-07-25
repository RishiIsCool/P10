var sea, seaImg;
var ship, shipImg1;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}
function setup(){
  createCanvas(400,200);
 

  sea = createSprite(400,100,800,100);
  sea.scale = 0.20;
  sea.addImage(seaImg);
    sea.x = sea.width/2;  
  ship = createSprite(75,100);
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.20;
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;  
  }
  sea.velocityX = -5;
  drawSprites();
}