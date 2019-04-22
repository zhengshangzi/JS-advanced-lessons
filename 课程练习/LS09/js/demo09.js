//词法作用域 与调用形式无关 
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack

//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    //var x = "inside f1";//如果没有这行，则两次输出都为outside
    console.log(x);
};
f1();//outside f1
console.log(x);//outside f1


//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();
console.log(y);//若函数内有var此行报错，若函数内没有var则此行输出全局变量y值

//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);//23

if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//23