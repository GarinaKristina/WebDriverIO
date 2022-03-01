const SearchPage = require('./searchPage');

describe('PastebinPage', () => {
  it('should have title', () => {
    SearchPage.open();
    expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
  });

  it('should add the text in new paste area', () => {
    SearchPage.textNewPaste.sendKeys(
      'git config --global user.name  "New Sheriff in Town"git reset $(git commit-tree HEAD^{tree} -m "Legacy code")git push origin master --force'
    );
    expect(SearchPage.textNewPaste).toHaveTextContaining('New Sheriff in Town');
  });
  it('should click on 10 minute of paste expiration ', () => {
    SearchPage.pasteExpiration.click();
    SearchPage.pasteExpiration10Minute.click();
  });
  it('should add the value "how to gain dominance among developers"', () => {
    SearchPage.pasteNameTitle.addValue('how to gain dominance among developers');
    expect(SearchPage.pasteNameTitle).toHaveText('how to gain dominance among developers');
  });
  it('should create new paste', () => {
    SearchPage.createNewPaste.click();
  });
  it('should check new paste for the existence ', () => {
    //SearchPage.note.waitForDisplayed({ timeout: 5000 });
    //expect(note).toHaveText('helloweb');
    expect(browser).toHaveTitle('how to gain dominance among developers');
  });
  it('should has the syntax Bash ', () => {
    //*[@class="btn -small h_800" and contains(text(), "Bash")]
    expect(browser).toHaveTextContaining('Bash');
  });
  it('should has code in text area', () => {
    //*[@class="btn -small h_800" and contains(text(), "Bash")]
    expect(browser).toHaveTextContaining('New Sheriff in Town');
  });
});
