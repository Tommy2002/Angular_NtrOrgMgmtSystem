import { NtrOrgMgmtSystemPage } from './app.po';

describe('ntr-org-mgmt-system App', () => {
  let page: NtrOrgMgmtSystemPage;

  beforeEach(() => {
    page = new NtrOrgMgmtSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ntr works!');
  });
});
