const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login with invalid credentials shows error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('test@test.com', '123456');

    await expect(login.error).toBeVisible();
});

test('Login with empty email shows error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('', '12345678');

    await expect(page.locator('text=Имейлът е задължителен')).toBeVisible();
});

test('Login with empty password shows error', async ({ page }) => {
    const login = new LoginPage(page);  

    await login.goto();
    await login.login('nalexza@abv.bg', '');

    await expect(page.locator('text=Паролата е вадължителна')).toBeVisible();
});

test('Login with empty credentials shows error', async ({ page }) => {
    const login = new LoginPage(page);  

    await login.goto();
    await login.login('', '');

    await expect(page.locator('text=Имейлът е задължителен')).toBeVisible();
    await expect(page.locator('text=Паролата е вадължителна')).toBeVisible();
});

test('Login with valid credentials succeeds', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('support@pravenportal.com', 'Administrator');

    await expect(page).toHaveURL('https://localhost:44314/administration');
});
