import ContactPage from '../pages/contact-page';

import { faker } from '@faker-js/faker';
describe('CONTACT PAGE',  () => {
  
  it('should fill out all the input fields and assert the success msg', async () => {
   
    await ContactPage.open();

    await (ContactPage.header3).scrollIntoView();
    
    //await ContactPage.sendUsMsgForm('test', 'test@gmail.com', 1234567890, 'Hi, this is automated test done by Svitlana Naida');await ContactPage.sendUsMsgForm('test', 'test@gmail.com', 1234567890, 'Hi, this is automated test done by Svitlana Naida');
    await ContactPage.sendUsMsgForm(
      faker.person.fullName(),
      faker.internet.email(),
      faker.phone.number(),
      faker.lorem.text(),
    );
    const msgEl = await ContactPage.successMsg;
    const msgText = await (msgEl).getText();
    await expect(msgText).toEqual(
      'Thanks for contacting us! We will be in touch with you shortly'
    );
    
 
 })

})




