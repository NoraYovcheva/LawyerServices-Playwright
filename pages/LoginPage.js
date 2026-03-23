const BasePage = require('./BasePage');

 class LoginPage extends BasePage {
     constructor(page) {
         super(page);

        this.email = page.locator('#exampleInputEmail');
        this.password = page.locator('#exampleInputPassword');
        this.loginBtn = page.locator('button[type="submit"]');
        this.error = page.locator('text=Неуспешен опит за вход.');
     }

     async goto() {
         await this.page.goto('https://localhost:44314/Identity/Account/Login');
     }

     async login(email, pass) {
        await this.email.fill(email);
        await this.password.fill(pass);
        await this.loginBtn.click();
     }
 }

 module.exports = LoginPage;
