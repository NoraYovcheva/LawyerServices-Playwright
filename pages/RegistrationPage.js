const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class RegistrationPage extends BasePage {
    constructor(page) {
       super(page);

        this.nameField = page.locator('#Input_FirstName');
        this.surnameField = page.locator('#Input_LastName');
        this.telephoneField = page.locator('#Input_Phone');
        this.emailField = page.locator('#Input_Email');
        this.passwordField = page.locator('#Input_Password');
        this.confirmPasswordField = page.locator('#Input_ConfirmPassword');
        this.registerButton = page.locator('#registerSubmit');

        this.registrationSuccessMessage = page.locator('//h1');
        this.registrationErrorMessage = page.locator("//span[text()='Приемете общите условия !']");
        this.invalidEmailMessage = page.locator("[data-valmsg-for='Input.Email']");
        this.passwordMismatchMessage = page.locator("span[data-valmsg-for='Input.ConfirmPassword']");
        this.firstNameError = page.locator("span[data-valmsg-for='Input.FirstName']");
        this.lastNameError = page.locator("span[data-valmsg-for='Input.LastName']");
        this.phoneError = page.locator("span[data-valmsg-for='Input.Phone']");
        this.missingEmailError = page.locator("span[data-valmsg-for='Input.Email']");
        this.takenEmailMessage = page.locator("#registerForm ul li");
    }

    async goto() {
        await this.page.goto('https://localhost:44314/Identity/Account/Register');
    }

    generateRandomEmail() {
        return `test_${Date.now()}_${Math.floor(Math.random() * 10000)}@gmail.com`;
    }
    
   async register(name, surname, phone, email, password, confirmPassword) {
        await this.nameField.fill(name);
        await this.surnameField.fill(surname);
        await this.telephoneField.fill(phone);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.confirmPasswordField.fill(confirmPassword);
        await this.confirmPasswordField.blur();
        await this.registerButton.click();
        await this.page.waitForTimeout(500);

    }

    async getRegistrationSuccessMessage() {
        return await this.registrationSuccessMessage.textContent();
    }

    async getRegistrationErrorMessage() {
        return await this.registrationErrorMessage.textContent();
    }

    async getInvalidEmailMessage() {
        return await this.invalidEmailMessage.textContent();
    }

    async getPasswordMismatchMessage() {
        return await this.passwordMismatchMessage.textContent();
    }

    async getFirstNameError() {
        return await this.firstNameError.textContent();
    }

    async getLastNameError() {
        return await this.lastNameError.textContent();
    }

    async getPhoneError() {
        return await this.phoneError.textContent();
    }

    async getMissingEmailError() {
        return await this.missingEmailError.textContent();
    }

    async getTakenEmailMessage() {
        return await this.takenEmailMessage.textContent();
    }
};

module.exports = RegistrationPage;