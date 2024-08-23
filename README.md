# Playwright demo

## Setup

Add file `.env` to the root of the project with the following settings:

```bash
TEST_URL=https://localhost:3000
VERACITY_TEST_EMAIL=your-email@gmail.com
VERACITY_TEST_PASSWORD=your-pswrd
```

## Scripts

- `npm test`: Runs all Playwright tests in headless mode (without a browser UI). This is typically used for automated test executions in CI/CD pipelines or for faster local testing without displaying the browser.
- `npm run test:ui`: Opens the Playwright test runner's interactive UI. This mode allows you to view, run, and debug individual tests with a visual browser window. Useful for development and debugging, where you can inspect how tests are executed.
- `npm run test:report`: Displays the previously generated Playwright test report in a browser. This command helps you review detailed results, including passed, failed, and skipped tests, with additional logs and screenshots for debugging.
