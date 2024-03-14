const assert = require('assert');

describe('Lambdatest Demo Test', function() {
  it('Lambdatest Demo TestCase', async function () {
    for (let j = 0; j < 2; j++) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Test logic
      await browser.url('https://www.lambdatest.com/blog/');
      const heading = await $('h1');
      const headingValue = await heading.getText();
      await browser.saveScreenshot(`SomeImageName_${j}.png`); // Save screenshot with a unique filename
      console.log('Heading-Ritam:', headingValue);
      global.pageText = headingValue;
    }
  });
});
