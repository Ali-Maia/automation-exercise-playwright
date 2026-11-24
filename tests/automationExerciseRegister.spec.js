import { test, expect } from '@playwright/test';

test.describe('Fluxo de registro', () => {

  test('Cadastrar um novo usuário com sucesso', async ({ page }) => { 

    await page.goto('http://automationexercise.com/');

    await expect(page).toHaveTitle('Automation Exercise');

    const botaoRegister = page.getByRole('link',{name: 'Signup / Login'});
    await botaoRegister.click();

    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

    const campoNameRegister = page.getByRole('textbox', { name: 'Name' });
    await campoNameRegister.fill('Usuário Teste');
    const emailUnico = `usertest_${Date.now()}@test.com`;
    const campoEmailRegister = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    await campoEmailRegister.fill(emailUnico);
    const botaoFormularioRegister = page.getByRole('button', { name: 'Signup' });
    await botaoFormularioRegister.click();

    await expect(page.getByRole('heading', { name: 'ENTER ACCOUNT INFORMATION' })).toBeVisible();

    const radioTitleSelect = page.getByRole('radio', { name: 'Mr.' });
    await radioTitleSelect.click();
    const campoFormPassword = page.getByRole('textbox', { name: 'Password *' });
    await campoFormPassword.fill('Senha123');
    const campoFormDay = page.locator('#days');
    await campoFormDay.selectOption('1');
    const campoFormMonth = page.locator('#months');
    await campoFormMonth.selectOption('May');
    const campoFormYear = page.locator('#years');
    await campoFormYear.selectOption('2001');

    const campoFormFirstName = page.getByRole('textbox', { name: 'First name *' });
    await campoFormFirstName.fill('User');
    const campoFormLastName = page.getByRole('textbox', { name: 'Last name *' });
    await campoFormLastName.fill('Test');
    const campoFormAdress = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    await campoFormAdress.fill('Example Address');
    const campoFormState = page.getByRole('textbox', { name: 'State *' });
    await campoFormState.fill('California');
    const campoFormCity = page.getByRole('textbox', { name: 'City * Zipcode *' });
    await campoFormCity.fill('San Francisco');
    const campoFormZipCode = page.locator('#zipcode');
    await campoFormZipCode.fill('12345');

    const campoFormMobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
    await campoFormMobileNumber.fill('99999999999');

    const botaoCreateAccount = page.getByRole('button', { name: 'Create Account' });
    await botaoCreateAccount.click();

    await expect(page.getByRole('heading', { name: 'ACCOUNT CREATED!' })).toBeVisible();

  });

});