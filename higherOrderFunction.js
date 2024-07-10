// A function which takes another function as an argument or
//returns a functuion from it known as higher order function (HOC)

function x() {
    console.log("hi siva")
}

function y(x) {
    x();
}

y(x);

// Here function 'y' takes another function 'x' as argument.
// function 'y' is igher order function (hoc)
// function 'x' is caback function.

// Don't Repeat Your code (DRY)
// Try to write reusable code always.

// lets try another example to find the radius of a circle for given radius.

const radius = [4,6,2,8,5];

const area = function(radius) {
    return Math.PI * radius * radius;
}

const calculate = function(arr,logic) {
    const output = [];
    for (let i=0;i<arr.length;i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(radius.map(area));

// map, filter and reduce functions are hoc functions as they accept callback functions.