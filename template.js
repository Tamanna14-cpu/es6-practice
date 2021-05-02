// raw js
const firstName = 'justin';
const lastName = 'timberlake';
const fullName = firstName + '' + lastName + ' is a singer';
console.log(fullName);

// es6
const fullName2 = `${firstName} ${lastName} is a singer`;
console.log(fullName2);

const fullName3 = `${firstName} ${20+10+30} is a singer`;
console.log(fullName3);


const multiLine = 'i love you\n'
  + 'i need you\n'
  + 'i miss you';

console.log(multiLine);
// \n use kora hoy notun line create korar jonno



// es6
const multiLine2 = `i love you
i miss you
no. i don't need you`;

console.log(multiLine2);