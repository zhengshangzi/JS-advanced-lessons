//JavaScript字符串的编码方式，Unicode字符集和UTF-16编码方式，参考链接：
//http://www.ruanyifeng.com/blog/2014/12/unicode.html

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_");
// ["abc", "def", "ghi", "jkl", "mn"]
// str.split("_",2);
//["abc", "def"]
// str.concat("_opq");
//"abc_def_ghi_jkl_mn_opq"
//substr截取的起始位置，截取的长度
// str.substr(4,7);
//def_ghi"
// str.substring(4,7);
// str.slice(2);
// str.slice(2,5);
// str.slice(-2);
// str.slice(2,-2);
// str.bold();
// str.link();
// str.fontcolor("red");
// str.fontsize(50);

