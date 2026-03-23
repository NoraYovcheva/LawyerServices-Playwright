const { test, expect } = require('@playwright/test');
const  RegistrationPage  = require('../pages/RegistrationPage');
//const { emit } = require('node:cluster');

test('Successful registration with random email', async ({ page }) => {
    const reg = new RegistrationPage(page);

    await reg.goto();

    const email = reg.generateRandomEmail();

    await reg.register(
        "Nora",
        "Aleksandrova",
        "0888123456",
        email,
        "12345678",
        "12345678"
    );

    await expect(reg.registrationSuccessMessage).toContainText("Моля, Отворете имeйла си и последвайте линка за да потвърдите вашият имейл !");
});

test('Registration fails with invalid email', async ({ page }) => {
    const reg = new RegistrationPage(page);

    await reg.goto();

    await reg.register(
        "Nora",
        "Aleksandrova",
        "0888123456",
        "koko.bg",          
        "12345678",
        "12345678"
    );

    await expect(reg.invalidEmailMessage).toHaveText('Въведете валиден имейл');
});

test('Registration fails when passwords do not match', async ({ page }) => {
    const reg = new RegistrationPage(page);
    const email = reg.generateRandomEmail();

    await reg.goto();

    await reg.register(
        "Nora",
        "Aleksandrova",
        "0888123456",
        email,
        "12345678",
        "123456"  
    );

    await expect(reg.passwordMismatchMessage).toHaveText('Паролата и паролата за потвърждение не съвпадат.');
});

test('Registration fails when first name is missing', async ({ page }) => {
    const reg = new RegistrationPage(page);
    const email = reg.generateRandomEmail();

    await reg.goto();

    await reg.register(
        "",
        "Aleksandrova",
        "0888123456",
        email,
        "12345678",
        "12345678"
    );

    await expect(reg.firstNameError).toHaveText('Името е задължително');
});

test('Registration fails when last name is missing', async ({ page }) => {
    const reg = new RegistrationPage(page); 
    const email = reg.generateRandomEmail();

    await reg.goto();
    await reg.register(
        "Nora",
        "",
        "0888123456",   
        email,
        "12345678",
        "12345678"
    );

    await expect(reg.lastNameError).toHaveText('Фамилията е задължителна');
});

test('Registration fails when phone number is missing', async ({ page }) => {
    const reg = new RegistrationPage(page);
    const email = reg.generateRandomEmail();

    await reg.goto();
    await reg.register(
        "Nora",
        "Aleksandrova",
        "",                 
        email,
        "12345678",
        "12345678"
    );

    await expect(reg.phoneError).toHaveText('Телефонът е задължителен');
});

test('Registration fails when email already exists', async ({ page }) => {
    const reg = new RegistrationPage(page);

    await reg.goto();

    await reg.register(
        "Nora",
        "Aleksandrova",
        "0888123456",
        "nalexza@abv.bg",  
        "12345678",
        "12345678"
    );

    await expect(reg.takenEmailMessage).toContainText("Username 'nalexza@abv.bg' is already taken.");
});

test('Registration fails with empty email', async ({ page }) => {
   const reg = new RegistrationPage(page);
    
    await reg.goto();
    await reg.register(
        "Nora",
        "Aleksandrova",
        "0888123456",
        "",  
        "12345678",
        "12345678"
    );

    await expect(reg.missingEmailError).toHaveText('Имейлът е задължителен');
});
