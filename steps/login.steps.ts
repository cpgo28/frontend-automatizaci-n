import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// Tipamos las variables
let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('el usuario abre la página de login', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.goto();
});

When('ingresa usuario {string} y contraseña {string}', async function (user: string, pass: string) {
    await loginPage.login(user, pass);
});

When('hace clic en el botón de login', async function () {
    // El clic ya se hace en login()
});

Then('debe ver el mensaje {string}', async function (mensaje: string) {
    await expect(page.locator(`text=${mensaje}`)).toBeVisible();
    await browser.close();
});
