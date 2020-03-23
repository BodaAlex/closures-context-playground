const fooBar = {
    drinks: [
        { name: 'Ursus', type: 'IPA' },
    ]
}

const klausenBurger = {
    drinks: [
        { name: 'Indigen', type: 'Pale lager' },
        { name: 'Corvus', type: 'Pilsner' },
        { name: 'Arrogant', type: 'IPA' },
        { name: 'Arrogant 2', type: 'IPA' },
        { name: 'Limo', type: 'Raddler' }
    ],
    // CONTEXT
    // WARNING ARROW FUNCTIONS DON'T PRESERVE 'THIS'
    drink: function(type) {
         return this.drinks.filter((beer) => {
            return beer.type === type;
        })
    }
}

// As a rule of thumb, THIS refers to what is on the left side of the dot notation, when there is nothing there, 'window' is implicit

const myDrink = klausenBurger.drink; //We take a reference directly to the drink function of the klausenBurger object

// console.log(myDrink('IPA'));

// console.log(klausenBurger.drink('IPA'));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

const myDrink1 = klausenBurger.drink.bind(fooBar);

console.log("Drink 1" +JSON.stringify(myDrink1('IPA')))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

// Function.prototype.call(ThisArg, arg1, arg2, ...)

const myDrink2 = klausenBurger.drink.call(fooBar,'IPA')

console.log("Drink 2" + JSON.stringify(myDrink2))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

const myDrink3 = klausenBurger.drink.apply(fooBar,['IPA'])

console.log("Drink 3" + JSON.stringify(myDrink3))

// const myTestArray = [1,2,3,4,5,6,7,8,9,10]
// const myFilteredArray = myTestArray.filter((value) => {
//     if (value > 5 || value < 3) {
//         return true
//     }
//     else {
//         return false
//     }
// })
// myFilteredArray is [1,2   ,   6,7,8,9,10] because the other values have been filtered out (our function returned FALSE)


//    drink: function (type) {
//     return this.drinks.filter((beer) => {
//         if (beer.type === type) {
//             return true;
//         }
//         else {
//             return false;
//         }
//         // return beer.type === type;
//     })
// }