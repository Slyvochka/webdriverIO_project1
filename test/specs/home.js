import HomePage from "../pages/home-page";

describe('OPEN URL AND CHECK THE TITLE', () => {

  before(async () => {
    console.log('THIS COULD BE USED FOR TEST SETUP');
    await HomePage.open();
 })
  
 it('should assert the title "Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality."', async () => {
   await expect(browser).toHaveTitleContaining('Practice E-Commerce Site');
 });

  it('should click on Get Started Btn & assert the URL contains "get-started" text', async () => {
    await HomePage.getStartedBtn.click();
    await expect(browser).toHaveUrlContaining('get-started');
  });
   
  it('should click on Logo & assert the URL does not contain "get-started" text', async () => {
    
    await HomePage.logoLink.click();
    await expect(browser).not.toHaveUrlContaining('get-started');
  });

  it('should find heading element and assert "Think different. Make different." text', async () => {
    // const heading = await $('//h1');
    // await expect(heading).toHaveText('Think different. Make different.');    //assert via the expect assertion
     
    const heading = await (HomePage.header).getText();    // asserting via getting the text
    await expect(heading).toEqual('Think different. Make different.');
  });


    

})