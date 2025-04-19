import {test, expect} from '@playwright/test';
import {loginWithValidRole, loginWithInvalidRole} from '../utlis/login.js';
import SwagLabsPage from '../pages/swag_labs_page.js';


test.describe('roles Based Navigation test', () => {
    let swagLabsPage;

    test.beforeEach(async({page}) => {
        swagLabsPage = new SwagLabsPage(page);
    })
    
    test('Standard user login',async({page}) => {
        await loginWithValidRole(page,'standard_user');
        await page.waitForURL("**/inventory.html");
    })

    test('Locked out user Login', async({page}) => {
        await loginWithInvalidRole(page,'locked_out_user');
        await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        
    })

    test('Problem user login', async({page})=>{
        await loginWithValidRole(page,'problem_user');
    })

    test('Performance glitch user Login', async({page}) => {
        await loginWithValidRole(page,'performance_glitch_user');
    })

    test('Error user login', async({page}) => {
        await loginWithInvalidRole(page,'error_user');
    })
    test('Visual user login', async({page}) => {
        await loginWithValidRole(page,'visual_user');
    })


})