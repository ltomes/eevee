// 'use strict';
// import * as kindle from 'kindle';
// import * as puppeteer from 'puppeteer';
// // import * as devices from 'puppeteer/DeviceDescriptors';
// const k = ''; //Place key here
// const v = '';//Place jwt here

// const init = async function (key=k, val=v) {
//     const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] }); //Headless WSL
//     const page = await browser.newPage();
//     await page.setUserAgent('Mozilla/5.0 (Windows NT x.y; rv:10.0) Gecko/20100101 Firefox/10.0');
//     await page.goto('https://photo-gen.firebaseapp.com/', { "waitUntil": "networkidle2" });
//     const setTokenRef = await page.evaluate(kindle.setToken, k, v);
//     await setTimeout(() => true, 1500);
//     await page.reload({ "waitUntil": "networkidle2" });
//     await setTimeout(() => true, 1500);
//     const filePath = `../screenshots/`;
//     const fileName = `${val.uid}.png`;
//     console.log(`Writing screenshot file: ${filePath}${fileName}`);
//     let image = await page.screenshot({fullPage: true, path: `${filePath}${fileName}`});
//     // await page.screenshot({ path: fileName });
//     await browser.close();
//     return image;
// };
// void init(k, v);