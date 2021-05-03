// vanilla way
// function doubleIt (num){
//     return num * 2;
// }

// const result = doubleIt(5);
// console.log(result);



// // 2nd way
// const doubleIt = function(num){
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);


// es6
// single parameter
const doubleIt = num => num * 2;
const result = doubleIt(10);
console.log(result);

// double parameter
const add = (x, y) => x + y;
const result2 = add(4, 7);
console.log(result2);

// without parameter
const give5 = () => 5;
const result3 = give5();
console.log(result3);


// functioner vitor onkgula kajer jonno
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result4 = doMath(7, 3);
console.log(result4);

// uporer es6 er functiongulak arrow function o bole