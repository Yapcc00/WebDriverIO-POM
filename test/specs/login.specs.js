const { expect } = require("@wdio/globals");
const loginPage = require("../pageobjects/login.page");

describe("Login de usuario en el sitio web ", () => {
  it("Abrir Navegador", async () => {
   await loginPage.open();
   browser.maximizeWindow();
  });

  it("Login", async () => {
   (await loginPage.txtEmail).setValue("pruebatecnica2@gmail.com");
   await browser.setTimeout({ implicit: 10000 });

   (await loginPage.txtPassword).setValue("12345");
   await browser.setTimeout({ implicit: 10000 });
   await loginPage.btnSigIn.scrollIntoView();

   await loginPage.btnSigIn.click();
   await browser.setTimeout({ implicit: 10000 });

   await expect(loginPage.validation).toHaveText("MY ACCOUNT")

  });


});
