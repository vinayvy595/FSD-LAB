
var globalVar = "I am a global variable";

function varExample() {
    var localVar = "I am a local variable";
    console.log(globalVar); 
    console.log(localVar);   

    if (true) {
        var blockVar = "I am still accessible outside this block";
        console.log(blockVar);  here
    }

    console.log(blockVar);  
}

varExample();

let globalLet = "I am a global let variable";

function letExample() {
    let localLet = "I am a local let variable";
    console.log(globalLet); 
    console.log(localLet);   

    if (true) {
        let blockLet = "I am only accessible in this block";
        console.log(blockLet);  here
    }

}

letExample();


const globalConst = "I am a constant variable";

function constExample() {
    const localConst = "I am a local constant variable";
    console.log(globalConst); 
    console.log(localConst);   


    if (true) {
        const blockConst = "I am only accessible in this block";
        console.log(blockConst); 
    }

}

constExample();
