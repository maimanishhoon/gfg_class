//  write a function to 10% of a number...

// let amount = [200, 400, 500, 600, 700,800];

// function calPer(amount){
//     let res = [];
//     for(let i = 0; i < amount.lengthf; i++){
//         res.push(amount[i] * 0.1);
//     };
//     return res;
// }

// console.log(calPer(amount));

let val = [200, 400, 500, 600, 700,800];

function calculateTenper(val){
    return val * 10;
};
function calculateTwentyper(val){
    return val * 20;
};
function calculatethreeyper(val){
    return val * 30;
}
// function calculate(val, cb){
//     let res =[];
//     for(let i = 0; i< val.length; i++){
//         res.push(cb(i));
//     }
//     return res;
// };

// console.log(calculate(val, calculatethreeyper)) 
// console.log(calculate(val, calculateTwentyper)) 
// console.log(calculate(val,calculateTenper)) 


//array prototype// this is our map function
Array.prototype.calculate = function( cb){
    let res = [];
    for(let i = 0; i < this.length; i++){
        res.push(cb(this[i]))
    }
    return res;
}
console.log(val.calculate(calculatethreeyper));



//.map()
let arr2 =[1,2 ,3,4 ,5];

// arr2.map((el) =>{
//     console.log(el * 2);
// });


//.filter
// arr2.filter((el) => {
//     if(el % 2 == 0){
//         console.log("Number is even")
//     }
// });

//Reduce
// let result = arr2.reduce((acc, el) => {
//     return el + acc;
// },2);
// console.log(result)


//setTimeout
setTimeout(()=>{
    console.log("Kuch kar le Bhai")
},2000)