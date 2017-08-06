import { browser, element, by } from 'protractor';

export class NtrOrgMgmtSystemPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ntr-root h1')).getText();
  }
}
