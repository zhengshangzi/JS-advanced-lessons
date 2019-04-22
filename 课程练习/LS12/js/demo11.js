//闭包引入案例
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3);//输出1
console.log(f3);//输出1

/*
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
//观察f1中的x变量
console.log(f3());//输出1
console.log(f3());//输出2
*/


/*
// 例一
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出6
console.log(inc(2));//输出8
inc = createInc(5);
console.log(inc(1));//输出6
*/

// 例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出6
console.log(inc(2));//输出8
var inc2 = createInc(5);
console.log(inc(1));//输出9
console.log(inc2(1));//输出6

/*
// 例三
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();//输出1
foo();//输出1
*/

// 例四
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//输出1
a();//输出2
b();//输出1
