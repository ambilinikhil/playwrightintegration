import { defineConfig } from '@playwright/test';
export default defineConfig({
testDir: './tests',
use: {
headless: true,
screenshot: 'on',
video: 'retain-on-failure',
},
reporter: [
    ['list'],
    ['html', { outputFolder: 'html-report', open: 'always' }],
  ],
});
//reporter: [['list'], ['html', { outputFolder: 'test-results/html-report' }]],
//});