// README: The file hasn't been added to browser.js
// TIPS: Please check the id of buttons & the search buttons to make sure they
//       are different and don't conflict with each other!
let currentUser = AV.User.current();

// add a click event listener on subscribe to a company function
// add a click event listener on add a row to the form function
// add a click event listener on add a graph function

// if event listener is triggered, proceed the following code:

if (!currentUser) {
   document.getElementsByClassName("user-header")[0].style.display = "none";
   document.getElementById("sidebar-dash-link").href = "dashboard?ticker=AAPL";
}
else {
   // display user info
  console.log(currentUser.attributes.username);
  document.getElementsByClassName("reg-login-header")[0].style.display = "none";
  document.getElementById("username-display").innerHTML = currentUser.attributes.username;

  // make it a function
  const showDropdown = (event) => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // add event listener on dropdown btn
  document.getElementById("user-header-dropdown-call").addEventListener("click", showDropdown);

  const userLogOut = (event) => {
    console.log("pre-logged-out");
    AV.User.logOut();
    window.location.reload(false);
  }

  document.getElementById("user-logout").addEventListener("click", userLogOut);
  sidebarDashboardLink();
}

function displayCompanyHTMLDash(comps) {
  console.log(comps);
  document.getElementById("sidebar-dash-link").href = `dashboard?ticker=${comps.attributes.Ticker}`;
  // displayCompanyLogo(comps);
}

function iterateSubListDash(subs) {
  if (subs.length === 0) {
    document.getElementById("sidebar-dash-link").href = "dashboard.html?ticker=AAPL";
  } else {
    sub = subs[0];
    let dashCompQuery = new AV.Query('Company')
    dashCompQuery
    .get(sub.attributes.company.id)
    .then( comps => displayCompanyHTMLDash(comps) )
  }
}

function sidebarDashboardLink() {
  let dashSubQuery = new AV.Query('Subscription')
  dashSubQuery
  .equalTo('user', currentUser)
  .find()
  .then( subs => iterateSubListDash(subs));
}
