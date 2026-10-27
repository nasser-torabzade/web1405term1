import { createServer } from 'node:http';
import { writeFile, readFile } from 'node:fs';

let controllers = [
    {
        name: "sum",
        func: function (request, response){
            let items = request.url.split("/");
            response.writeHead(200);
            response.write((Number(items[2]) + Number(items[3])).toString());
            response.end();
        }
    },
    {
        name: "createFile",
        func: function (request, response){
            console.log(1);
            let items = request.url.split("/");

            console.log(2);
            writeFile(items[2], items[3], function(error){
                if(error){
                    console.log('error', error);
                    response.writeHead(500);
                    response.write("createFile error");
                    response.end();
                }
                else{
                    console.log(3);
                    console.log("createFile done");

                    response.writeHead(200);
                    response.write("createFile done");
                    response.end();
                    console.log(4);
                }                
            });
            console.log(5);
        }
    },
    {
        name: "readFile",
        func: function (request, response){
            let items = request.url.split("/");

            readFile(items[2], function(error, body){
                if(error){
                    response.writeHead(500);
                    response.write("readFile error");
                    response.end();
                }
                else{
                    console.log("readFile done");

                    response.writeHead(200);
                    response.write(body);
                    response.end();
                }                
            });
            console.log(5);
        }
    }
]  


function serverCallback(request, response){
    console.log("------------------------");
    console.log("url", request.url);

    let found = false;

    for(let item of controllers){
        if(request.url.startsWith('/' + item.name)){
            found = true;
            console.log('before call');
            item.func(request, response);
            console.log(6);
            break;
        }
    }

    if(!found){
        console.log("path not found.");
    }
}

let server = createServer(serverCallback);

server.listen(555);