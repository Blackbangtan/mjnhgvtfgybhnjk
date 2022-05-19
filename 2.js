img="";
status="";
objects=[];

function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas = createCanvas(640 , 420);
canvas.center();
objector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
image(img,0,0,640,420);
if(status!=""){
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status:objects detected";
fill("purple");
percent= floor(objects[i].confidence*100);
text(objects[i].label+" "+ percent +"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("black");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
console.log("rectangles drawn");
}
}

}

function modelLoaded(){
console.log("modelLoaded");
status=true;
objector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}