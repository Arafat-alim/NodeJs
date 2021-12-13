//  write, updated and rename
//! importing module fs and path from node modules
const path = require("path");
const fs = require("fs");

fs.readFile(path.join(__dirname, "Files", "reply.txt"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  console.log("Read is complete");
});

// writing , appending and renmaing the filename
fs.writeFile(
  path.join(__dirname, "Files", "reply.txt"),
  "Your Txt is here",
  (err) => {
    if (err) throw err;
    console.log("Write Complete");

    fs.appendFile(
      path.join(__dirname, "Files", "reply.txt"),
      "\n\nAdded Text Here",
      (err) => {
        if (err) throw err;
        console.log("Append is complete");

        fs.rename(
          path.join(__dirname, "Files", "reply.txt"),
          path.join(__dirname, "Files", "rename.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename is complete");
          }
        );
      }
    );
  }
);

//! Error handler
process.on("uncaughtException", (err) => {
  console.error(`There was an Uncaught Error ${err}`);
  process.exit(1);
});
