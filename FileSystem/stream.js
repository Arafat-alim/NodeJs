//
const fs = require("fs");

const rs = fs.createReadStream("./Files/lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./Files/new-lorem.txt");

//! for less efficient way - listener
/* rs.on("data", (chunkData) => {
  ws.write(chunkData);
});*/

// ! for more efficient way
rs.pipe(ws);
