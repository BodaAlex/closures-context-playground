// functional programming (currying, composition)

const compose = function(...fns) { ///fns is uppercase, shout
    return function(result) { 
        return fns.reduce((accumulator, currentFunction) => currentFunction(accumulator), result);
    }
}

const uppercase = function (string) { 
    return string.toUpperCase()
};

const shout = function (string) {
    return `${string}!!!`;
}

// replace `x => f(g(x))` with `compose(f, g)`

// function composition
const upperShout = compose(uppercase, shout);

console.log(upperShout('hello'));

const multiply = (x, y) => x * y

const multiplyByTwo = multiply.bind(null, 2)

console.log(multiplyByTwo(3, 20)) //40

// ONCE (with closures)