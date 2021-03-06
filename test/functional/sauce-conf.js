'use strict';

// jscs:disable requirePaddingNewLinesBeforeLineComments

var sessionName = 'HMDA Pilot: Dev',
    browserWidth = 1280,
    browserHeight = 1024;

exports.config = {

    baseUrl: 'http://dev.hmda-pilot.ec2.devis.com/',

    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    specs: ['cucumber/*.feature'],

    allScriptsTimeout: 30000,
    getPageTimeout: 30000,

    multiCapabilities: [{
        name: sessionName,
        browserName: 'internet explorer',
        platform: 'ANY',
        version: '' // Blank defaults to latest version
    }, {
        name: sessionName,
        browserName: 'chrome',
        platform: 'ANY',
        version: '' // Blank defaults to latest version
    }, {
        name: sessionName,
        browserName: 'firefox',
        platform: 'ANY',
        version: '' // Blank defaults to latest version
    }],

    framework: 'cucumber',
    cucumberOpts: {
        require: 'cucumber/step_definitions/*.js',
        tags: ['~@wip', '~@ignore'],
        format: 'progress'
    },

    onPrepare: function() {
        browser.driver.manage().window().setSize(browserWidth, browserHeight);
    }
};
