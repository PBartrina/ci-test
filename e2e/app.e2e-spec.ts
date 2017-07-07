import { CiappPage } from './app.po';

describe('ciapp App', () => {
  let page: CiappPage;

  beforeEach(() => {
    page = new CiappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
