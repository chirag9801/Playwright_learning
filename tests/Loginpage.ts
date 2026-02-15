//importing playwright dictionary
import { type Page, type Locator } from "@playwright/test";

//export class so other files can use this
export class Loginpage{

    //declaring variables

    readonly page: Page;
    readonly usernameip: Locator;
    readonly passwdip: Locator;
    readonly Loginbtn:Locator;

    //constructor
    constructor(page: Page){
        this.page = page;
        this.usernameip = page.locator('#username');
        this.passwdip = page.locator('#password');
        this.Loginbtn = page.locator('button[type="submit"]');
    }

    //writing method
    async logindet(user : string, pass: string){
        await this.usernameip.fill(user);
        await this.passwdip.fill(pass);
        await this.Loginbtn.click();
    }

}






