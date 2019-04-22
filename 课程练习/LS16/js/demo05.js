//通过call/applay间接调用的函数中的this（指代第一个参数）
/*
方法A：call（对像）切换方法A中的调用主体，this指向函数的调用主体

*/
//call 实例1
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();//AA 1
objA.test.call(objB);//BB 5---把function切换到objB上

//call 实例2
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"QL"
};
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);//i'm:QL i can fly ___ 7 8
