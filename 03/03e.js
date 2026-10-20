import {createServer} from "http"
import { writeFile } from 'node:fs';

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
            let items = request.url.split("/");

            writeFile('message.txt', "salam", function(){
                console.log("createFile done");

                response.writeHead(200);
                response.write("createFile done");
                response.end();
            });
            
        }
    }
]


function serverCallback(request, response){
    console.log("------------------------");
    console.log("url", request.url);

    let found = false;
    for(let i=0; i<controllers.length; i++){
        if(request.url.startsWith('/' + controllers[i].name)){
            found = true;
            controllers[i].func(request, response);
            break;
        }
    }
    if(!found){
        console.log("path not found.");
    }
}

let server = createServer(serverCallback);

server.listen(555);