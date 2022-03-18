const PastebinPage = require('../../pageobjects/pastebinPage/PastebinPage');

describe('PastebinPage', () => {
  it('should have title', async () => {
    await PastebinPage.open();
    await expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
  });
  it('should click on button Agree ', async () => {
    await PastebinPage.buttonAgreefirst.click();
  });
  it('should add the text in new paste area', async () => {
    await PastebinPage.textNewPaste.addValue('Hello from WebDriver');
  });
  it('should click on 10 minute of paste expiration ', async () => {
    await PastebinPage.pasteExpiration.click();
    await PastebinPage.pasteExpiration10Minute.click();
  });
  it('should add the value "helloweb"', async () => {
    await PastebinPage.pasteNameTitle.addValue('helloweb');
  });
  it('should create new paste', async () => {
    await PastebinPage.createNewPaste.click();
  });
});
