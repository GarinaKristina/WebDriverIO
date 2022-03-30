const BasePage = require('./BasePage');

class GoogleCalculatorPage extends BasePage {
  get searchArea() {
    return $('//input[@name="q"]');
  }
  get linkWithCalculator() {
    return $('//a[@class="gs-title"]');
  }
  get computeEngine() {
    return $('//*[contains(text(), "Compute Engine")]');
  }
  get numberOfInstances4() {
    return $('//input[@id="input_80"]');
  }
  get machineClass() {
    return $('//*[@id="select_value_label_73"]');
  }
  get machineClassRegular() {
    return $('//*[@id="select_option_95"]');
  }
  get operatingSystem() {
    return $('//*[@id="select_value_label_72"]');
  }
  get operatingSystemDebian() {
    return $('//*[@id="select_option_82"]');
  }
  get series() {
    return $('//*[@id="select_105"]');
  }
  get series1N() {
    return $('//*[@id="select_option_220"]');
  }
  get machineType() {
    return $('//*[@id="select_value_label_76"]');
  }
  get machineTypeStandartN1() {
    return $('//*[@id="select_option_423"]');
  }
  get addGpus() {
    return $('//*[@class="md-label" and  contains(text(), "Add GPUs")]');
  }
  get typeOfGpus() {
    return $('//*[@id="select_456"]');
  }
  get typeOfGpusNvidiaTeslaT100() {
    return $('//*[@id="select_option_461"]');
  }
  get numberOfGpus() {
    return $('//*[@id="select_458"]');
  }
  get numberOfGpus1() {
    return $('//*[@id="select_option_467"]');
  }
  get localSSD() {
    return $('//*[@id="select_value_label_417"]');
  }
  get localSSD375Gb() {
    return $('//*[@id="select_option_444"]');
  }
  get committedUsage() {
    return $('//*[@id="select_value_label_79"]');
  }
  get committedUsage1year() {
    return $('//*[@id="select_option_118"]');
  }
  get dataCenter() {
    return $('//*[@id="select_value_label_78"]');
  }
  get dataCenterFrankfurt() {
    return $('//*[@id="select_option_241"]');
  }
  get addToEstimate() {
    return $('//*[@class="md-raised md-primary cpc-button md-button md-ink-ripple"]');
  }
  get finishResultRegion() {
    return $('//*[@class="md-list-item-text ng-binding"][1]');
  }
  get finishResult1() {
    return $('//div[normalize-space()="VM class: regular"]');
  }
  get finishResult2() {
    return $(
      '//div[@class="md-list-item-text ng-binding cpc-cart-multiline flex" and contains(@ng-class,"item.items.sustainedUse || item.items.isInstanceCommitted")]'
    );
  }
  get finishResult3() {
    return $('//*[@id="compute"]/md-list/md-list-item[8]/div[1]');
  }
  get finishResult4() {
    return $('//*[@id="compute"]/md-list/md-list-item[3]/div');
  }
  get finishResult5() {
    return $('//*[@id="compute"]/md-list/md-list-item[9]/div/b');
  }
  get totalCost() {
    return $('//b[contains(text(),"Total Estimated Cost:")]');
  }
  get vMclass() {
    return $('//*[contains(text(), "VM class: regular")]');
  }
  get expectInstanceType() {
    return $('//*[contains(text(), "Instance type: n1-standard-8")]');
  }
  get expectRegion() {
    return $('//*[contains(text(), "Region: Frankfurt")]');
  }
  get expectLOcalSSD() {
    return $('//*[contains(text(), "Local SSD: 2x375 GiB")]');
  }
  get expectCommittedTerm() {
    return $('//*[contains(text(), "Commitment term: 1 Year")]');
  }
  get buttonAccept() {
    return $('//button[@id="accept"]');
  }
  get buttonGeneraiteEmail() {
    return $('//b[contains(text(),"Случайный адрес электронной почты")]');
  }
  get areaWithEmail() {
    return $('//div[@id="egen"]');
  }
  get copyEmail() {
    return $('//button[@id="cprnd"]');
  }
  get emailEstimate() {
    return $('//*[@id="email_quote"]');
  }
  get lastName() {
    return $('//*[@id="input_446"]');
  }
  get okey() {
    return $('//*[@id="dialogContent_462"]/form/md-toolbar/h2');
  }
  get emailArea() {
    return $('//input[contains(@class, "ng-valid-email")]');
  }
  get sendEmail() {
    return $('//*[@aria-label="Send Email"]');
  }
  get buttonRefresh() {
    return $('//*[@id="refresh"]');
  }
  get buttonCheckEmail() {
    return $('//button[@onclick="egengo();"]');
  }
  get total() {
    return $('//*[normalize-space()="USD 4,026.13"]');
  }
  get total2() {
    return $('//td[contains(text(),"USD 4,026.13")]');
  }
  //td[contains(text(),"USD 252.10")]
  get message() {
    return $('//div[@class="lms"]');
  }
  get showpicture() {
    return $('//span[contains(text(),"Показать изображения")]');
  }
  get moreSize() {
    return $('//i[contains(text(),"")]');
  }
  get textArea() {
    return $('//tbody/tr[@valign="top"]/td[1]');
  }
  get iframe() {
    return $('#ifmail');
  }

  async getTotalCost() {
    await browser.switchToParentFrame();
    await browser.switchToFrame(await this.iframe);
    return await this.total.getText();
  }
  async clickbuttonCheckEmail() {
    await browser.buttonCheckEmail.pause(2000);
    await browser.buttonCheckEmail.click();
  }
  async switchWindow(matcher) {
    await browser.switchWindow(matcher);
  }
  async getUrl() {
    await browser.getUrl();
  }
  async newWindow(url) {
    await browser.newWindow(url);
  }
  async switchToFrame(id) {
    await browser.switchToFrame(id);
  }

  async pause() {
    await browser.pause();
  }
  async setWindowSize(width, height) {
    await browser.setWindowSize(width, height);
  }

  async keys(value) {
    await browser.keys(value);
  }
  async saveScreenshot(filepath) {
    await browser.saveScreenshot(filepath);
  }
  open() {
    super.open();
  }
}

module.exports = new GoogleCalculatorPage();
