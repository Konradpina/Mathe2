var Qustionlist=[]
var Ansawerlist=[]
var Questionnumber=0
var Ansawer=""
var Wrongquestionlist=[]
var Wrongansawerlist=[]
var numqeustions=10
var alowedwrong=1
var alowedmin =1
var cmode=false
var correctioncount=0
function definequestion(){
    Qustionlist=[];
    Ansawerlist=[];
    for(i=0;i<numqeustions;i++){
        var num1= Math.floor(Math.random()*10+1);
        var num2= Math.floor(Math.random()*10+1);
        var Question = `${num1} + ${num2} = `;
        var Ansawer = num1+num2;
        Qustionlist.push(Question);
        Ansawerlist.push(Ansawer);
    }
}
definequestion()
defineprocces()

document.getElementById("question").innerText=Qustionlist[0]
document.getElementById("nextquestion").innerText=Qustionlist[1]

function erase(){
    Ansawer=""
    document.getElementById("ansawer").innerText=Ansawer
    document.getElementById("cansawer").innerText=Ansawer
}
function done(){
    if(cmode){
        if (Ansawer==Wrongansawerlist[correctioncount]){
            correctioncount++
            nextcorecction()
         }else{
         document.getElementById("cnextquestion").innerText="versuch es nochmal"
         erase()
        
         }
        
    }else{
        if (Ansawer==Ansawerlist[Questionnumber]){
            console.log("yes") 
         }else{
             Wrongquestionlist.push(Qustionlist[Questionnumber])
             Wrongansawerlist.push(Ansawerlist[Questionnumber])
         }
         lnq()
    }
    
}
function lnq(){
    continuetime()
    
    erase()

    Questionnumber++
    defineprocces()
    if(Qustionlist.length <= Questionnumber){
        endquiz()
        return
    }
    document.getElementById("question").innerText=Qustionlist[Questionnumber]
    document.getElementById("nextquestion").innerText=Qustionlist[Questionnumber+1]
    if(Qustionlist.length-1 === Questionnumber){
        document.getElementById("nextquestion").innerText=""
    }
}
function defineprocces(){
    if(Questionnumber>=numqeustions){
        return
    }
    document.getElementById("process").innerText=`${Questionnumber+1}/${numqeustions}`
}


function endquiz(){
    time("stop")
    var msg
    if (houers>0){
        msg= "Um das nächste Level zu ereichen musst du schneller sein"
    }else if(Wrongquestionlist.length <= alowedwrong && minutes < alowedmin){
       msg="level up"
    }else if(Wrongquestionlist.length >= alowedwrong && minutes >= alowedmin ){
        msg= "Um das nächste Level zu ereichen musst du schneller sein und weniger Fehler machen"
    }else if(Wrongquestionlist.length <= alowedwrong ){
          msg= "Um das nächste Level zu ereichen musst du schneller sein"
    }else if(minutes < alowedmin){
        msg= "Um das nächste Level zu ereichen musst du weniger Fehler machen"
  }
    alert(`Du hast ${Wrongquestionlist.length} Fehler in ${minutes} Minuten und ${seconds} Sekunden gemacht. ${msg}`)
    document.getElementById("question").innerText=Wrongquestionlist;
    correctionmode()
    
}
    
function correctionmode(){
    cmode=true
    document.getElementById("quizbox").hidden=true
    document.getElementById("correctionbox").hidden=false
    nextcorecction()
    return
}

function nextcorecction(){
    
    erase()
    
    if(Wrongquestionlist.length <= correctioncount){
        endcorrection()
        return
    }
    document.getElementById("cquestion").innerText=Wrongquestionlist[correctioncount]
    document.getElementById("cnextquestion").innerText=Wrongquestionlist[correctioncount+1]
    if(Wrongquestionlist.length-1 === correctioncount){
        document.getElementById("cnextquestion").innerText=""
    }
}

function endcorrection(){
    window.open("index.html","_self")
}

function key(number){
    Ansawer=Ansawer+number
    if(cmode){
        document.getElementById("cansawer").innerText=Ansawer
    }else{
        document.getElementById("ansawer").innerText=Ansawer
    continuetime()
    }
}
    