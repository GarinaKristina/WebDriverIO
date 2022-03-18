module.exports = class OpenPage {
  open() {
    return browser.url('https://pastebin.com/');
  }
};
