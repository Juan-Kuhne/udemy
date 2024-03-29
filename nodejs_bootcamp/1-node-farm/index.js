//node modules
const fs = require('fs');
const http = require('http');
const url = require('url');

// 3rd party modules
const slugify = require('slugify');

// made modules
const replaceTemplate = require('./modules/replaceTemplate');

///////////////////////////////////////////////////////////////////
// FILES
// Blocking/Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.
// Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("Text written!!");

// Non-blocking/Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error!! 💥");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log("Content:", data2);

//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(`Content: ${data3}`);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("File written!!!");
//       });
//     });
//   });
// });
// console.log("Reading file ...");

///////////////////////////////////////////////////////////////////
// SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));

console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);

    res.end(output);

    //Product page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, dataObj[product.id]);

    res.end(output);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);

    //Not found
  } else {
    res.writeHead('404', {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found ...</h1>');
  }
});

server.listen('8000', '127.0.0.1', () => {
  console.log('Listening on http://localhost:8000/');
});
