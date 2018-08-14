function getUrlParams(search) {
  let hashes = search.slice(search.indexOf('?') + 1).split('&')
  let params = {}
  hashes.map(hash => {
      let [key, val] = hash.split('=')
      params[key] = decodeURIComponent(val)
  })
  return params
}
const ticker = getUrlParams(window.location.search).ticker;
let year = [2013, 2014, 2015, 2016, 2017];
let companyQuery = new AV.Query('Company');
let subscriptionQuery = new AV.Query('Subscription');

let headers = new Headers();
headers.set('Authorization', 'Basic ' + 'ZjNkNmRkMTcxNjNmNGZmMjU2OGE4YWE1ZjNiMTU1YmM6NzQ0OGNiNjY1YTBkYmNjMGNjMjdjNzBlZGRhMGRlZTE=');

const Company = AV.Object.extend('Company');
// const Balance_Sheet = AV.Object.extend('Balance_Sheet');
// const Income_Statement = AV.Object.extend('Income_Statement');
// const Cash_Flow_Statement = AV.Object.extend('Cash_Flow_Statement');

let url_comp = `https://api.intrinio.com/companies?identifier=${ticker}`;
fetch(url_comp, {method:'GET', headers: headers})
  .then(response => response.json())
  .then((data) => {
    const company = new Company();
    company.set('Ticker', ticker);
    company.set('Name', data["name"]);
    company.set('Company_url', data["Company_url"]);
    company.set('Industry_group', data["industry_group"]);
    company.set('Short_description', data["short_description"]);
    company.save();
  });


// for (const y of year) {
//   let url_bs = `https://api.intrinio.com/financials/standardized?identifier=${ticker}&statement=balance_sheet&type=FY&fiscal_year=${y}`;
//   fetch(url_bs, {method:'GET', headers: headers})
//     .then(response => response.json())
//     .then((data) => {
//       const balance_sheet = new Balance_Sheet();
//       balance_sheet.set('FY', y);
//       balance_sheet.set('Ticker', ticker);
//       for (let i = 0; i < (data["data"].length); i++) {
//         balance_sheet.set(data["data"][i]["tag"], data["data"][i]["value"]);
//       };
//       balance_sheet.save();
//     });

  // let url_is = `https://api.intrinio.com/financials/standardized?identifier=${ticker}&statement=income_statement&type=FY&fiscal_year=${y}`;
  // fetch(url_is, {method:'GET', headers: headers})
  //   .then(response => response.json())
  //   .then((data) => {
  //     const income_statement = new Income_Statement();
  //     income_statement.set('FY', y);
  //     income_statement.set('Ticker', ticker);
  //     for (let i = 0; i < (data["data"].length); i++) {
  //       income_statement.set(data["data"][i]["tag"], data["data"][i]["value"]);
  //     };
  //     income_statement.save();
  //   });

  // let url_cfs = `https://api.intrinio.com/financials/standardized?identifier=${ticker}&statement=cash_flow_statement&type=FY&fiscal_year=${y}`;
  // fetch(url_cfs, {method:'GET', headers: headers})
  //   .then(response => response.json())
  //   .then((data) => {
  //     const cash_flow_statement = new Cash_Flow_Statement();
  //     cash_flow_statement.set('FY', y);
  //     cash_flow_statement.set('Ticker', ticker);
  //     for (let i = 0; i < (data["data"].length); i++) {
  //       cash_flow_statement.set(data["data"][i]["tag"], data["data"][i]["value"]);
  //     };
  //     cash_flow_statement.save();
  //   });
// };
