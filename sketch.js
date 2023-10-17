let word1 = "this wind";
let wordPoints1;
let word2 = "how it  changes direction";
let wordPoints2;
let word3= "my fickle mind";
let wordPoints3;
let s0 = "this wind, how it changes direction- my fickle mind";

let mFont;
let mSize = 40;


function setup() {
  createCanvas(2000, 1000);
  textFont("Helvetica");
  textSize(30);
  textAlign(CENTER, CENTER);
  fill("white");

  words = word1.split(" ");

  textSize(30);
  textAlign(TOP, LEFT);
  

  words = word2.split(" ");

  textSize(30);
  textAlign(TOP, RIGHT);


  words = word3.split(" ");


}

function draw() {
  background(random(30), 132, 176);

  let wordIndex = second() % word1.length;
  let myWord = word1[wordIndex];

  text(myWord, width/2 , height / 4);


  let wordIndex2 = second() % word2.length;
  let myWord2 = word2[wordIndex2];

  text(myWord2, width/3, height / 2);

  let wordIndex3 = frameCount % word3.length;
  let myWord3 = word3[wordIndex3];

  text(myWord3, 1000, 800);
  
  text(s0, mouseX,mouseY)
 
  
}





