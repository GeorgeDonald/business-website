
var elTime = document.getElementById('time');
setInterval(()=>{
  elTime.innerHTML = (new Date).toLocaleString();
},1000);
