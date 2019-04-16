//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法(Number对象继承的方法）(原型链上的方法)
// Number.prototype.toFixed();
//把数字转换为字符串，结果的小数点后有指定位数的数字：
// Number.prototype.toPrecision();
//把数字格式化为指定的长度:
//toPrecision() 方法可在对象的值超出指定位数时将其转换为指数计数法。
// Number.prototype.toString();
//String 对象用于处理文本（字符串）。
//String 对象创建方法： new String()。
// Number.prototype.toExponential();
//把对象的值转换为指数计数法:
var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4

//
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4

