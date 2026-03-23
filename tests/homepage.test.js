const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test .describe('Home Page tests', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://localhost:44314/');
    });

test('Home page loads correctly', async ({ page }) => {  
    const homePage = new HomePage(page);
    await expect(await homePage.getTitleText()).toBe("Намерете своя адвокат.");
    await expect(await homePage.getSubtitleText()).toBe("Свържете се и запазете час онлайн.");
    await expect(await homePage.getParagraphText()).toBe("Pravenportal.com е единственото място за лесно търсене на подходящият за Вас адвокат и незабавно резервиране на час с него онлайн.");
});

test('City dropdown works correctly', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.selectCity("Бургас");
    await expect(homePage.cityInput).toHaveValue("Бургас");
});

test('Activity dropdown works correctly', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.selectActivity("Банково право");
    await expect(homePage.activityInput).toHaveValue("Банково право");
});

test('Search button works correctly', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.selectCity("Бургас");
    await homePage.selectActivity("Банково право");
    await homePage.clickSearch();
    await expect(page).toHaveURL("https://localhost:44314/lawyers/%D0%91%D1%83%D1%80%D0%B3%D0%B0%D1%81/%D0%91%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%BE%20%D0%BF%D1%80%D0%B0%D0%B2%D0%BE");
});
});