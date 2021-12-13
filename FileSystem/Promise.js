// TO fix the callBackHell, we used Promise concept here
const promiseFs = require("fs").promises;
const path = require("path");
//we use async / await
const fileOps = async () => {
  try {
    const data = await promiseFs.readFile(
      path.join(__dirname, "Files", "starterPromise.txt"),
      "utf8"
    );
    await promiseFs.unlink(path.join(__dirname, "Files", "starterPromise.txt"));

    await promiseFs.writeFile(
      path.join(__dirname, "Files", "starterPromise.txt"),
      data
    );
    await promiseFs.writeFile(
      path.join(__dirname, "Files", "writePromise.txt"),
      "My name is Khan"
    );
    await promiseFs.appendFile(
      path.join(__dirname, "Files", "writePromise.txt"),
      "\n\nMagic happening"
    );

    await promiseFs.rename(
      path.join(__dirname, "Files", "writePromise.txt"),
      path.join(__dirname, "Files", "CompletePromise.txt")
    );

    // new data
    const newData = await promiseFs.readFile(
      path.join(__dirname, "Files", "CompletePromise.txt"),
      "utf8"
    );

    // reading new Data
    console.log("Checking new Data", newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
