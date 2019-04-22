// Part 111111111111111111
console.log(a);//underfined
var a = 1;
console.log(a);//1

//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);//underfined
a = 1;
console.log(a);//1

//
console.log(a,b);//20 "hi"
var b = 23;
console.log(a,b);//20 23
var a = b;
console.log(a,b);//23 23

//
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//x:23 undefined
var obj2 = obj1;
console.log(obj1,obj2);//x:23 x:23
obj2.x =25;
console.log(obj1,obj2);//x:25 x:25


// Part 22222222222222222
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2


// Part 33333333333333333
//当function前有运算符的话，认定为表达式，不提升
foo();
var foo = function(){
    console.log("foo");
};//报错

//
console.log(foo);//输出什么
var foo = function(){
    console.log("foo");
};
foo();//foo



// Part 444444444444444444
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();
//AA_1
// AA_2