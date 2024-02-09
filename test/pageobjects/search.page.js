const { $ } = require("@wdio/globals");
const Page = require("./page");

class Search extends Page {
    get searchBar(){
        return $("#search_query_top");
    }

    get validation(){
        return $("//span[@class='lighter' and contains(text(), 'Printed Summer Dress')]")
    }

    get btnSearch(){
        return $("//button[@class='btn btn-default button-search' and contains(span/text(), 'Search')]")
    }

    open() {
        return super.open('/');
      }
}

module.exports = new Search();
