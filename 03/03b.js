import {createServer} from "http"

function serverCallback(request, response){
    console.log("------------------------");
    console.log("url", request.url);

    response.writeHead(200);
    response.write("jhgjkhkjh");
    response.end();

}

let server = createServer(serverCallback);

server.listen(555);