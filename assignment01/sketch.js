function setup() {
  //Set up the canvas 
  createCanvas(600, 400);

  background(169, 244, 249);

  //Make the hills
  fill(50, 122, 51);
  noStroke();
  arc(300,200,250,100,3.14,0); //x-coord, y-coord, width, height, start angle, end angle
  arc(100,200,250,100,3.14,0);
  arc(490,200,250,100,3.14,0);
  rect(0,200,600,200);		//x-coord, y-coord, width, height

  //Make the house
  fill(158, 99, 22);
  rect(380,170,100,100);
  fill(158, 40, 21);
  triangle(380,170, 480,170, 430,100);

  //Chimney
  fill(130, 30, 14);
  rect(450,120,20,40);

  //Windows
  fill(156, 185, 188);
  rect(390,205,20,25);
  rect(450,205,20,25);

  //Door
  fill(89, 63, 24);
  rect(415,220,30,50);

  //Tree 1
  fill(79, 52, 13);
  rect(200,150,15,100);

  fill(48, 89, 18);
  ellipse(208,130,100,100);

  fill(79,52,13);
  triangle(200,180, 180,120, 210,180);
  triangle(205,180, 230,120, 215,180);
  triangle(203,180, 200,105, 210,180);

  //Tree 1 Shadow
  fill(39, 96, 41);
  quad(200,250, 215, 250, 140,300, 120,300);
  ellipse(150,290,80,35);

  //Tree 2
  fill(79, 52, 13);
  rect(100,250,15,100);

  fill(48, 89, 18);
  ellipse(110,230,100,100);

  fill(79,52,13);
  triangle(100,280, 80,215, 115,290);
  triangle(113,290, 135,215, 100,290);

  //Tree 2 Shadow
  fill(39, 96, 41);
  quad(100,350, 115,350, 55,400, 40,400);
  ellipse(45,400,80,35);


  //Cloud
  fill(255);
  ellipse(100,50,30,30);
  ellipse(125,60,40,40);
  ellipse(135,70,35,35);
  ellipse(80,75,45,45);
  ellipse(110,80,35,35);

  //Sun
  fill(242, 242, 116);
  ellipse(500,50,50,50);
  //House shadow
  fill(39, 96, 41);
  quad(380,270, 480, 270, 390,315, 300, 315);

  //Signature
  var name = "Rebecca Hom";
  fill(50);
  text(name, 500,380,100,100);

}