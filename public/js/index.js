
var elTime = document.getElementById('time');
function updateTime(){
  elTime.innerHTML = (new Date).toLocaleString();
}
window.onload=function(){
updateTime();
setInterval(updateTime,1000);
};
