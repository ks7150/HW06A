let word1 = "this"; 
let word4 = "wind";

let wordPoints1;
let wordPoints4;

let word2 = "how";
let word5 = "it";
let word6 = "changes";
let word7 = "direction";

let wordPoints2;
let wordPoints5;
let wordPoints6;
let wordPoints7;

let word3= "my";
let word8= "fickle";
let word9= "mind";

let wordPoints3;
let wordPoints8;
let wordPoints9;

let s0 = "this wind, how it changes direction- my fickle mind";
//let s1="this wind, how it changes";
//let s2="direction- my fickle mind";

let mFont;
let mSize = 40;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Helvetica");
  textSize(30);
  textAlign(CENTER, CENTER);
  fill("white");

  words = word1.split(" ");

  textSize(75);
  textAlign(TOP, LEFT);
  

  words = word2.split(" ");

  textSize(50);
  textAlign(TOP, RIGHT);


  words = word3.split(" ");


}

function draw() {
  background(random(30), 132, 176);

  let wordIndex = 1/2*second() % word1.length;
  let myWord = word1[wordIndex];

  text(myWord, width/2 , height / 4);


  let wordIndex2 = 1/2*second() % word2.length;
  let myWord2 = word2[wordIndex2];

  text(myWord2, width/3, height / 2);

  let wordIndex3 = 1/2*second() % word3.length;
  let myWord3 = word3[wordIndex3];

  text(myWord3, 600, 800);

 let wordIndex4 = 2*second() % word4.length;
  let myWord4 = word4[wordIndex4];

  text(myWord4, 300 , 400);

  let wordIndex5 = 2*second() % word5.length;
  let myWord5 = word5[wordIndex5];

  text(myWord5, 100 , 600);

  let wordIndex6 = 1/2*second() % word6.length;
  let myWord6 = word6[wordIndex6];

  text(myWord6, 250 , 500);


  let wordIndex7 = 1/2*second() % word7.length;
  let myWord7 = word7[wordIndex7];

  text(myWord7, 350 , 700);

  let wordIndex8 = 2*second() % word8.length;
  let myWord8 = word8[wordIndex8];

  text(myWord8, 450 , 100);

  let wordIndex9 = 1/2*second() % word9.length;
  let myWord9 = word9[wordIndex9];

  text(myWord9, 100 , 200);


  for (let i = 0; i < s0.length; i++) {
  let letter = s0[i];
let xy = map(i, 0, 30, 10, 1000);
    text(letter, xy, 20);
  }


  text(s0,mouseX,mouseY)



}
 




  






