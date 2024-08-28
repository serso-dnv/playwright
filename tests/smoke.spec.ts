import { test, expect } from '@playwright/test'
import * as dotenv from 'dotenv'

dotenv.config()

const url = process.env.TEST_URL

test('Checking the title', async ({ page }) => {
  await page.goto(url as string)
  const pageTitle = await page.title()
  expect(pageTitle).toBe('DNV EVOLVE DERIVE')
})
