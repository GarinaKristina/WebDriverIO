const SearchPage = require('../../pageobjects/google/searchPage');

describe('Build a calculator with special parameters', () => {
  it('should have title', async () => {
    await SearchPage.open();
    await expect(browser).toHaveTitleContaining('Google Cloud');
  });

  it('should click on search  area and add text', async () => {
    await SearchPage.searchArea.addValue('Google Cloud Platform Pricing Calculator');
    await SearchPage.searchArea.keys('\uE007');
  });
  it('should follow the link with google calculator', async () => {
    await SearchPage.linkWithCalculator.click();
  });
  it('should click on compute engine', async () => {
    await SearchPage.switchToFrame(0);
    await SearchPage.switchToFrame(0);
    await SearchPage.computeEngine.click();
  });
  it('should add value in "Number of instances"- 4', async () => {
    await SearchPage.numberOfInstances4.addValue('4');
  });
  it('should click on "Operation system"', async () => {
    await SearchPage.operatingSystem.click({ x: 30 });
  });
  it('should select "Operation system" - Debian', async () => {
    await SearchPage.operatingSystemDebian.click();
  });
  it('should click on "Machine Class"', async () => {
    await SearchPage.machineClass.click();
  });
  it('should select "Machine Class" - Regular', async () => {
    await SearchPage.machineClassRegular.click();
  });
  it('should click on  "Series" ', async () => {
    await SearchPage.series.click();
    await SearchPage.pause(2000);
  });
  it('should select  "Series" - N1', async () => {
    await SearchPage.series1N.click();
  });
  it('should ckick on  "Machine type" ', async () => {
    await SearchPage.machineType.click();
  });
  it('should select  "Machine type"- N1-standart-8 ', async () => {
    await SearchPage.machineTypeStandartN1.click();
  });
  it('should click on "ADD GPUs" ', async () => {
    await SearchPage.addGpus.click();
  });
  it('should click on "GPU type" ', async () => {
    await SearchPage.typeOfGpus.click();
  });
  it('should click on "GPU type"- Tesla T100', async () => {
    await SearchPage.typeOfGpusNvidiaTeslaT100.click();
  });
  it('should click on "Number of GPUs" ', async () => {
    await SearchPage.numberOfGpus.click();
  });
  it('should select "Number of GPUs" - 1 ', async () => {
    await SearchPage.numberOfGpus1.click();
  });
  it('should click on "Local SSD"  ', async () => {
    await SearchPage.localSSD.click();
    await SearchPage.pause(5000);
  });
  it('should select "Local SSD" - 2*375 GB ', async () => {
    await SearchPage.localSSD375Gb.click();
  });
  it('should click on "Datacenter location"', async () => {
    await SearchPage.dataCenter.click();
    await SearchPage.pause(5000);
  });
  it('should select "Datacenter location"- Frankfurt', async () => {
    await SearchPage.dataCenterFrankfurt.click();
  });
  it('should click on "Comitted usage"', async () => {
    await SearchPage.committedUsage.click();
  });
  it('should select "Comitted usage" - 1 year', async () => {
    await SearchPage.committedUsage1year.click();
  });
  it('should click on "ADD TO ESTIMATE"', async () => {
    await SearchPage.addToEstimate.click();
    await SearchPage.pause(5000);
  });
  it('should has on page - Region: Frankfurt', async () => {
    await expect(SearchPage.finishResultRegion).toHaveTextContaining('Frankfurt');
  });
  it('should has on page - VM class: regular', async () => {
    await expect(SearchPage.finishResult1).toHaveTextContaining('regular');
  });
  it('should has on page - Instance type: n1-standard-8', async () => {
    await expect(SearchPage.finishResult2).toHaveTextContaining('n1-standard-8');
  });
  it('should has on page - Local SSD: 2x375 GiB', async () => {
    await expect(SearchPage.finishResult3).toHaveTextContaining('Local SSD: 2x375 GiB');
  });
  it('should has on page - Commitment term: 1 Year', async () => {
    await expect(SearchPage.finishResult4).toHaveTextContaining('1 Year');
  });
  it('should has total cost 4,026.13', async () => {
    await expect(SearchPage.finishResult5).toHaveTextContaining('USD 4,026.13 per 1 month');
  });
});
