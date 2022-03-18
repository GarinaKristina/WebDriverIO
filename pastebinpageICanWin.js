const SearchPage = require('./searchPage');

describe('PastebinPage', () => {
  it('should have title', async () => {
    await SearchPage.open();
    await expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
  });
  it('should click on button Agree ', async () => {
    await SearchPage.buttonAgreefirst.click();
  });
  it('should add the text in new paste area', async () => {
    await SearchPage.textNewPaste.addValue('Hello from WebDriver');
  });
  it('should click on 10 minute of paste expiration ', async () => {
    await SearchPage.pasteExpiration.click();
    await SearchPage.pasteExpiration10Minute.click();
  });
  it('should add the value "helloweb"', async () => {
    await SearchPage.pasteNameTitle.addValue('helloweb');
  });
  it('should create new paste', async () => {
    await SearchPage.createNewPaste.click();
  });
});
