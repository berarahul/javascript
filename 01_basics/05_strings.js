const name='Rahul'
const repoCount=50

// console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);



const gameName=new String('rahulbera')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.includes('bera'));
console.log(gameName.startsWith('rahul'));
console.log(gameName.endsWith('bera'));
console.log(gameName.indexOf('bera'));
console.log(gameName.charAt(2));
console.log(gameName.split('a'));
console.log(gameName.replace('rahul','kalponix'));
console.log(gameName.repeat(3));
const newString =gameName.substring(0,5)
console.log(newString);
console.log(gameName.slice(-4));
console.log(gameName.slice(2,5));
console.log(gameName.trim());