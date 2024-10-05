import { checkIsLoging, login, logout, passwordInputSelector, submitBtnSelector, usernameInputSelector } from '../utils/login';

context('登录及登录鉴权流程', () => {
  beforeEach(() => {
    logout();
    cy.visit('/');
    cy.contains('示例页').should('exist');
  });

  Cypress.on('uncaught:exception', () => {
    return false;
  });

  it('正常登录流程测试', () => {
    login();

    cy.get('a[href="/login"]>button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/login');

    cy.get('.el-message:contains("正在获取登录状态")')
      .should('exist');
    cy.get('.el-message:contains("您已登录")')
      .should('exist');
    cy.get('.el-message:contains("您已登录")')
      .should('not.exist')
      .url()
      .should('eq', 'http://localhost:3000/');

    logout();

    cy.get('a[href="/login"]>button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/login');

    cy.get('.el-message:contains("正在获取登录状态")')
      .should('not.exist');
  });

  it('登录校验流程', () => {
    cy.get('a[href="/login"]>button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/login');

    cy.get(usernameInputSelector).should('not.be.disabled').parents('.el-input').next('.el-form-item__error').should('not.exist');
    cy.get(passwordInputSelector).should('not.be.disabled').parents('.el-input').next('.el-form-item__error').should('not.exist');

    cy.get(submitBtnSelector)
      .should('not.be.disabled')
      .click();

    cy.get(usernameInputSelector).should('not.be.disabled').parents('.el-input').next('.el-form-item__error').should('exist');
    cy.get(passwordInputSelector).should('not.be.disabled').parents('.el-input').next('.el-form-item__error').should('exist');

    cy.get(usernameInputSelector).type('admin');
    cy.get(passwordInputSelector).type('123456').blur();

    cy.get(usernameInputSelector).should('not.be.disabled').parents('.el-input').next('.el-form-item__error').should('not.exist');
    cy.get(passwordInputSelector).should('not.be.disabled').parents('.el-input').next('.el-form-item__error').should('not.exist');
    cy.get(submitBtnSelector)
      .should('not.be.disabled')
      .click();

    cy.get('.el-message-box:contains("服务协议与隐私保护")')
      .should('exist')
      .find('button:contains("不同意")')
      .click();

    cy.get('.el-message-box:contains("服务协议与隐私保护")')
      .should('not.exist');

    cy.get(usernameInputSelector).should('not.be.disabled').parents('.el-input').next('.el-form-item__error').should('not.exist');
    cy.get(passwordInputSelector).should('not.be.disabled').parents('.el-input').next('.el-form-item__error').should('not.exist');
    cy.get(submitBtnSelector)
      .should('not.be.disabled')
      .click();

    cy.get('.el-message-box:contains("服务协议与隐私保护")')
      .should('exist')
      .find('button:contains("不同意")')
      .siblings('button:contains("同意")')
      .click();

    cy.get('.el-message-box:contains("服务协议与隐私保护")')
      .should('not.exist');

    checkIsLoging();

    cy.url()
      .should('eq', 'http://localhost:3000/');
  });
});
