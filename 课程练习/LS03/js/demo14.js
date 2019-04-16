///Part 000000000
//字符串比较
console.log("A" > "a");//false
console.log("B".localeCompare("A")); //1
console.log("A".localeCompare("A")); //0
console.log("A".localeCompare("B"));//-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;
//字符串

//Part 111111111 字符串提取
//String.prototype.charAt(pos);
//返回特定索引位置的字符
//String.prototype.charCodeAt(pos);
//返回特定索引位置的字符的Unicode码
//String.prototype.slice(start,end?);
//截取的起始位置，结束的一个位置
//String.prototype.substr(start,length?)
//截取的起始位置，截取的长度
//String.prototype.substring(start,end?);
//截取的起始位置，截取的字符串的结束位置
//参数特别：起始大于结束：互换位置
//如果有超出索引位置0-str.length-1 自动截断
//String.prototype.split(separator?,limit?);
//split(特定的字符)将字符串以特定的字符字符分割
//将字符作为数组元素生成数组
//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var arr6 = "abcdef".split("c");//返回数组
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏//abcdefghijklmn cdefg

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏//abcdefghijklmn cde



//Part 222222222 字符串变换
//String.prototype.trim( );
//去除字符串两边的空白字符，字符串内部的不去除
//String.prototype.concat(str1?,str2?);
//
//String.prototype.toLowerCase( );
//String.prototype.toLocaleLowerCase( );
//小写
//String.prototype.toUpperCase( );
//String.prototype.toLocaleUpperCase( );
//大写
var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");

