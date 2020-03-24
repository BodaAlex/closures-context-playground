// Higher order functions - A function that takes another function as an argument or returns a function

// Closures - functions that return functions AND also keep a memory of their parent function

// https://www.youtube.com/watch?v=71AtaJpJHw0

// Execution context has 2 parts (Execution Thread and Local Memory)

const createFunction = function(x) {
    
    let counter = 0
    
    function multiplyByX(num) {
        //backpacking
        counter++;
        console.log(counter);
        return num * x;
    }

    return multiplyByX;
}

const multiplyBy5 = createFunction(5);

const result = multiplyBy5(3);
multiplyBy5(3)


console.log(result);
// functions that return a function which has memory
