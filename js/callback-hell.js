// creating a callback
function makeSAndwich(bread,cb){
    console.log("Making a sandwich with" + bread);
    cb();
}

function applySauce(sauce,cb){
    console.log("Applying" + sauce);
    cb();
}

function stuffing(stuff, cb){
    console.log("stuffing with" + stuff);
    cb();
}

function grilled(temp,cb){
    console.log("grolled at" + temp);
    cb();
}

function serving(plate,cb){
    console.log("Serving on" + plate);
    cb();
}

makeSAndwich("brown bread", ()=>{
    applySauce("meyo",()=>{
        stuffing("paneer", ()=>{
            serving(" plate",()=>{
                console.log("sandwich is ready")
            })
        })
    })
})