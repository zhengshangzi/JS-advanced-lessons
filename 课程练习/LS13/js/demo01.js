//对象是一种复合值，将很多值复合在一起
//对象时若干无需属性的集合
//JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi

//练习：写一个JS对象，包括自己的姓名、年龄，和一个方法，调用这个方法
var zsz = {
	name:'郑尚姿',
	age:20,
	show:function(){
		console.log(this.name);
	}
};
console.log(zsz.name);//郑尚姿
console.log(zsz.age);//20
zsz.show();//郑尚姿