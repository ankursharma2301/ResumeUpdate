import{test,expect} from '@playwright/test'


test('Resume_Headline', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('ankursharma2301@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@1234')
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('link', { name: 'View profile' }).click();
  await page.locator('#lazyResumeHead').getByText('editOneTheme').click();
  await page.pause();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Resume Headline has been').click();
});