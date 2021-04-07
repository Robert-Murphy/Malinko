/// <reference types='cypress' />

import MainPage from "../support/pageObjects/mainPage";
import ComputerPage from "../support/pageObjects/computerPage";

describe("Malinko App Test", () => {
  const mainPage = new MainPage();
  const compPage = new ComputerPage();

  it("User can add a new computer via the main page", () => {
    mainPage.addComputer();
    compPage.setComputerName("MyCompletelyUniqueTest");
    compPage.setIntoductionDate("2021-01-01");
    compPage.setDiscontinuedDate("2022-01-01");
    compPage.setCompanyDropDown("Sanyo");
    compPage.create();
    mainPage.searchBox("MyCompletelyUniqueTest");
    cy.get("tbody").find("tr", new RegExp("^MyCompletelyUniqueTest$"));
  });

  it("User can filter for a computer and edit it", () => {
    mainPage.searchBox("MyCompletelyUniqueTest");
    cy.get("tbody tr").contains("td [href]", new RegExp("^MyCompletelyUniqueTest$")).click();
    compPage.setComputerName("MyOtherCompletelyUniqueTest");
    compPage.setDiscontinuedDate("2022-01-01");
    compPage.save();

    mainPage.searchBox("MyOtherCompletelyUniqueTest");
    cy.get("tbody")
      .find("tr", new RegExp("^MyOtherCompletelyUniqueTest$"))
      .eq(0)
      .find("td")
      .eq(2)
      .then((column) => {
        cy.wrap(column).should("contain", "01 Jan 2022");
      });
  });

  it("User can delete a computer", () => {
    mainPage.searchBox("MyOtherCompletelyUniqueTest");
    cy.get("tbody tr").contains("td [href]", new RegExp("^MyOtherCompletelyUniqueTest$")).click();
    compPage.delete();
    mainPage.searchBox("MyOtherCompletelyUniqueTest");
    cy.get('em').should("have.text", "Nothing to display")
  });
});
