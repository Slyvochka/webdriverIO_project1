import HomePage from "../pages/home-page";
import allureReporter from "@wdio/allure-reporter";

describe('NAVIGATION MENU', () => {

  it('should get the text of all menu items & assert them', async () => {
    allureReporter.addFeature('Navigation');
    allureReporter.addSeverity('critical');
    await HomePage.open();

    // wait until the Home text is displayed on the navigation menu.
    // await $('#menu-item-489').waitUntil(async () => {
    //    return (await $('#menu-item-489').getText()) === 'Home';
    // });

    await browser.waitUntil(
      async function () {
        const homeText = await HomePage.NavComp.homeLink.getText();
        return homeText === 'Home';
      },
      {
        timeoutMsg:
          "Could not verify the Home text from '#zak-primary-menu li'",
      }
    );
    
    const listOfMenuEl = await HomePage.NavComp.navMenuLinks;

    const expectedMenuItem = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];

    for (let i = 0; i < listOfMenuEl.length; i++) {
      let item = await listOfMenuEl[i].getText();
      await expect(item).toEqual(expectedMenuItem[i]);
      // We can also create an empty array first and then lopp through each item of our listOfMenuEl and
      // add push listOfMenuEl[i].getText(). Then compare two array:
      // await expect (expectedMenuItem).toEqual(theNameOfOtherArr);
    }
  
    
  });
  

})
