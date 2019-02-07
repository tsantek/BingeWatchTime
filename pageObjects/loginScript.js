class Login {

    get email(){ return $(`[type='email']`);}
	get password(){ return $(`[type='password']`);}
	get submitButton(){ return $('.button-loader');}
	get forgotYourPassword(){return $(`[href='\/auth\/forgot']`)};
	get registerLink(){return $(`[href='\/auth\/register']`)};
	get privacyLink(){return  $(`[href='\/privacy']`)};
	get termOfUseLink(){return $(`[href='\/terms']`)};
	get contactLink(){return $(`[href='https\:\/\/vanja\.gavric\.org\/\#contact']`)};
	get successfulLoginConfirmation(){return $(`[href='\/auth\/logout']`)};

	setEmail(email){
		return this.email.setValue(email);
	}

	setPassword(password){
		return this.password.setValue(password);
	}

	clickSubmitButton(){
		return this.submitButton.click();
	}
	
	clickForgotYourPasswordButton(){
		return this.forgotYourPassword.click();
	}
	
	clickRegisterLink(){
		return this.registerLink.click();
	}

	clickPrivacyLink(){
		return this.privacyLink.click();
	}

	clickTermOfUseLink(){
		return this.termOfUseLink.click();
	}

	clickContactLink(){
		return this.contactLink.click();
	}
	
	unsuccessfulLogin(){
		expect(this.successfulLoginConfirmation.isExisting()).to.be.false;
	}

	successfulLogin(){
		expect(this.successfulLoginConfirmation.isExisting()).to.be.true;
	}
	
	submitAllInformation(email, password){
		if(email) {
			this.email.setValue(email);
		}
		if(password) {
			this.password.setValue(password);
		}
		this.submitButton.click();
		browser.pause(2500);
		this.successfulLogin();
	}


};

module.exports = new Login;