    describe.only('test', () => {
        xit('should detected if an element is clickable', function () {
            browser.url('https://webdriver.io')
            const blogButton = $('[href="/blog/"]');
            let isEnabled = blogButton.isEnabled();
            console.log("isEnabled: " + isEnabled);


        });
        xit('should ', function () {
            browser.url('https://webdriver.io')
            const input = $('#search_input_react');
            console.log('search.IsFocused() before click ' + input.isFocused());
            browser.pause(3000)
            input.click()
            console.log('search.isFocused() after click ' + input.isFocused());
            browser.pause(6000)
        });
        xit('should ', function () {
            browser.url('https://webdriver.io')
            let gitHubLink = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
            browser.pause(3000);
            gitHubLink.scrollIntoView();
            browser.pause(2000)

        });
        xit('should sava a screenshot ', function () {
            browser.url('https://webdriver.io');
            const elem = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
            elem.saveScreenshot('gitscreen1.png')
        });
        xit('should ', function () {
            browser.url('https://www.google.com/')
            browser.newWindow("https://webdriver.io")
            browser.pause(5000)

            browser.switchWindow('https://www.google.com/')
            browser.pause(6000)


        });
        it('should wait until', function () {
            browser.newWindow("https://webdriver.io")
            browser.waitUntil(() => {
                return $('[href="/blog/"]').isDisplayed();
            }, 5000, "you lose");

        })
        xit('should get HTML ', function () {
            browser.url("https://webdriver.io")
            let outerHTML = $('.').getHTML();
            console.log('outer HTML ' + outerHTML);

            let innerHTML = $('.').getHTML(false);
            console.log("inner HTML " + innerHTML)

        });
        it('should ', function () {
            browser.url("https://webdriver.io/docs/api.html");
            let elem = $("//a[contains(text(),'JSONWire protocol')]").getAttribute('href');
            browser.newWindow(elem);
            browser.switchWindow(elem);
            let wikiIsDisplyed = $('[href="/SeleniumHQ/selenium/wiki"]').isDisplayed();
            console.log("home is displayed " + wikiIsDisplyed);
            browser.switchWindow("https://webdriver.io/docs/api.html");
            browser.waitUntil(()=>{
              return $('.postHeaderTitle').getText() === 'API Docs';
            },5000,'nope');
            $(".postHeaderTitle").saveScreenshot('title.png');
            let twitter = $("[href=\"https://twitter.com/webdriverio\"]");
            console.log("is Twitter displyed?: " + twitter.isDisplayed());
            console.log("is twitter displyed in view port 1?: " + twitter.isDisplayedInViewport() );
            twitter.scrollIntoView();
            console.log("is twitter  displyed in view port 2?:" + twitter.isDisplayedInViewport());



        });

    })