//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);//5

//若此行写为subObj_First.x = 5;
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.x = 5;
console.log(subObj_Second.x);//1
//改变obj1属性，obj2的属性也会发生改变

var obj = {
    x:1,
    y:2
};
var obj1 = Object.create(obj);
var obj2 = Object.create(obj);
obj1.__proto__.x=3;
