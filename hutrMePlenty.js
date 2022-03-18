const GoogleCalculatorPage = require('./GoogleCalculatorPage');

const request = 'Google Cloud Platform Pricing Calculator';
const enter = '\uE007';
const parametrNumberOfInstaces = '4';
const TIMEOUT = { timeout: 50000 };
const height = 1080;
const width = 1920;

describe('Build a calculator with special parameters', () => {
  it('should have title', async () => {
    await GoogleCalculatorPage.open();
    await GoogleCalculatorPage.setWindowSize(width, height);
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
    await GoogleCalculatorPage.numberOfInstances4.addValue(parametrNumberOfInstaces);
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
  });

  it('should select  "Machine type"- N1-standart-8 ', async () => {
    await GoogleCalculatorPage.machineTypeStandartN1.click();
  });

  it('should click on "ADD GPUs" ', async () => {
    await GoogleCalculatorPage.addGpus.click();
  });

  it('should click on "GPU type" ', async () => {
    await GoogleCalculatorPage.typeOfGpus.click();
  });

  it('should click on "GPU type"- Tesla T100', async () => {
    await GoogleCalculatorPage.typeOfGpusNvidiaTeslaT100.click();
  });

  it('should click on "Number of GPUs" ', async () => {
    await GoogleCalculatorPage.numberOfGpus.click();
  });

  it('should select "Number of GPUs" - 1 ', async () => {
    await GoogleCalculatorPage.numberOfGpus1.click();
  });

  it('should click on "Local SSD"  ', async () => {
    await GoogleCalculatorPage.localSSD.click();
    await GoogleCalculatorPage.localSSD375Gb.waitForExist(TIMEOUT);
  });

  it('should select "Local SSD" - 2*375 GB ', async () => {
    await GoogleCalculatorPage.localSSD375Gb.waitForExist(TIMEOUT);
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
  });

  it('should select "Comitted usage" - 1 year', async () => {
    await GoogleCalculatorPage.committedUsage1year.click();
  });

  it('should click on "ADD TO ESTIMATE"', async () => {
    await GoogleCalculatorPage.addToEstimate.click();
    await GoogleCalculatorPage.pause(2000);
  });

  it('should has on page - Region: Frankfurt', async () => {
    await expect(GoogleCalculatorPage.finishResultRegion).toHaveText('Region: Frankfurt');
  });

  it('should has on page - VM class: regular', async () => {
    await expect(GoogleCalculatorPage.finishResult1).toHaveText('VM class: regular');
  });

  it('should has on page - Instance type: n1-standard-8', async () => {
    await expect(GoogleCalculatorPage.finishResult2).toHaveTextContaining('Instance type: n1-standard-8');
  });

  it('should has on page - Local SSD: 2x375 GiB', async () => {
    await expect(GoogleCalculatorPage.finishResult3).toHaveTextContaining('Local SSD: 2x375 GiB');
  });

  it('should has on page - Commitment term: 1 Year', async () => {
    await expect(GoogleCalculatorPage.finishResult4).toHaveText('Commitment term: 1 Year');
  });

  it('should has total cost 4,026.13', async () => {
    await expect(GoogleCalculatorPage.finishResult5).toHaveText('Estimated Component Cost: USD 4,026.13 per 1 month');
  });
});
