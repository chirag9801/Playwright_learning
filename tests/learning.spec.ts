import {expect, test} from '@playwright/test'

test('practice locators on heroku app', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/login');

    //username
    await page.getByRole('textbox', {name : 'Username'}).fill('tomsmith');

    //password
    await page.getByRole('textbox', {name: 'Password'}).fill('SuperSecretPassword!')

    //login button
    await page.getByRole('button', {name: /login/i}).click();

    //success msg visible
    await expect(page.locator('#flash')).toBeVisible();
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
})