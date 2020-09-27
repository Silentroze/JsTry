const assert = require('assert')
const mainPage = require('../pageobjects/mainpage.js')

describe("smoke", () => {
    it('should ', function () {
        browser.url('https://webdriver.io/')
        mainPage.searchInput.addValue('pageObject')
        browser.pause(3000)
        mainPage.setUserName('Type with method')
        browser.pause(3000)
    });

})