Chart.defaults.global.defaultFontSize = 15;

const ctx = document.getElementById("default-barchart").getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [1,2,3,4,5],//getHead()['资产总计'],
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
      data: [1,2,3,4,5]//getHead()['负债总计']
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

// const pctx = document.getElementById("default-pieChart").getContext('2d');
// let pieChart = new Chart(pctx, {
//   type: 'pie',
//   data: {
//     labels: [, , , , ],
//     datasets: [{
//       data: [20, 10, 30, 48, 8]
//     }]
//   }
// });

