const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

test.describe('Dashboard tests', () => {

    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('support@pravenportal.com', 'Administrator');
    });

test("Dashboard loads correctly after login", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    expect(await dashboard.isLoaded()).toBeTruthy();
});

test("Dashboard menu item is visible", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const name = await dashboard.getDashboardName();

    expect(name.trim()).toBe("Dashboard");
});

test("All dashboard cards are visible", async ({ page }) => {
    const dashboard = new DashboardPage(page);

    expect(await dashboard.cardsCount()).toBe(4);
    expect(await dashboard.areAllCardsVisible()).toBeTruthy();
});
});
    