let x = {
    a: "nasser",
    b: 123
};

console.log("typeof x", typeof x, x);

let str = JSON.stringify(x);

console.log("typeof str", typeof str, str);
console.log(str.a);


let newObj = JSON.parse(str);

console.log("typeof newObj", typeof newObj, newObj)
console.log(newObj.a)
