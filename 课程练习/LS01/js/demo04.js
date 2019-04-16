
//基本语法回顾
var x;
x = 23;

//条件语句
if(x>22){
    x+=2;
}else{
    console.log("x 不大于 22");
}

var xx = 234;
if(234 == xx){ 
    console.log("相等");
}//相等

//1.
console.log(a);//underfined
if(true){
    var a = 2;
}
console.log(a);//2

//2.
console.log(b);//underfined
if(false){
    var b = 3;
}
console.log(b);//underfined


//循环语句
for(var i=0;i<3;i++){
    console.log("i:",i);//i:0 i:1 i:2
}
console.log(i);//3

//函数定义及调用  
function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,3));//3