module.exports = class OpenPage {
  open(path) {
    return browser.url(path);
  }
};
