//Part1111111 数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this
// Array.prototype.forEach(callback,thisValue?) //注意并不返回新的数组
//为数组中的每个元素执行一次回调函数
var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
console.log(arr1);//2 "不大于3"//4 5 "大于3"//4 8 "大于3"

// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
//如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {
    //console.log(a);//打开此行,输出2,5
    return a%2===0;
});
console.log(returnValue);//false
//练习：验证一个百位数，个、十、百 每一位上的数相加可以除尽3的话，则这个百位数就能整除3

// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
//如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {
    console.log(a);//打开此行，输出2
    return a%2===0;
});
console.log(returnValue);//true


//Part2222222 数组原型方法（迭代-非破坏性-转换方法）
// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
//返回一个由回调函数的返回值组成的新数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);//[1, 9, 25, 49, 81],[1, 3, 5, 7, 9]

// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
//将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);//[3, 5, 7] ,[1, 3, 5, 7, 9]

//Part3333333 数组原型方法（迭代-非破坏性-归约方法）
// Array.prototype.reduce(element,initialValue?) //从左向右迭代
// 对reduce的解读 ((((x1 op x2) op x3) op x4)...xn)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));//14

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
//从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));//14

//综合实例
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));//abcd
console.log(arr4.reduce(printArgs,"x"));//xabcd
console.log(arr4.reduceRight(printArgs));//dcba
console.log(arr4.reduceRight(printArgs,"x"));//xdcba

//
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);//[0, 1, 2, 3, 4, 5]


//思考案例：计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }