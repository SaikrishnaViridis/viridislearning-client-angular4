import { ViridislearningClientPage } from './app.po';

describe('viridislearning-client App', () => {
  let page: ViridislearningClientPage;

  beforeEach(() => {
    page = new ViridislearningClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
