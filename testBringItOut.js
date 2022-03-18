const PastebinPage = require('./PastebinPage');

const text =
  'git config --global user.name  "New Sheriff in Town"git reset $(git commit-tree HEAD^{tree} -m "Legacy code")git push origin master --force';

describe('PastebinPage', () => {
  it('should have title', async () => {
    await PastebinPage.open();
  });
  it('should add the text in new paste area', async () => {
    await PastebinPage.textNewPaste.addValue(text);
  });
  it('should click on button Agree ', async () => {
    await PastebinPage.buttonAgreefirst.click();
  });
  it('should click on "syntax Highlighting" ', async () => {
    await PastebinPage.syntaxHighlightingDropDown.click();
  });
  it('should select "syntax Highlighting" - Bash', async () => {
    await PastebinPage.syntaxHighlightingBash.click();
  });
  it('should click on 10 minute of paste expiration ', async () => {
    await PastebinPage.pasteExpiration.click();
    await PastebinPage.pasteExpiration10Minute.click();
  });
  it('should add the value "how to gain dominance among developers"', async () => {
    await PastebinPage.pasteNameTitle.addValue('how to gain dominance among developers');
  });
  it('should create new paste', async () => {
    await PastebinPage.createNewPaste.click();
  });
  it('should click on button AGREE', async () => {
    await PastebinPage.buttonAgreeSecond.click();
  });

  it('should check new paste for the existence ', async () => {
    await expect(browser).toHaveTitleContaining('how to gain dominance among developers');
  });
  it('should has the syntax Bash ', async () => {
    await expect(PastebinPage.syntaxBash).toHaveText('Bash');
  });
  it('should has code in text area', async () => {
    await expect(PastebinPage.noteArea).toHaveText(text);
  });
});
