let Login = require("../pageObjects/loginScript.js");
let Dashboard = require("../pageObjects/dashboardScript.js");

let pageTitle = "Binge Watch Time";
let dashboardText = "Discover";
let pageLoginEmail = "santek.vg@gmail.com";
let pageLoginPassword = "santek007";
let showsLink = "http://staging.bingewatchtime.com/shows";
let newMedia = "New";
let popular ="Popular";
let byGener = "By Genre";
let seacrhObject = "Suits";

before(function() {
    browser.url('/');
    Login.submitAllInformation(pageLoginEmail, pageLoginPassword);
    browser.pause(1000);
  });

beforeEach(function() {
    browser.url('/');
})

describe("Dashboard Page Test", () => {
	it("Check for Title and Dashboard hello Text", (done)  => {
        browser.pause(1000);
        expect(browser.getTitle() == pageTitle).to.be.true;
        expect($(`h1`).getText() == dashboardText).to.be.true;        
    });
    
    it("Check Logout button works", (done)  => {
        browser.pause(1000);
        Dashboard.clickLogout();
    });
    
    it("Check link to Shows works", (done)  => {
		browser.pause(1000);
		Dashboard.clickShowsLink();
		browser.pause(2000);
		expect( browser.getUrl() == showsLink).to.be.true;
    });
    
    it("Check Shortcuts for New, Popular, By Gener", (done)  => {
        browser.pause(1000);
        expect($(`.primary-content .content-box:nth-child(2) h2`).getText() == newMedia).to.be.true; 
        expect($(`.primary-content .content-box:nth-child(3) h2`).getText() == popular).to.be.true; 
        expect($(`[class='cell small-6'] h2`).getText() == byGener).to.be.true; 
    });
    
    it.only("Check if Search is searching for input ", (done)  => {
        browser.pause(1000);


        .input-group-field
        
	});

});
