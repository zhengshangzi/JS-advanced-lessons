//this 是谁，取决于函数调用的主体
//非严格模式下，this指向window对象
//严格模式下，this指向underfined
function thisTest(){
    console.log(this === window);
}
thisTest();//true--普通模式下指window

var a = 10,b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);//20 "新添加属性"
console.log(b);//b--this指向调用此函数的主体
/*
 var point = {
 x:0,
 y:0,
 moveTo:function(x,y){
 function moveToX(x){
 this.x = x;
 };
 function moveToY(y){
 this.y = y;
 }
 moveToX(x);
 moveToY(y);
 }
 };
 */