const fs = require("fs");

fs.readFile(process.argv[2], { encoding: "UTF-8" }, (err, data) => {
  if (err) throw err;
  console.log(data.split("\n").length - 1);
});