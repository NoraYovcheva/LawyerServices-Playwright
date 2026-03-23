class BasePage {
    constructor(page) {
        this.page = page;
    }

    async click(locator) {
    await locator.click();
}

async type(locator, value) {
    await locator.fill(value);
}

async text(locator) {
    return await locator.textContent();
}
    
async waitForSelector(selector) {
    await this.page.waitForSelector(selector);
}
}

module.exports = BasePage;
