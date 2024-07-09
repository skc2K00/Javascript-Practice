
// // // const country = 'Portugal';
// // // const continent = 'Europe';
// // // let population = 10;

// // // console.log(typeof(country));
// // // console.log(typeof(continent));
// // // console.log(typeof(population));

// // // const isIsland = false;
// // // let language = "telugu";

// // // console.log(typeof(isIsland))
// // // console.log(typeof(language))

// // // console.log(`${country}`)

// // let language = "telugu";
// // switch(language) {
// //     case 'telugu':
// //         console.log("andhra");
// //         break
// //     case 'tamil':
// //         console.log("tamilnadu")
// //         break;
// //     default:
// //         console.log("india")
// // }

// // let valid= false;

// // console.log(valid ? "valid" : "invalid")

// // function describeCountry(country,population,capitalCity) {
// //     return `${country} has ${population} million prople and its capital is ${capitalCity}`;
    
// // }

// // let india = describeCountry("India","150","New Delhi");
// // console.log(india);

// // let china = describeCountry("China","170","Bejing");
// // console.log(china);

// // function percentageOfWorld1(population) {
// //     return (population/7900)*100
// // }

// // let populationPercentageOfChina = percentageOfWorld1(1441);
// // // console.log(populationPercentageOfChina);

// // let percentageOfWorld2 = function(population) {
// //     return (population/7900)*100
// // }
// // // console.log(percentageOfWorld2(1441));

// // let percentageOfWorld3 = population => (population/7900)*100;
// // // console.log(percentageOfWorld3(1500));

// // describePopulation = (country,population) => {
// //     let populationPercentage = Math.round(percentageOfWorld1(population));
// //     return `${country} has ${population} million people, which is about ${populationPercentage}% of the world`; 
// // }

// // console.log(describePopulation("India",1300));

// // let  a = [1,2,5,10,20,50]

// // // for(x of cash) {
// // //     console.log(x)
// // // }
// // a[a.length -1]++;
// // console.log(a);

// // function max(a,b,c) {
// //     if(a>b && a>c) {
// //         return a;
// //     }
// //     else if (b>a && b>c) {
// //         return b;
// //     }
// //     else {
// //         return c;
// //     }
// // } 

// // console.log(Math.max(57,6,87998981));

// let primeNumbers = [];
// function isPrime(m) {
//     let prime = true;
    
//     if(m==1) {
//         return console.log("neither prime nor composite")
//     }
//     else if (m>1) {
//         for(let i=2;i<m;i++) {
//             if(m%i == 0) {
//                 prime = false;
//                 break;
//             }
            
//         }
        
//     }
//     function output(m) {
//         primeNumbers.push(m);
//         console.log(`${m} is prime no`);
//     }
//     prime && output(m);
// }

// for ( let i=2;i<=100;i++) {
//     isPrime(i);
// }
// console.log(primeNumbers);
// // let x=2;

// // function sum() {
// //     var xy= 6;
// // }
// // console.log(xy);

// // if(x==2) {
// //     let isprime = true;
// // }
// // console.log(isprime);

// // console.log(y);
// // var y=5;

// // function sum(){
// //     let x = 5;
// //     function add() {
// //         //
// //     }
// // }

// // for(let i=1;i<=10;i++) {
// //     console.log(i)
// //     ///
// // }

// // let names = [1,"siva",true,{}];

// // {
// //     var x=10;
// //     let y=20;
// //     const z= 20;
// //     console.log(x);
// // console.log(y);
// // console.log(z);
// // }
// // console.log(x);
// // console.log(y);
// // console.log(z);

// Factorialof a number
// n! = n * (n-1)!
// function factorial(n) {
//     if(n ===0) {
//         return 1
//     }
//     else {
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(9));

//f Fibonacci series of a given number:

// function fibonacci(n) {
//     if(n<2) {
//         return n;
//     }
//     else {
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }

// console.log(fibonacci(7));

// console.log(y);
// console.log(z);


// {
// var x = 10;
// let y = 20;
// const z = 30;
// }
// function sum() {
//     let xg = 76;
//     function add(){
//         console.log(xg);
//     }
//     xg = 89759858;
//     return add;
// }

// let out = sum();
// out();
 
// function outer(){
//     var x = 20;
//     let y = 30;
//     const z = 40;
//     console.log(x)
//     console.log(y)
//     console.log(z)
//     function inner() {
//         console.log(x)
//     console.log(y)
//     console.log(z)
//     }

// inner()
// }
// outer()


// let uList = document.createElement("ul")

// let courses = ["HTML", "CSS", "JAVASCRIPT","REACT"]
// for (each of courses) {
//     let listElement = document.createElement("li");
//     listElement.textContent=each;
//     uList.appendChild(listElement);
// }


// document.body.append(uList)

//remove given no from array

// let newArray = [];
// function removeFromArray(array,n) {
//     for (each of array) {
//         if (n !== each) {
//             newArray.push(each)
//         }
//     }
//     return newArray;
// }

// console.log(removeFromArray([1,2,3,4,5], 4));

//code for counter

let counter= document.getElementById("counter");
counter.style.textAlign="center"

let counterHead = document.createElement("h1");
counterHead.innerHTML="Counter";
counter.appendChild(counterHead);
let countValue = 0;

let count = document.createElement("p");
count.textContent= 0;
count.style.fontSize="40px";
count.style.margin = "50px"
counter.appendChild(count);

let decBtn = document.createElement("button");
decBtn.innerHTML = "Decrease";
decBtn.style.margin = "10px";
counter.appendChild(decBtn);
let resetBtn = document.createElement("button");
resetBtn.innerHTML = "Reset";
resetBtn.style.margin = "10px";
counter.appendChild(resetBtn);
let incBtn = document.createElement("button");
incBtn.innerHTML = "Increase";
incBtn.style.margin = "10px";
counter.appendChild(incBtn);

function countColor(countValue) {
    if (countValue > 0) {
        count.style.color="green"
    }
    else if (countValue < 0) {
        count.style.color="red"
    }
    else{
        count.style.color="black"
    }
}

incBtn.addEventListener("click",() => {
    countValue++;
    countColor(countValue);
    count.innerHTML = countValue;
})
decBtn.addEventListener("click",() => {
    countValue--;
    countColor(countValue);
    count.innerHTML = countValue;
})
resetBtn.addEventListener("click",() => {
    countValue = 0;
    countColor(countValue);
    count.innerHTML = countValue;
})




