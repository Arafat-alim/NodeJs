//! node js begining
console.log("hello World");
//! global object
// console.log(global);
//! import node modules
const os = require("os");
const path = require("path");
const math = require("./math");
// console.log(os);
console.log(os.type()); // Windows_NT
console.log(os.version()); // Windows 10 Pro
console.log(os.homedir()); // C:\Users\barfs

// console.log(__dirname); //E:\ARAFAT\NodeTuGaya
// console.log(__filename); //E:\ARAFAT\NodeTuGaya\intro.js

// console.log(path);

/*console.log(path.dirname(__filename)); //E:\ARAFAT\NodeTuGaya
console.log(path.basename(__filename)); //intro.js
console.log(path.extname(__filename)); //.js
console.log(path.parse(__filename));
*/

// math
console.log(math.add(2, 3));
console.log(math.sub(5, 3));
console.log(math.mul(7, 5));
console.log(math.divide(78, 6));
