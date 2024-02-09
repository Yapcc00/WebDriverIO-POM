const { expect } = require("@wdio/globals");
const searchPage = require("../pageobjects/search.page");

describe("Realiza busqueda de un producto", () => {
  it("Abrir Navegador", async () => {
    await searchPage.open();
    browser.maximizeWindow();
    await browser.setTimeout({ implicit: 10000 });
  });

  it("Busqueda producto", async () => {
   await searchPage.searchBar.setValue("Printed Summer Dress");
   await browser.setTimeout({ implicit: 10000 });

   await searchPage.btnSearch.click();
   await browser.setTimeout({ implicit: 10000 });


   await expect(searchPage.validation).toHaveText("\"PRINTED SUMMER DRESS\"")});

});
