import {test, expect} from '@playwright/test';
import { Loginpage } from './Loginpage';

test('using POM', async({page})=>{

    const loginpage = new Loginpage(page);

    await page.goto('https://the-internet.herokuapp.com/login');
    await loginpage.logindet('tomsmith', 'SuperSecretPassword!');

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    
})