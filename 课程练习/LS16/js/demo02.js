//严格模式下
function thisTest() {
    "use strict"
    console.log(this);
}
thisTest();//underfined

//严格模式检测
//"use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();//dalse