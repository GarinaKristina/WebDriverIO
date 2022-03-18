const BasePage = require('../pastebinPage/BasePage');

class PastebinPage extends BasePage {
  get textNewPaste() {
    return $('#postform-text');
  }
  get syntaxHighlightingDropDown() {
    return $('#select2-postform-format-container');
  }
  get syntaxHighlightingBash() {
    return $('//li[contains(text(), "Bash")]');
  }
  get pasteExpiration() {
    return $('#select2-postform-expiration-container');
  }
  get pasteExpiration10Minute() {
    return $('//li[contains(text(), "10 Minutes")]');
  }
  get pasteNameTitle() {
    return $('#postform-name');
  }
  get createNewPaste() {
    return $("button[type='submit']");
  }
  get buttonAgreefirst() {
    return $('//*[@class="sc-ifAKCX ljEJIv"]');
  }
  get buttonAgreeSecond() {
    return $('//button[normalize-space()="AGREE"]');
  }
  get syntaxBash() {
    return $('//*[@class="btn -small h_800" and contains(text(), "Bash")]');
  }
  get noteArea() {
    return $('//div[@class="de1"]');
  }

  open() {
    super.open();
  }
}
module.exports = new PastebinPage();
