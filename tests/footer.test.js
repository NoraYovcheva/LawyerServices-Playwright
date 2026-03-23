const { test, expect } = require('@playwright/test');
const FooterPage = require('../pages/FooterPage');


test.describe('Footer tests', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://localhost:44314/');      
    });

    test('Footer is visible', async ({ page }) => {
         const footerPage = new FooterPage(page);

        await footerPage.scrollToFooter();
        await expect(footerPage.followTitle).toBeVisible();
    });

    test('Clicking Facebook link', async ({ page }) => {
         const footerPage = new FooterPage(page);

        const [newPage] = await Promise.all([
          page.waitForEvent('popup'),
          footerPage.facebookLink.click()         
     ]);

     await expect(newPage).toHaveURL(/facebook\.com|facebook.com/);
    });

     test('Clicking Twitter link', async ({ page }) => {
         const footerPage = new FooterPage(page);

          const [newPage] = await Promise.all([
          page.waitForEvent('popup'),
          footerPage.twitterLink.click()
]);

    await expect(newPage).toHaveURL(/twitter\.com|x\.com/);
    });

    test ('Градове is visible', async ({page}) => {
        const footerPage = new FooterPage(page);

        await footerPage.scrollToFooter();
        await expect (footerPage.cityTitle).toBeVisible();
    });

    test('When I click Sofia it should open', async ({ page }) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await footerPage.sofiaLink.click();
    await page.waitForURL('**/lawyers/*');
    //await expect(page.url()).toContain('София');
    await expect(page).toHaveURL('https://localhost:44314/lawyers/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F');
});

test('Области на правото is visible', async({page}) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await expect (footerPage.areasOfLawLink).toBeVisible();
});

test('When I click Наказателно право it should open', async({page}) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await footerPage.areasOfLawTitle.click();
    await page.waitForURL('**/lawyers/*');
    //await expect(page.url()).toContain('Наказателно%20право');
    await expect(page).toHaveURL('https://localhost:44314/lawyers/%D0%9D%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D0%BD%D0%BE%20%D0%BF%D1%80%D0%B0%D0%B2%D0%BE');
});

test('When I click Какво е правенпортал? it should open', async({page}) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await expect(footerPage.aboutTitle).toBeVisible();
    await footerPage.aboutTitle.click();

    await expect(page).toHaveURL(/about/);
});

test('When I click Присъединете се it should open', async({page}) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await expect(footerPage.submitAppTitle).toBeVisible();
    await footerPage.submitAppTitle.click();

    await expect(page).toHaveURL(/submitapplication/);
});

test('When I click 3 причини за адвокатски кантори it should open', async({page}) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await expect(footerPage.reasonsTitle).toBeVisible();
    await footerPage.reasonsTitle.click();

    await expect(page).toHaveURL(/3-reasons/);
});

test('When I click Често задавани въпроси it should open', async({page}) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await expect(footerPage.questionTitle).toBeVisible();
    await footerPage.questionTitle.click();

    await page.waitForURL('**/faq');

    await expect(page).toHaveURL(/faq/);
});

test('When I click Общи условия за ползване it should open', async({page}) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await expect(footerPage.conditionsTitle).toBeVisible();
    await footerPage.conditionsTitle.click();

     await page.waitForURL('**/terms-of-use');

    await expect(page).toHaveURL(/terms-of-use/);
});

test('When I click Контакти it should open', async({page}) => {
    const footerPage = new FooterPage(page);

    await footerPage.scrollToFooter();
    await expect(footerPage.contactTitle).toBeVisible();
    await footerPage.contactTitle.click();

     await page.waitForURL('**/contact');

    await expect(page).toHaveURL(/contact/);
});

});

