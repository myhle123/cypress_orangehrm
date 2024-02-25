class pimPage {
    elements = {
        //employeeNameInput: () => cy.get('div.oxd-grid-item:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)'),
        employeeNameInput: () => cy.get('div.oxd-grid-item:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)'),
        employeeNameSel: () => cy.get('.oxd-autocomplete-dropdown'),
        searchBtn: () => cy.get('button.oxd-button:nth-child(2)'),
        addBtn: () => cy.get('button.oxd-button--secondary:nth-child(1)'),
        deleteBtn: () => cy.get('button.oxd-table-cell-action-space:nth-child(1)'),
        gridTbl: () => cy.get('.oxd-table-body'),
        recordLbl: () => cy.get('span.oxd-text:nth-child(1)')

    }

    enterEmployeeName(employeename) {
        this.elements.employeeNameInput().type(employeename, { force: true })
        cy.wait(2000)
        this.elements.employeeNameSel().first().click()
    }
    clickSearchButton() {
        this.elements.searchBtn().click()
        cy.wait(2000)
    }
    clickAddButton() {
        this.elements.addBtn().click()
        cy.wait(2000)
    }
    searchEmployee(employeename) {
        enterEmployeeName(employeename)
        clickSearchButton()
    }
    deleteEmployee(employeename) {
        this.enterEmployeeName(employeename)
        this.clickSearchButton()
        this.elements.recordLbl().then(($span) => {
            if ($span.text() != 'No Records Found') {
                this.elements.deleteBtn().click()
                cy.wait(2000)
                cy.get('.oxd-button--label-danger').click()
                cy.wait(2000)
            }
        })
    }

}
export default pimPage