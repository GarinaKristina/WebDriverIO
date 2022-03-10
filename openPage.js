module.exports = class OpenPage {
  open() {
    return browser.url('https://cloud.google.com/');
  }
};
