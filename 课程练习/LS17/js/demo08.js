//通过构造函数创建的对象的原型共享问题
//以下写法实现了原型继承，但存在原型共享的问题
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
/*
s1自身上没有age，S1.__proto__==student.prototype
student.prototype=peerson;
person对象生没有age属性
s1.__proto__.__proto__==person.__proto__
*/
console.log(s1.name,s1.age,s1.id);//Mike 22 2017001
console.log(s2.name,s2.age,s2.id);//Mike 22 2017002
s1.__proto__.name = "Jack";
console.log(s2.name);//jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);//99

console.log(s1);//student{}
console.log(s1.__proto__);//person{}
console.log(s1.__proto__.__proto__);//

/*
s1.__proto__==student.prototype;
student.prototype=person;
person.__proto__==person.prototype;
s1.__prto__.__proto__

*/
//给每个student对象单独添加自身属性name和age
s1.name = "Bill";
s1.age = 22;
s2.name = "Colin";
s2.age = 23;
/*
//通过Object.create创建的对象的原型共享问题
function Person(name){
this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};

var person1 = new Person("Mike");
var student1 = Object.create(person1,{id:{value:123,writable:true}});
var student2 = Object.create(person1,{id:{value:456,writable:true,enumerable:true}});
*/
