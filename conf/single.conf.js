exports.config = {
  user: "shubhamr",
  key: "dl8Y8as59i1YyGZZUeLF897aCFvIDmaKkUU1e6RgBmlgMLIIhh",
  logFile : 'logFile: "tunnel.log"',
  services: [
      ['lambdatest', {
          tunnel: true
      }]
    ],

  updateJob: false,
  specs: ["./tests/specs/single_test._1.js"],
  exclude: [],

  capabilities: [{
    "platformName": "android",
    "deviceName": "Galaxy S22 5G",
    "platformVersion": "12",
    "network":true,
    "video":true,
    "console":true
  }],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};

