const { $ } = require("@wdio/globals");
const Page = require("./page");

class cartShopPage extends Page {
  get article() {
    return $(
      "//div[@class='product-image-container']/a[@class='product_img_link']"
    );
  }

  get btnMore() {
    return $("//a[@class='button lnk_view btn btn-default']");
  }

  get size(){
    return $("#group_1")
  }

  get color(){
    return $("//ul[@id='color_to_pick_list']")
  }
  get btnAddCart(){
    return $("//button[@class='exclusive']")
  }

  get validation(){
    return $("//h2[contains(., 'Product successfully added to your shopping cart')]")
  }

  open() {
    return super.open("/");
  }
}

module.exports = new cartShopPage();
