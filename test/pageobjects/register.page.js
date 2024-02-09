const { $ } = require("@wdio/globals");
const Page = require("./page");

class registerPage extends Page {
  get txtEmail() {
    return $("//*[@name='email_create']");
  }

  get btnAcccount() {
    return $(
      "//span/i[contains(@class, 'icon-user') and contains(@class, 'left')]"
    );
  }

  get selected() {
    return $(
      "//input[@type='radio' and @name='id_gender' and @id='id_gender1']"
    );
  }

  get txtName() {
    return $("//*[@name='customer_firstname']");
  }

  get txtLastName() {
    return $("//input[@id='customer_lastname']");
  }

  get txtPassword() {
    return $("//input[@id='passwd' and @type='password']");
  }

  get inputDay() {
    return $("//select[@id='days']");
  }
  get inputMonth() {
    return "//select[@id='months']";
  }
  get inputYear() {
    return $("#years");
  }

  get chekbox() {
    return $("//span/input[@id='newsletter']");
  }

  get btnRegister() {
    return $("//span[contains(text(), 'Register')]");
  }

  get validation() {
    return $(
      "//p[@class='alert alert-success' and contains(text(), 'Your account has been created')]");
  }

  open() {
    return super.open('?controller=authentication&back=my-account');
  }
}

module.exports = new registerPage();
