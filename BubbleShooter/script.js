var timer=40;
var score=0;
var newHit;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}

function getNewHit(){
    newHit= Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=newHit;
}

function makeBubble(){
    var clutter="";

 for(var i=0;i<=80;i++){
    var temp = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${temp}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
   var timerInt = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timeval").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER your score is ${score}<h1>`;
        }
    },1000)
     
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
  var clickedNum=  Number(dets.target.textContent);
  if(clickedNum === newHit){
    increaseScore();
    makeBubble();
    getNewHit();
  }
  else{
    score -= 5 ;
    document.querySelector("#scoreVal").textContent=score;
  }
});

makeBubble();
runTimer();
getNewHit();