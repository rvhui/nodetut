const http = require("http");

http
  .get(process.argv[2], response => {
    response.setEncoding("utf8");
    let resultString = "";
    response.on("data", data => resultString += data);
    response.on("end", () => {
      console.log(resultString.length);
      console.log(resultString);
    });
    response.on("error", error => console.error("responseError"));
  })
  .on("error", () => console.error("getError"));
