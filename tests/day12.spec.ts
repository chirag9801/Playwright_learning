import {expect, test} from '@playwright/test';

// test('handling Css selctors and Xpath', async({page})=>{
//     await page.goto('https://the-internet.herokuapp.com/checkboxes');

//     //using css selectors
    
//     const checkboxOn = page.locator('input[type="checkbox"]:nth-child(1)');
//     await checkboxOn.check();
//     await expect(checkboxOn).toBeChecked();


//     //using Xpath
//     const xPath = page.locator('//form[@id="checkboxes"]/input[2]');
//     await xPath.uncheck();
//     await expect(xPath).not.toBeChecked();

//     console.log('Css and xpath is working correctly');

// });

test('finding login btn', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login', {waitUntil:'domcontentloaded'});

    //go for login btn
    const username = page.locator('input[id="username"]');
    await username.fill('Hacker');
    await expect(username).toHaveValue('Hacker');

    console.log('username is filled');
    
});

