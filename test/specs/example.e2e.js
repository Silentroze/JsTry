describe('webdriver.io page', () => {
    xit('should demonstration the addValue command ', () =>{
        browser.url('https://webdriver.io/');
        let input = $('#search_input_react');
        input.addValue('test');
        browser.pause(2000);
        input.addValue(123);
        browser.pause(3000);
        let value = input.getValue();
        expect(value === 'test123');
        })
    xit ('demonstration set value',()=>{
        browser.url('https://webdriver.io/');
        let elem = $('#search_input_react');
        elem.setValue('test123');
        browser.pause(3000);
    })
    it('should demonstrate the click command', ()=>{
        browser.url('https://webdriver.io');
        let blogButton= $('[href="/blog/"]');
        browser.pause(2000);
        blogButton.click();
        browser.pause(3000);
        let guideButton = $('[href="/docs/versions.html"]');
        guideButton.click();
        browser.pause(3000);

    })

})

