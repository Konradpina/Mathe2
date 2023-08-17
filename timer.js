var seconds=0
var minutes=0
var houers=0
var timev=true

function time(option){
    if(option==="start"){
         timedtime =setInterval(timer, 1000) 
         timev=true   
    }else if(option==="stop"){
        window.clearInterval(timedtime)
        timev=false
    }
}
time("start")

function timer(){
    seconds++
    if(seconds===60){
        seconds=0
        minutes++
    }
    if(minutes===60){
        minutes=0
        houers++
    }
    
    
    document.getElementById("timedisplay").innerText=`${houers}:${minutes}:${seconds}`
}
function changetime(){
    if(timev){
        time("stop")
    }else{
        time("start")
    }

}
function continuetime(){
    if(timev===false){
        time("start")
    }
}