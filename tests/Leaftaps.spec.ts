import {expect, test} from '@playwright/test';
 
test(`Launch browser`, async ({page}) => {

//browser launch
await page.goto(`http://leaftaps.com/opentaps/control/main`);
await page.waitForLoadState(`domcontentloaded`);

//Verify succcessful launch
let LeafTapsLoginText = await page.locator(`//h2[text()='Leaftaps Login']`);

if(await LeafTapsLoginText.isVisible()){
    console.log(`User successfully login to application`);
}
else{
    console.log("Unsuccesfull launh of application, check the URL");
}

//Fill in the username
 let username = page.locator(`//input[@id='username']`);
 await username.fill('demoSalesManager');

 //Get the attribute value of username input field
 let attributeValue = username.getAttribute(`value`);
 console.log(attributeValue);

 //Fill in the password
 let password = page.locator(`//input[@id='password']`);
 await password.fill('crmsfa');

 //await page.locator(`//input[@id='password']`).fill('value');

 //Click on login button
 let loginButton = page.locator(`//input[@class='decorativeSubmit']`);
 await loginButton.click();




});
