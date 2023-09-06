import homePage from "../pages/home-page";
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
        
        const expectedMenuItem = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
        const listOfMenuEl = await HomePage.NavComp.navMenuLinks;
        
    for (let i = 0; i < listOfMenuEl.length; i++) {
      let item = await listOfMenuEl[i].getText();
      await expect(item).toEqual(expectedMenuItem[i]);
      // We can also create an empty array first and then lopp through each item of our listOfMenuEl and
      // add push listOfMenuEl[i].getText(). Then compare two array:
      // await expect (expectedMenuItem).toEqual(theNameOfOtherArr);
    }
  });


  it('Should click on each item of navigation menu and assert the URL title', async () => {
    console.log(await HomePage.NavComp.navMenuLinks.length);
    const expectedLinks = ['', 'about', 'shop', 'blog', 'contact', 'my-account'];
   
    for (let i = 0; i < await HomePage.NavComp.navMenuLinks.length; i++) {
      await (HomePage.NavComp.navMenuLinks[i]).click();
      await expect(browser).toHaveUrlContaining(expectedLinks[i]);
    }
  });

  it.only('Should assert the title of tooltip "View your shopping cart"', async () => {
    await HomePage.open();
    await (HomePage.NavComp.shoppingCartIcon).moveTo();
    await expect(HomePage.NavComp.shoppingCartIcon).toHaveAttribute(
      'title',
      'View your shopping cart'
    );

    // Should hover over "Account & Lists" and click on Account option
    // await browser.url('https://www.amazon.com/');
    // const nav = await $('#nav-link-accountList');
    // await nav.moveTo();
    // const yourAccountList = await $('#nav-al-your-account .nav-text');
    // await yourAccountList.click();
    // await expect(browser).toHaveUrlContaining('AccountFlyout_ya');

  });

})
 

 
