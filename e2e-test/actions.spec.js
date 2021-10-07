/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.viewport(1210,768)
    cy.visit('https://bms.acomodeo.build/ibes', {
      auth: {
        username: 'acomodeo',
        password: 'acomodiensrunningaround'
      }
    })

  })

  it('.click1() - click into a Basic IBE element', () => {
    cy.get('mat-sidenav a.mat-ripple.section-item')
      .click()
      .get('.subnav > .mat-ripple:nth-child(1)')
      .should('be.visible')
      .get('.subnav > .mat-ripple:nth-child(2)')
      .should('be.visible')
      .get('.subnav > .mat-ripple:nth-child(3)')
      .should('be.visible')

    cy.get('.subnav > .mat-ripple:nth-child(1)')
      .click()
      .location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/ibes/view')
        expect(loc.search).to.eq('?type=basic')
      })
  })
  
  it('.click2() - click into a Basic Plus IBE element', () => {
    cy.get('mat-sidenav a.mat-ripple.section-item')
      .click()
      .get('.subnav > .mat-ripple:nth-child(1)')
      .should('be.visible')
      .get('.subnav > .mat-ripple:nth-child(2)')
      .should('be.visible')
      .get('.subnav > .mat-ripple:nth-child(3)')
      .should('be.visible')
    
    cy.get('.subnav > .mat-ripple:nth-child(2)')
      .click()
      .location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/ibes/view')
        expect(loc.search).to.eq('?type=basic_plus')
      })
  })
  
  it('.click3() - click into a Enterprise IBE element', () => {
    cy.get('mat-sidenav a.mat-ripple.section-item')
      .click()
      .get('.subnav > .mat-ripple:nth-child(1)')
      .should('be.visible')
      .get('.subnav > .mat-ripple:nth-child(2)')
      .should('be.visible')
      .get('.subnav > .mat-ripple:nth-child(3)')
      .should('be.visible')
    
    cy.get('.subnav > .mat-ripple:nth-child(3)')
      .click()
      .location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/ibes/view')
        expect(loc.search).to.eq('?type=enterprise')
      })
  })
     

  it('.click4() - click into a Create a new IBE element', () => { 
    cy.get('aco-ibes > div.state-title-row > div > a[href="/ibes/create"]')
      .click()
      .location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/ibes/create')
      })
  })

 })
