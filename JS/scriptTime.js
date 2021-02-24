let score, minute = 0,second = 0,hour = 0;
//let  minute2 = 0,second2 = 0,hour2 = 0;
second2=document.getElementById("addSecond2");
minute2=document.getElementById("addMinute2");
hour2=document.getElementById("addHour2");
let Timer = {
  addTime() {
    document.getElementById("addHour").innerHTML = hour;
    document.getElementById("addMinute").innerHTML = minute;
    document.getElementById("addSecond").innerHTML = second;
    ++second;
    if(second<10){second2.style.display="block";}
    if(second>10){second2.style.display="none";}
    if (second == 60){second = 0; minute++;}
    if(minute>10){minute2.style.display="none";}
    if(minute<10){minute2.style.display="block";}
    if(hour>10){hour2.style.display="none";}
    if(hour<10){hour2.style.display="block";}
    if (minute == 60){hour++; minute = 0;}
    score = window.setTimeout("Timer.addTime()",1000);
  },
  start() {
    if (!score)
      this.addTime();
  },
  stop() {
    if (score) {
      clearTimeout(score);
      score=0;}
  },
  startAgain(){
    second2.style.display="block";
    minute2.style.display="block";
    hour2.style.display="block";
    hour = 0;
    minute = 0;
    second = 0;
    window.clearInterval(score);
    score = 0;
    document.getElementById("addHour").innerHTML="0";
    document.getElementById("addMinute").innerHTML="0";
    document.getElementById("addSecond").innerHTML="0";
  },
};