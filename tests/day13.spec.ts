import {test} from '@playwright/test';
import path from 'node:path';

test('Handling screenshot', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login',{waitUntil:'domcontentloaded'});

    const usrname = page.locator('#username');
    const passwd = page.locator('#password');

    await page.screenshot({path:'screenshot/empusercrd.png', fullPage: true});

    await usrname.fill('hacker1');
    await passwd.fill('superpassword');

    await page.screenshot({path:'screenshot/usrdetfill.png'});
    console.log('user details captured successfully');
})