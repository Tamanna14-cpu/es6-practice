// raw/vanilla js
const ages = [12, 14, 16, 17];
const ages2 = [11, 18, 20];
const ages3 = [21, 30, 24];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

// es6/ spread operator
const allAges2 = [...ages, ...ages2, 5 , ...ages3];
console.log(allAges2);


// raw way
const business = 650;
const minister = 300;
const sochib = 450;
const maximum = Math.max(business, minister, sochib);
console.log (maximum);


// es6
const takaPoysa = [650, 300, 450, 500];
const maximum2 = Math.max(...takaPoysa);
console.log(maximum2);