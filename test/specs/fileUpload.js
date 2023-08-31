//import path from 'node:path';

const path = require('path');

describe('SIMPLE FILE UPLOAD TEST', () => {
  it('should upload a file and assert the messege "File Uploaded!"', async () => {
    await browser.maximizeWindow();
    await browser.url('https://the-internet.herokuapp.com/upload');
    const chooseFileBtn = await $('#file-upload');
    
    // store test file path
    //const filePath = 'C:\Users\sviat\OneDrive\Picture\flower-picture';
    const filePath = path.join(__dirname, '../data/flower-picture.jpg');

    // upload test file
     const removeFilePath = await browser.uploadFile(filePath);
    
    // set file path value in the input field
    await chooseFileBtn.setValue(removeFilePath);
    await $('#file-submit').click();

    await $('#uploaded-files').waitForDisplayed();

    await expect($('//h3')).toHaveText('File Uploaded!');
  });
});
