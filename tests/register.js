let Register = require("../pageObjects/registerScript.js");
let Login = require("../pageObjects/loginScript.js");

let pageTitle = "Binge Watch Time";
let aplicationName = "Binge Watch Time";
let helloText = "Hi! Register.";
let firstName = "Tom";
let lastName = "Santek"
let pageRegisterEmail = "santek.vg@gmail.com";
let pageRegisterPassword = "santek007";
let textAccountMessage = "Already have an account? Login";
let emailExists = "E-mail address already exists in the system."
let loginLink = "http://staging.bingewatchtime.com/auth/login";
let privacyLink = "http://staging.bingewatchtime.com/privacy";
let termOfUseLink = "http://staging.bingewatchtime.com/terms";
let contactLink = "https://vanja.gavric.org/#contact";

beforeEach(function() {
	browser.url('/auth/register');
	browser.pause(2000);
})

describe("Verify Register page work correctly", () => {
	it("Check page Title, App title and logo link", (done)=> {
		expect(browser.getTitle() == pageTitle).to.be.true;
		browser.click('.logo');
		browser.pause(1000);
		expect($('.app-name').getText() == aplicationName).to.be.true;
	});

	it("Check page h2 Hello text", (done)=> {
		browser.pause(1000);
		expect($('h2').getText() == helloText).to.be.true;
	});

	it("Check page Account Message", (done)=> {
		browser.pause(1000);
		expect($('strong').getText() == textAccountMessage).to.be.true;
	});

	it("Check link to Login", (done)  => {
		Register.clickLoginLink();
		browser.pause(2000);
		expect( browser.getUrl() == loginLink).to.be.true;
	});

	it("Check link to Privacy", (done)  => {
		Login.clickPrivacyLink();
		browser.pause(2000);
		expect( browser.getUrl() == privacyLink).to.be.true;
	});

	it("Check link to Terms of use", (done)  => {
		Login.clickTermOfUseLink();
		browser.pause(2000);
		expect( browser.getUrl() == termOfUseLink).to.be.true;
	});

	it("Check link to Contact", (done)  => {
		Login.clickContactLink();
		browser.pause(2000);
		expect( browser.getUrl() == contactLink).to.be.true;
	});

    it("Check register form works with first name only ", (done)  => {
	    Register.setFirstName(firstName);
		browser.pause(2000);
		browser.click('.button-loader');
		Register.unsuccessfulLogin();
    });
    
    it("Check register form works with last name only ", (done)  => {
	    Register.setLastName(lastName);
		browser.pause(2000);
		browser.click('.button-loader');
		Register.unsuccessfulLogin();
    });
    
    it("Check register form works with first and last name", (done)  => {
        Register.setFirstName(firstName);
	    Register.setLastName(lastName);
		browser.pause(2000);
		browser.click('.button-loader');
		Register.unsuccessfulLogin();
    });
    
    it("Check register form works with email only ", (done)  => {
	    Register.setEmail(pageRegisterEmail);
		browser.pause(2000);
		browser.click('.button-loader');
		Register.unsuccessfulLogin();
    });
    
    it("Check register form works with first name, last name and email ", (done)  => {
        Register.setFirstName(firstName);
        Register.setLastName(lastName);
        Register.setEmail(pageRegisterEmail);
		browser.pause(2000);
		browser.click('.button-loader');
		Register.unsuccessfulLogin();
    });    

    it("Check register form works with password only ", (done)  => {
	    Register.setPassword(pageRegisterPassword);
		browser.pause(2000);
		browser.click('.button-loader');
		Register.unsuccessfulLogin();
    });

    it("Check register form for already existing account  ", (done)  => {
        Register.setFirstName(firstName);
        Register.setLastName(lastName);
        Register.setEmail(pageRegisterEmail);
        Register.setPassword(pageRegisterPassword);
        browser.click('.button-loader');
        browser.pause(2000);

        let alert = $('.alert');
        expect(alert.getText() == emailExists).to.be.true;
    });

    it.skip("Check register form successful login ", (done)  => {
        Register.setFirstName();
        Register.setLastName();
        Register.setEmail();
        Register.setPassword();
        browser.click('.button-loader');
        browser.pause(2000);

        let alert = $('.alert');
        expect(alert.isExisting()).to.be.false;
    });


});
