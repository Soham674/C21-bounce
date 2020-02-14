var rect1,rect2
function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(200,200,50,80);
  rect2 = createSprite(200,600,80,40);
  rect1.velocityY = 5;
  rect2.velocityY = -5;
}

function draw() {
  background(255,255,255);
  if (rect1.y-rect2.y<rect1.height/2+rect2.height/2 &&
    rect2.y-rect1.y<rect2.height/2+rect1.height/2)  {
      rect1.velocityY=rect1.velocityY*(-1);
      rect2.velocityY=rect2.velocityY*(-1);
    }
  drawSprites();
}ś