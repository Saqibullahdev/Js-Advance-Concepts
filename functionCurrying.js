/**
 * function currying in js
 * two ways to implement currying in js
 * 1. using bind()
 * 2. using closures
 */

// using bind()
// function multiply(a,b){
//     return a*b
// }


// const MultplybyTwo = multiply.bind(this,2)
// console.log(MultplybyTwo(2))

// const MultplybyThree = multiply.bind(this,3)
// console.log(MultplybyThree(3))


// // using closures

// function multiplyClousre(a){
//    return function multiplyBy(b){
//         return a*b
//     }
// }


// const MultplybyFour = multiplyClousre(4)
// console.log(MultplybyFour)



//closure example

function createCounter(){
    let count=0;
    return {
        inc: function(){
            count++
            console.log(count)
        },
        dec: function(){
            count--
            console.log(count)
        }
    }
}

const count=2;
const counter2 = createCounter()
counter2.inc()
counter2.dec()
console.log(count)

// function createCounter() {
//     let count = 0; // Private variable to store the count

//     return {
//         increment: function() {
//             count += 1;
//             updateDisplay();
//             console.log(`Button clicked. Current count: ${count}`);
//         },
//         decrement: function() {
//             count -= 1;
//             updateDisplay();
//             console.log(`Button clicked. Current count: ${count}`);
//         }
//     };

//     function updateDisplay() {
//         document.getElementById('countDisplay').textContent = count;
//     }
// }

// const counter = createCounter();

// document.getElementById('incrementButton').addEventListener('click', counter.increment);
// document.getElementById('decrementButton').addEventListener('click', counter.decrement);
