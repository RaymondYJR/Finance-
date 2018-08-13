if (ticker) {
  document.getElementById("company-header-name").innerHTML = ticker;
} else {
  alert("请输入股票名称");
}

const subscribeToCompany = (event) => {
  let subscription = new AV.Object('Subscription');
  subscription.set('user', currentUser);
  const query = new AV.Query('Company')
  .equalTo('Ticker', ticker)
  .find()
  .then(res => {
    // console.log(res);
    subscription.set('company', res[0]);
    subscription.save();
    console.log("saved!");
    window.location.reload(false);
  });
}

const requireRegistration = (event) => {
  document.getElementById('registration-popup').style.display = "block";
  document.getElementsByClassName("overlay")[0].style.display = "block";
}

if (currentUser) {
  document.getElementById("company-header-subscribe-btn").addEventListener("click", subscribeToCompany);
} else {
  document.getElementById("company-header-subscribe-btn").addEventListener("click", requireRegistration);
}

