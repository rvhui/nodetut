const http = require("http");

function getData(url, callback) {
  http.get(url, function(res) {
    res.setEncoding("utf8");
    let resultString = "";
    res.on("data", data => (resultString += data));
    res.on("end", () => callback(resultString));
    res.on("error", () => console.error("responseError"));
  });
}

getData(process.argv[2], result => {
    console.log(result)
    getData(process.argv[3], result => {
        console.log(result)
        getData(process.argv[4], result => {
            console.log(result)
        })
    })
});