// 1st way/ purono/ vanilla js
function add (num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}

const total = add (15);
console.log(total);



// 2nd way
function add (num1, num2){
    num2 = num2 || 20;
    return num1 + num2;
}

const total = add (15);
console.log(total);



// 3rd way/es6
function add (num1, num2 = 20){
    return num1 + num2;
}

const total = add (15);
console.log(total);



// 4th/ es6
function add (num1, num2 = 20){
    return num1 + num2;
}

const total = add (15, 1);
console.log(total);

// aikhane num2=20 akta backup hisebe kaj korce jodi kono karone num2te parameter pass na kora hoy tahle o jeno code undifine na dekhay. r jodi parameter pass kora hoy tahle oita dorei kaj korbe 20 just akta backup. aitai hoilo ES6.