function MyObj() { }
MyObj.prototype.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

///////////Part2 原型链属性操作////////////
obj.z = 5;

obj.hasOwnProperty("z");//true
console.log(obj.z);//5
console.log(MyObj.prototype.z);//3

obj.z = 8;
console.log(obj.z);//8

delete obj.z;//true
console.log(obj.z);//3

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete MyObj.prototype.z;
console.log(obj.z);//此时彻底没有z了 //underfined

//练习
//定义一个车（car）的对象
//create方法
var car={
	height:150,
	width:200,
	weight:2000,
};
var smallcar=Object.create(car);
smallcar.color='red';
smallcar.seatNum=4;
console.log(smallcar);
console.log(smallcar.weight);

//
function createSmallCar(color,seatNum){
	this.color=color;
	this.seatNum=seatNum;
}

createSmallCar.prototype=car;
var smallCar =new createSmallCar('red',4);
console.log(smallCar);
console.log(smallCar.weight);