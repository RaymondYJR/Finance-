let reg = document.getElementById('registration-form');

const register = (event) => {
  event.preventDefault();
  let user = new AV.User();
  let username = document.getElementById("reg-username-input").value;
  let password = document.getElementById("reg-password-input").value;
  let email = document.getElementById("reg-email-input").value;
  user.setUsername(username);
  user.setPassword(password);
  user.setEmail(email);
  if (username === "") {
    alert("请填写用户名");
  } else if (email === "") {
    alert("请填写邮箱");
  } else if (password === "") {
    alert("请填写密码");
  } else {
    user.signUp().then(function (loggedInUser) {
      console.log(loggedInUser);
    }, function (error) {
      let errorMes = error.message.match(/.+\u3002/)[0];
      if (errorMes != null) {
        alert(errorMes);
      }
    });
  }
}

if (reg) {
  const submit = document.getElementById('reg-submit');
  submit.addEventListener("click", register);
}
