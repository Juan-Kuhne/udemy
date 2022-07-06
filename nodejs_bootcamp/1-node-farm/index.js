const fs = require("fs");

// Blocking/Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.
// Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("Text written!!");

// Non-blocking/Asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error!! 💥");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log("Content:", data2);

    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(`Content: ${data3}`);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("File written!!!");
      });
    });
  });
});
console.log("Reading file ...");