import loginPage from "../pageobjects/loginPage"
import homePage from "../pageobjects/homePage"
import systemUsersPage from "../pageobjects/systemUsersPage"
import addUserPage from "../pageobjects/addUserPage"
import addEmployeePage from "../pageobjects/addEmployeePage"
import pimPage from "../pageobjects/pimPage"
import userInfo from "../fixtures/userInfo.json"
import empInfo from "../fixtures/empInfo.json"

//verifyAddUser.cy.js
describe('Add user feature', () => {
    const loginObj = new loginPage
    const homeObj = new homePage
    const systemUsersObj = new systemUsersPage
    const addUserObj = new addUserPage
    const addEmployeeObj = new addEmployeePage
    const pimObj = new pimPage

    it('Verify valid users have been added successfully', () => {
        //precondition
        loginObj.visit()
        loginObj.login('Admin', 'admin123')
        //delete employee if exist
        homeObj.clickMenuPIM()
        pimObj.deleteEmployee(userInfo[0].employeeName)
        //add new employee
        pimObj.clickAddButton()
        addEmployeeObj.addEmployee(empInfo.empFirstName, empInfo.empMiddleName, empInfo.empLastName)
        //add new user
        homeObj.clickMenuAdmin()
        systemUsersObj.clickAddButton()

        addUserObj.addUser(userInfo[0].userRole, userInfo[0].userStatus, userInfo[0].employeeName, userInfo[0].userName, userInfo[0].empPassword)


        //check if new user is added or not
        systemUsersObj.verifyUserNameExist(userInfo[0].userName)

        systemUsersObj.clickAddButton()
        addUserObj.addUser(userInfo[1].userRole, userInfo[1].userStatus, userInfo[1].employeeName, userInfo[1].userName, userInfo[1].empPassword)


        //check if new user is added or not
        systemUsersObj.verifyUserNameExist(userInfo[1].userName)

    })
})