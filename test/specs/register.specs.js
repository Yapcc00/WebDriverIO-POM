const { expect } = require("@wdio/globals");
const RegisterPage = require("../pageobjects/register.page");

describe("Crear pagina registro de usuarios", () => {
  it("Abrir Navegador", async () => {
    await RegisterPage.open();
    browser.maximizeWindow();
    await browser.setTimeout({ implicit: 10000 });
    await RegisterPage.txtEmail.scrollIntoView();
  });

  it("Registro de usuario en el sitio web: Ruta Alternativa", async () => {
    await RegisterPage.txtEmail.setValue("pruebatecnica3aa@gmail.com");
    await RegisterPage.btnAcccount.click();
    await browser.setTimeout({ implicit: 10000 });
    (await RegisterPage.selected).isSelected;
    await RegisterPage.txtName.setValue("Prueba");

    await browser.setTimeout({ implicit: 10000 });

    await RegisterPage.txtLastName.setValue("Tecnica");
    await browser.setTimeout({ implicit: 10000 });

    (await RegisterPage.txtPassword).setValue("123456");
    await browser.setTimeout({ implicit: 10000 });

    await browser.setTimeout({ implicit: 10000 });

    await browser.scroll(0, 50);
    await (
      await RegisterPage.chekbox
    ).click;

    await RegisterPage.btnRegister.click();

    await expect(RegisterPage.validation).toHaveText(
      "Your account has been created."
    );
  });
});
