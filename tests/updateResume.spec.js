const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');

test('updateResume', async ({ page }) => {
    await page.pause();
    const resumePath = path.join("uploads", "Ankur_Sharma_8_years.pdf");


    // Ensure that the resume file exists
    if (!fs.existsSync(resumePath)) {
        console.log("Resume file not found in the uploads folder.");
        return;
    }

    try {
        await page.goto("https://www.naukri.com/");
        await page.locator('#login_Layer').click();
        await page.getByPlaceholder("Enter your active Email ID / Username").fill("ankursharma2301@gmail.com");
        await page.getByPlaceholder("Enter your password").fill("Admin@1234");
        await page.getByRole("button", { name: 'Login' }).first().click();
        await expect(page).toHaveURL("https://www.naukri.com/mnjuser/homepage");

        await page.getByText("View profile").click();
        await expect(page).toHaveURL("https://www.naukri.com/mnjuser/profile");

        // Upload resume
        await page.setInputFiles('input[type="file"]', resumePath);
        console.log("Resume updated successfully");
    } catch (error) {
        console.error("Error during resume update:", error);
    }
});