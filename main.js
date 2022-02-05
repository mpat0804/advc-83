var lastx, lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="black";
var width=1;

var height=screen.height;
var width=screen.width;
var new_height=screen.height-300;
var new_width=screen.width-44;

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    
    lastx=e.touches[0].clientX - canvas.offsetLeft;
    lasty=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    var currentx=e.touches[0].clientX - canvas.offsetLeft;
    var currenty=e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("lastx="+lastx,"lasty="+ lasty);
        ctx.moveTo(lastx, lasty);

        console.log("currentx="+currentx,"currenty="+ currenty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();

    

    lastx=currentx;
    lasty=currenty;



}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}