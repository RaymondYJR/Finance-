function graphCreateBar(str, arr) {
  const losefield = document.getElementById(str).getContext('2d');
  let newBarChart = new Chart(losefield, {
    type: 'bar',
    data: {
      labels: ["2013", "2014", "2015", "2016", "2017"],
      datasets: [{
        label: `# ${str}`,
        data: arr,
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)'
        // ],
        // borderColor: [
        //   'rgba(255,99,132,1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)'
        // ],
        borderWidth: 1
      }]
    },
    options: {scales: {yAxes: [{ticks: {beginAtZero:true}}]}}
  });
};

// function graphCreatePie(str, arr) {
//   const plosefield = document.getElementById("default-pieChart").getContext('2d');
//   let newPieChart = new Chart(plosefield, {
//     type: 'pie',
//     data: {
//       labels: [, , , , ],
//       datasets: [{
//         data: arr
//       }]
//     }
//   });
// };

function graphCreateLine(str, arr) {
  const llosefield = document.getElementById(str).getContext('2d');
  let newLineChart = new Chart(llosefield, {
    type: 'line',
    data: {
      labels: ["2013", "2014", "2015", "2016", "2017"],
      datasets: [{
        label: `# ${str}`,
        data: arr,
      }]
    },
    options: {scales: {yAxes: [{ticks: {beginAtZero:true}}]}}
  });
};

function addCanvasToHtml(str) {
  const container_block = document.getElementById('graphs-row');
  container_block.insertAdjacentHTML("beforeend", `<div class="col-md-6"><div class="graph-card"><canvas id="${str}" width="200" height="200"></canvas></div></div>`);
};

let add_graph_form = document.getElementById('addgraph-form');

const addgraph = (event) => {
  event.preventDefault();
  let newgraphname = document.getElementById("addgraph-graphname-input").value;
  let datasetgraphname = document.getElementById("data-select-graph").value;
  const datasetgraphdata = getHead()[datasetgraphname];

  let barstatus = document.getElementById("addgraph-bar").checked;
  let piestatus = document.getElementById("addgraph-pie").checked;
  let linestatus = document.getElementById("addgraph-line").checked;

  let graphtype;

  if (newgraphname === "") {
    alert("请填写图表名称");
  } else if (datasetgraphname === "") {
    alert("请选取一组数据");
  } else if (barstatus === false && piestatus === false && linestatus === false) {
    alert("请选择一种图表类型");
  } else {
    if (barstatus === true) {
      addCanvasToHtml(`${newgraphname}`);
      graphCreateBar(`${newgraphname}`, datasetgraphdata);
    } else if (piestatus === true) {
      addCanvasToHtml(`${newgraphname}`);
      graphCreatePie(datasetgraphdata);
    } else {
      addCanvasToHtml(`${newgraphname}`);
      graphCreateLine(`${newgraphname}`, datasetgraphdata);
    };
    div_hide_addgraph();
  };
}

if (add_graph_form) {
  const submit = document.getElementById('addgraph-submit');
  submit.addEventListener("click", addgraph);
}
