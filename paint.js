var drawing = false;
var context;

window.onload=function()
{
    //Clear Button
    document.getElementById('btnClear').addEventListener('click',
    function(){
        context.clearRect(0,0, context.canvas.width, context.canvas.height);
    }, false);

    //BAck Button
    document.getElementById('btnBack').addEventListener('click',
    function(){
        document.getElementById('myCanvas').style.display ="block";
        document.getElementById('saveArea').style.display ="none";
        document.getElementById('tools').style.display ="block";
    
    }, false);

    //Width Scale
    document.getElementById('lineWidth').addEventListener('change',
    function(){
        context.lineWidth = document.getElementById('lineWidth').value;

    }, false);

    //Color
    document.getElementById('btnSave'),addEventListener('click',
    function(){
        context.strokeStyle = document.getElementById('colorChange').value;

    }, false);

    //Save
    document.getElementById('btnSave').addEventListener('click',
    function(){
        document.getElementById('myCanvas').style.display ="none";
        document.getElementById('saveArea').style.display ="block";
        document.getElementById('tools').style.display ="none";

        var dataURL = document.getElementById('myCanvas').toDataURL();
        document.getElementById('canvasImg').src = dataURL;
    }, false);

//Size Canvas
context = document.getElementById('myCanvas').getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight-60;

//Mouse movement
 document.getElementById('myCanvas').onmousemove = handleMouseMove;
 document.getElementById('myCanvas').onmousedown = handleDown;
 document.getElementById('myCanvas').onmouseup = handleUp;

//Style line
context.strokeStyle = "#000";
context.lineJoin = "round";
context.lineWidth = 5;

//Hide Save Area
document.getElementById('saveArea').style.display = "none";
}

function handleMouseMove(e){
    console.log(e.clientX);
    console.log(e.clientY);
    if(drawing){
        context.lineTo(e.clientX, e.clientY-150);
        context.closePath();
        context.stroke();
        context.moveTo(e.clientX, e.clientY-150);
    } else{
        context.moveTo(e.clientX, e.clientY);
    }
}


function handleDown(e){
    drawing = !drawing;
    console.log(drawing);
    context.moveTo(e.clientX, e.clientY);
    context.beginPath();

}

function handleUp(){
    drawing = !drawing;
    console.log(drawing);

}
