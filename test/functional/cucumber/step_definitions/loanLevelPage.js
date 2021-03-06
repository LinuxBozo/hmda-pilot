/* jshint expr:true, -W079 */
'use strict';

var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

module.exports = function() {

    this.When(/^I click on an edit failure section within the high level summary information$/, function(next) {
        element(by.partialLinkText('S0')).click().then(function() {
            next();
        });
    });

    this.Then(/^I am able to see the summary and detail information about the edit failures$/, function(next) {
        expect(element(by.css('.line-number')).isPresent()).to.eventually.be.true;
        expect(element(by.css('.edit-explanation')).isPresent()).to.eventually.be.true;
        expect(element(by.binding('editError')).isPresent()).to.eventually.be.true.notify(next);
    });

};
