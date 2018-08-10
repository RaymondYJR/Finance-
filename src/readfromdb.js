const { Query, User } = AV;
AV.init('HS8Deh8YMUw4Vy6Fl3ixLQNN-gzGzoHsz', 'vCCT2XtjqFeBaTgdPMHTxbbu');

const ticker = getUrlParams(window.location.search).ticker;
let year = [2013, 2014, 2015, 2016, 2017];
const row_name = ['cashandequivalents', 'shortterminvestments', 'notereceivable', 'accountsreceivable', 'netinventory', 'othercurrentassets', 'totalcurrentassets', 'netppe', 'longterminvestments', 'goodwill', 'intangibleassets', 'othernoncurrentassets', 'totalnoncurrentassets', 'totalassets', 'shorttermdebt', 'accountspayable', 'accruedexpenses', 'totalcurrentliabilities', 'longtermdebt', 'othernoncurrentliabilities', 'totalnoncurrentliabilities', 'totalliabilities', 'commitmentsandcontingencies', 'commonequity', 'retainedearnings', 'aoci', 'totalcommonequity', 'totalequity', 'totalequityandnoncontrollinginterests', 'totalliabilitiesandequity', 'currentdeferredrevenue', 'noncurrentdeferredrevenue']
const delay = () => new Promise((resolve) => setTimeout(resolve, 300))

for (const y of year) {
  for (const item of row_name) {
    const query = new AV.Query('Balance_Sheet')
      .equalTo('FY', y)
      .equalTo('Ticker', ticker)
      .select([item])
      .find()
      .then(res => {
        console.log(res[0].attributes);
        const output = document.getElementById(item+`${y}`);
        output.innerHTML = res[0].attributes[item];
      })
      .then(delay)
  };
};
