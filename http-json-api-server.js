const http = require("http");

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, 'http://www.example.com');
  const date = new Date(reqUrl.searchParams.get("iso"));
  console.log(reqUrl.searchParams.get("iso"))
  if (req.method === "GET" && reqUrl.pathname === "/api/parsetime") {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }));
  } else if (req.method === "GET" && reqUrl.pathname === "/api/unixtime") {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      unixtime: date.getTime()
    }))
  } else {
    console.log("No GET or wrong route");
    res.end();
  }
});
server.listen(+process.argv[2]);
