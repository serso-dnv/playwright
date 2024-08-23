import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

const url = process.env.TEST_URL;
const email = process.env.VERACITY_TEST_EMAIL;
const password = process.env.VERACITY_TEST_PASSWORD;

const increasedTimeout = { timeout: 30000 };

test("Veracity authentication flow works as expected for external users", async ({
  page,
}) => {
  // Navigate to the specified URL
  await page.goto(url as string);

  // Click on the "Sign in" button
  await page.getByRole("button", { name: "Sign in" }).click();

  // Verify the page title is "Veracity by DNV - Sign in"
  await expect(page).toHaveTitle("Veracity by DNV - Sign in");

  // Fill in the email or username in the respective input field
  await page.getByLabel("Email address or username").fill(email as string);

  // Click the "Continue" button to proceed to the password step
  await page.getByText("Continue").click();

  // Fill in the password field
  await page.getByLabel("Password").fill(password as string);

  // Click the "Log in" button to attempt to sign in
  await page.getByText("Log in").click();

  // Click on the avatar to open the user menu
  await page.locator(".vui-loggedInHeader .vui-avatar").click();

  // Verify that the "Sign out" option is visible in the user menu
  await expect(page.getByText("Sign out")).toBeVisible();

  // Click the "Profile" option to navigate to the profile page
  await page.getByText("Profile").click();

  // Verify that the user's email (converted to lowercase) is visible on the profile page
  await expect(page.getByText(email?.toLowerCase() as string)).toBeVisible(
    increasedTimeout
  );
});
