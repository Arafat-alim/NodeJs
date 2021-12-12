//import filesystem

const fs = require("fs");
const path = require("path");
// read the file
//! fs.readFile("./Files/lorem.txt", (err, data) => {
fs.readFile(path.join(__dirname, "Files", "lorem.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data); // buffer data
  console.log(data.toString()); //reading mode
});

console.log("Hello World");

//exit on uncaught error
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`); //There was an uncaught error: Error: ENOENT: no such file or directory, open 'E:\ARAFAT\NodeTuGaya\FileSystem\Files\sr.txt'
  process.exit(1);
});
