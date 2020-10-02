"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var mainPage = require('../pageobjects/mainpage.js');
var docsPage = require('../pageobjects/docs');
var faker = require("faker");
var chai_1 = require("chai");
describe("smoke", function () {
    it('should ', function () {
        browser.url("/create_account");
        var randomEmail = faker.internet.email();
        $('input[name="firstname"]').setValue("TestFirstName");
        $('input[name="lastname"]').setValue("TestLastName");
        $('select[name="country_code"]').selectByAttribute("value", "UA");
        $('[class="form-group col-md-6 required"] input[data-type="email"]').setValue(randomEmail);
        $('input[name="phone"]').setValue("+380441112233");
        $('[class="row"] input[name="password"]').setValue("123456");
        $('input[name="confirmed_password"]').setValue("123456");
        browser.pause(2000);
        $('button[name="create_account"]').click();
        browser.pause(10000);
        chai_1.expect(browser.getUrl()).not.to.contain('create_account');
        chai_1.expect($('.alert-success').isDisplayed()).to.equal(true, 'Expected Alert to be visible');
        var text = $('.alert-success').getText();
        chai_1.expect(text).to.contain('Your customer account has been created.');
    });
});
