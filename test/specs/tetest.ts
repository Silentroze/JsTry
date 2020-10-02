const assert = require('assert')
const mainPage = require('../pageobjects/mainpage.js')
const docsPage = require('../pageobjects/docs')
import * as faker from "faker";
import {expect} from "chai";
describe("smoke", () => {
    it('should ', function() {
        browser.url("/create_account");
        let randomEmail = faker.internet.email();
        $('input[name="firstname"]').setValue("TestFirstName");
        $('input[name="lastname"]').setValue("TestLastName");
        $('select[name="country_code"]').selectByAttribute("value","UA");
        $('[class="form-group col-md-6 required"] input[data-type="email"]').setValue(randomEmail);
        $('input[name="phone"]').setValue("+380441112233");
        $('[class="row"] input[name="password"]').setValue("123456");
        $('input[name="confirmed_password"]').setValue("123456");
        browser.pause(2000)
        $('button[name="create_account"]').click();
        browser.pause(10000);
        expect(browser.getUrl()).not.to.contain('create_account');
        expect($('.alert-success').isDisplayed()).to.equal(true,'Expected Alert to be visible')
        const text = $('.alert-success').getText();
        expect(text).to.contain('Your customer account has been created.')
    });
});
