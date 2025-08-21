function sayHi(name, cb){
    console.log("hi"+ name);
    cb();
}
function greet(){
    console.log("Good Morning");
}
function greet1(){
    console.log("Good Morning1");
}

sayHi("manish", greet1);
