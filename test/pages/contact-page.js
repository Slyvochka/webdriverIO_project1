class ContactPage {

  open() {
    return browser.url('/contact');
  }

  get header3() {
    return $('h3');
  }

  get nameInput() {
    return $('#evf-277-field_ys0GeZISRs-1');
  }
  
  get emailInput() {
    return $('#evf-277-field_LbH5NxasXM-2');
  }

  get phoneInput() {
    return $('#evf-277-field_66FR384cge-3');
  }

  get msgInput() {
    return $('#evf-277-field_yhGx3FOwr2-4');
  }

  get submitBtn() {
    return $('#evf-submit-277');
  }
  
  get successMsg() {
    return $('.everest-forms div');
  }

 async sendUsMsgForm(name, email, phone, msg) {
    await this.nameInput.addValue(name);
    await this.emailInput.addValue(email);
    await this.phoneInput.addValue(phone);
    await this.msgInput.addValue(msg);
    await this.submitBtn.click();
}




}

export default new ContactPage();