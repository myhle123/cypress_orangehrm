const { defineConfig } = require("cypress");

module.exports = defineConfig({
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
  viewportHeight: 950,
  viewportWidth: 1440,
  "reporter": "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  },


  "reporterOptions": {
    "reportDir": "cypress/reports/mocha",
    "overwrite": false,
    "html": false,
    "json": true,
  }
});
