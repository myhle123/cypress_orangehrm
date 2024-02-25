class homePage {
    elements = {
        menuPanel: () => cy.get('li.oxd-main-menu-item-wrapper'),
        menuAdmin: () => cy.xpath('//span[text()="Admin"]'),
        menuPIM: () => cy.xpath('//span[text()="PIM"]'),
        menuLeave: () => cy.xpath('//span[text()="Leave"]'),
        menuTime: () => cy.xpath('//span[text()="Time"]'),
        menuRecruitment: () => cy.xpath('//span[text()="Recruitment"]'),
        menuMyInfo: () => cy.xpath('//span[text()="My Info"]'),
        menuPerformance: () => cy.xpath('//span[text()="Performance"]'),
        menuDashboard: () => cy.xpath('//span[text()="Dashboard"]'),
        menuDirectory: () => cy.xpath('//span[text()="Directory"]'),
        menuMaintenance: () => cy.xpath('//span[text()="Maintenance"]'),
        menuClaim: () => cy.xpath('//span[text()="Claim"]'),
        menuBuzz: () => cy.xpath('//span[text()="Buzz"]'),

    }
    clickMenuAdmin() {
        this.elements.menuAdmin().click()
        cy.wait(2000)
    }
    clickMenuPIM() {
        this.elements.menuPIM().click()
        cy.wait(2000)
    }
    clickMenuLeave() {
        this.elements.menuLeave().click()
        cy.wait(2000)
    }
    clickMenuTime() {
        this.elements.menuTime().click()
        cy.wait(2000)
    }
    clickMenuRecruitment() {
        this.elements.menuRecruitment().click()
        cy.wait(2000)
    }
    clickMenuMyInfo() {
        this.elements.menuMyInfo().click()
        cy.wait(2000)
    }
    clickMenuPerformance() {
        this.elements.menuPerformance().click()
        cy.wait(2000)
    }
    clickMenuDashboard() {
        this.elements.menuDashboard().click()
        cy.wait(2000)
    }
    clickMenuDirectory() {
        this.elements.menuDirectory().click()
        cy.wait(2000)
    }
    clickMenuMaintenance() {
        this.elements.menuMaintenance().click()
        cy.wait(2000)
    }
    clickMenuClaim() {
        this.elements.menuClaim().click()
        cy.wait(2000)
    }
    clickMenuBuzz() {
        this.elements.menuBuzz().click()
        cy.wait(2000)
    }
}

export default homePage;