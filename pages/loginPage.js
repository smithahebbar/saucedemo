import BasePage  from "./basePage"; 

export default class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.username = "#user-name";
        this.password = "#password";
        this.loginButton = "#login-button";

    }

    async login(username,password){
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);
    }

}