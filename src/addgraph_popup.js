function div_show_addgraph() {
  document.getElementById('addgraph-popup').style.display = "block";
  document.getElementsByClassName("overlay")[0].style.display = "block";
  updateDropdownList();
}

function div_hide_addgraph(){
  document.getElementById('addgraph-popup').style.display = "none";
  document.getElementsByClassName("overlay")[0].style.display = "none";
}
