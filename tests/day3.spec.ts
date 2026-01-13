import {expect, test} from '@playwright/test';

test('Handle Dynamic Loading', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    //find start button and click it
    await page.getByRole('button', {name: 'Start'}).click();

    //hello txt hiding behind loading bar; playwright automaticlly wait for it
    const hiddntxt = page.locator('#finish h4');

    //verify text appears
    await expect(hiddntxt).toBeVisible({timeout:10000});
    await expect(hiddntxt).toHaveText('Hello World!');

})