export default class BasePage{
    constructor(page){
        this.page = page;
        this.baseUrl = "https://www.saucedemo.com/";
    }

    async navigate(){
        await this.page.goto(this.baseUrl);
    }
}