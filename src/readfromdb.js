// function getUrlParams(search) {
//   let hashes = search.slice(search.indexOf('?') + 1).split('&')
//   let params = {}
//   hashes.map(hash => {
//       let [key, val] = hash.split('=')
//       params[key] = decodeURIComponent(val)
//   })
//   return params
// }
// const ticker = getUrlParams(window.location.search).ticker;
// let year = [2013, 2014, 2015, 2016, 2017];

for (const y of year) {
  const query = new AV.Query('Balance_Sheet')
    .equalTo('FY', y)
    .equalTo('Ticker', ticker)
    .find()
    .then(res => {
      const financials = res[0].attributes;
      const row_name = ['cashandequivalents', 'shortterminvestments', 'notereceivable', 'accountsreceivable', 'netinventory', 'othercurrentassets', 'totalcurrentassets', 'netppe', 'longterminvestments', 'goodwill', 'intangibleassets', 'othernoncurrentassets', 'totalnoncurrentassets', 'totalassets', 'shorttermdebt', 'accountspayable', 'accruedexpenses', 'totalcurrentliabilities', 'longtermdebt', 'othernoncurrentliabilities', 'totalnoncurrentliabilities', 'totalliabilities', 'commitmentsandcontingencies', 'commonequity', 'retainedearnings', 'aoci', 'totalcommonequity', 'totalequity', 'totalequityandnoncontrollinginterests', 'totalliabilitiesandequity', 'currentdeferredrevenue', 'noncurrentdeferredrevenue']
      for (const item of row_name) {
        const output = document.getElementById(item+`${y}`);
        output.innerHTML = (financials[item] / 100000000).toFixed(2);
      };
    });
};

function getHead() {
  result = {};
  const tablerows = document.getElementsByClassName('graphhelper');
  for (let k = 1; k < tablerows.length; k++) {
    const tablerow = document.getElementsByClassName('graphhelper')[k].textContent.split("\n").join("").split(" ").filter(item => item !== "");
    result[tablerow[0]] = tablerow.slice(1);
  };
  return result;
};

console.log(getHead());
