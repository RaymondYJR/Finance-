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

let headers = new Headers();
headers.set('Authorization', 'Basic ' + 'ZjNkNmRkMTcxNjNmNGZmMjU2OGE4YWE1ZjNiMTU1YmM6NzQ0OGNiNjY1YTBkYmNjMGNjMjdjNzBlZGRhMGRlZTE=');

const Company = AV.Object.extend('Company');
// const Balance_Sheet = AV.Object.extend('Balance_Sheet');
// const Income_Statement = AV.Object.extend('Income_Statement');
// const Cash_Flow_Statement = AV.Object.extend('Cash_Flow_Statement');


// let url_comp = `https://api.intrinio.com/companies?identifier=${ticker}`;
// fetch(url_comp, {method:'GET', headers: headers})
//   .then(response => response.json())
//   .then((data) => {
//     const company = new Company();
//     company.set('Ticker', ticker);
//     company.set('Name', data["name"]);
//     company.set('Company_url', data["Company_url"]);
//     company.set('Industry_group', data["industry_group"]);
//     company.set('Short_description', data["short_description"]);
//     company.save();
//   });

function insideviewCompId(company) {
  let url_iv = 'https://cors-anywhere.herokuapp.com/https://api.insideview.com/api/v1/companies?ticker=' + ticker;
  let headers_iv = new Headers();
  headers_iv.set('accessToken', 'Q1WhO/7I8UEXgNgwj/xV47kBhFdbsSZZsalIyaPx0geXcpj2q/dKlj68DS5toPjD/RPzvU39vYeL2shp7s9omcejKycrl5Wr764u3kS6P22gpTnPqnotyx0jVLfFkUpkd3HBH2CeUp/yP2p3jjOQP1z4jI4DsOZTcqTMWTNY5MY=.eyJmZWF0dXJlcyI6InsgfSIsImNsaWVudElkIjoiMjBsaDc1ZXI4Z2J0aGNqNHBqNmkiLCJncmFudFR5cGUiOiJjcmVkIiwidHRsIjoiMTIwOTYwMCIsImlhdCI6IjE1MzQyMzcwNzQiLCJ2ZXJzaW9uIjoidjEiLCJqdGkiOiJkMWIzZGQ2Yy1mNzQ2LTRhZmYtODk5Ni03ZGVkYmM0YjI1ZGEifQ==');
  headers_iv.set('Accept', 'application/json');
  fetch(url_iv, {method:'GET', headers: headers_iv})
  .then(response => response.json())
  .then((data) => {
    if (data.companies.length === 0) {
      company.save().then(function (res) {
        console.log("company saved!");
      }, function (error) {
        console.log(error);
      });
    } else {
      let id = data.companies[0].companyId;
      company.set('Insideview_id', id);
      displayCompanyLogo(company, id);
    }
  });
}

function insideviewCompId2(company) {
  let token = 'Q1WhO/7I8UEXgNgwj/xV47kBhFdbsSZZsalIyaPx0geXcpj2q/dKlj68DS5toPjD/RPzvU39vYeL2shp7s9omcejKycrl5Wr764u3kS6P22gpTnPqnotyx0jVLfFkUpkd3HBH2CeUp/yP2p3jjOQP1z4jI4DsOZTcqTMWTNY5MY=.eyJmZWF0dXJlcyI6InsgfSIsImNsaWVudElkIjoiMjBsaDc1ZXI4Z2J0aGNqNHBqNmkiLCJncmFudFR5cGUiOiJjcmVkIiwidHRsIjoiMTIwOTYwMCIsImlhdCI6IjE1MzQyMzcwNzQiLCJ2ZXJzaW9uIjoidjEiLCJqdGkiOiJkMWIzZGQ2Yy1mNzQ2LTRhZmYtODk5Ni03ZGVkYmM0YjI1ZGEifQ==';
  $.ajax({
    headers: {"accessToken": token},
    url: `https://api.insideview.com/api/v1/companies?ticker=${ticker}&accessToken=${token}`,
    // accessToken: token,
    type: 'get',
    // Accept: 'application/json',
    success: function (data) {
      console.log(data);
    }
  });
}


function displayCompanyLogo(company, id) {
  let url_ivlogo = `https://cors-anywhere.herokuapp.com/https://api.insideview.com/api/v1/company/${id}/logos/100`;
  let headers_ivlogo = new Headers();
  headers_ivlogo.set('accessToken', 'Q1WhO/7I8UEXgNgwj/xV47kBhFdbsSZZsalIyaPx0geXcpj2q/dKlj68DS5toPjD/RPzvU39vYeL2shp7s9omcejKycrl5Wr764u3kS6P22gpTnPqnotyx0jVLfFkUpkd3HBH2CeUp/yP2p3jjOQP1z4jI4DsOZTcqTMWTNY5MY=.eyJmZWF0dXJlcyI6InsgfSIsImNsaWVudElkIjoiMjBsaDc1ZXI4Z2J0aGNqNHBqNmkiLCJncmFudFR5cGUiOiJjcmVkIiwidHRsIjoiMTIwOTYwMCIsImlhdCI6IjE1MzQyMzcwNzQiLCJ2ZXJzaW9uIjoidjEiLCJqdGkiOiJkMWIzZGQ2Yy1mNzQ2LTRhZmYtODk5Ni03ZGVkYmM0YjI1ZGEifQ==');
  headers_ivlogo.set('Accept', 'application/json');
  fetch(url_ivlogo, {method:'GET', headers: headers_ivlogo})
  .then((data) => {
    return data.blob();
  }).then(function(blob) {
    var file = new AV.File('logo.png', blob);
    company.set('logo', file);
    company.save().then(function (res) {
      if (file) {
        console.log(file.attributes)
        if (file.attributes.url && file.attributes.metaData.size >= 200) {
          document.getElementById("companyLogo").src = file.attributes.url;
          document.getElementById("company-header-desc").style.paddingLeft = "15px";
        }
      }
    }, function (error) {
      console.log(error);
    });
  });
}

