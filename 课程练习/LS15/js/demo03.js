///////////Part1 原型链综述////////////
var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
//hasOwnProperty函数用于指示一个对象自身（不包括原型链）是否具有指定名称的属性，有：true
console.log(obj.hasOwnProperty("z"));//false

///////////Part2 原型链属性操作////////////
obj.z = 5;

console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3

obj.z = 8;
console.log(obj.z);//8

delete obj.z;//true
console.log(obj.z);//3

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了,underfined

//注意：hasOwnProperty是原型方法
//调用的主体为obj,先在自身上找该方法，找不到的话去原型链上去找
//区别与Object.keys(obj)这种静态方法

//Object.keys(obj)方法：
//参数：要返回其枚举自身属性的对象
//返回值：一个表示给定对象的所有可枚举属性的字符串数组