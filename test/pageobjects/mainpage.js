class Mainpage {
    get searchInput (){
        return $("#search_input_react")
    }
    setUserName (addName){
        this.searchInput.addValue(addName);
    }
}
module.exports = new Mainpage();