// promise method 
// promise any

// const promise1 = Promise.reject("first");
// const promise2 = Promise.reject("second");
// const promise3 = Promise.reject("Third");

// promise.any([promise1,promise2, promise3]).then(value =>{
//     console.log(value)}
// );



let GITHUB_API = "https://api.github.com/users/vikasthakurr";

fetch(GITHUB_API).then((response) =>{
    if(!response.ok){
        alert("Something went wrong");
    }else{
           return response.json();
    }
}).then((data) =>{
    console.log("data has been filter");
    return data;

}).then((data)=>{
    console.log("data ko dekh raha hu");
    return data;
}).then((data)=>{
    console.log("le lode aa gya data")
    console.log(data);
})
.catch((error)=>{
    console.error("Lode kuch galat kiya tune")
})