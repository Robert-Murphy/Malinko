class MainPage {
  navigate() {
    cy.visit("/");
  }

  searchBox(string) {
    this.navigate();
    cy.get("#searchbox").type(string + "{enter}");
  }

  addComputer() {
    this.navigate();
    cy.get("#add").click();
  }

  searchSubmit() {
    cy.get("#searchsubmit").click();
  }

  paginateNext() {
    cy.get("#pagination").contains("Next →").click();
  }

  paginatePrev() {
    cy.get("#pagination").contains("← Previous").click();
  }
}

export default MainPage;
