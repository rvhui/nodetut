const fs = require("fs");
const path = require("path");

module.exports = function getFilteredList(dirName, extName, callback) {
    fs.readdir(dirName, (err, files) => {
        if (err) return callback(err);
        let filteredList = files.filter(
          item => path.extname(item) === "." + extName
        );
        callback(null, filteredList)
      });
}