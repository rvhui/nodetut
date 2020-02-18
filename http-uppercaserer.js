const http = require("http");
const map = require("through2-map")

const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.log(err)
    res.statusCode = 400;
    res.end()
  })
  res.on('error', (err) => {
    console.log(err)
  })
  if (req.method === "POST") {
    req
      .pipe(map((chunk) => chunk.toString().toUpperCase()))
      .pipe(res)
  }
});

server.listen(+process.argv[2]);
