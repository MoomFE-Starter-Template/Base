export const submitBtnSelector = 'button:contains("登录")';
export const usernameInputSelector = 'input[placeholder*="请输入账号"]';
export const passwordInputSelector = 'input[placeholder*="请输入密码"]';
export const agreeCheckboxSelector = 'input[type="checkbox"]';

/**
 * 用于在登录操作后检查是否登录成功
 */
export function checkIsLoging() {
  cy.get(submitBtnSelector).click().should('be.disabled');
  cy.get(usernameInputSelector).should('be.disabled');
  cy.get(passwordInputSelector).should('be.disabled');
  cy.get(agreeCheckboxSelector).should('be.disabled');

  cy.get('.el-message:contains("登录成功")')
    .should('exist');
  cy.get('.el-message:contains("登录成功")')
    .should('not.exist');
}

/**
 * 跳转到登录页面并登录
 * @param loginAfterPath 校验登录后跳转的页面, 默认为 '/'
 */
export function login(loginAfterPath = '/') {
  cy.url().then((url) => {
    if (url === 'http://localhost:3000/') {
      cy.get('a[href="/login"]>button')
        .click()
        .url()
        .should('eq', 'http://localhost:3000/login');
    }
  });

  cy.get(usernameInputSelector).type('admin');
  cy.get(passwordInputSelector).type('123456');
  cy.get(agreeCheckboxSelector).parents('.el-checkbox').click();

  checkIsLoging();

  cy.url()
    .should('eq', `http://localhost:3000${loginAfterPath}`);
}

/**
 * 退出登录
 */
export function logout() {
  cy.clearAllLocalStorage()
    .clearAllSessionStorage()
    .reload();
}
