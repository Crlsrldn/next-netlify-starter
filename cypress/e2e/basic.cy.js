describe("sample test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the resources text", () => {
    cy.get("h1").contains("Portfolio Website in Progress!");
  });
  it("renders the Netlify logo image", () => {
    cy.get("img")
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
