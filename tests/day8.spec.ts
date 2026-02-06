import {expect, test} from '@playwright/test';

test('handling iframes', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/iframe');

    //locate frame
    const iframes = page.frameLocator('#mce_0_ifr');
    await page.getByRole('button', { name: 'Close' }).click();
    //element inside frame
    const textBox = iframes.locator('#tinymce'); 

await expect(textBox).toBeVisible();

  // 3. THE FIX: Use .evaluate() to force the text into the HTML
  // This bypasses "readonly" or "not an input" errors completely
  await textBox.evaluate((domtext) => {
    domtext.innerHTML = 'Playwright has conquered this frame!';
  });

  // 4. Verify the change
  await expect(textBox).toHaveText('Playwright has conquered this frame!');
});


test("handling multiple tabs", async ({page, context})=>{
    await page.goto('https://the-internet.herokuapp.com/windows');

    const pagepromise = context.waitForEvent('page');

    //click link that opens new tab
    await page.getByText('Click here').click();

    const newTab = await pagepromise;

    // 4. Interact with the new tab
  await expect(newTab).toHaveURL('https://the-internet.herokuapp.com/windows/new');
  await expect(newTab.getByText('New Window')).toBeVisible();
  
  // 5. Go back to original page and verify
  await page.bringToFront();
  await expect(page.getByText('Opening a new window')).toBeVisible();
});


test('Frame to main switch page', async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/iframe');

  //inside frame
  const editorFrame = page.frameLocator('#mce_0_ifr');
  const eframe = editorFrame.locator('#tinymce');

  await eframe.evaluate((domtext)=>{
    domtext.innerHTML = 'Working inside...';
  })

    await expect(eframe).toHaveText('Working inside...');


  const mainPageLink = page.getByRole('link', { name: 'Elemental Selenium' });
  await expect(mainPageLink).toBeVisible();
  console.log('Successfully accessed the main page while frame variable exists!');


  
})