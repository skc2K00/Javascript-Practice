//find the missing no in the array ranging from 1 to n :
function missingNoInArray(n,arr) {
    let set = new Set(arr);
    let missingNos = [];
    for (let i=1;i<=n;i++) {
        if(!set.has(i)) {
            missingNos.push(i);
        }
    }
    return missingNos
}

// let n=11;
// let arr= [1,2,3,5,7,8];

let n=5;
let arr = [2,3,5,5]

console.log(missingNoInArray(n,arr));
