class loginPage {

    elements = {
        usernameInput: () => cy.get('[name="username"]'),
        passwordInput: () => cy.get('[name="password"]'),
        loginBtn: () => cy.get('.orangehrm-login-button'),
        displayPanel: () => cy.get('li.oxd-main-menu-item-wrapper'),
        errorTxt: () => cy.get('.oxd-alert-content-text')
    }
    visit() {
        const baseUrl = Cypress.config('baseUrl');
        cy.visit(baseUrl);
        cy.wait(2000);
    }
    enterUsername(username) {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }

    clickSubmit() {
        this.elements.loginBtn().click();
    }
    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickSubmit();
        cy.wait(2000);
    }
}

export default loginPage;