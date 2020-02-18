const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, files) => {
  if (err) throw err;
  let filteredList = files.filter(
    item => path.extname(item) === "." + process.argv[3]
  );
  filteredList = filteredList.join("\n");
  console.log(filteredList);
});
