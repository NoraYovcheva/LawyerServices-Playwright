const BasePage = require('./BasePage');

class FooterPage extends BasePage{
    constructor(page) {
        super(page);

        this.followTitle = page.getByRole('heading',{name: "Последвайте ни"});
        this.facebookLink = page.locator('a[href*="facebook.com"]');
        this.twitterLink = page.locator('a[href*="twitter.com"]');
        this.cityTitle = page.locator('//h2[text()="Градове"]');
        this.sofiaLink = page.locator('//a[@title="Намерете добър адвокат в София"]');
        this.areasOfLawLink = page.locator('//h2[text()="Области на правото"]');
        this.areasOfLawTitle = page.locator('//a[@title="Намерете добър адвокат по Наказателно право"]');
        this.footerTitle = page.locator('//h2[text()="За Правен портал"]');
        this.aboutTitle = page.locator('//a[text()="Какво е Правен портал?"]');
        this.submitAppTitle = page.locator('//a[text()="Присъединете се"]');
        this.reasonsTitle = page.locator('//a[text()="3 причини за адвокатски кантори"]');
        this.questionTitle = page.locator('//a[text()="Често задавани въпроси"]');
        this.contactTitle = page.locator('//a[text()="Контакти"]');
        this.conditionsTitle = page.locator('//a[text()="Общи условия за ползване"]');
    }

    async getFollowTitle(){
        return await this.followTitle.textContent();
    }

    async getCityTitle(){
        return await this.cityTitle.textContent();       
    }

    async getAreasLawLink(){
        return await this.areasOfLawLink.textContent();
    }

    async getFooterTitle(){
        return await this.reasonsTitle.textContent();
    }

    async scrollToFollowTitle() {
    await this.followTitle.scrollIntoViewIfNeeded();
}

async scrollToFooter() {
    await this.page.locator('footer').scrollIntoViewIfNeeded();
}
}
module.exports = FooterPage;