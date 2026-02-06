import {expect, test} from '@playwright/test';

test('handling popup', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //look for popup
  page.once('dialog', async(dialogwnd)=>{
    console.log('Tha message appears'+ dialogwnd.message());
    // expect(dialogwnd.type()).toBe('alert');
    expect(dialogwnd.accept());
  });

  await page.getByText('Click for JS Alert').click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

});