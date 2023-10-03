import { apiUrl } from '../support/app.po';

describe('api', () => {
  context('GET /api/ping', function () {
    it('returns a welcome message', function () {
      cy.request('GET', apiUrl('/ping')).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Welcome to prism!');
      });
    });
  });
});
