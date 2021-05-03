const person = { name: 'jack william' , age: 27, job: 'facebooker', gfName: 'ema watson', phone: '0171118883', address: 'kochu khet', friends: ['tom hancks', 'tom cruise']};

const { address, phone, gfName } = person;

// const gfName = person.gfName;
// const phone = person.phone;

console.log(gfName, phone, address);
console.log(gfName, phone, address);

// ** aikhane order maintain kora lage name, console je ordere dibe oitai show korbe.

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'tiger leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);



const friends = ['shakib khan', 'Amir khan', 'arman khan', 'salman khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends);