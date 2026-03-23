const BasePage = require("./BasePage");

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);

        this.welcomeTitle = page.locator('h3.page-title');
        this.dashboardMenuItem = page.locator("li", { hasText: "Dashboard" });
        this.cards = this.page.locator('.dash-widget-header');
    }

    async isLoaded() {
    await this.page.waitForLoadState('networkidle');
    await this.welcomeTitle.waitFor();  
    return await this.welcomeTitle.isVisible();
    //await this.page.waitForSelector(this.welcomeTitle);
    //return await this.page.locator(this.welcomeTitle).isVisible();
}

    async getDashboardName() {
        await this.page.waitForLoadState('networkidle');
        return await this.dashboardMenuItem.textContent();
    }

    async cardsCount() {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForSelector('.dash-widget-header');
    return await this.cards.count();
}

async areAllCardsVisible() {
    await this.page.waitForLoadState('networkidle');

    const count = await this.cards.count();

    for (let i = 0; i < count; i++) {
        if (!(await this.cards.nth(i).isVisible())) {
            return false;
        }
    }
    return true;
}
};

module.exports = DashboardPage;
