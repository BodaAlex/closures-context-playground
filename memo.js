function memoize(func) {
  const cache = {};
  return function () {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }
    else {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      const result = func(...arguments);
      cache[key] = result;
      return result;
    }
  };
}

const factorial = memoize(function (num) {
  console.log('working for factorial(' + num + ')');
  if (num === 1) { return 1 };
  return num * factorial(num - 1);
});

// first call
console.log(factorial(3));

// successive calls
console.log(factorial(3)); //=> 6
console.log(factorial(3)); //=> 6

// short circuit higher factorial calls
console.log(factorial(4));
  //=> working for factorial(4)
  //=> 24


  // iterators / generators
  // memo
  // modules