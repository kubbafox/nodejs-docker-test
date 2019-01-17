import {browser,} from "protractor";

describe('Login - Active User', () => {
    const EC = browser.ExpectedConditions;

    beforeEach(() => {
    });

    it('should sign in with valid ssn/dob and land to dashboard page', () => {

        browser.wait(EC.urlContains('dashboard'), 2000);
    });

});