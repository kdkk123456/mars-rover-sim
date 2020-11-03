canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rovervwidth=100;
var roverheight=100;
var roverX=10;
var roverY=10;
var background="mars.jpg";
var rover="rover.png";
function add(){
    bg=new Image();
    bg.onload=uploadbg;
    bg.src=background;
    
    roverimg=new Image();
    roverimg.onload=uploadrover;
    roverimg.src=rover;
}
function uploadbg(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimg,roverX,roverY,rovervwidth,roverheight);
}
window.addEventListener("keydown",kd)
function kd(e){
var keynumber=e.keyCode
console.log(keynumber)
if (keynumber==37){
    left()
    console.log("left is pressed")
    }
    if (keynumber==38){
    up()
}
if (keynumber==39){
    right()
}
if (keynumber==40){
    down()
}
}
function down() {
    if(roverY<=500) {
        roverY=roverY+10
        uploadbg();
        uploadrover();
    }
}
function up() {
    if(roverY>=0) {
        roverY=roverY-10
        uploadbg();
        uploadrover();
}
}
function left() {
    if(roverX>=0) {
        roverX=roverX-10
        uploadbg();
        uploadrover();
    }
}
function right() {
    if(roverX<=700) {
        roverX=roverX+10
        uploadbg();
        uploadrover();
    }
}