import {test,expect} from '@playwright/test';
import { loginWithValidRole } from '../utlis/login.js';
import SwagLabsPage from '../pages/swag_labs_page.js';

test.describe('Swag Labs Tests',()=>{
    let swagLabsPage;

    test.beforeEach(async({page})=>{
        swagLabsPage = new SwagLabsPage(page);
        await loginWithValidRole(page, 'standard_user');
        await page.waitForURL("**/inventory.html");
    })

    test('click on the first item ', async({page})=> {
        await page.waitForSelector('.inventory_item:nth-child(1) .btn_inventory');
        await swagLabsPage.clickOnFirstItem();
        const itemDetails = await swagLabsPage.getItemDetails();
        expect(itemDetails).toBeTruthy();
        expect(itemDetails).toHaveProperty('name');
    })
})