import { test, expect } from '@playwright/test'
import path from 'path';

test('updateResume', async ({ page }) => {

    await page.goto("https://www.naukri.com/");
    await page.locator('#login_Layer').click();
    await page.getByPlaceholder("Enter your active Email ID / Username").fill("ankursharma2301@gmail.com")
    await page.getByPlaceholder("Enter your password").fill("Admin@1234");
    await page.getByRole("button", { name: 'Login' }).first().click();
    await expect(page).toHaveURL("https://www.naukri.com/mnjuser/homepage");

    await page.getByText("View profile").click();
    await expect(page).toHaveURL("https://www.naukri.com/mnjuser/profile");
    // await page.pause();
    //await page.locator("[value*='Update resume']").click();
    const resumePath = path.resolve('D:/Resume/Ankur_Sharma_8_years.pdf');
    await page.setInputFiles('input[type="file"]', resumePath);
    await page.waitForTimeout(5000);
    console.log("Resume Updated Succesfully")

})