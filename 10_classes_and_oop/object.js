function multipleby5(num){

this.num=num;
    return num*5;
}

multipleby5.power=2
console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function createUser(username,score){

    this.username=username;
    this.score=score;
    return this;
}


createUser.prototype.getScore=function(){
    return this.score;
}

const user1=new createUser("Rahul",100);
const user2=new createUser("Chai",200);

console.log(user1.getScore());
console.log(user2.getScore());