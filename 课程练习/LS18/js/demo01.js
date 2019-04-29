//创建数组的不同方式
var arr1 = [1,2,3,"4"];

var arr2 = new Array(5);
//var arr2 = new Array("5");//["5"]
console.log(arr2);
for(var i=0;i<arr2.length;i++){arr2[i] = i;}

var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}

var arr3 = new Array(1,2,3,4);//多个参数
console.log(arr1,arr2,arr3);// (4) [1, 2, 3, "4"] (5) [0, 1, 2, 3, 4] (4) [1, 2, 3, 4]

//数组直接量中的值不一定要是常量，可以是任意的表达式
var base = 1024;
var table = [base,base+1,base+2,base+3];
console.log(table);// [1024, 1025, 1026, 1027]
//也可包含对象直接量或其他数组直接量
var b = [[1,{y:2}],[2,{x:3}]];
console.log(b);
//回顾数据类型思考：
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);//[],[]

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);//[1,2,3],[]
,

//Error
function idLog(x){
    try{
        var arr = new Array(-1);
    }
    catch(e){
        console.log(e);z
    }
    finally{
        console.log("222");
    }
}
idLog(123);//222


//下述案例，参见后续部分
//使用map和reduce来实现，数组求平均值和标准差

//不用map和reduce的写法
var data = [1,1,3,5,5];
var total = 0;
for(var i=0;i<data.length;i++){
    total += data[i];
}
var average = total/data.length;
total = 0;
for(var i=0;i<data.length;i++){
    var deviation = data[i]-average;
    total+=deviation*deviation;
}
var stddev = Math.sqrt(total/(data.length-1));


//使用map和reduce的写法
var data = [1,1,3,5,5];
function sum(x,y) {return x+y;}
var average = data.reduce(sum)/data.length;

function deviation(x) {return x-average;}
var tempArr = data.map(deviation);
total = 0;
function square(x) {return x*x;}
total = tempArr.map(square).reduce(function (x,y) {
    return x+y;
});
var stddev = Math.sqrt(total/(data.length-1));

//使用map和reduce的精简写法
var data = [1,1,3,5,5];
var average = data.reduce(function(x,y) {return x+y;})/data.length;
var tempArr = data.map(function(x) {return x-average;});
total = 0;
total = tempArr.map(function(x) {return x*x;}).reduce(function (x,y) {
    return x+y;
});
var stddev = Math.sqrt(total/(data.length-1));
