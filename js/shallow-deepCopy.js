// problem
let arr1= [1,2];
arr2 = arr1;
arr2.push(3)
console.log(arr1)
console.log(arr2);
// shallow copy
let array = [1, 2, 3, 4 ,5];
console.log(array);
let array2 = [...array];
array2.push(6)
console.log(array2);

// DeepCopy

let person = {
    name:"Manish",
    age:21,
    address: {
        city:"gurugram",
        pinCode: 122001,
    }
}

let person2 = structuredClone(person);
person2.name ="Ravi";
person2.address.pinCode = 123001;
console.log(person);
console.log(person2);



//deepCOPY in array
let arra1 = [1, 2 ,3 ,4 ,5 ,[6,7,8,9]];

let arra2 = structuredClone(arra1);
arra2[5].push(10);
console.log(arra2);
console.log(arra1);

// JSON.parse(JSON.stringify()) METHOD

let arrayy1 = [1, 2 ,3 ,4 ,5 ,[6,7,8,9]];

let arrayy2 = JSON.parse(JSON.stringify(arra1));
arrayy2[5].push(11);
console.log(arrayy1);
console.log(arrayy2);
// console.log(arrayy1);

//REST Parameter
let  data ={
    name: "manish",
    age:21,
    address:{
        city:"Gurugram",
        pincode:123001
    }
}

let{name, age ,...rest} = data;
console.log(name);
console.log(age);
console.log(rest);

// example of rest 
function sum(...manish){
    let totalSum =0;
    for(let i = 0; i < manish.length; i++){
        totalSum =  totalSum + manish[i];
        console.log(totalSum)
    }
}
sum(1,2,3,4);