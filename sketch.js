var b1,space,shipImg,bulletImg,spaceImg,EnemyGroup,BulletGroup
function preload()
{
shipImg=loadImage("sprite2.png")
bulletImg=loadImage("sprite_0.png")
spaceImg=loadImage("sprite1.png")
}
function setup()
{
BulletGroup=createGroup()
EnemyGroup=createGroup()
ship=createSprite(200,300,10,10)
ship.addImage("t1",shipImg)
ship.scale=0.15
}
function draw() {
  
  background("white")
  drawSprites()
  ship.x=mouseX
  spawnEnemy()
  if(keyDown("space"))
  {
  bullet()
  }
    if(BulletGroup.isTouching(EnemyGroup))
    {
      EnemyGroup.destroyEach()
    }
  
 
}
function bullet()
{
  b1=createSprite(ship.x,300,10,10)
  b1.addImage("b1",bulletImg)
  b1.scale=0.1
  b1.velocityY=-5
  BulletGroup.add(b1) 

}
function spawnEnemy() {
  if(frameCount%60===0)
  {
    var enemy=createSprite(200,0,10,10)
    enemy.velocityY=5
    enemy.x=random(0,400)
    enemy.addImage("s1",spaceImg)
    enemy.scale=0.2
    EnemyGroup.add(enemy)
  }
}