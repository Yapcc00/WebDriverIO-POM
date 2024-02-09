const { expect } = require("@wdio/globals");
const cartshopPage = require("../pageobjects/cartshop.page");
const searchPage = require("../pageobjects/search.page");

describe("Realizar una compra en el sitio web", () => {
  it("Abrir Navegador", async () => {
    await cartshopPage.open();
    browser.maximizeWindow();
    await browser.setTimeout({ implicit: 10000 });
  });

  it("Busqueda producto", async () => {
    await searchPage.searchBar.setValue("Printed Summer Dress");
    await browser.setTimeout({ implicit: 10000 });
    await searchPage.btnSearch.click();
  });

  it("Agregar articulo al carrito", async () => {
    await cartshopPage.article.scrollIntoView();
    //mover el mouse hacia el articulo
    await cartshopPage.article.moveTo();
    await cartshopPage.article.waitForDisplayed({ timeout: 1000 });
    await cartshopPage.btnMore.click();
    await browser.setTimeout({ implicit: 10000 });

    await browser.scroll(0, 350);
    await browser.setTimeout({ implicit: 50000 });

    (await cartshopPage.size).moveTo();
    await cartshopPage.size.selectByVisibleText("M");

    await browser.setTimeout({ implicit: 50000 });
    await (await cartshopPage.btnAddCart).click();

    await cartshopPage.validation.waitForDisplayed({ timeout: 1000 });
    await expect(cartshopPage.validation).toHaveText(
      "Product successfully added to your shopping cart"
    );
  });
});
