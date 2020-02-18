const fs = require("fs");

let fileString = fs.readFileSync(process.argv[2], { encoding: "UTF-8" });

console.log(fileString.split("\n").length - 1);
