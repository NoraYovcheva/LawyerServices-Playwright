const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const  NavBar  = require('../pages/NavBarPage');

test.describe('NavBar tests', () => {
     test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('support@pravenportal.com', 'Administrator');
    });

    test('NavBar is displayed on home page', async ({ page }) => {
        const nav = new NavBar(page);

        await nav.gotoHome();

        await expect(nav.root).toBeVisible();
    });
});
test('Clicking Notaries opens Notaries page', async ({ page }) => {
    const nav = new NavBar(page);

    await nav.gotoHome();
    await expect(nav.notaryButton).toBeVisible();
    await nav.clickNotaries();

    await expect(page).toHaveURL("https://localhost:44314/notary");
});
test('Clicking Lawyers opens Lawyers page', async ({ page }) => {
    const nav = new NavBar(page);

    await nav.gotoHome();
    await expect(nav.lawyersButton).toBeVisible();
    await nav.clickLawyers();

    await expect(page).toHaveURL("https://localhost:44314/lawyers");
});
test('Clicking "For Lawyers" opens Join page', async ({ page }) => {
    const nav = new NavBar(page);

    await nav.gotoHome();
    await expect(nav.forLawyersButton).toBeVisible();
    await nav.clickForLawyers();

    await expect(page).toHaveURL("https://localhost:44314/submitapplication");
});
test('Clicking Login opens Login page', async ({ page }) => {
    const nav = new NavBar(page);

    await nav.gotoHome();
    await expect(nav.loginButton).toBeVisible();
    await nav.clickLogin();

    await expect(page).toHaveURL("https://localhost:44314/authentication/login");
});
test('Clicking Register opens Register page', async ({ page }) => {
    const nav = new NavBar(page);

    await nav.gotoHome();
    await nav.clickRegister();

    await expect(page.url()).toContain("https://localhost:44314/Identity/Account/Register");
});
