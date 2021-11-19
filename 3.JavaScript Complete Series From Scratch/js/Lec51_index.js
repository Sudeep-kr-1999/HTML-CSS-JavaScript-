console.log("This is about iterators in javascript ");

// Iterators

function fruitIterator(values) {
    let nextIndex = 0;

    // we will return an Object 
    return {
        next: function () {
            if (nextIndex < values.length) {
                // we will return below object 

                return {
                    value: values[nextIndex++],
                    done: false



                }
            }
            else {

                // we Will return below object with only done variable 
                return {
                    done: true
                }
            }
        }
    }

}


const myArray = ["Apple", "Grapes", "Oranges", "Bhindi"];

console.log("My array is : ", myArray);

// using the iterator 

const fruits=fruitIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
// console.log(fruits.next());



