var plane
var planeimg

var back

var bullet1
var bulletimg1
var bullet2
var bulletimg2
var bullet3
var bulletimg3
var bullet4
var bulletimg4
var bullet5
var bulletimg5
var bullet6
var bulletimg6
var bullet7
var bulletimg7
var bullet8
var bulletimg8
var bullet9
var bulletimg9
var bullet10
var bulletimg10
var bulletnum=10
var bulletCurrent=1

var alien1
var alienimg1
var alien2
var alienimg2
var alien3
var alienimg3
var alien4
var alienimg4
var alien5
var alienimg5
var alien6
var alienimg6
var alien7
var alienimg7
var alien8
var alienimg8
var alien9
var alienimg9
var alien10
var alienimg10


var score=0

var title
var titleimg
var gameover
var gameoverimg


function preload() {
  gameoverimg=loadImage("Game Over.png")
  planeimg=loadImage("Plane.png")
  back=loadImage("background.png")

  bulletimg1=loadImage("bullet.png")
  bulletimg2=loadImage("bullet.png")
  bulletimg3=loadImage("bullet.png")
  bulletimg4=loadImage("bullet.png")
  bulletimg5=loadImage("bullet.png")
  bulletimg6=loadImage("bullet.png")
  bulletimg7=loadImage("bullet.png")
  bulletimg8=loadImage("bullet.png")
  bulletimg9=loadImage("bullet.png")
  bulletimg10=loadImage("bullet.png")
  
  alienimg1=loadImage("Alien.png")
  alienimg2=loadImage("Alien.png")
  alienimg3=loadImage("Alien.png")
  alienimg4=loadImage("Alien.png")
  alienimg5=loadImage("Alien.png")
  alienimg6=loadImage("Alien.png")
  alienimg7=loadImage("Alien.png")
  alienimg8=loadImage("Alien.png")
  alienimg9=loadImage("Alien.png")
  alienimg10=loadImage("Alien.png")
}

function setup() {
 createCanvas(800,400);
 
 gameover=createSprite(400, 350, 50, 50);
 gameover.addImage(gameoverimg)
 gameover.scale=0.4
 gameover.visible=false

 plane=createSprite(400, 350, 50, 50);
 plane.addImage(planeimg)
 plane.scale=0.4
 plane.visible=true

 bullet1=createSprite(plane.x,plane.y-50,50,50)
 bullet1.addImage(bulletimg2)
 bullet1.scale=2.5
 bullet1.visible=false

 bullet2=createSprite(plane.x,plane.y-50,50,50)
 bullet2.addImage(bulletimg3)
 bullet2.scale=2.5
 bullet2.visible=false

 bullet3=createSprite(plane.x,plane.y-50,50,50)
 bullet3.addImage(bulletimg4)
 bullet3.scale=2.5
 bullet3.visible=false

 bullet4=createSprite(plane.x,plane.y-50,50,50)
 bullet4.addImage(bulletimg5)
 bullet4.scale=2.5
 bullet4.visible=false

 bullet5=createSprite(plane.x,plane.y-50,50,50)
 bullet5.addImage(bulletimg6)
 bullet5.scale=2.5
 bullet5.visible=false

 bullet6=createSprite(plane.x,plane.y-50,50,50)
 bullet6.addImage(bulletimg7)
 bullet6.scale=2.5
 bullet6.visible=false

 bullet7=createSprite(plane.x,plane.y-50,50,50)
 bullet7.addImage(bulletimg8)
 bullet7.scale=2.5
 bullet7.visible=false

 bullet8=createSprite(plane.x,plane.y-50,50,50)
 bullet8.addImage(bulletimg9)
 bullet8.scale=2.5
 bullet8.visible=false

 bullet9=createSprite(plane.x,plane.y-50,50,50)
 bullet9.addImage(bulletimg10)
 bullet9.scale=2.5
 bullet9.visible=false

 bullet10=createSprite(plane.x,plane.y-50,50,50)
 bullet10.addImage(bulletimg1)
 bullet10.scale=2.5
 bullet10.visible=false

 alien1=createSprite(50,50, 50, 50)
 alien1.addImage(alienimg1)
 alien1.scale=0.5
 alien1.velocityY=0.9

 alien2=createSprite(130,50, 50, 50)
 alien2.addImage(alienimg2)
 alien2.scale=0.5
 alien2.velocityY=0.9

 alien3=createSprite(210, 50, 50, 50)
 alien3.addImage(alienimg3)
 alien3.scale=0.5
 alien3.velocityY=0.9

 alien4=createSprite(290,50, 50, 50)
 alien4.addImage(alienimg4)
 alien4.scale=0.5
 alien4.velocityY=0.9

 alien5=createSprite(370,50, 50, 50)
 alien5.addImage(alienimg5)
 alien5.scale=0.5
 alien5.velocityY=0.9

 alien6=createSprite(450,50, 50, 50)
 alien6.addImage(alienimg6)
 alien6.scale=0.5
 alien6.velocityY=0.9

 alien7=createSprite(530,50, 50, 50)
 alien7.addImage(alienimg7)
 alien7.scale=0.5
 alien7.velocityY=0.9

 alien8=createSprite(610,50, 50, 50)
 alien8.addImage(alienimg8)
 alien8.scale=0.5
 alien8.velocityY=0.9

 alien9=createSprite(690,50, 50, 50)
 alien9.addImage(alienimg9)
 alien9.scale=0.5
 alien9.velocityY=0.9

 alien10=createSprite(770,50, 50, 50)
 alien10.addImage(alienimg10)
 alien10.scale=0.5
 alien10.velocityY=0.9
}

