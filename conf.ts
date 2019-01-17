import {Config, browser} from 'protractor';
import {SpecReporter} from 'jasmine-spec-reporter';

export let config: Config = {
    allScriptsTimeout: 11000,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['incognito']
        }
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 15000,
        print: function () {
        }
    },
    maxSessions: 1,
    noGlobals: true,
    onPrepare: () => {
        // Use `jasmine-spec-reporter` as the spec result reporter
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));

        // Set browser window width to 1200 and height to 900px
        browser.driver.manage().window().setSize(1400, 900);
    },

    // Base Url in SBX
    baseUrl: 'https://www.google.com',
    specs: ['specs/**/*spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
