// Multiplication Table
// Write a program to print the multiplication table of a given number using a loop.

// let a = 2;
// for(let i = a ; i >=10; i++ ){
//    i**;
//     console.log(i);
// }


// check if number odd and even:
// let user = prompt(" Enter Your Marks")

// if(90 <= user < 100 ){
//     alert("your grade is A")
//     console.log("your grade is A")
// }else if(80<= user < 100){
//          alert("your grade is B")
//         console.log("your grade is B")
// }else if(80<= user < 100){
//          alert("your grade is C")
//         console.log("your grade is C")
// }else if ( user < 60){
//          alert("your grade is D")
//         console.log("your grade is D")
// };

// AND OPERATOR
// if(age >= && gender =="male"){
//     console.log("you are a adult male")
// }
// OR OPERATOR
// if(age >= || gender =="male"){
//     console.log("you are a adult male")
// }

// Not operator and negation operator
// let isLoggedIn = true;
// console.log(!isLoggedIn);

// --> LOOPS

//--> for Loops

// for (let i = 0 ; i<= 10; i++)
// {
//     console.log(i);
// }

// do While 
// let j = 0;
// do{
//     console.log(j);
//     j++;

// }while(j<=10);
// {
//     var a = 20;
//     let a = 30;
// function outer(){
//     // let a = 10
//     function inner1 (){
//         console.log(   a);
//     }
//      function inner2 (){
//         console.log( a);
//     }
//     inner1();
    
// }
// outer();
// }

// 

// function outer(){
//     let a = 10;
//        function inner1(){
//            function inner2(){
//                function chatgpt(){
//                 console.log(a);
//              }inner1();
//         }inner2();
//     }chatgpt();
// }outer();

// function gf(){
//     let a = 10;
//     function parent(){
//         function child(){
//             console.log(a)
//         }child()
//     }parent();
// }
// gf();

//--> 3check if its a leap year or not 
// let year = prompt("Enter the year")

// if(year % 4 == 0 ){
//     alert("This is the leap year")
// }else if(year % 4 !==0){
//     alert("This is not a leap year")
// }else(
//     alert("Enter The year")
// )

// --> 4 Maximum of three Number 

// let a = prompt("Enter the value of a ");
// let b = prompt("Enter the value of b ");
// let c = prompt("Enter the value of c ");

// if(a > b && a >c){
//     alert("A have maximum value")
// }else if(b > a && b > c){
//      alert("B have maximum value")
// }else if(c > a && c > b){
//      alert("C have maximum value")
// }else{
//     alert(" Enter the number")
// }

// --> 5 Cheak Vowel or Consonant

// let allvowels = "aeiouAEIOU"
// let userInput = prompt("Enter the Letter");

// if (userInput === allvowels){
//     alert("This is a vowel")
// }else{
//     alert("This is a Consnant")
// }





// -->5 Day of the Week
// let day = prompt("Enter the number 1-7 :");  

// switch(day) {
//     case "1":
//         alert("Monday");
//         break;
//     case "2":
//         alert("Tuesday");
//         break;
//     case "3":
//         alert("Wednesday");
//         break;
//     case "4":
//         alert("Thursday");
//         break;
//     case "5":
//         alert("Friday");
//         break;
//     case "6":
//         alert("Saturday");
//         break;
//     case "7":
//         alert("Sunday");
//         break;
//     default:
//         alert("Invalid day");
// }

// -- 6 Triangle Type

let sideA  = 1;
let sideB  = 1;
let sideC  = 4;

if(sideA == sideB && sideB == sideC ){
    alert("This is a Equilateral Triangle")
}else if(sideA == sideB || sideB == sideC){
    alert("This is Isosceles Triangle")
}else if(sideA !== sideB || sideB !== sideC){
    alert("This is a Scalene Triangle")
}