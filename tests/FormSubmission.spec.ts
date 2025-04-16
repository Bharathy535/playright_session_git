import { faker } from '@faker-js/faker';
import {expect, test} from '@playwright/test';
 
test(`Web login demo`, async ({page}) => {

//browser launch
page.goto(`https://thinking-tester-contact-list.herokuapp.com/addUser`);

//wait for the page to load
await page.waitForLoadState('domcontentloaded');

//verify the title of the page
let title = page.locator(`//h1[text()='Add User']`);
await expect(title).toBeVisible();
console.log(`User successfully navigated to the form submission page`);

//fill in the input of the form_Random data generation using faker.js

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password({ length: 12 });

//Random data generation for firstName using faker.js
await page.locator(`#firstName`).isEditable;
await page.locator(`#firstName`).fill(firstName);

//Printing the random first name generated using faker.js
console.log(`First name is filled as ${firstName}`);

//Random data generation for lastName using faker.js
await page.locator(`//input[@id='lastName']`).fill(lastName);

//Printing the random last name generated using faker.js
console.log(`Last name is filled as ${lastName}`)


//Filling in random email address using faker.js
await page.locator(`//input[@placeholder='Email']`).fill(email);
console.log(`Email is filled as ${email}`);

//Filling in random password using faker.js
await page.locator(`//*[contains(@type,'password')]`).fill(password);
console.log(`Password is filled as ${password}`);
await page.waitForTimeout(2000);

//Click on submit button
await page.locator(`//button[@type='submit']`).click();
console.log(`Submit button is clicked`);
await page.waitForLoadState('networkidle');

//Error message locator
let errorMessage = page.locator(`//span[starts-with(text(),'User validation failed')]`)

//Validating the form submission
if(await errorMessage.isVisible()){
    console.log(`Form submission failed, error in input provided, provide valid inputs and resubmit the form`);
    console.log(`Error message is ${errorMessage}`);}
else{
    console.log(`Form submission is successful`);
}
    //Validating the successfull response
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(`https://thinking-tester-contact-list.herokuapp.com/contactList`);
    await expect(page.locator(`//h1`)).toBeVisible();
    console.log(`User is navigated to the contact list page`,`${page.locator(`//h1`).innerText}$`);
    await page.waitForTimeout(3000);
});
