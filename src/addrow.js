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

function add(arr1, arr2) {
  add_result = [];
  for (let i = 0; i < arr1.length; i++) {
    add_result.push((arr1[i] + arr2[i]).toFixed(2));
  };
  return add_result;
};

function minus(arr1, arr2) {
  minus_result = [];
  for (let i = 0; i < arr1.length; i++) {
    minus_result.push((arr1[i] - arr2[i]).toFixed(2));
  };
  return minus_result;
};

function multiply(arr1, arr2) {
  multiply_result = [];
  for (let i = 0; i < arr1.length; i++) {
    multiply_result.push((arr1[i] * arr2[i]).toFixed(2));
  };
  return multiply_result;
};

function divide(arr1, arr2) {
  divide_result = [];
  for (let i = 0; i < arr1.length; i++) {
    divide_result.push((arr1[i] / arr2[i]).toFixed(2));
  };
  return divide_result;
};

function rowCreateFunction(str,arr) {
  const table = document.getElementById("user-designed-data");
  const row = table.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);
  row.classList.add("parent");
  cell1.innerHTML = str;
  cell2.innerHTML = arr[0];
  cell3.innerHTML = arr[1];
  cell4.innerHTML = arr[2];
  cell5.innerHTML = arr[3];
  cell6.innerHTML = arr[4];
}

let add_row_form = document.getElementById('addrow-form');

const addrow = (event) => {
  event.preventDefault();
  let newdataname = document.getElementById("addrow-dataname-input").value;
  let datasetonename = document.getElementById("data-select-one").value;
  const datasetonedata = getHead()[datasetonename];
  let datasettwoname = document.getElementById("data-select-two").value;
  const datasettwodata = getHead()[datasettwoname];

  let addstatus = document.getElementById("addrow-add").checked;
  let minusstatus = document.getElementById("addrow-minus").checked;
  let multiplystatus = document.getElementById("addrow-multiply").checked;
  let dividestatus = document.getElementById("addrow-divide").checked;

  let addrowdata;
  // let user = new AV.User();
  // user.setUsername(username);
  // user.setPassword(password);
  // user.setEmail(email);

  if (newdataname === "") {
    alert("请填写数据名称");
  } else if (datasetonename === "") {
    alert("请选取一组数据");
  } else if (datasettwoname === "") {
    alert("请选取另一组数据");
  } else if (addstatus === false && minusstatus === false && multiplystatus === false && dividestatus === false) {
    alert("请选择一种运算方法");
  } else {
    if (addstatus === true) {
      addrowdata = add(datasetonedata, datasettwodata);
    } else if (minusstatus === true) {
      addrowdata = minus(datasetonedata, datasettwodata);
    } else if (multiplystatus === true) {
      addrowdata = multiply(datasetonedata, datasettwodata);
    } else {
      addrowdata = divide(datasetonedata, datasettwodata);
    };
    rowCreateFunction(`${newdataname}`, addrowdata);
    div_hide_addrow();
  };
}

if (add_row_form) {
  const submit = document.getElementById('addrow-submit');
  submit.addEventListener("click", addrow);
}
