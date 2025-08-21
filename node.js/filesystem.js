import { current } from "@reduxjs/toolkit";
import fs from "fs";

// fs.writeFile("abc.txt","In this file we know the time",(err)=>{
//     if(err){
//         console.log("Something went wrong");
//     }else{
//         let data = Date.now();
//         let add = fs.appendFile("abc.txt","data", (err,data)=>{
//             if(err){
//                 console.log("error")
//             }else{
//                  let data = Date.now();
//             }
//         }); 
//     }
// })

// function dataAppend(){
//     try{
//         const date = Date.now();
//         console.log(date);
//         let add = fs.appendFileSync(".abc.txt","\n date added")
//     }catch{
//         console.log("try again")
//     }
// }
// dataAppend()


// let btn = document.querySelector("#btn").addEventListener("click",()=>{
//     console.log("Btn is clicked");
//     let date = Date.now();
//     fs.writeFileSync("abc.txt", date.toString());
// })


//noBroker & apartment manageable system

function clicker(){
    console.log("Clicked");
    let date = Date.now();
    fs.watchFile("log.text", date.toString(),(err) =>{
        if(err){
            console.log("something went wrong");
        }else{
            console.log("submitted succesfully")
        }
    })
}
clicker();