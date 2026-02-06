import {expect, test} from '@playwright/test';
import { listen } from 'node:quic';

test.beforeEach('demo playwright', async({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc/");
})

test('add todo', async({page})=>{
    //add items
    const todoInput =  page.getByPlaceholder('What needs to be done?');
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    await todoInput.fill('Buy Coffee');
    await todoInput.press('Enter');

    //verify item count
    const itemcount = page.getByTestId('todo-item')
    await expect(itemcount).toHaveCount(2);

    //to verify text of second item
    await expect(itemcount.nth(1)).toHaveText('Buy Coffee');
})

test('mark as completion', async({page})=>{
    const todonew =  page.getByPlaceholder('What needs to be done?');
    await todonew.fill('finish Day7 as completed');
    await todonew.press('Enter');

    const checkbox = page.locator('.toggle');
    await checkbox.check();

    //verify checkbox is check
    await expect(checkbox).toBeChecked();
    await expect(page.locator('.todo-list li')).toHaveClass(/completed/);
})

test('Filter active items', async({page})=>{
    const todoInput = page.getByPlaceholder("What needs to be done?");

    await todoInput.fill('Item to Complete');
    await todoInput.press('Enter');
    await todoInput.fill('Item to stay Active');
    await todoInput.press('Enter');

    //to check first item 
    const checkfirst = page.getByTestId('todo-item').filter({hasText:'item to complete'});
    await checkfirst.getByRole('checkbox').check();

    //click on active filter link
    await page.getByRole('link',{name:'Active'}).click();

    //verify 1 item is visible
    await expect(page.getByTestId('todo-item')).toHaveCount(1);
    await expect(page.getByTestId('todo-item')).toHaveText('Item to stay Active');    

})

