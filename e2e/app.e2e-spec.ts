import { Speaker3Page } from './app.po';

describe('speaker3 App', function() {
  let page: Speaker3Page;

  beforeEach(() => {
    page = new Speaker3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
