const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2,stand3,stand4;
var ball;
var slingShot;
var polygon_img;
var carnival,carnival_image
var w,fails;
var billboard,sling2;
function preload(){
  polygon_img=loadImage("Carnival ball.jpg");
 carnival_image=loadImage("Carnival.jpg")
}
// My Game Is the Rigged Carnival Game. You have to knock down the pins in ordor to get a reward, but I altered the mass to 40! It is impossible to win!!!
function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(790,550,200,15);
  stand2 = new Stand(790,400,200,15);
  stand3 = new Stand(790,250,200,15)
  stand4 = new Stand(790,120,200,15)
  //level one
  block1 = new Block(840,525,40,40);
  block2 = new Block(800,525,40,40);
  block3 = new Block(760,525,40,40);
  block4 = new Block(820,485,40,40);
  block5 = new Block(780,485,40,40);
  block6 = new Block(800,445,40,40);
  
  console.log(block1);
  //level two
  block7 = new Block(840,350,40,40);
  block8 = new Block(800,350,40,40);
  block9 = new Block(760,350,40,40);
  block10 = new Block(820,310,40,40);
  block11 = new Block(780,310,40,40);
  block12 = new Block(800,270,40,40);
 
 
  //level three
  block13 = new Block(840,205,40,35);
  block14 = new Block(800,205,40,35);
  block15 = new Block(760,205,40,35);
  block16 = new Block(820,165,40,35);
  blocks1 = new Block(780,165,40,35);
  blocks2 = new Block(800,125,40,35);
  //newer pins
  
  blocks3 = new Block(840,95,40,40);
  blocks4 = new Block(810,95,40,40);
  blocks5 = new Block(780,95,40,40);
  blocks6 = new Block(830,55,40,40);
  blocks7 = new Block(790,55,40,40);
  blocks8 = new Block(810,15,40,40)
  //top
//  blocks9 = new Block(1700,95,30,40);

  //ball holder with slings
  push();
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
pop();
}
function draw() {
  background(carnival_image); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  push();
  textSize(20);
  fill("black");
  text("Drag the Hexagonal Stone and Release it,knock down all of the pins to win!",100,30);
 pop();
  ground.display();
  
 
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  stand2.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  stand4.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stand1.display();
  
    fill("pink")
  //blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
stand3.display();

  slingShot.display();

  if(w==="true"){
    textSize(20)
    text("HAHA, you failed! It still cracks me up!",50,230);
    text("HAHA, you failed! There are other people in line , you know!",50,250);
    text("HAHA, you failed! HAHHA!",50,270);
}

  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
  var b=random(1,10)
 
}
function keyPressed(){
if(keyCode===32){
  slingShot.attach(ball)

}

}
