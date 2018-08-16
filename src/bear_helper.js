//  const more = document.getElementsByClassName('question-helper')
//   console.log(more)
//   for (const w of more) {
//     function appearsQM() {
//       w.insertAdjacentHTML('beforeend', '?');
//     }
//     w.addEventListener("mouseover", appearsQM);


// };


let suk = {}

function div_show_bear(event) {
  changeBear = document.getElementById('bear-popup')
  let speechBubble = document.getElementsByClassName("curious")[0]
  let wKey = event.target.innerText
  speechBubble.innerText = suk[wKey]
  console.log(speechBubble)
  changeBear.style.display = "flex";
  console.log(suk)
  document.getElementsByClassName("overlay")[0].style.display = "block";
}

function div_hide_bear(){
  document.getElementById('bear-popup').style.display = "none";
  document.getElementsByClassName("overlay")[0].style.display = "none";
}


const injectBear = document.getElementsByClassName('question-helper')
const addExplain = document.getElementsByClassName('curious')[0]
// addExplain.injectAdjacentHTML
// const accsRecieve = injectBear[0]
// accsRecieve.insertAdjacentHTML
let wArr = []
let text = ["已向客户递交商品或完成服务但客户尚未付款的收入", "公司过去进行收购时所支付的溢价总和", "公司担保的有违约风险的负债和过去经营行为可能导致的潜在负债", "帐面利润总额计提所得税与按税法规定计算所得税应交所得税间的差异"]
for (const w of injectBear) {
  console.log(w)
  w.addEventListener("click", div_show_bear)
  wArr.push(w.innerHTML)
  for (let m of wArr) {
    console.log(m)
    suk[`${m}`] = text[wArr.indexOf(m)]
    console.log(suk)

    console.log(suk.first)
  }
  // if (w.innerHTML === ) {}

  console.log(wArr)
}




const exitBear = document.getElementById('bye-bear')
exitBear.addEventListener("click", div_hide_bear)
