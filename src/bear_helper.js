//  const more = document.getElementsByClassName('question-helper')
//   console.log(more)
//   for (const w of more) {
//     function appearsQM() {
//       w.insertAdjacentHTML('beforeend', '?');
//     }
//     w.addEventListener("mouseover", appearsQM);


// };




function div_show_bear() {
  changeBear = document.getElementById('bear-popup')
  changeBear.style.display = "flex";
  document.getElementsByClassName("overlay")[0].style.display = "block";
}

function div_hide_bear(){
  document.getElementById('bear-popup').style.display = "none";
  document.getElementsByClassName("overlay")[0].style.display = "none";
}


const injectBear = document.getElementsByClassName('question-helper')
for (const w of injectBear) {
  w.addEventListener("click", div_show_bear)
}

const exitBear = document.getElementById('bye-bear')
exitBear.addEventListener("click", div_hide_bear)
