const http = require("http");

//server creating request & response
const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("<h1>About page</h1>");
  }
  if (req.url === "/about") {
    res.end("<h1>About page</h1>");
  } else if (req.url === "/") {
    res.end("<h1>home page</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>contact page</h1>");
  } else {
    res.end("<h1> le lo luuli</h1>");
  }
});
server.listen(5000, () => {
  console.log("server is working and it is fast");
});
