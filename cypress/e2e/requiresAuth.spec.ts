import { login, logout } from '../utils/login';

context('登录鉴权流程', () => {
  beforeEach(() => {
    logout();
    cy.visit('/');
    cy.contains('示例页').should('exist');
  });

  it('登录鉴权流程', () => {
    cy.get('a[href="/demo/requiresAuth"]>button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/login?redirect=/demo/requiresAuth');

    login('/demo/requiresAuth');

    cy.visit('/');

    cy.get('a[href="/demo/requiresAuth"]>button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/demo/requiresAuth');

    logout();

    cy.url()
      .should('eq', 'http://localhost:3000/login?redirect=/demo/requiresAuth');
  });
});
