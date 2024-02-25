require('cypress-xpath')
class addEmployeePage {
    elements = {
        firstNameInput: () => cy.get('.orangehrm-firstname'),
        midleNameInput: () => cy.get('.orangehrm-middlename'),
        lastNameInput: () => cy.get('.orangehrm-lastname'),
        saveBtn: () => cy.xpath('//button[text()[contains(.,"Save")]]'),
        cancelBtn: () => cy.xpath('//button[text()[contains(.,"Cancel")]]')
    }
    addEmployee(firstname, middlename, lastname) {
        this.elements.firstNameInput().type(firstname)
        this.elements.midleNameInput().type(middlename)
        this.elements.lastNameInput().type(lastname)
        this.elements.saveBtn().click()
        cy.wait(6000)
    }
}
export default addEmployeePage