function translate(company, industry, description, name) {
  let query = industry + "\n" + description + "\n" + name;
  let appid = "20180814000194037";
  let appkey = "KyyZTdnsU8lC7hl42xQ9";
  let salt = (new Date).getTime();
  let str = appid + query + salt + appkey;
  let sign = md5(str);
  $.ajax({
    url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
    type: 'get',
    dataType: 'jsonp',
    data: {
        q: query,
        appid: appid,
        salt: salt,
        from: 'en',
        to: 'zh',
        sign: sign
    },
    success: function (data) {
      console.log(data);
      let chnInd = data.trans_result[0].dst;
      let chnDes = data.trans_result[1].dst;
      let chnNam = data.trans_result[2].dst;
      if (chnNam) {
        document.getElementById("company-header-name").innerHTML += chnNam;
      }
      if (chnInd) {
        document.getElementById("company-header-industry").innerHTML += chnInd;
      }
      if (chnDes && chnDes != "不适用") {
        document.getElementById("company-header-desc").innerHTML = chnDes;
      }
      company.set("Description_chn", chnDes);
      company.set("Industry_chn", chnInd);
      company.set("Name_chn", chnNam);
      insideviewCompId2(company);
    }
  });
}

function displayExistedCompany(company) {
  // console.log(company.logo.attributes)
  if (company.logo) {
    if (company.logo.attributes.url && company.logo.attributes.metaData.size >= 200) {
      document.getElementById("companyLogo").src = company.logo.attributes.url;
      document.getElementById("company-header-desc").style.paddingLeft = "15px";
    }
  }
  if (company.Name) {
    document.getElementById("company-header-name").innerHTML = `${company.Name} `;
  }
  if (company.Name_chn) {
    document.getElementById("company-header-name").innerHTML += company.Name_chn;
  }
  if (company.Industry_group) {
    document.getElementById("company-header-industry").innerHTML = `${company.Industry_group} `;
  }
  if (company.Industry_chn) {
    document.getElementById("company-header-industry").innerHTML += company.Industry_chn;
  }
  if (company.Description_chn && company.Description_chn != "不适用") {
    document.getElementById("company-header-desc").innerHTML = company.Description_chn;
  }
}

function addInfoInDb(res) {
  if (res.length === 0) {
    let url_comp = `https://api.intrinio.com/companies?identifier=${ticker}`;
    fetch(url_comp, {method:'GET', headers: headers})
      .then(response => response.json())
      .then((data) => {
        const company = new Company();
        company.set('Ticker', ticker);
        company.set('Name', data["name"]);
        if (data["name"]) {
          document.getElementById("company-header-name").innerHTML = `${data["name"]} `;
        }
        company.set('Company_url', data["company_url"]);
        company.set('Industry_group', data["industry_group"]);
        if (data["industry_group"]) {
          document.getElementById("company-header-industry").innerHTML = `${data["industry_group"]} `;
        }
        company.set('Short_description', data["short_description"]);
        if (data["name"].match(/^(.+?)Inc/)) {
          let name = data["name"].match(/^(.+?)Inc/)[1];
          translate(company, data["industry_group"], data["short_description"], name);
        } else {
          let name = data["name"];
          translate(company, data["industry_group"], data["short_description"], name);
        }
      });
  } else {
    displayExistedCompany(res[0].attributes);
  }
};

let companyQuery = new AV.Query('Company');
function searchForCompanyInDb() {
  companyQuery
  .equalTo('Ticker', ticker)
  .find()
  // if failed to find company, automatically displays an add button
  .then( res => addInfoInDb(res));
};

searchForCompanyInDb();

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
//       const financials = data["data"].reduce(function(map, obj) {
//           map[obj.tag] = obj.value;
//           return map;
//       }, {});
//       const row_name = ['cashandequivalents', 'shortterminvestments', 'notereceivable', 'accountsreceivable', 'netinventory', 'othercurrentassets', 'totalcurrentassets', 'netppe', 'longterminvestments', 'goodwill', 'intangibleassets', 'othernoncurrentassets', 'totalnoncurrentassets', 'totalassets', 'shorttermdebt', 'accountspayable', 'accruedexpenses', 'totalcurrentliabilities', 'longtermdebt', 'othernoncurrentliabilities', 'totalnoncurrentliabilities', 'totalliabilities', 'commitmentsandcontingencies', 'commonequity', 'retainedearnings', 'aoci', 'totalcommonequity', 'totalequity', 'totalequityandnoncontrollinginterests', 'totalliabilitiesandequity', 'currentdeferredrevenue', 'noncurrentdeferredrevenue']
//       for (const item of row_name) {
//         const output = document.getElementById(item+`${y}`);
//         output.innerHTML = (financials[item] / 100000000).toFixed(2);
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
