import {expect, test} from '@playwright/test';

test('Debugging challenge', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', {name: /login/i}).click();

    await expect(page.getByText('You logged into a secure area!')).toBeVisible();



});