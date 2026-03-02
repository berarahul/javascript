const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai={
    name:'ginger chai',
    price:100,  
    isAvailable:true,
    orderChai:function(){
        console.log(`You have ordered ${this.name} for price ${this.price}`);   
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log(Object.getOwnPropertyDescriptor(chai, "price"));
console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable"));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value === "function"){
        value();
    }
    console.log(key,value);
}