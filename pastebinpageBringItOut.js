const SearchPage = require('./searchPage');

describe('PastebinPage', () => {
  it('should have title', async () => {
    await SearchPage.open();  
  });
  it('should add the text in new paste area', async () => {
    await SearchPage.textNewPaste.addValue(
      'git config --global user.name  "New Sheriff in Town"git reset $(git commit-tree HEAD^{tree} -m "Legacy code")git push origin master --force'
    );
  });
  it('should click on button Agree ', async () => {
    await SearchPage.buttonAgreefirst.click();
  });
  it('should click on "syntax Highlighting" ', async () => {
    await SearchPage.syntaxHighlightingDropDown.click();
  });
  it('should select "syntax Highlighting" - Bash', async () => {
    await SearchPage.syntaxHighlightingBash.click();
  });
  it('should click on 10 minute of paste expiration ', async () => {
    await SearchPage.pasteExpiration.click();
    await SearchPage.pasteExpiration10Minute.click();
  });
  it('should add the value "how to gain dominance among developers"', async () => {
    await SearchPage.pasteNameTitle.addValue('how to gain dominance among developers');
   });
  it('should create new paste', async () => {
    await SearchPage.createNewPaste.click();
  });
  it('should click on button AGREE', async () => {
    await SearchPage.buttonAgreeSecond.click();
  });
  it('should check new paste for the existence ', async () => {
    await expect(browser).toHaveTitleContaining('how to gain dominance among developers');
  });
  it('should has the syntax Bash ', async () => {
    await expect(SearchPage.syntaxBash).toHaveTextContaining('Bash');
  });
  it('should has code in text area', async () => {
    await expect(SearchPage.noteArea).toHaveTextContaining('New Sheriff in Town');
  });
});
