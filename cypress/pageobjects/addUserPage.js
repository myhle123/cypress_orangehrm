class addUserPage {
    elements = {
        userRoleSel: () => cy.get('div.oxd-form-row:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'),
        userRoleSelOpt: () => cy.get('.oxd-select-option'),
        statusSel: () => cy.get('div.oxd-grid-item:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)'),
        statusSelOpt: () => cy.get('.oxd-select-dropdown'),
        employeeNameInput: () => cy.get('.oxd-autocomplete-text-input > input:nth-child(2)'),
        employeeNameSel: () => cy.get('.oxd-autocomplete-dropdown'),
        userNameInput: () => cy.get('div.oxd-grid-item:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'),
        passwordInput: () => cy.get('.user-password-cell > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'),
        confirmPasswordInput: () => cy.get('div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'),
        cancelBtn: () => cy.get('button.oxd-button:nth-child(2)'),
        saveBtn: () => cy.get('button.oxd-button:nth-child(3)')
    }

    selectUserRole(role) {
        this.elements.userRoleSel().click()
        this.elements.userRoleSelOpt().contains(role).click();
    }
    selectUserStatus(status) {
        this.elements.statusSel().click()
        this.elements.statusSelOpt().contains(status).click();
    }
    enterEmployeeName(employeename) {
        this.elements.employeeNameInput().type(employeename, { force: true })
        cy.wait(2000)
        this.elements.employeeNameSel().first().click()

    }
    enterUserName(username) {
        this.elements.userNameInput().clear()
        this.elements.userNameInput().type(username)
        cy.wait(2000)
    }
    enterPassword(password) {
        this.elements.passwordInput().clear()
        this.elements.passwordInput().type(password)
    }
    enterConfirmPassword(password) {
        this.elements.confirmPasswordInput().clear()
        this.elements.confirmPasswordInput().type(password)
    }
    clickSaveButton() {
        this.elements.saveBtn().click()
    }
    addUser(userrole, userstatus, employeename, username, password) {
        this.selectUserRole(userrole)
        this.selectUserStatus(userstatus)
        this.enterEmployeeName(employeename)
        this.enterUserName(username)
        this.enterPassword(password)
        this.enterConfirmPassword(password)
        this.clickSaveButton()
        cy.wait(5000)
    }

}

export default addUserPage