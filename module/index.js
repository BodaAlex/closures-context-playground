
// module pattern

// ES6 modules -> import / export
// CommonJS modules -> require / module.exports

const myModule = (function() {
  
    const _privateProperty = 'Hello World';
    const publicProperty = 'I am a public property';
  
    function _privateMethod() {
      console.log(_privateProperty);
    }
  
    function publicMethod() {
      _privateMethod();
    }
  
    return {
      publicMethod: publicMethod,
      publicProperty: publicProperty
    };
  })();
  
  
  myModule.publicMethod(); // outputs 'Hello World'
  console.log(myModule.publicProperty); // outputs 'I am a public property'
  console.log(myModule._privateProperty); // is undefined protected by the module closure
  myModule._privateMethod(); // is TypeError protected by the module closure

  //IIFE Immediatly Invoked Function Expression