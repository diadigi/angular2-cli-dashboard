import { Angular2CliDashboardPage } from './app.po';

describe('angular2-cli-dashboard App', function() {
  let page: Angular2CliDashboardPage;

  beforeEach(() => {
    page = new Angular2CliDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
