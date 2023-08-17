
function rotate(){
    var tasks=document.getElementsByClassName("taskc")
    load3task()
    for(i=0;i<tasks.length;i++){
        if(tasks[i].classList.contains("task1")){
            tasks[i].classList.remove("task1")
            tasks[i].classList.add("task3")
        }else if(tasks[i].classList.contains("task2")){
            tasks[i].classList.remove("task2")
            tasks[i].classList.add("task1")
        }else if(tasks[i].classList.contains("task3")){
            tasks[i].classList.remove("task3")
            tasks[i].classList.add("task2")
        }
    }
    resetcanvas()
    return
}

function load3task(){
    var task3 =document.getElementsByClassName("task3")[0].querySelectorAll(".tasktext")
    
    task3[0].innerHTML=randomtask()
    return
    
}
function randomtask(){
   
   let a =Math.floor(Math.random()*100+1)
   let b =Math.floor(Math.random()*100+1)
   let task=`${a} + ${b}`
   return task
}
function resetcanvas(){
    context.clearRect(0,0, context.canvas.width, context.canvas.height);
}

function loadalltask(){
    document.getElementsByClassName("task1")[0].querySelectorAll(".tasktext")[0].innerHTML=randomtask()
    document.getElementsByClassName("task2")[0].querySelectorAll(".tasktext")[0].innerHTML=randomtask()
    document.getElementsByClassName("task3")[0].querySelectorAll(".tasktext")[0].innerHTML=randomtask()

    
    
    return
}
loadalltask()