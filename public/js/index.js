
var elTime = document.getElementById('time');
function updateTime(){
  elTime.innerHTML = (new Date).toLocaleString();
}

function setCurTag(){
  id = '';
  switch(window.location.pathname){
    case '/':
      id = 'nav_home';
      break;
    case '/products':
      id = 'nav_products';
      break;
    case '/contact':
      id = 'nav_contact';
      break;
    case '/edit':
      id = 'nav_edit';
      break;
  }
  document.getElementById(id).classList.add('nav_tag_cur')
}

window.onload=function(){
updateTime();
setCurTag();
setInterval(updateTime,1000);
};
