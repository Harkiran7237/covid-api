var hello;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  //drawSprites();
  abc();
  text(hello,120,150);
}
async function abc(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJSON = await response.json();
  //console.log(responseJSON);
  fill("blue");
  textSize(30);
 var third = responseJSON.statewise;
 //console.log(third[1]);
 hello = third[1].confirmed;
 console.log(hello);
 //setTimeout(function(){
 
// }),3000
 //text(hello,120,150);
// var confirm = third.confirmed;
 //console.log(confirm)
 //setTimeout(function(){ alert("Hello"); }, 3000);
}