/*var name = "Malik Ahmed Nawaz Noon"
console.log(name)
console.log(typeof name)

var num = 786
console.log(num)
console.log(typeof num)

var bool = true
console.log(bool)
console.log(typeof bool)

var obj = null
console.log(obj)
console.log(typeof obj)

var array1 = [1,2,3,4,5]
console.log(array1)
console.log(typeof array1)

var array2 = [7,"JS",true,null]
console.log(array2)
console.log(typeof array2)

var array3 = [[1,2],[784,234],["AngryBirds"]]
console.log(array3[1][1])
console.log(typeof array3)*/

const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var box1, box2, ground

var engine, world, object

var gameState = "onSling"

var bg, bgImage

var score = 0 

function preload() {
  getBackgroundImage()  
}
  
function setup() {
  createCanvas(1200,600);
  engine = Engine.create()
  world = engine.world
  box1 = new Box(700,550,70,70, "#cfb997","white",1)
  box2 = new Box(920,550,70,70,"#cfb997","white",1)
  box3 = new Box(700,470,70,70, "#cfb997","white",1)
  box4 = new Box(920,470,70,70,"#cfb997","white",1)
  box5 = new Box(810,330,70,70, "#cfb997","white",1)
  ground = new Ground(600,height-12,width,20)
  platform = new Ground(150,483,300,190)
  pig1 = new Pig(810,450)
  pig2 = new Pig(810,580)
  log1 = new Log(810,490,PI/2,300, "#91672c","white",1)
  log2 = new Log(810,410,PI/2,300,"#91672c","white",1)
  log3 = new Log(760,340,PI/7,150, "#91672c","white",1)
  log4 = new Log(870,340,-PI/7,150,"#91672c","white",1)
  bird = new Bird(200,200)
  sling = new SlingShot(bird.body,{x:200,y:200})
  
}


function draw() {
  if (bgImage)
  background(bgImage); 
  noStroke()
  textSize(35)
  fill(255)
  text("Score: "+score,width-300,50)
  stroke(0)
  pig1.score()
  pig2.score()
  Engine.update(engine)


  

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  ground.display()
  pig1.display()
  pig2.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  bird.display()
  platform.display()
  sling.display()
  
 
}

function mouseDragged() {
  //if (gameState !== "launched") {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  //}
  
}

function mouseReleased() {
  gameState = "launched"
  sling.fly()
  
}

function keyPressed() {
  if(keyCode === 32 && bird.body.speed<2) {
    bird.trajectory = []
    Matter.Body.setPosition(bird.body,{x:200,y:200})
    sling.attach(bird.body)

  }
}
async function getBackgroundImage() {
  
/*var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London")
  var responseJSON = await response.json()
  console.log(responseJSON.datetime)
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13)
  console.log(hour)
  if (hour>=06 && hour<=18) {
    bg = "sprites/bg.png"
  }else{
    bg = "sprites/bg2.png"
  }*/
  bg = "sprites/bg.png"
  bgImage = loadImage(bg)
}