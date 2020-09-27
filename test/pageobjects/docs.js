class DocsPage {
    get editButton (){
        return $("//a[@class='edit-page-link button']")
    }
    get docksButton(){
        return $("//a[contains(text(),'Docs')]")
    }
    ClickEditButton (){
        this.editButton.click();
    }
}
module.exports = new DocsPage();