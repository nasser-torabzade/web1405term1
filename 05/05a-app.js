import { framework }  from './04d-framework.js';
import { writeFile, readFile, unlink, rmdir } from 'node:fs';

const app = framework();
const port = 3000;

app.get('sum', function(request, response){
    let items = request.url.split("/");
    response.writeHead(200);
    response.write((Number(items[2]) + Number(items[3])).toString());
    response.end();
});

app.get('createFile', function (request, response){
    let items = request.url.split("/");

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
});

app.get('readFile', function (request, response){
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
});

app.get('deleteFile', function(request, response){
    let items = request.url.split("/");

    unlink(items[2], function(error){
        if(error){
            console.log("deleteFile error", error);

            response.writeHead(500);
            response.write("deleteFile error");
            response.end();
        }
        else{
            console.log("deleteFile done");

            response.writeHead(200);
            response.write("deleteFile done");
            response.end();
        }
    });
});

app.get('delete', function(request, response){
    let items = request.url.split("/");
    console.log(1);

    unlink(items[2], function(error){
        console.log(2);
        if(error){
            console.log(3);
            console.log("deleteFile error", error);

            if(error.code === 'EPERM'){

                console.log(4);
                rmdir(items[2], function(error){
                    console.log(5);
                    if(error){
                        console.log(6);
                        console.log("delete error", error);

                        response.writeHead(500);
                        response.write("delete error");
                        response.end();
                    }
                    else{
                        console.log(7);
                        console.log("delete done (folder)");

                        response.writeHead(200);
                        response.write("delete done");
                        response.end();
                    }
                });
                console.log('xxxx')
            }
        }
        else{
            console.log(8);
            console.log("delete done (file)");

            response.writeHead(200);
            response.write("delete done");
            response.end();
        }
    });
    console.log(9);

});

app.listen(port, function(){
  console.log('app listening on port: ', port);
});