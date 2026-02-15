import {expect, test} from '@playwright/test';

test('Handling tables from web', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/tables');

    const table1 = page.locator('#table1');
    const TargetonRow = table1.locator('tr').filter({hasText:'Doe'});

    const dataonRow = TargetonRow.locator('td').nth(4);
    const website = await dataonRow.textContent();

    await expect(dataonRow).toHaveText('http://www.jdoe.com');

    console.log(website+" website printed successfully");
})