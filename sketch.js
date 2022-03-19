var street,cat,dounut,car_1,car_2,car_3,car_4,gameOver;
var streetImg,cat_runningImg,dounutImg,car_1Img,car_2Img,car_3Img,car_4Img,gameOverImg;
var carGroup,dounutGroup;
var PLAY=1;
var END=0;
var gameState=1;
var car

function preload() {
streetImg = loadImage("street.png");
cat_runningImg = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
dounutImg = loadImage("dounut.png");
car_1Img = loadImage("car_1.png");
car_2Img = loadImage("car_2.png");
car_3Img = loadImage("car_3.png");
car_4Img = loadImage("car_4.png");
gameOverImg = loadImage("gameOver.png");

}

function setup() {

 createCanvas(600,400);
 
 street=createSprite(300,200);
 street.addImage(streetImg);
 street.velocityX = 4;

 cat=createSprite(500,275);
 cat.addAnimation("run",cat_runningImg);
 cat.scale = 0.5
 dounutGroup=new Group();
 carGroup=new Group();
}

function draw() {

if(gameState===PLAY){
    if(street.x > 400 ){
        street.x = width/2;
      }
}
 drawSprites();


 carGroup.add(car_1,car_2,car_3,car_4);

 spawnCars();
}

function spawnCars(){
  if (frameCount % 60 === 0){
    var car = createSprite(600,165,10,40);
    car.velocityX = -(6 + score/100);
  }
}