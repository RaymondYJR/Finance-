function div_show_addrow() {
  document.getElementById('addrow-popup').style.display = "block";
  document.getElementsByClassName("overlay")[0].style.display = "block";
  updateDropdownList();
}

function div_hide_addrow() {
  document.getElementById('addrow-popup').style.display = "none";
  document.getElementsByClassName("overlay")[0].style.display = "none";
}

function hide_added_row(str) {
  str.style.display = "none";
}

function getHead() {
  result = {};
  const tablerows = document.getElementsByClassName('graphhelper');
  for (let k = 1; k < tablerows.length; k++) {
    const tablerow = document.getElementsByClassName('graphhelper')[k].textContent.split("\n").join("").split(" ").filter(item => item !== "");
    let tablerow_data = [];
    tablerow.slice(1).forEach(function(num){tablerow_data.push(Number(num))});
    result[tablerow[0]] = tablerow_data;
  };
  return result;
};

function updateDropdownList() {
  const dropdownlists = document.getElementsByClassName("dataname-dropdown");
  let options_arr = [];
  for (i = 0; i < document.getElementById("dataselectone").options.length; i++) {
    options_arr.push(document.getElementById("dataselectone").options[i].innerHTML);
  };
  for (const ddl of dropdownlists) {
    for (const item of Object.keys(getHead())) {
      if(options_arr.includes(item) === false) {
        ddl.insertAdjacentHTML("beforeend", `<option value="${item}">${item}</option>`);
      };
    };
  };
}

function getSelectedOption(sel) {
  let opt;
  for (let i = 0; i < sel.options.length; i++) {
    opt = sel.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return opt;
}
