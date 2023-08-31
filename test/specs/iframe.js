describe('IFRAME TEST', () => {
  it('should open on Iframe and assert the logo ', async () => {
    await browser.url('https://practice.sdetunicorns.com/iframe-sample/');
    
    const iframeId = await $('#advanced_iframe');
    await browser.switchToFrame(iframeId);

    // const header = await $('h4');
    // await expect(header).toHaveTextContaining('automationbro.com');
   
    const logo = await $('.hfe-site-logo-set');
    await expect(logo).toExist();
  
  });

  
})