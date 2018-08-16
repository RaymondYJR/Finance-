Chart.defaults.global.defaultFontSize = 15;

const ctx = document.getElementById("default-barchart").getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# 总资产',
      data: [2070.00, 2318.39, 2903.45, 3216.86, 3753.19],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

const lctx = document.getElementById("default-lineChart").getContext('2d');
let lineChart = new Chart(lctx, {
  type: 'line',
  data: {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# 总负债',
      data: [834.51, 1202.92, 1709.90, 1934.37, 2412.72]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

const pctx = document.getElementById("default-pieChart").getContext('2d');
let pieChart = new Chart(pctx, {
  type: 'pie',
  data: {
    labels: ["现金", "短期投资", "应收款", "存货", "其他流动资产", "固定资产", "长期投资", "商誉", "无形资产", "其他非流动资产"],
    datasets: [{
      data: [20, 10, 30, 48, 8, 12, 34, 5, 4, 14],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(152, 114, 132, 0.2)',
        'rgba(117, 185, 190, 0.2)',
        'rgba(208, 214, 181, 0.2)',
        'rgba(249, 181, 172, 0.2)',
        'rgba(238, 118, 116, 0.2)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(152, 114, 132, 1)',
        'rgba(117, 185, 190, 1)',
        'rgba(208, 214, 181, 1)',
        'rgba(249, 181, 172, 1)',
        'rgba(238, 118, 116, 1)'
      ],
    }]
  }
});

