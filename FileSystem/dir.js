const fs = require("fs");
// checking whether the directory is present or not
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Created");
  });
}

// removing the directory

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Removed");
  });
}
