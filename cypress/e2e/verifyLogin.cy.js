import loginPage from "../pageobjects/loginPage";
import homePage from "../pageobjects/homePage";
//verifyLogin.cy.js
describe('Login feature', () => {
    const loginObj = new loginPage()
    const homeObj = new homePage()
    beforeEach(function () {
        loginObj.visit()
    })

    it('Login with valid credentials', () => {
        loginObj.enterUsername('Admin')
        loginObj.enterPassword('admin123')
        loginObj.clickSubmit()
        homeObj.elements.menuPanel().should('be.visible')
        cy.wait(2000)
    })

    it('Login with invalid credentials', () => {
        loginObj.enterUsername('myle')
        loginObj.enterPassword('myle123')
        loginObj.clickSubmit();
        loginObj.elements.errorTxt().should('be.visible').and('contain', 'Invalid credentials')

    })
})