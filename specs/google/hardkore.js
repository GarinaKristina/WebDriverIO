const GoogleCalculatorPage = require('../../pageobjects/google/GoogleCalculatorPage');

const request = 'Google Cloud Platform Pricing Calculator';
const enter = '\uE007';
const contrl = '\uE009';
const parameterNumberOfInstaces = '4';
const TIMEOUT = { timeout: 50000 };
const height = 900;
const width = 1500;
const webSiteEgenEmail = 'https://yopmail.com/';
const webSiteWithCalculatorResult = 'https://cloud.google.com/products/calculator';
const webSiteWithGeneratedEmail = 'https://yopmail.com/ru/email-generator';

describe('Open page https://cloud.google.com/', () => {
  it('should have title', async () => {
    await GoogleCalculatorPage.open();
    await GoogleCalculatorPage.setWindowSize(width, height);
    await expect(browser).toHaveTitleContaining('Google Cloud');
  });

  it('should click on search  area and add text', async () => {
    await GoogleCalculatorPage.searchArea.addValue(request);
    await GoogleCalculatorPage.searchArea.keys(enter);
  });

  it('should follow the link with google calculator', async () => {
    await GoogleCalculatorPage.linkWithCalculator.click();
  });

  it('should click on compute engine', async () => {
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.computeEngine.click();
  });
  it('should add value in "Number of instances"- 4', async () => {
    await GoogleCalculatorPage.numberOfInstances4.addValue(parameterNumberOfInstaces);
  });
  it('should click on "Operation system"', async () => {
    await GoogleCalculatorPage.operatingSystem.click();
  });

  it('should select "Operation system" - Debian', async () => {
    await GoogleCalculatorPage.operatingSystemDebian.click();
  });

  it('should click on "Machine Class"', async () => {
    await GoogleCalculatorPage.machineClass.click();
  });

  it('should select "Machine Class" - Regular', async () => {
    await GoogleCalculatorPage.machineClassRegular.click();
  });

  it('should click on  "Series" ', async () => {
    await GoogleCalculatorPage.series.click();
    await GoogleCalculatorPage.series1N.waitForExist(TIMEOUT);
  });

  it('should select  "Series" - N1', async () => {
    await GoogleCalculatorPage.series1N.click();
  });

  it('should ckick on  "Machine type" ', async () => {
    await GoogleCalculatorPage.machineType.click();
    await GoogleCalculatorPage.machineTypeStandartN1.waitForExist(TIMEOUT);
  });

  it('should select  "Machine type"- N1-standart-8 ', async () => {
    await GoogleCalculatorPage.machineTypeStandartN1.click();
  });

  it('should click on "ADD GPUs" ', async () => {
    await GoogleCalculatorPage.addGpus.click();
  });

  it('should click on "GPU type" ', async () => {
    await GoogleCalculatorPage.typeOfGpus.click();
    await GoogleCalculatorPage.typeOfGpusNvidiaTeslaT100.waitForExist(TIMEOUT);
  });

  it('should click on "GPU type"- Tesla T100', async () => {
    await GoogleCalculatorPage.typeOfGpusNvidiaTeslaT100.click();
  });

  it('should click on "Number of GPUs" ', async () => {
    await GoogleCalculatorPage.numberOfGpus.click();
    await GoogleCalculatorPage.numberOfGpus1.waitForExist(TIMEOUT);
  });

  it('should select "Number of GPUs" - 1 ', async () => {
    await GoogleCalculatorPage.numberOfGpus1.click();
  });

  it('should click on "Local SSD"  ', async () => {
    await GoogleCalculatorPage.localSSD.click();
    await GoogleCalculatorPage.localSSD375Gb.waitForExist(TIMEOUT);
  });

  it('should select "Local SSD" - 2*375 GB ', async () => {
    await GoogleCalculatorPage.localSSD375Gb.click();
  });

  it('should click on "Datacenter location"', async () => {
    await GoogleCalculatorPage.dataCenter.click();
    await GoogleCalculatorPage.dataCenterFrankfurt.waitForExist(TIMEOUT);
  });

  it('should select "Datacenter location"- Frankfurt', async () => {
    await GoogleCalculatorPage.dataCenterFrankfurt.click();
  });

  it('should click on "Comitted usage"', async () => {
    await GoogleCalculatorPage.committedUsage.click();
    await GoogleCalculatorPage.committedUsage1year.waitForExist(TIMEOUT);
  });

  it('should select "Comitted usage" - 1 year', async () => {
    await GoogleCalculatorPage.committedUsage1year.click();
  });

  it('should click on "ADD TO ESTIMATE"', async () => {
    await GoogleCalculatorPage.addToEstimate.click();
    await GoogleCalculatorPage.emailEstimate.waitForExist(TIMEOUT);
  });

  it('should click on "EMAIL ESTIMATE"', async () => {
    await GoogleCalculatorPage.emailEstimate.click();
  });

  it('should open new window in browser', async () => {
    await GoogleCalculatorPage.newWindow(webSiteEgenEmail);
  });

  it('should click on button "accept"', async () => {
    await GoogleCalculatorPage.buttonAccept.click();
  });

  it('should generaite new email', async () => {
    await GoogleCalculatorPage.buttonGeneraiteEmail.click();
    await GoogleCalculatorPage.copyEmail.waitForExist(TIMEOUT);
  });

  it('should get text from egen', async () => {
    await GoogleCalculatorPage.copyEmail.click();
  });

  it('should return to google calculator', async () => {
    await GoogleCalculatorPage.switchWindow(webSiteWithCalculatorResult);
  });

  it('should get text from egen and paste email', async () => {
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.emailArea.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.emailArea.click();
    await GoogleCalculatorPage.keys([contrl, 'v']);
    await GoogleCalculatorPage.saveScreenshot('./ScreenshotPage.png');
    await GoogleCalculatorPage.sendEmail.waitForExist(TIMEOUT);
  });
  it('should click on "SEND EMAIL"', async () => {
    await GoogleCalculatorPage.sendEmail.click();
  });
  it('should switch to https://yopmail.com/ru/email-generator', async () => {
    await GoogleCalculatorPage.switchWindow(webSiteWithGeneratedEmail);
    await GoogleCalculatorPage.buttonCheckEmail.click();
    await GoogleCalculatorPage.saveScreenshot('./ScreenshotPagefinish1.png');
    await GoogleCalculatorPage.buttonRefresh.click();
    await GoogleCalculatorPage.saveScreenshot('./ScreenshotPagefinish2.png');
  });
  it('should refresh email', async () => {
    await GoogleCalculatorPage.switchToFrame(0);
    await GoogleCalculatorPage.message.waitForExist(TIMEOUT);
    await GoogleCalculatorPage.message.click();
    await expect(GoogleCalculatorPage.message).toHaveTextContaining('Google Cloud Price Estimate');
  });
  it('should check "Total Estimated Monthly Cost" equal USD 4,026.13', async () => {
    await GoogleCalculatorPage.getTotalCost();
    await expect(GoogleCalculatorPage.total).toHaveText('USD 4,026.13');
  });
});
