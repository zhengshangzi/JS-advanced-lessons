//函数定义 注意分号
function max(a,b) {
    return a>b?a:b;
}
console.log(max(2,3));//3

var min = function(a,b){
    return a<b?a:b;
};
console.log(min(2,3));//2

foo();//可以在定义前执行，解析器会将foo函数声明提升
function foo() {
    console.log("foo");
}

//函数参数数量问题回顾
function f1() {
    console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments);
    console.log(argArr);//[2,3,4,"a"]
}
f1(2,3,4,"a");

function f2(a,b,c,d) {
    console.log(a,b,c,d);//2,3,underfined,underfined
}
f2(2,3);

//"use strict"
function f3() {
    //"use strict"
    gVar = 23;//定义了全局变量gVar，严格模式下是不允许的
}