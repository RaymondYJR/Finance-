function div_show() {
  document.getElementById('registration-popup').style.display = "block";
  document.getElementsByClassName("overlay")[0].style.display = "block";
}

function div_hide(){
  document.getElementById('registration-popup').style.display = "none";
  document.getElementsByClassName("overlay")[0].style.display = "none";
}

function div_show_login() {
  document.getElementById('login-popup').style.display = "block";
  document.getElementsByClassName("overlay")[0].style.display = "block";
}

function div_hide_login(){
  document.getElementById('login-popup').style.display = "none";
  document.getElementsByClassName("overlay")[0].style.display = "none";
}
