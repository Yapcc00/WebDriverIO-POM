const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
    get txtEmail() {
        return $("#email")
    }

    get txtPassword(){
        return $("#passwd")
    }

    get btnSigIn(){
        return $("//button[@id='SubmitLogin']")
    }

    get validation(){
        return $("//h1[@class='page-heading' and contains(text(), 'My account')]");
    }

    
  open() {
    return super.open('?controller=authentication&back=my-account');
  }
  
}

module.exports = new LoginPage();