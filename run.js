const puppeteer = require('puppeteer');

(async () => {
  const headless = process.env.HEADLESS ? 'new': false;
  const browser = await puppeteer.launch({ headless });
  const page = await browser.newPage();
  // Redirect console.log from the page to stdout
  page.on('console', msg => console.log(msg.text()));

  page.goto(`file://${__dirname}/index.html`);
  await page.waitForSelector('#speedtest-finished');
  await browser.close();
})();
