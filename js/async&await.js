async function fetchData() {
    try{
    let response = await fetch("https://api.github.com/users/vikasthakurr")
     const data = await response.json();
     console.log(data)   
    }
   catch{
    console.log("This is the error motherfucker");
    
   }
}
fetchData()