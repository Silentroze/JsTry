const assert = require('assert')
const mainPage = require('../pageobjects/mainpage.js')
const docsPage = require('../pageobjects/docs')
describe("smoke", () => {
    it('should addValue', function () {
        browser.url('https://webdriver.io/')
        browser.maximizeWindow();
        mainPage.searchInput.addValue('pageObject')
        browser.pause(3000)
        mainPage.setUserName('Type with method')
        browser.pause(3000)
    });
    it('should click', function () {
        browser.url('https://webdriver.io');
        docsPage.docksButton.click()
        browser.pause(3000)
        docsPage.ClickEditButton();
        browser.pause(3000)
    });

})