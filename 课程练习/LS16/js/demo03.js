//对象方法中的this--指向调用此方法的对象
//直接定义在对象下的方法，调用主体就是当前对象
//this指向的也是当前对象
//前提是无函数调用
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);//{x: 1, y: 1, moveTo: ƒ}

//私有属性 闭包
var Person = function(name,age){
    var namePrivate = name;
   var agePrivate = age;
   this.showMe = function(){
       console.log(namePrivate,agePrivate);
   }
}
var p1 = new Person("Mike",23);
p1.showMe();//Mike 23

