class systemUsersPage {
    elements = {
        //menu
        navtabUserManagement: () => cy.get('li.oxd-topbar-body-nav-tab:nth-child(1) > span:nth-child(1)'),
        menuitemUser: () => cy.get('.oxd-topbar-body-nav-tab-link'),

        navtabJob: () => cy.get('li.oxd-topbar-body-nav-tab:nth-child(2) > span:nth-child(1)'),
        menuitemJobTitles: () => cy.get('.oxd-dropdown-menu > li:nth-child(1) > a:nth-child(1)'),
        menuitemPayGrades: () => cy.get('.oxd-dropdown-menu > li:nth-child(2) > a:nth-child(1)'),
        menuitemEmploymentStatus: () => cy.get('.oxd-dropdown-menu > li:nth-child(3) > a:nth-child(1)'),
        menuitemJobCategories: () => cy.get('.oxd-dropdown-menu > li:nth-child(4) > a:nth-child(1)'),
        menuitemWorkShifts: () => cy.get('.oxd-dropdown-menu > li:nth-child(5) > a:nth-child(1)'),

        navtabOrganization: () => cy.get('li.oxd-topbar-body-nav-tab:nth-child(3) > span:nth-child(1)'),
        menuitemGeneralInformation: () => cy.get('.oxd-dropdown-menu > li:nth-child(1) > a:nth-child(1)'),
        menuitemLocations: () => cy.get('.oxd-dropdown-menu > li:nth-child(2) > a:nth-child(1)'),
        menuitemStructure: () => cy.get('.oxd-dropdown-menu > li:nth-child(3) > a:nth-child(1)'),

        navtabQualifications: () => cy.get('li.oxd-topbar-body-nav-tab:nth-child(4) > span:nth-child(1)'),
        menuitemSkills: () => cy.get('.oxd-dropdown-menu > li:nth-child(1) > a:nth-child(1)'),
        menuitemEducation: () => cy.get('.oxd-dropdown-menu > li:nth-child(2) > a:nth-child(1)'),
        menuitemLicenses: () => cy.get('.oxd-dropdown-menu > li:nth-child(3) > a:nth-child(1)'),
        menuitemLanguages: () => cy.get('.oxd-dropdown-menu > li:nth-child(4) > a:nth-child(1)'),
        menuitemMemberships: () => cy.get('.oxd-dropdown-menu > li:nth-child(5) > a:nth-child(1)'),


        navtabNationalities: () => cy.get('li.oxd-topbar-body-nav-tab:nth-child(5) > a:nth-child(1)'),
        navtabCorporateBranding: () => cy.get('li.oxd-topbar-body-nav-tab:nth-child(6) > a:nth-child(1)'),

        navtabConfiguration: () => cy.get('li.oxd-topbar-body-nav-tab:nth-child(7) > span:nth-child(1)'),
        menuitemEmailConfiguration: () => cy.get('.oxd-dropdown-menu > li:nth-child(1) > a:nth-child(1)'),
        menuitemEmailSubscriptions: () => cy.get('.oxd-dropdown-menu > li:nth-child(2) > a:nth-child(1)'),
        menuitemLocalization: () => cy.get('.oxd-dropdown-menu > li:nth-child(3) > a:nth-child(1)'),
        menuitemLanguagePackages: () => cy.get('.oxd-dropdown-menu > li:nth-child(4) > a:nth-child(1)'),
        menuitemModules: () => cy.get('.oxd-dropdown-menu > li:nth-child(5) > a:nth-child(1)'),
        menuitemSocialMediaAuthentication: () => cy.get('.oxd-dropdown-menu > li:nth-child(6) > a:nth-child(1)'),
        menuitemRegisterOAuthClient: () => cy.get('.oxd-dropdown-menu > li:nth-child(7) > a:nth-child(1)'),
        menuitemLDAPConfiguration: () => cy.get('.oxd-dropdown-menu > li:nth-child(8) > a:nth-child(1)'),

        addBtn: () => cy.get('button.oxd-button--secondary:nth-child(1)'),
        userNameInput: () => cy.get('input.oxd-input:nth-child(1)'),
        userRoleSel: () => cy.get('div.oxd-grid-item:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)'),
        userRoleSelOpt: () => cy.get('.oxd-select-dropdown'),
        employeeNameInput: () => cy.get('.oxd-autocomplete-text-input'),
        employeeNameSel: () => cy.get('.oxd-autocomplete-dropdown'),
        userStatusSel: () => cy.get('div.oxd-grid-item:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'),
        userStatusSelOpt: () => cy.get('.oxd-select-dropdown'),
        searchBtn: () => cy.xpath('//button[text()[contains(.,"Search")]]'),
        recordLbl: () => cy.get('span.oxd-text:nth-child(1)'),
        userTbl: () => cy.get('.oxd-table-body')

    }
    enterEmployeeName(employeename) {
        this.elements.employeeNameInput().type(employeename, { force: true })
        cy.wait(2000)
        this.elements.employeeNameSel().first().click()
    }

    enterUserName(username) {
        this.elements.userNameInput().type(username)
    }
    selectUserRole(role) {
        this.elements.userRoleSel().click()
        this.elements.userRoleSelOpt().contains(role).click();
    }
    selectUserStatus(userstatus) {
        this.elements.statusSel().click()
        this.elements.statusSelOpt().contains(userstatus).click();
    }
    clickAddButton() {
        this.elements.addBtn().click()
        cy.wait(2000)
    }
    clickSearchButton() {
        this.elements.searchBtn().click()
    }
    searchByEmployeeName(employeename) {
        this.enterEmployeeName(employeename)
        this.clickSearchButton()
    }
    searchByUserName(username) {
        this.enterUserName(username)
        this.clickSearchButton()
    }
    verifyUserNameExist(username) {
        this.enterUserName(username)
        this.clickSearchButton()
        cy.wait(2000)
        this.elements.recordLbl().should('have.text', '(1) Record Found')
        cy.wait(2000)
    }

}
export default systemUsersPage;