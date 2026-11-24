import jwt from "jsonwebtoken" ;

let secret = "kjhkjhkjhkljnhkjnkn"
let data = {
    a:1
}
let verified = '';

console.log(1, data)

let signed = jwt.sign(data, secret, { expiresIn: '1h' });

console.log(2, signed)

try{
    verified = jwt.verify(signed, secret);
}
catch(e){
    console.log(e)
}

console.log(3, verified)

