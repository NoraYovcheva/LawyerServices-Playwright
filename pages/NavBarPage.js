const BasePage = require("./BasePage");

class NavBar extends BasePage {
    constructor(page) {
        super(page);   

       this.root = page.locator('nav.navbar'); 

       this.notaryButton = page.getByRole('link', { name: 'Нотариуси' });
        this.lawyersButton = page.locator("//a[text()='Адвокати']");
        this.forLawyersButton = page.locator('//a[text()="за адвокати"]');
        this.loginButton = page.locator("//a[text()='вход']");
        this.registerButton = page.locator("//a[text()='регистрация']");
    }

    async gotoHome() {
    await this.page.goto('https://localhost:44314/');
    await this.root.waitFor(); 
}

    async clickNotaries() {
        await this.notaryButton.click();
    }

    async clickLawyers() {
        await this.lawyersButton.click();
    }

    async clickForLawyers() {
    await this.forLawyersButton.click();
}

    async clickLogin() {
    await this.loginButton.waitFor();
    await this.loginButton.click();
}

    async clickRegister() {
        await this.registerButton.waitFor({ state: 'visible' });
        await this.registerButton.click();
    }
}

module.exports = NavBar;