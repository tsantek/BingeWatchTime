class Register {

    get firstName(){return $(`[name='firstName']`)};
    get lastName(){return $(`[name='lastName']`)};
    get email(){ return $(`[type='email']`);}
	get password(){ return $(`[type='password']`);}
    get registerButton(){ return $('.button-loader');}
    get loginLink(){return $(`[href='\/auth\/login']`)};
	get privacyLink(){return  $(`[href='\/privacy']`)};
	get termOfUseLink(){return $(`[href='\/terms']`)};
    get contactLink(){return $(`[href='https\:\/\/vanja\.gavric\.org\/\#contact']`)};
	get successfulLoginConfirmation(){return $(`.is-visble`)};

    setFirstName(firstName){
        return this.firstName.setValue(firstName);
    }

    setLastName(lastName){
        return this.lastName.setValue(lastName);
    }

	setEmail(email){
		return this.email.setValue(email);
	}

	setPassword(password){
		return this.password.setValue(password);
	}

	clickLoginLink(){
		return this.loginLink.click();
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
};

module.exports = new Register;