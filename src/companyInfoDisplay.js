if (ticker) {
  document.getElementById("company-header-name").innerHTML = ticker;
} else {
  alert("请输入股票名称");
}

// if user subscriptions has any company which = ticker
// display removal button
// else
// display add button
function subToCompany() {
  const companyQuery = new AV.Query('Company')
  .equalTo('Ticker', ticker)
  .find()
  .then(res2 => {
    let currentCompany = res2[0];
    const query = new AV.Query('Subscription');
    query.equalTo('user', currentUser);
    query.equalTo('company', currentCompany);
    query.find().then(res => {
      if (res.length == 0) {
        document.getElementById("company-header-subscribe-btn").style.display = "inline-block";
        console.log("display add button");
      } else {
        document.getElementById("company-header-unsubscribe-btn").style.display = "inline-block";
        console.log("display removal button");
      }
    });
  });
}

subToCompany();

const subscribeToCompany = (event) => {
  let subscription = new AV.Object('Subscription');
  subscription.set('user', currentUser);
  const query = new AV.Query('Company')
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
  const query = new AV.Query('Subscription')
  query.equalTo('user', currentUser);
  query.find().then(res => {
    const companyQuery = new AV.Query('Company')
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

