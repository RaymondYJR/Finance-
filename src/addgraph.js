// function graphCreateFunction(str,arr) {
//   const table = document.getElementById("user-designed-data");
//   const graph = table.insertgraph(0);
//   cell1.innerHTML = str;
//   cell2.innerHTML = arr[0];
// }

let add_graph_form = document.getElementById('addgraph-form');

const addgraph = (event) => {
  event.preventDefault();
  let newgraphname = document.getElementById("addgraph-graphname-input").value;
  let datasetgraphname = document.getElementById("data-select-graph").value;
  const datasetonedata = getHead()[datasetgraphname];

  let barstatus = document.getElementById("addgraph-bar").checked;
  let piestatus = document.getElementById("addgraph-pie").checked;
  let linestatus = document.getElementById("addgraph-line").checked;

  let addgraphdata;

  if (newgraphname === "") {
    alert("请填写图表名称");
  } else if (datasetgraphname === "") {
    alert("请选取一组数据");
  } else if (barstatus === false && piestatus === false && linestatus === false) {
    alert("请选择一种图表类型");
  } else {
    if (barstatus === true) {

    } else if (piestatus === true) {

    } else {

    };
    // graphCreateFunction(`${newgraphname}`, addgraphdata);
    div_hide_addgraph();
  };
}

if (add_graph_form) {
  const submit = document.getElementById('addgraph-submit');
  submit.addEventListener("click", addgraph);
}
