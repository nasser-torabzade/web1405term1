import { readFile } from 'node:fs';

function task1(){
    console.log("task1")
}
function task2(){
    console.log("task2")
}
function task3(){
    console.log("task3")
}
function check(callback){
    readFile('./test.json', function(error, fileData){
        fileData = fileData.toString();
        fileData = JSON.parse(fileData);
        console.log('fileData', fileData);
        if(fileData.x === 1){
            console.log("X IS 1");
            //return true;
            callback(true);
        }
    })
}


task1();
// if(check()){
//     task2();
// }
// else{
//     task3();
// }
function next(result){
    if(result){
        task2();
    }
    else{
        task3();
    }
}
check(next)