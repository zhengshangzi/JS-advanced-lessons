//Math的所有方法和属性都是静态的
//Math 对象属性
//圆周率，一个圆的周长和直径之比，约等于 3.14159.
console.log(Math.PI);
//欧拉常数，也是自然对数的底数, 约等于 2.718.
console.log(Math.E);
//2的自然对数, 约等于0.693.
console.log(Math.LN2);
//10的自然对数, 约等于 2.303.
console.log(Math.LN10);
//以2为底E的对数, 约等于 1.443.
console.log(Math.LOG2E);
//以10为底E的对数, 约等于 0.434.
console.log(Math.LOG10E);
console.log("------------------");

//Math 对象数值方法
console.log(Math.random());
//返回x的绝对值.Math.abs(x)
console.log(Math.abs(-123.456));
//返回x的y次幂.Math.pow(x,y)
console.log(Math.pow(2,3),Math.pow(4,0.5));
//返回x的平方根.Math.sqrt(x)
console.log(Math.sqrt(256));
console.log("------------------");
//返回四舍五入后的整数.Math.round(x)
//返回x向上取整后的值.Math.ceil(x)
//返回小于x的最大整数。Math.floor(x)
console.log(Math.round(0.60),Math.ceil(0.60),Math.floor(0.60));
console.log(Math.round(0.50),Math.ceil(0.50),Math.floor(0.50));
console.log(Math.round(0.40),Math.ceil(0.40),Math.floor(0.40));
console.log(Math.round(0.49),Math.ceil(0.49),Math.floor(0.49));
console.log(Math.round(-4.40),Math.ceil(-4.40),Math.floor(-4.40));
console.log(Math.round(-4.60),Math.ceil(-4.60),Math.floor(-4.60));

//Math.max([x[,y[,…]]])
//返回0个到多个数值中最大值.
console.log(Math.max(5,7),Math.max(5,7));
console.log(Math.max(-3,5),Math.max(-3,5));
console.log(Math.max(-3,-5),Math.max(-3,-5));
console.log(Math.max(7.25,7.30),Math.max(7.25,7.30));
console.log("------------------");

//Math 三角方法
//角度转弧度方法
function toRadians(degrees) {
    return degrees/180 *Math.PI;
}
console.log(toRadians(180));

//弧度转角度方法
function toDegrees(radians) {
    return radians/Math.PI*180;
}
console.log(toDegrees(Math.PI/4));
console.log("------------------");

//Math.sin(x)返回正弦值.
//Math.cos(x)返回x的余弦值
console.log(Math.sin(toRadians(90))); //参数一个以弧度表示的角。将角度乘以 （2PI/360）即可转换为弧度
console.log(Math.cos(toRadians(180)));
console.log("------------------");

