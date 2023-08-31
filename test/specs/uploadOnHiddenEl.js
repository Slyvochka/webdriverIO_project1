const path = require('path');

describe('UPLOAD ON A HIDDEN ELEMENT', () => {
  it('should upload a file and assert the file name', async () => {
    await browser.url('/cart/');

    await browser.execute('document.querySelector("#upfile_1").className = ""');
    
    const filePath = path.join(__dirname, '../data/flower-picture.jpg');
    //const removeFilePath = await browser.uploadFile(filePath);
    
    const selectBtn = await $('#upfile_1');

    await (selectBtn).setValue(filePath);

    await $('#upload_1').click();

    await $(
      '//label[@id="wfu_messageblock_header_1_label_1"]'
    ).waitForDisplayed({ reverse: true });
    
    // const successMsg = await $(
    //   '//label[@id="wfu_messageblock_header_1_label_1"]'
    // );

    await expect ($('//label[@id="wfu_messageblock_header_1_label_1"]')).toHaveTextContaining(
      'uploaded successfully'
    );
    // const selectBtnValue = await selectBtn.getValue();
    // await expect(selectBtnValue).toBeTruthy();

 });
});