function draw() {
 background(0);
 //image(back,0,0,800,400)
 move()
 aliens()
 textSize(20)
 fill('white')
 text("Number Of Bullets:"+round(bulletnum),10,20)
 drawSprites();
}

function move() {
 if (keyIsDown(LEFT_ARROW)) {
   plane.x-=5
 }
     
  if (keyIsDown(RIGHT_ARROW)) {
   plane.x+=5
  }
  
  if (keyCode===32) {
    if (bulletCurrent=1 && bulletnum>0) {
      bulletnum-=0.5
      bullet1.visible=true
      bullet1.x=plane.x
      bullet1.y=plane.y-50
      bullet1.velocityY-=2
      bulletCurrent+=1
      keyCode=0
      
     }else if(bulletCurrent=2 && bulletnum>0){
      bulletnum-=0.5
      bullet2.visible=true
      bullet2.x=plane.x
      bullet2.y=plane.y-50
      bullet2.velocityY-=2
      bulletCurrent+=1
      keyCode=0
     }else if (bulletCurrent=3 && bulletnum>0) {
      bulletnum-=0.5
      bullet3.visible=true
      bullet3.x=plane.x
      bullet3.y=plane.y-50
      bullet3.velocityY-=2
      bulletCurrent+=1
      keyCode=0 
      
     } else if (bulletCurrent=4 && bulletnum>0) {
      bulletnum-=0.5
      bullet4.visible=true
      bullet4.x=plane.x
      bullet4.y=plane.y-50
      bullet4.velocityY-=2
      bulletCurrent+=1
      keyCode=0 
      
     } else if(bulletCurrent=5&& bulletnum>0) {
      bulletnum-=0.5
      bullet5.visible=true
      bullet5.x=plane.x
      bullet5.y=plane.y-50
      bullet5.velocityY-=2
      bulletCurrent+=1
      keyCode=0 
      
     } else if (bulletCurrent=6 && bulletnum>0) {
      bulletnum-=0.5
      bullet6.visible=true
      bullet6.x=plane.x
      bullet6.y=plane.y-50
      bullet6.velocityY-=2
      bulletCurrent+=1
      keyCode=0 
      
     } else if (bulletCurrent=7 && bulletnum>0) {
      bulletnum-=0.5
      bullet7.visible=true
      bullet7.x=plane.x
      bullet7.y=plane.y-50
      bullet7.velocityY-=2
      bulletCurrent+=1
      keyCode=0 
       
     } else if (bulletCurrent=8 && bulletnum>0) {
      bulletnum-=0.5
      bullet8.visible=true
      bullet8.x=plane.x
      bullet8.y=plane.y-50
      bullet8.velocityY-=2
      bulletCurrent+=1
      keyCode=0 
       
     } else if (bulletCurrent=9 && bulletnum>0) {
      bulletnum-=0.5
      bullet9.visible=true
      bullet9.x=plane.x
      bullet9.y=plane.y-50
      bullet9.velocityY-=2
      bulletCurrent+=1
      keyCode=0 
       
      } else if (bulletCurrent=10 && bulletnum>0) {
        bulletnum-=0.5
      bullet10.visible=true
      bullet10.x=plane.x
      bullet10.y=plane.y-50
      bullet10.velocityY-=2
      bulletCurrent+=1
      keyCode=0 
    }
    
  }
} 

function aliens() {
  // Bullet 1

  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }

  // Bullet 2

  if (bullet2.isTouching(alien1)) {
    bullet2.visible=false
    alien1.visible=false
  }
  if (bullet2.isTouching(alien2)) {
    bullet2.visible=false
    alien2.visible=false
  }

  if (bullet2.isTouching(alien3)) {
    bullet2.visible=false
    alien3.visible=false
  }
  
  if (bullet2.isTouching(alien4)) {
    bullet2.visible=false
    alien4.visible=false
  }

  if (bullet2.isTouching(alien5)) {
    bullet2.visible=false
    alien5.visible=false
  }

  if (bullet2.isTouching(alien6)) {
    bullet2.visible=false
    alien6.visible=false
  }

  if (bullet2.isTouching(alien7)) {
    bullet2.visible=false
    alien7.visible=false
  }

  if (bullet2.isTouching(alien8)) {
    bullet2.visible=false
    alien8.visible=false
  }

  if (bullet2.isTouching(alien9)) {
    bullet2.visible=false
    alien9.visible=false
  }

  if (bullet2.isTouching(alien10)) {
    bullet2.visible=false
    alien10.visible=false
  }

  // Bullet 3

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }

  // Bullet 4

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }

  // Bullet 5

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }

  // Bullet 6

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }

  // Bullet 7

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }

  // Bullet 8

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }

  // Bullet 9

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }

  // Bullet 10

  if (bullet1.isTouching(alien1)) {
    bullet1.visible=false
    alien1.visible=false
  }
  if (bullet1.isTouching(alien2)) {
    bullet1.visible=false
    alien2.visible=false
  }

  if (bullet1.isTouching(alien3)) {
    bullet1.visible=false
    alien3.visible=false
  }
  
  if (bullet1.isTouching(alien4)) {
    bullet1.visible=false
    alien4.visible=false
  }

  if (bullet1.isTouching(alien5)) {
    bullet1.visible=false
    alien5.visible=false
  }

  if (bullet1.isTouching(alien6)) {
    bullet1.visible=false
    alien6.visible=false
  }

  if (bullet1.isTouching(alien7)) {
    bullet1.visible=false
    alien7.visible=false
  }

  if (bullet1.isTouching(alien8)) {
    bullet1.visible=false
    alien8.visible=false
  }

  if (bullet1.isTouching(alien9)) {
    bullet1.visible=false
    alien9.visible=false
  }

  if (bullet1.isTouching(alien10)) {
    bullet1.visible=false
    alien10.visible=false
  }
}