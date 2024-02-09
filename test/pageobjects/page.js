const { browser } = require('@wdio/globals')

module.exports = class Page {
    open (path) {
        return browser.url(`http://www.automationpractice.pl/index.php${path}`)
    }
}
