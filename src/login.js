let log = document.getElementById('login-form');

const login = (event) => {
  let username = document.getElementById("login-username-input").value;
  let password = document.getElementById("login-password-input").value;
  // let email = document.getElementById("login-email-input").value;
  AV.User.logIn(username, password).then(function (loggedInUser) {
    console.log(loggedInUser);
    var username = loggedInUser.getUsername();
    var email = loggedInUser.getEmail();
    // 请注意，密码不会明文存储在云端，因此密码只能重置，不能查看
    window.location.reload(false);
  }, function (error) {
    let message = error.message;
    if (message.includes("Could not find user")) {
      alert("对不起，我们无法找到该用户");
    } else if (message.includes("The username and password mismatch")) {
      alert("用户名或密码不正确");
    } else {
      alert(message);
    }
  });
}

if (log) {
  const submit = document.getElementById('login-submit');
  submit.addEventListener("click", login);
}

const showLoginForm = (event) => {
  document.getElementById('login-popup').style.display = "block";
  document.getElementById('registration-popup').style.display = "none";
}

document.getElementById('shift-to-login').addEventListener("click", showLoginForm);
