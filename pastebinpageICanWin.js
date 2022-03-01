const SearchPage = require('../pageobjects/searchPage');

describe('PastebinPage', () => {
  it('should have title', () => {
    SearchPage.open();
    expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
  });

  it('should add the text in new paste area', () => {
    SearchPage.textNewPaste.sendKeys('Hello from WebDriver');
    expect(SearchPage.textNewPaste).toHaveText('Hello from WebDriver');
  });
  it('should click on 10 minute of paste expiration ', () => {
    SearchPage.pasteExpiration.click();
    SearchPage.pasteExpiration10Minute.click();
  });
  it('should add the value "helloweb"', () => {
    SearchPage.pasteNameTitle.addValue('helloweb');
    expect(SearchPage.pasteNameTitle).toHaveText('helloweb');
  });
  it('should create new paste', () => {
    SearchPage.createNewPaste.click();
  });
  it('should check new paste for the existence ', () => {
    //SearchPage.note.waitForDisplayed({ timeout: 5000 });
    //expect(note).toHaveText('helloweb');
    expect(browser).toHaveTitle('helloweb');
  });
});
