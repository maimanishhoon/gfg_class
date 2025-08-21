// search function

function debounce (fun, delay){
    let timeout;
    return function(...search){
        clearTimeout(timeout);
        timer = setTimeout(()=>{
            fun(...arguments);
        },delay)
    };
}

function search(query){
    console.log(`searching of the ${query}`);
}

let res = debounce(search,2000);
res("manish");
res("manish kumar");

