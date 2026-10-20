import {createServer} from "http"



function serverCallback(request, response){
    console.log("------------------------");
    console.log("url", request.url);

    let items = request.url.split("/");

    console.log("items", items)
  
    response.writeHead(200);
    response.write((Number(items[1]) + Number(items[2])).toString());
    response.end();
}

let server = createServer(serverCallback);

server.listen(555);