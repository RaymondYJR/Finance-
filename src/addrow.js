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
  const tablebody = document.getElementById("user-designed-data");
  tablebody.insertAdjacentHTML("beforeend",
   `<tr class="graphhelper parent" id="${str}">
      <th scope="row" class="first-show i-hate-raymond">${str}</th>
      <td id="${str}2013">${arr[0]}</td>
      <td id="${str}2014">${arr[1]}</td>
      <td id="${str}2015">${arr[2]}</td>
      <td id="${str}2016">${arr[3]}</td>
      <td id="${str}2017">${arr[4]}</td>
      <td><a onclick="hide_added_row(${str})"><span class="btn">隐藏</span></a></td>
    </tr>`
  );
}

let add_row_form = document.getElementById('addrow-form');

const addrow = (event) => {
  event.preventDefault();
  let newdataname = document.getElementById("addrow-dataname-input").value;
  let datasetonename = getSelectedOption(document.getElementById("dataselectone")).innerHTML;
  const datasetonedata = getHead()[datasetonename];
  let datasettwoname = getSelectedOption(document.getElementById("dataselecttwo")).innerHTML;
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
