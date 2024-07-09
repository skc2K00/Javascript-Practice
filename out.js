

// console.log(arr)
// let narr = [...new Set(arr)]
// console.log(narr)
// let arr = [6,8,9,8,6,5,4,3,4,5,4,6,5,9]
// console.log(arr) 
// let newArray = [];

// for ( x in arr) {
    
//     if( newArray.includes(arr[x])) {
//         continue
        
//     }
//     else {
//         console.log(arr[x])
//         newArray.push(arr[x])
//     }
// } 

// console.log(newArray)
// let nr = [...new Set(arr)]
// console.log(nr)

let hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

function pickBgColor() {
    let hexCode="#";
    for (let i=0;i<6;i++) {
        hexCode = hexCode + hex[Math.floor(Math.random()*16)];
    }
    console.log(hexCode);
    return hexCode;
}

let selectedBgColor = document.getElementById("bgc");
let btn = document.getElementById("clickBtn");
let bc = document.getElementById("bc");
btn.addEventListener("click",() => {
    let bgColor = pickBgColor();
    bc.innerHTML = `Background color : ${bgColor}`;
    selectedBgColor.style.backgroundColor = bgColor;
})

let head = document.getElementById("head");

let checked = false;
head.style.backgroundColor="red"
head.addEventListener("click",() => {
    // head.classList.toggle("head");
    checked = !checked;
    checked ? head.style.backgroundColor="yellow" : head.style.backgroundColor="red" 
})