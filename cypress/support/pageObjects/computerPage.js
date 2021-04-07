/// <reference types="Cypress" />


class computerPage {
    
      setComputerName(string) {
        cy.get("#name").click().clear().type(string);
      }
    
      setIntoductionDate(string) {
        cy.get("#introduced").click().clear().type(string);
      }
    
      setDiscontinuedDate(string) {
        cy.get("#discontinued").click().clear().type(string);
      }
    
      setCompanyDropDown(select) {
        cy.get("#company").select(select);
      }

      create(){
        cy.get('[value="Create this computer"]').click()
      }

      save(){
        cy.get('[value="Save this computer"]').click()
      }

      delete(){
        cy.get('[value="Delete this computer"]').click()
      }
}

export default computerPage