function task1(){
    console.log("task1")
}
function task2(){
    console.log("task2")
}
function task3(){
    console.log("task3")
}
function check(){
    return true;
}


task1();
if(check()){
    task2();
}
else{
    task3();
}
