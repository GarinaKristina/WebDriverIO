const OpenPage = require('./openPage');

class SearchPage extends OpenPage {
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
    return $('//md-option[@id="select_option_423"]');
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
    return $('//*[@id="compute"]/md-list/md-list-item[5]/div[1]');
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
    return $('//button[@id="email_quote"]');
  }
  get emailArea() {
    return $('//input[@id="input_532"]');
  }
  get sendEmail() {
    return $('//button[@aria-label="Send Email"]');
  }
  get buttonCheckEmail() {
    return $('//button[@onclick="egengo();""]');
  }
  async switchToFrame(id) {
    await browser.switchToFrame(id);
  }
  async pause() {
    await browser.pause();
  }
  open() {
    super.open();
  }
}

module.exports = new SearchPage();
