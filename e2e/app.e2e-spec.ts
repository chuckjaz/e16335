import { E16335Page } from './app.po';

describe('e16335 App', () => {
  let page: E16335Page;

  beforeEach(() => {
    page = new E16335Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
