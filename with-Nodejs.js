// sever creation 

const http = require("http");
const { url } = require("inspector");

const port = 8081;

const toDoList = ["Need to learn", "Need to code"];


http
.createServer((req,res) => {
    // res.writeHead(200, {"content-Type": "text/html"});
    // res.write("<h4>Hello ,srihari my New Server</h4>"); 
    // res.end();
    // const { method,url } = req;

    if(url === "/todos"){
        // http://localhost:8081/todos
        if(method === "GET"){ 
        res.writeHead(200,{"content-type" : "text/html"}); 
        res.write(toDoList.toString());
    }else if(method === "POST"){
        let body ="";
        req.on('error',(err) => {
            console.log(err);
        })
        .on('data', (chunk) =>{
            body +=chunk;
            console.log(chunk);
        })
        .on('end',() =>{
            body= JSON.parse(body);
            let newToDo=toDoList;
            newToDo.push(body.item);
            console.log(newToDo);
            res.writeHead(201);
            console.log("body data",body);
        });
    }else if(method === "DELETE"){
        let body="";
        req.on("error",() =>{
            console.error(err);
        })
        .on("data",(chunk) =>{
            body +=chunk;
        })
        .on("end",() =>{
            body = JSON.parse(body);
            let deleteitem =body.item;
            for(let i =0; i< toDoList.length;i++){
                if(toDoList[i] === deleteitem){
                    toDoList.splice(i,1);
                    break;
                }
            }
            res.writeHead(204);
        });
    }
    else{
        res.writeHead(501);
    }

    }else{
        res.writeHead(404);
    }
    res.end();
    
})

.listen(port, () => {
    console.log(`my Nodejs server started on port ${port}`);
});


// http://localhost:8081