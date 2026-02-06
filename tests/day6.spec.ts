import {expect, test} from '@playwright/test';

//grouping
test.describe('hooks usage', ()=>{

    test.beforeEach(async({page})=>{

        await page.goto('https://the-internet.herokuapp.com/login');
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');
        await page.getByRole('button',{name: /login/i}).click();

    });

    test.afterEach(async({page})=>{
        console.log("Test Finished!");
    })

//check user on dashboard

    test('check user on dashboard',async({page})=>{
        await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    })

    //logout functionality
    test.only('logout functionality', async({page})=>{
        await page.getByRole('link', {name: 'Logout'}).click();
        await expect(page).toHaveURL(/login/);
    });

    test('check user on dashboard after logout',async({page})=>{
        expect(page.getByText('You logged out of the secure'));
    })


    

})