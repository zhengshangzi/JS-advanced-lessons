//JS对象
//通过字面量创建
var student = {
    name:"Jack",
    age:23,
    sayHi:function () {
        console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
    }
};
console.log(student.name);//Jack
console.log(student["age"]);//23
console.log(student.sayHi);
student.sayHi();//Hi,i'm Jack ,i'm 23 years old!

//添加属性，删除属性
student.id = 2015015001;
console.log(student.id);//2015015001
delete  student.id;
console.log(student.id);//underfined

//查看对象是否有某个属性 in   for...in   Object.keys()
console.log("name" in student);//true
for(var k in student){
    console.log(k,student[k]);
}//
console.log(Object.keys(student));//["name", "age", "sayHi"]

//函数嵌套 与this问题初步了解
var obj = {
    foo:function () {
        console.log("foo里的this:",this);
        function fee() {
            //"use strict"
            console.log("fee里的this:",this);
        }
        fee();
    }
};
obj.foo();

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfo = function () {
    console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
};

var p1 = new Person("Mike",60);
p1.showInfo();//Hi,i'm Mike ,i'm 60 years old!