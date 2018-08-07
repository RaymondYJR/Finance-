var start_year = ('#user_input_start')
var end_year = ('#user_input_end')

var { Query, User } = AV;
AV.init('HS8Deh8YMUw4Vy6Fl3ixLQNN-gzGzoHsz', 'vCCT2XtjqFeBaTgdPMHTxbbu');

var user = new AV.User();
  user.setUsername("raymond3");
  user.setPassword("123456");
  user.setEmail("yhnjsad@gmail.com");
  user.signUp().then(function (loginedUser) {
    // 注册成功，跳转到商品 list 页面
  }, (function (error) {
      alert(JSON.stringify(error));
  }));

var Company = document.getElementsByClassName("Company");
var ticker = document.querySelectorAll('Ticker');
console.log(Company);
console.log(ticker);

query.descending('createdAt');

query.find().then(function (products) {
// 查询到商品后，在前端展示到相应的位置中。
console.log(products)
  }).catch(function(error) {
    alert(JSON.stringify(error));
  });
