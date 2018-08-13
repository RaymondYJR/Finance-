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
