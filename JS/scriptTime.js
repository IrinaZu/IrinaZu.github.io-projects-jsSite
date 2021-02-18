let score, minute = 0,second = 0,hour = 0;

let Timer = {
  addTime() {
    document.getElementById("addHour").innerHTML = hour;
    document.getElementById("addMinute").innerHTML = minute;
    document.getElementById("addSecond").innerHTML = second;
    ++second;
    if (second == 60){second = 0; minute++;}
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