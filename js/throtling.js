function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime >= delay) {
            fn(...args);
            lastTime = now;
        }
    };
}

function search(query){
    console.log(`searching for : ${query}`);
}
let res = throttle(search,2000);
 res("vikas");
 res("sir ji");
 res("aise hi");
 res("aise hi");
 res("aise hi");
 res("aise hi");
 res("aise hi");
 res("aise hi");
 res("aise hi");
 res("aise hi");
 res("aise hi");
 res("aise hi");
 res("aise hi");