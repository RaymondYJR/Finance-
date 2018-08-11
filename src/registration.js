import AV from './leancloud-config';
const { Query, User } = AV;

let reg = document.getElementById('registration-form');

const register = (event) => {
  console.log('yea!');
  let user = new AV.User();
  user.setUsername(document.getElementById("reg-username-input").value);
  user.setPassword(document.getElementById("reg-password-input").value);
  user.setEmail(document.getElementById("reg-email-input").value);
  user.signUp().then(function (loggedInUser) {
      console.log(loggedInUser);
  }, function (error) {
  });
}

if (reg) {
  const submit = document.getElementById('reg-submit');
  input.addEventListener("submit", register);
}

const give = (event) => {
  console.log('read!');
}

document.getElementById('test').addEventListener("click", give);
