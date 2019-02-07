let Login = require("../pageObjects/loginScript.js");

let pageTitle = "Binge Watch Time";
let aplicationName = "Binge Watch Time";
let helloText = "Hi. Sign in.";
let pageLoginEmail = "santek.vg@gmail.com";
let pageLoginPassword = "santek007";
let textAccountMessage = "Don't have an account? Register";
let forgotYourPasswordLink = "http://staging.bingewatchtime.com/auth/forgot";
let registerLink = "http://staging.bingewatchtime.com/auth/register";
let privacyLink = "http://staging.bingewatchtime.com/privacy";
let termOfUseLink = "http://staging.bingewatchtime.com/terms";
let contactLink = "https://vanja.gavric.org/#contact";


beforeEach(function() {
	browser.url('/');
	browser.pause(2000);
})

describe("Verify login page work correctly", () => {
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
		expect($('.message-text:nth-of-type(2)').getText() == textAccountMessage).to.be.true;
	});

	it("Check link to Forgot your password works", (done)  => {
		browser.pause(1000);
		Login.clickForgotYourPasswordButton();
		browser.pause(2000);
		expect( browser.getUrl() == forgotYourPasswordLink).to.be.true;
	});
	
	it("Check link to Register", (done)  => {
		Login.clickRegisterLink();
		browser.pause(2000);
		expect( browser.getUrl() == registerLink).to.be.true;
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

	it("Check login form works with email only ", (done)  => {
		Login.setEmail(pageLoginEmail);
		browser.pause(2000);
		browser.click('.button-loader');
		Login.unsuccessfulLogin();
	});

	it("Check login form works with password only", (done)  => {
		Login.setPassword(pageLoginPassword);
		browser.pause(2000);
		browser.click('.button-loader');
		Login.unsuccessfulLogin();
	});

	it("Check login form works with my login", (done)  => {
		Login.submitAllInformation(pageLoginEmail, pageLoginPassword);
	});

});
