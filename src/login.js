import AV from './leancloud-config';
const { Query, User } = AV;

AV.User.logIn('Tom', 'cat!@#123').then(function (loggedInUser) {
  console.log(loggedInUser);
  var username = loggedInUser.getUsername();
  var email = loggedInUser.getEmail();
  // 请注意，密码不会明文存储在云端，因此密码只能重置，不能查看
}, function (error) {
});
