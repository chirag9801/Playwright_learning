import {expect, test} from '@playwright/test';
import path from 'path';

test('uploading files', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')


    const filepath = path.join(__dirname,'hello.txt');

    await page.setInputFiles('#file-upload',filepath);
    await page.locator('#file-submit').click();

    await expect(page.locator('h3')).toHaveText('File Uploaded!');
});


test('Downloading the file', async({page})=>{
    page.goto('https://the-internet.herokuapp.com/download');

    const downloadPromise = page.waitForEvent('download');

    //path
    await page.locator('.example a').first().click();

    //having that file
    const downloadit = await downloadPromise;
    await downloadit.saveAs('downloaded_test_file.txt');

    console.log('file downloaded successfully');

})