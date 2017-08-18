import { EmployeeApplicationPage } from './app.po';

describe('employee-application App', () => {
  let page: EmployeeApplicationPage;

  beforeEach(() => {
    page = new EmployeeApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
