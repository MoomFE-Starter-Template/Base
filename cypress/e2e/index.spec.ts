context('首页', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('示例页').should('exist');
  });

  it('跳转测试', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');

    cy.contains('基础项目模板').should('exist');

    cy.get('#name-input')
      .type('mixte{enter}')
      .url()
      .should('eq', 'http://localhost:3000/hello/mixte');

    cy.get('#back')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/');

    cy.get('#go')
      .should('be.disabled');

    cy.get('#name-input')
      .type('Zw');

    cy.get('#go')
      .should('not.be.disabled')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/hello/Zw');
  });

  it('底部按钮 - [首页]', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');

    cy.get('button[title="首页"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/');

    cy.get('#name-input')
      .type('mixte{enter}');

    cy.url()
      .should('eq', 'http://localhost:3000/hello/mixte');

    cy.get('button[title="首页"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/');
  });

  it('底部按钮 - [切换深色模式]', () => {
    const btnSelector = 'button[title="切换深色模式"]';

    Cypress.$.each(['one', 'two'], (index) => {
      // light

      cy.get(`${btnSelector}[data-theme="light"]`)
        .should('exist');

      cy.get('html')
        .should('have.class', 'light')
        .should('not.have.class', 'dark');

      cy.get(btnSelector).click();

      // dark

      cy.get(`${btnSelector}[data-theme="dark"]`)
        .should('exist');

      cy.get('html')
        .should('have.class', 'dark')
        .should('not.have.class', 'light');

      cy.get(btnSelector).click();

      // system ( light )

      cy.get(`${btnSelector}[data-theme="system"]`)
        .should('exist');

      cy.get('html')
        .should('have.class', 'light')
        .should('not.have.class', 'dark');

      // reset
      if (!index) {
        cy.get(btnSelector).click();
      }
    });
  });

  it('底部按钮 - [跳转到 Github]', () => {
    cy.get('button[title="跳转到 Github"]')
      .children('a')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://github.com/MoomFE-Starter-Template/Base');
  });
});
