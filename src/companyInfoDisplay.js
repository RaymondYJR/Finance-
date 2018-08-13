if (ticker) {
  document.getElementById("company-header-name").innerHTML = ticker;
} else {
  alert("请输入股票名称");
}

function toggleSubscribeButton(subStatusToCurrentComp) {
  if (subStatusToCurrentComp.length == 0) {
    document.getElementById("company-header-subscribe-btn").style.display = "inline-block";
    console.log("display add button");
  } else {
    document.getElementById("company-header-unsubscribe-btn").style.display = "inline-block";
    console.log("display removal button");
  }
}

function searchForSub(companyArray) {
  let currentCompany = companyArray[0];
  subscriptionQuery
  .equalTo('user', currentUser)
  .equalTo('company', currentCompany)
  .find()
  .then( res2 => toggleSubscribeButton(res2));
}

function subToCompanyBtn() {
  companyQuery
  .equalTo('Ticker', ticker)
  .find()
  .then( res => searchForSub(res));
}

subToCompanyBtn();

const subscribeToCompany = (event) => {
  let subscription = new AV.Object('Subscription');
  subscription.set('user', currentUser);
  companyQuery
  .equalTo('Ticker', ticker)
  .find()
  .then(res => {
    subscription.set('company', res[0]);
    subscription.save().then(function (success) {
      window.location.reload(false);
    }, function (error) {
      alert(error.message);
    });
  });
}

const unsubscribeFromCompany = (event) => {
  // find all subs which the user owns
  subscriptionQuery
  .equalTo('user', currentUser)
  .find().then(res => {
    companyQuery
    .equalTo('Ticker', ticker)
    .find()
    .then(res2 => {
      let companyObjectId = res2[0].id;
      // iterate over each subscription
      res.forEach(function(element) {
        if (element.attributes.company.id === companyObjectId) {
          alert("确定要删除这家公司吗？");
          element.destroy().then(function (success) {
            window.location.reload(false);
          }, function (error) {
            alert(error.message);
          });
        }
      });
    });
  });
}

const requireRegistration = (event) => {
  document.getElementById('registration-popup').style.display = "block";
  document.getElementsByClassName("overlay")[0].style.display = "block";
}

if (currentUser) {
  const subBtn = document.getElementById("company-header-subscribe-btn");
  const unsubBtn = document.getElementById("company-header-unsubscribe-btn");
  subBtn.addEventListener("click", subscribeToCompany);
  unsubBtn.addEventListener("click", unsubscribeFromCompany);
} else {
  document.getElementById("company-header-subscribe-btn").addEventListener("click", requireRegistration);
}

