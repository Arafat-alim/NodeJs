// writing a file
const path = require("path");
const fs = require("fs");

fs.writeFile(
  path.join(__dirname, "Files", "reply.txt"),
  "Your content is here",
  (err) => {
    if (err) throw err;
    console.log("Write Complete");
  }
);

//append is basically used for updating the file content but also can create a file and write on it
fs.appendFile(
  path.join(__dirname, "Files", "Updated.txt"),
  "Your Update content Here",
  (err) => {
    if (err) throw err;
    console.log("Append Complete");
  }
);

//! Error handler
process.on("uncaughtException", (err) => {
  console.error(`There was an Uncaught Error ${err}`);
  process.exit(1);
});
