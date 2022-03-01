const OpenPage = require('./openPage');

class SearchPage extends OpenPage {
  get textNewPaste() {
    return $('#postform-text');
  }
  get pasteExpiration() {
    return $('#select2-postform-expiration-container');
  }
  get pasteExpiration10Minute() {
    return $('#select2-postform-expiration-result-q68m-10M');
  }
  get pasteNameTitle() {
    return $('#postform-name');
  }
  get createNewPaste() {
    return $("button[type='submit']");
  }
  get note() {
    return $("div[class='info-top'] h1");
  }
  open() {
    super.open('https://pastebin.com/');
  }
}
module.exports = new SearchPage();
