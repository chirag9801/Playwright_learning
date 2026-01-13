import {expect, test} from '@playwright/test';

test('Handling Checkboxes and drpdowns', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const chkbox1 = page.getByRole('checkbox').nth(0);
    const chkbox2 = page.getByRole('checkbox').nth(1);

    await chkbox1.check();
    await expect(chkbox1).toBeChecked();

    await chkbox2.check();
    await expect(chkbox2).toBeChecked();

    //dropdowns
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').selectOption({index: 1});
    await expect(page.locator('#dropdown')).toHaveValue('1');

    //hovering
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.locator('.figure').first().hover();
    await expect(page.getByText('name: user1')).toBeVisible();
    


})
