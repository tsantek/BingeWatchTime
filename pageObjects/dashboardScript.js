class Dashboard{

    get logoutButton(){return $(`[href='\/auth\/logout']`)};
    get showsLink(){return $(`[href='\/shows']`)};

    clickLogout(){
		return this.logoutButton.click();
	}

    clickShowsLink(){
        return this.showsLink.click();
    }

}

module.exports = new Dashboard;