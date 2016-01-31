exports.config = {
  seleniumAddress: 'http://192.168.99.100:4444/wd/hub',
  multiCapabilities: [{
    'browserName': 'chrome'
  },{
    'browserName': 'firefox'
  }],
  specs: ['specs/*.js']
};
