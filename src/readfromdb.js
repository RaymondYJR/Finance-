const { Query, User } = AV;
AV.init('HS8Deh8YMUw4Vy6Fl3ixLQNN-gzGzoHsz', 'vCCT2XtjqFeBaTgdPMHTxbbu');

// let year =
const query = new AV.Query('Balance_Sheet')
  .equalTo('FY', 2017)
  .equalTo('Ticker', 'AAPL')
  .find()
  .then(res => document.write(res[0].attributes))

