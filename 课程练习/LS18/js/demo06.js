//Part11111111 排序和颠倒元素顺序 破坏性
//Array.prototype.reverse()
//颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);//[3, 2, 1]

//Array.prototype.sort(compareFunction？)
//对数组元素进行排序，并返回当前数组
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2//["apple", "banana", "orange", "pear"]
//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//[-1, -20, 50, 7]

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序

//让arr2按第二个字母排序
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);//["banana", "apple", "pear", "orange"]

//Part222222 合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
//返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);//["banana", "apple", "pear", "orange"],不破坏原有的数组

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
//抽取当前数组中的一段元素组合成一个新数组
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6);//[3,4]
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);//[3,4,5]
//arr6不变

//Array.prototype.join(separator?)
//连接所有数组元素组成一个字符串
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");//返回了个什么类型？
console.log(joinReturn,arr7);//3--4--5 ，[3, 4, 5]
console.log(typeof joinReturn);//string
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));//3******5

//Part333333333 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
//返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3
console.log(arr8.indexOf(5,5));//6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
//返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3