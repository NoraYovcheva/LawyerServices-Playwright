const BasePage = require("./BasePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        this.textTitle = page.locator('//h1[text()="Намерете своя адвокат."]');
        this.textUnderTitle = page.locator('//h1[text()="Свържете се и запазете час онлайн."]');
        this.textUnderTitle2 = page.locator('//p[text()="Pravenportal.com е единственото място за лесно търсене на подходящият за Вас адвокат и незабавно резервиране на час с него онлайн."]');
        this.cityDropdownButton = page.locator('.search-location .rz-dropdown-trigger'); 
        this.cityInput = page.locator('.search-location input[readonly]');
        this.cityOptions = page.getByRole('option'); 
        this.activityDropdownButton = page.locator('.search-info .rz-dropdown-trigger');
        this.activityInput = page.locator('.search-info input[readonly]');
        this.activityOptions = page.getByRole('option');  
        this.searchButton = page.locator('button[type="submit"]');
        
}

    async getTitleText() {
    return await this.textTitle.textContent();
}

    async getSubtitleText() {
    return await this.textUnderTitle.textContent();
}

    async getParagraphText() {
    return await this.textUnderTitle2.textContent();
}

    async selectCity(cityName) {
    await this.cityDropdownButton.click();     
    await this.page.getByRole('option', { name: cityName }).click();
    }

    async selectActivity(activityName) {
    await this.activityDropdownButton.click();
    await this.page.getByRole('option', { name: activityName }).click();
    }

    async clickSearch() {
    await this.searchButton.click();
    }
}
module.exports = HomePage;