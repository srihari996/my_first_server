//sever creation 

const http = require("http");

const port = 8081;

const toDoList = ["Need to learn", "Need to code"];


http
.createServer((req,res) => {
//     res.writeHead(200, {"content-Type": "text/html"});
//     res.write("<h4>Hello ,srihari my New Server</h4>");
//     res.end();

})
.listen(port, () => {
    console.log(`my Nodejs server started on port ${port}`);
});


// http://localhost:8081